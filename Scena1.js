// Declare variables for shapes and graphics globally so they can be used in scene 1

/*
class Scena1 {

  constructor(mic, amp) {
    this.mic = mic;  // Reference to the microphone
    this.amp = amp;  // Reference to the amplitude analyzer
    this.t = 0;
    this.shape1 = null;
    this.shape2 = null;
    this.shape3 = null;
    this.shape4 = null;
    this.shape5 = null;
    this.c1= null;
    this.c2= null;


    this.pg = null;

  }

  // Setup for Scene 1
  setup() {
    createCanvas(windowWidth, windowHeight);

   // Initialize the microphone if it's not already started
   if (!this.mic || !this.mic.enabled) {
    this.mic = new p5.AudioIn();
    this.mic.start();  // Start the microphone
  }
      // Initialize the amplitude analyzer if it's not already set
      if (!this.amp) {
        this.amp = new p5.Amplitude();
        this.amp.setInput(this.mic);  // Link the microphone to the amplitude analyzer
      }

    this.c1 = color("#E6CFC9");
    this.c2 = color(177, 158, 149);
      // Set the blend mode.
    //blendMode(OVERLAY);

    // Create the gradient background
    this.setBackground(); // Call the gradient background function
    this.pg = createGraphics(windowWidth, windowHeight);
   this.setBackground(); // Ensure background is set correctly every frame
    this.pg.clear();
    this.pg.noStroke();
    //this.pg.fill(0, 100);
    //this.pg.circle(this.pg.width / 2, this.pg.height / 2, 400);
    //this.pg.circle(this.pg.width / 2, this.pg.height / 2, 300);
    //this.pg.circle(this.pg.width / 2, this.pg.height / 2, 200);
    //this.pg.circle(this.pg.width / 2, this.pg.height / 2, 50);
    //image(this.pg, 0, 0);

    // Initialize the shapes using the external Shape class
    this.shape1 = new Shape('noiseShape', min(width, height) * 0.30, null, color(215, 88, 106, 50), this.t); // Noise shape
    this.shape3 = new Shape('noiseShape1', min(width, height) * 0.50, null, color(94, 158, 159, 50), this.t); // Noise shape
    this.shape2 = new Shape('circle', height / 5, color(34, 34, 34, 255), null, this.t); // Black circle
    this.shape4 = new Shape('circle', height / 4, color(34, 34, 34, 0), null, this.t); // Black circle
    this.shape5 = new Shape('noiseShape2', min(width, height) * 0.20, null, color(0, 0, 0, 20), this.t); // Noise shape

    noFill();
    this.t = 0;
  }

  // Draw function for Scene 1
  draw() {
    //background(177, 158, 149); // Clear and set background for the scene

    push();
    translate(width / 2, height / 2);

    // Get the current amplitude (volume level)
    let level = this.amp.getLevel();

    // Map the amplitude to the size of the black circle
    let reactiveSize = map(level, 0, 1, height / 5, height / 2);


    // Update the size of the black circle based on the audio input
    //this.shape2.size = reactiveSize;

    // Display the shapes
    this.shape1.display(this.t); // Display the noise shape
    this.shape2.display(this.t); // Display the noise shape
    //this.shape5.display(this.t); // Display the noise shape

    this.shape3.display(this.t); // Display the noise shape
    //this.shape4.display(this.t); // Display the noise shape

    pop();

    //this.pg.circle(this.pg.width / 3, this.pg.height / 3, 10); // Circle within the graphics context
    this.t += 1;
  }
   // Function to set the gradient background
   setBackground() {
    for (let y = 0; y < height; y++) {
      let n = map(y, 0, height, 0, 1);
      let newc = lerpColor(this.c1, this.c2, n);
      stroke(newc);
      line(0, y, width, y); // Draw each horizontal line for the gradient
    }
  }

  // Handle window resizing and adjust canvas size for Scene 1
  windowResizedScene() {
    resizeCanvas(windowWidth, windowHeight); // Adjust canvas size on window resize
    this.setBackground(); // Ensure the background is redrawn after resizing
  }


  // Function to set the background color
  setBackground() {
    background(177, 158, 149); // Set the background color for Scene 1
  }
}
*/

class Scena1 {

  constructor() {
    this.mic = null;  // Reference to the microphone passed from the main sketch
    this.amp = null;  // Reference to the amplitude analyzer passed from the main sketch
    this.t = 0;
    this.shape1 = null;
    this.shape2 = null;
    this.shape3 = null;
    this.shape4 = null;
    this.shape5 = null;
    this.c1= null;
    this.c2= null;
    this.pg = null;

    this.micStarted = false;  // To track if the mic has successfully started

  }

  // Setup for Scene 1
  setup() {
    createCanvas(windowWidth, windowHeight);

  
      // Initialize microphone and start it
      this.mic = new p5.AudioIn();
      this.mic.start(() => {
        console.log("Microphone started successfully");
        this.micStarted = true;

  
        // Initialize amplitude analyzer only after the mic starts
        this.amp = new p5.Amplitude();
        this.amp.setInput(this.mic);  // Set the mic input for amplitude analysis
      }, (err) => {
        console.error("Microphone start failed:", err);
      });
  
    // Set the colors for the gradient background
    this.c1 = color("#E6CFC9");
    this.c2 = color(177, 158, 149);

    // Create the gradient background
    this.setBackground();
    
    // Create a graphics layer
    this.pg = createGraphics(windowWidth, windowHeight);
    this.pg.clear();
    this.pg.noStroke();

    // Initialize the shapes using the external Shape class
    this.shape1 = new Shape('noiseShape', min(width, height) * 0.30, null, color(215, 88, 106, 50), this.t);
    this.shape3 = new Shape('noiseShape1', min(width, height) * 0.50, null, color(94, 158, 159, 50), this.t);
    this.shape2 = new Shape('circle', height / 8, color(34, 34, 34, 60), null, this.t);
    this.shape4 = new Shape('circle', height / 8, color(34, 34, 34, 0), null, this.t);
    this.shape5 = new Shape('noiseShape2', min(width, height) * 0.20, null, color(0, 0, 0, 20), this.t);

    noFill();
    this.t = 0;
  }

  
  // Draw function for Scene 1
  draw() {
    push();
    translate(width / 2, height / 2);

    // Check if the amplitude analyzer is properly set up
    if (this.micStarted && this.amp) {
      // Get the current amplitude (volume level)
      console.log("Using amplitude analyzer");  // Debugging

      let level = this.amp.getLevel();

      // Map the amplitude to the size of the black circle
      let reactiveSize = map(level, 0, 1, height / 8, height / 2);

      // Update the size of the black circle based on the audio input
      this.shape2.size = reactiveSize;
    } else {
      console.error("Amplitude analyzer not set");
    }

    // Display the shapes
    this.shape1.display(this.t);
    this.shape2.display(this.t);
    this.shape3.display(this.t);

    pop();

    this.t += 1;
  }

  // Function to set the gradient background
  setBackground() {
    for (let y = 0; y < height; y++) {
      let n = map(y, 0, height, 0, 1);
      let newc = lerpColor(this.c1, this.c2, n);
      stroke(newc);
      line(0, y, width, y);  // Draw each horizontal line for the gradient
    }
  }

  // Handle window resizing and adjust canvas size for Scene 1
  windowResizedScene() {
    resizeCanvas(windowWidth, windowHeight);  // Adjust canvas size on window resize
    this.setBackground();  // Ensure the background is redrawn after resizing
  }
    // Optionally, stop the microphone when the scene is no longer active
    exit() {
      if (this.mic) {
        this.mic.stop();
        console.log("Microphone stopped in Scena1");
      }
    }
}
