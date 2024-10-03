/*
class Scena3 {

  constructor() {
    this.mic = null;  // Microphone input
    this.amplitude = null;  // Amplitude analyzer
    this.nb = 30;
    this.rot = 3;
    this.dim = 350;
    this.f = 1.0;
    this.fmin = 0.5;
    this.micStarted = false;  // To track if the mic has successfully started
  }

  // Setup for Scene 3
  setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    angleMode(DEGREES);

    // Initialize microphone
    this.mic = new p5.AudioIn();

    // Start the microphone and initialize amplitude only after mic starts successfully
    this.mic.start(() => {
      console.log("Microphone started successfully in Scena3");
      this.micStarted = true;

      // Initialize amplitude analyzer after mic has started
      this.amplitude = new p5.Amplitude();
      this.amplitude.setInput(this.mic);
      this.amplitude.smooth(0.9);  // Smooth the amplitude data for more consistent values

      console.log("Amplitude analyzer successfully initialized in Scena3");

    }, (err) => {
      console.error("Microphone start failed in Scena3:", err);
    });

    // Ensure audio context is properly started in browsers
    userStartAudio();
  }

  // Draw function for Scene 3
  draw() {
    if (this.micStarted && this.amplitude) {
      // Get current volume level (amplitude) from the mic
      let level = this.amplitude.getLevel();
      level *= 50.0;  // Increase the sensitivity

      // Log the amplitude level for debugging
      console.log("Amplitude Level: " + level);

      // Use the amplitude to control the number of squares, rotation, and size
      this.nb = int(map(level, 0, 1, 2, 50));  // Map amplitude to number of squares
      this.rot = map(level, 0, 1, 0, 90);  // Map amplitude to rotation
      this.fmin = map(level, 0, 1, 0.5, 1);  // Map amplitude to minimum scaling factor

      background(0);
      translate(width / 2, height / 2);
      noFill();
      stroke(255);

      // Draw squares based on amplitude-reactive parameters
      for (let i = 0; i < this.nb; i++) {
        this.f = map(i, 0, this.nb - 1, 1, this.fmin);
        square(0, 0, this.f * this.dim);
        rotate(this.rot);
      }
    } else {
      console.error("Microphone or amplitude analyzer not set in Scena3.");
    }
  }

  // Handle window resizing and adjust canvas size for Scene 3
  windowResizedScene() {
    resizeCanvas(windowWidth, windowHeight);  // Adjust canvas size on window resize
  }

  // Stop the microphone when the scene is no longer active
  exit() {
    if (this.mic) {
      this.mic.stop();
      console.log("Microphone stopped in Scena3");
    }
  }
}

*/class Scena3 {

  constructor() {
    this.mic = null;  // Microphone input
    this.amplitude = null;  // Amplitude analyzer
    this.nb = 30;
    this.rot = 3;
    this.dim = 350;
    this.f = 1.0;
    this.fmin = 0.5;
    this.shape1 = null;  // Shape objects
    this.shape2 = null;
    this.shape3 = null;
    this.shape4 = null;
    this.shape5 = null;
    this.micStarted = false;  // To track if the mic has successfully started
    this.c1 = null;
    this.c2 = null;
    this.pg = null;
  }

  // Setup for Scene 3
  setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    angleMode(DEGREES);

    // Initialize microphone
    this.mic = new p5.AudioIn();

    // Start the microphone and initialize amplitude only after mic starts successfully
    this.mic.start(() => {
      console.log("Microphone started successfully in Scena3");
      this.micStarted = true;

      // Initialize amplitude analyzer after mic has started
      this.amplitude = new p5.Amplitude();
      this.amplitude.setInput(this.mic);
      this.amplitude.smooth(0.9);  // Smooth the amplitude data for more consistent values

      console.log("Amplitude analyzer successfully initialized in Scena3");
    }, (err) => {
      console.error("Microphone start failed in Scena3:", err);
    });

    // Set the colors for the gradient background
    this.c1 = color("#E6CFC9");
    this.c2 = color(0, 0, 0);

    // Create a graphics layer
    this.pg = createGraphics(windowWidth, windowHeight);
    this.pg.clear();
    this.pg.noStroke();

    // Initialize the shapes from Scena2 using the external Shape class
    this.shape1 = new Shape('noiseShape', min(width, height) * 0.30, null, color(215, 88, 106, 50), this.t);
    this.shape3 = new Shape('noiseShape1', min(width, height) * 0.50, null, color(94, 158, 159, 50), this.t);
    this.shape5 = new Shape('noiseShape2', min(width, height) * 0.20, null, color(0, 0, 0, 20), this.t);

    noFill();
  }

  // Draw function for Scene 3
  draw() {
    if (this.micStarted && this.amplitude) {
      // Draw the gradient background
      this.setBackground();

      // Get current volume level (amplitude) from the mic
      let level = this.amplitude.getLevel();
      level *= 50.0;  // Increase the sensitivity

      // Log the amplitude level for debugging
      console.log("Amplitude Level: " + level);

      // Use the amplitude to control the number of squares, rotation, and size
      this.nb = int(map(level, 0, 1, 2, 50));  // Map amplitude to number of squares
      this.rot = map(level, 0, 1, 0, 90);  // Map amplitude to rotation
      this.fmin = map(level, 0, 1, 0.5, 1);  // Map amplitude to minimum scaling factor

      translate(width / 2, height / 2);
      noFill();
      stroke(255);

      // Draw squares based on amplitude-reactive parameters
      for (let i = 0; i < this.nb; i++) {
        this.f = map(i, 0, this.nb - 1, 1, this.fmin);
        square(0, 0, this.f * this.dim);
        rotate(this.rot);
      }

      // Display the shapes
      this.shape1.display(this.t);
      this.shape3.display(this.t);

      this.t += 1;
    } else {
      console.error("Microphone or amplitude analyzer not set in Scena3.");
    }
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

  // Handle window resizing and adjust canvas size for Scene 3
  windowResizedScene() {
    resizeCanvas(windowWidth, windowHeight);  // Adjust canvas size on window resize
    this.setBackground();  // Ensure the background is redrawn after resizing
  }

  // Stop the microphone when the scene is no longer active
  exit() {
    if (this.mic) {
      this.mic.stop();
      console.log("Microphone stopped in Scena3");
    }
  }
}
