/*let t;

function setup() {
  createCanvas(windowWidth, windowHeight); // Full-page canvas
  background(255); // Initial white background
  noFill(); // No fill for the shapes, gradient is in the stroke
  t = 0; // Initialize time variable
  colorMode(HSL, 360, 100, 100); // Set color mode to HSL for gradient control
}

function draw() {
  translate(width / 2, height / 2); // Move origin to the center of the canvas

  let largeRadius = min(width, height) * 0.45; // Make the radius proportional to the canvas size

  beginShape();
  for (let i = 0; i < 200; i++) {
    let ang = map(i, 0, 200, 0, TWO_PI); // Map the angle for the shape
    let rad = largeRadius * noise(i * 0.01, t * 0.005); // Use noise for the radius, increase scale for a bigger shape
    let x = rad * cos(ang); // X-coordinate based on angle and radius
    let y = rad * sin(ang); // Y-coordinate based on angle and radius

    // Create a gradient in the stroke by changing the hue over time
    let hueValue = map(t % 360, 100, 360, 100, 360); // Cycle through the full color wheel over time
    stroke(hueValue, 80, 60, 0.7); // Apply the gradient stroke

    curveVertex(x, y); // Create the shape
  }
  endShape(); // Do not CLOSE the shape, so it feels continuous

  t += 1; // Increment time to make the hue and shape evolve

  // Do not clear or fade the background; allow the shapes to accumulate
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Adjust canvas size on window resize
  background(255); // Reset background after resizing
}

*/


//processing audio library: Minim

/*let t;
let shape1, shape2, shape3, shape4;
let pg;


class Shape {
  constructor(type, size, color, strokeColor) {
    this.type = type; // Type of shape ('circle', 'noiseShape', etc.)
    this.size = size; // Size of the shape
    this.color = color; // Fill color
    this.strokeColor = strokeColor; // Stroke color
  }

  // Method to display the shape
  display(xOffset = 0, yOffset = 0) {
    push(); // Save the current drawing state
    translate(xOffset, yOffset); // Apply the offset

    if (this.type === 'noiseShape') {
      push();
      translate(150,0);
      stroke(this.strokeColor); // Apply stroke for noise shape
      noFill(); // No fill for the noise shape
      beginShape();
      
      for (var i = 0; i < 100; i++) {
        var ang = map(i, 0, 120, 0, TWO_PI);
        var rad = this.size * noise(i * 0.02, t * 0.009);
        var x = rad * cos(ang);
        var y = rad * sin(ang);
        curveVertex(x, y);
      }
      endShape(CLOSE);
      pop();
    } 
    else if (this.type === 'circle') {
      noStroke(); // Remove stroke for the circle
      fill(this.color); // Apply the fill color
      ellipse(0, 0, this.size, this.size); // Draw the circle
      drawingContext.shadowOffsetX = 0;
      drawingContext.shadowOffsetY = 0;
      drawingContext.shadowBlur = 50;
      drawingContext.shadowColor = 'black';
    } 
    else if (this.type === 'noiseShape1'){
      stroke(this.strokeColor); // Apply stroke for noise shape
      noFill(); // No fill for the noise shape
      push();
      translate(-150,0);
      beginShape();
      
      for (var i = 0; i < 100; i++) {
        var ang = map(i, 0, 100, 1, TWO_PI);
        var rad = this.size * noise(i * 0.02, t * 0.007);
        var x = rad * cos(ang);
        var y = rad * sin(ang);
        curveVertex(x, y);
      }
      endShape(CLOSE);
      pop();
    }





    pop(); // Restore the previous drawing state

  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  pg = createGraphics(windowWidth, windowHeight);
  //background(255);
  //background(0); // Set dark background (black)
  
 

  background(177, 158, 149);
  pg.clear();
   pg.noStroke();
   pg.fill(0,100);
   pg.circle(pg.width/2, pg.height/2, 400);
   pg.circle(pg.width/2, pg.height/2, 300);
   pg.circle(pg.width/2, pg.height/2, 200);
   pg.circle(pg.width/2, pg.height/2, 100);
  image(pg, 0,0);

  //stroke(255, 15);
  //stroke(215, 88, 106, 50); // 127 is the alpha value for 50% transparency

  // Create two shapes: one noise shape and one black circle
  shape4 = new Shape('circle', height/4, color(0, 0, 0, 20), null); // Black circle

  shape1 = new Shape('noiseShape', min(width, height) * 0.70, null, color(215, 88, 106, 50)); // Noise shape

  shape3 = new Shape('noiseShape1', min(width, height) * 0.50, null, color(94, 158, 159, 100)); // Noise shape

  shape2 = new Shape('circle', height/2, color(10, 10, 10, 100), null); // Black circle


  noFill();
  t = 0;

 
}

function draw() {
  
   //shape2.display(); // Display the black circle
   //blendMode(ADD);
   //blendMode(BLEND); // normal
   

  push();
  translate(width/2, height/2);

  //let largeRadius = min(width, height) * 0.60; // Make the radius proportional to the canvas size


  // Display the shapes
  shape4.display(); // Display the black circle

  shape1.display(); // Display the noise shape

  shape3.display(); // Display the noise shape
  pop();
  
  pg.circle(pg.width/2, pg.height/2, 20);
 

  
  //beginShape();
  //for (var i = 0; i < 100; i++) {
  //  var ang = map(i, 0, 220, 0, TWO_PI);
  //  var rad = largeRadius * noise(i * 0.01, t * 0.009);
  //  var x = rad * cos(ang);
  //  var y = rad * sin(ang);
  //  curveVertex(x, y);
  //}
  //endShape(CLOSE);
  

  t += 1;

 // Draw a black circle in the middle of the screen
 //noStroke(); // Remove stroke for the black circle
 //fill(0); // Set fill color to black
 //ellipse(0, 0, 100, 100); // Draw the black circle at the center


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Adjust canvas size on window resize
  //background(0); // Reset background after resizing
  background(177, 158, 149);
    //pg.circle(pg.width/2, pg.height/2, 20);




}

*/

/*

let mgr;

function setup() {
  createCanvas(windowWidth, windowHeight);

  mgr = new SceneManager();

  // Preload scenes. Preloading is normally optional
  // ... but needed if showNextScene() is used.
  mgr.addScene(Scena1);
  mgr.addScene(Scena2);
  mgr.addScene(Scena3);
 // mgr.addScene(Scena4);
 // mgr.addScene(Scena5);
 // mgr.addScene(Scena6);

  mgr.showNextScene();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // aggiornamento variabili globali dipendenti dalla dimensione del canvas
}

function draw() {
  mgr.draw();
}

function mousePressed() {
  mgr.handleEvent("mousePressed");
}

function keyPressed() {
  // You can optionaly handle the key press at global level...
  switch (key) {
    case '1':
      mgr.showScene(Scena1);
      break;
    case '2':
      mgr.showScene(Scena2);
      break;
    case '3':
      mgr.showScene(Scena3);
      break;
  

    
  }
  // ... then dispatch via the SceneManager.
  mgr.handleEvent("keyPressed");
}

let lastMouseWheel = 0;

function mouseWheel(event) {
  let currMouseWheel = millis();
  if ((currMouseWheel - lastMouseWheel) > 500) {
    if (event.delta < 0) {
      // avanti (solo se la scena non è l'ultima)
      if (mgr.isCurrent(Scena3) == false) {
        mgr.showNextScene();
      }
    } else {
      // indietro (solo se la scena non è la prima)
      if (mgr.isCurrent(Scena3)) {
        mgr.showScene(Scena2);
      } else if (mgr.isCurrent(Scena2)) {
        mgr.showScene(Scena1);
      }
    }
    lastMouseWheel = currMouseWheel;
  }
}

*/

// In your sketch.js


/*
let mgr;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mgr = new SceneManager();

  // Add scenes to the SceneManager
  mgr.addScene(Scena1); // Assuming Scena1 is defined in a separate file
  mgr.addScene(Scena2); // Assuming Scena2 is defined
  mgr.addScene(Scena3); // Assuming Scena3 is defined

  mgr.showNextScene(); // Start with the first scene
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  mgr.draw();
}

function keyPressed() {
  // Handle switching between scenes on key press
  switch (key) {
    case '1':
      mgr.showScene(Scena1);
      break;
    case '2':
      mgr.showScene(Scena2);
      break;
    case '3':
      mgr.showScene(Scena3);
      break;
  }

  mgr.handleEvent("keyPressed");
}

function mousePressed() {
  mgr.handleEvent("mousePressed");
}


*/

/*
let mgr;
let sound;  // Variable to hold the sound
let playButton;  // Variable for the play button
let soundPlayed = false;  // Boolean to track if the sound has been played

let mic;  // Microphone input
let amp;  // Amplitude analyzer
let micStarted = false;  // Boolean to check if the mic has started

function preload() {
  // Preload the sound file (Make sure you have a valid path to the audio file)
  sound = loadSound('./Assets/underwater.mp3');  // Replace with your actual file path
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  
  // Initialize the microphone
  mic = new p5.AudioIn();

  // Start the microphone input and add error handling
  mic.start(() => {
    console.log("Microphone started successfully");
    micStarted = true;  // Set micStarted to true when mic is successfully started

    // Only create the amplitude analyzer after the mic has started
    amp = new p5.Amplitude();
    amp.setInput(mic);  // Link the microphone to the amplitude analyzer
  }, (err) => {
    console.error("Microphone start failed:", err);
  });

  // Display the play screen
  showPlayScreen();

  // Create a "Start" button to start the scene
  playButton = createButton('Start');
  playButton.position(width / 2 - 75, height / 2);  // Center the button
  playButton.size(150, 60);  // Set button size
  stylePlayButton();  // Apply styles to the play button
 

  // On button click, start the scene and play the sound
  playButton.mousePressed(startGame);
}

function startGame() {
  if (!soundPlayed && micStarted) {  // Ensure microphone has started before proceeding
    // Resume AudioContext if it's not already running
    if (getAudioContext().state !== 'running') {
      getAudioContext().resume().then(() => {
        console.log("AudioContext resumed successfully");
      }).catch(err => {
        console.error("Error resuming AudioContext:", err);
      });
    }

    // Play the sound and start the scene
    sound.play();
    startScene();  // Transition to the first scene

    soundPlayed = true;  // Ensure the sound only plays once
  } else {
    console.log("Sound cannot be played because the microphone hasn't started yet.");
  }
}

function startScene() {
  // Hide the play button
  playButton.hide();

  // Create the SceneManager and add scenes
  mgr = new SceneManager();

  // Add scene classes, passing mic and amp as constructor parameters
  mgr.addScene(Scena1);  // Pass mic and amp to Scena1
  mgr.addScene(Scena2);  // Similarly for Scena2
  mgr.addScene(Scena3);  // Similarly for Scena3

  // Start with the first scene (Scena1)
  mgr.showScene(Scena1);
}


function draw() {
  // Draw the current scene (after the button is pressed)
  if (mgr) {
    mgr.draw();
  }
}

function keyPressed() {
  // Handle switching between scenes on key press
  if (mgr) {
    if (key === '1') mgr.showScene(Scena1);
    if (key === '2') mgr.showScene(Scena2);
    if (key === '3') mgr.showScene(Scena3);
    
    mgr.handleEvent("keyPressed");
  }
}

function windowResized() {
  if (mgr && mgr.scene && mgr.scene.oScene.windowResizedScene) {
    mgr.scene.oScene.windowResizedScene();
  }
}


function mousePressed() {
  if (mgr) {
    mgr.handleEvent("mousePressed");
  }
}

// Display the play screen
function showPlayScreen() {
  background(0);  // Set the background to black
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(48);
  text("Welcome to the Story", width / 2, height / 2 - 100);  // Title text
  textSize(24);
  text("Tap Play to start the adventure", width / 2, height / 2 - 50);  // Instruction text
}

// Style the play button
function stylePlayButton() {
  playButton.style('font-size', '24px');
  playButton.style('background-color', '#444');  // Dark background for the button
  playButton.style('color', '#fff');  // White text for the button
  playButton.style('cursor', 'pointer');  // Cursor changes to pointer when hovering
  playButton.style('border-radius', '30px');  // Rounded corners
  playButton.style('border', 'none');  // Remove the border
  playButton.style('padding', '15px 30px');  // Padding inside the button
  playButton.style('box-shadow', '0 4px 8px rgba(0, 0, 0, 0.2)');  // Add a box shadow
  playButton.style('transition', 'all 0.3s ease');  // Smooth transition for hover effect
}
  */


let mgr;
let sound;  // Variable to hold the sound
let playButton;  // Variable for the play button
let soundPlayed = false;  // Boolean to track if the sound has been played

function preload() {
  // Preload the sound file (Make sure you have a valid path to the audio file)
  sound = loadSound('./Assets/Rival-Consoles-Untravel.mp3');  // Replace with your actual file path
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Display the play screen
  showPlayScreen();

  // Create a "Start" button to start the scene
  playButton = createButton('Start');
  playButton.position(width / 2 - 75, height / 2);  // Center the button
  playButton.size(150, 60);  // Set button size
  stylePlayButton();  // Apply styles to the play button
 
  // On button click, start the scene and play the sound
  playButton.mousePressed(startGame);
}

function startGame() {
  if (!soundPlayed) {
    // Resume AudioContext if it's not already running
    if (getAudioContext().state !== 'running') {
      getAudioContext().resume().then(() => {
        console.log("AudioContext resumed successfully");
      }).catch(err => {
        console.error("Error resuming AudioContext:", err);
      });
    }

    // Play the sound and start the scene
    sound.play();
    startScene();  // Transition to the first scene

    soundPlayed = true;  // Ensure the sound only plays once
  } else {
    console.log("Sound cannot be played because the microphone hasn't started yet.");
  }
}

function startScene() {
  // Hide the play button
  playButton.hide();

  // Create the SceneManager and add scenes
  mgr = new SceneManager();

  // Add scene classes (scenes will handle their own mic and amp)
  mgr.addScene(Scena1);  // Add Scena1
  mgr.addScene(Scena2);  // Similarly for Scena2
  mgr.addScene(Scena3);  // Similarly for Scena3

  // Start with the first scene (Scena1)
  mgr.showScene(Scena1);
}

function draw() {
  // Draw the current scene (after the button is pressed)
  if (mgr) {
    mgr.draw();
  }
}

function keyPressed() {
  // Handle switching between scenes on key press
  if (mgr) {
    if (key === '1') mgr.showScene(Scena1);
    if (key === '2') mgr.showScene(Scena2);
    if (key === '3') mgr.showScene(Scena3);
    
    mgr.handleEvent("keyPressed");
  }
}

function windowResized() {
  if (mgr && mgr.scene && mgr.scene.oScene.windowResizedScene) {
    mgr.scene.oScene.windowResizedScene();
  }
}

function mousePressed() {
  if (mgr) {
    mgr.handleEvent("mousePressed");
  }
}

// Display the play screen
function showPlayScreen() {
  background(0);  // Set the background to black
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(48);
  text("Welcome", width / 2, height / 2 - 100);  // Title text
  textSize(24);
  text("Tap Play to start", width / 2, height / 2 - 50);  // Instruction text
}

// Style the play button
function stylePlayButton() {
  playButton.style('font-size', '24px');
  playButton.style('background-color', '#444');  // Dark background for the button
  playButton.style('color', '#fff');  // White text for the button
  playButton.style('cursor', 'pointer');  // Cursor changes to pointer when hovering
  playButton.style('border-radius', '30px');  // Rounded corners
  playButton.style('border', 'none');  // Remove the border
  playButton.style('padding', '15px 30px');  // Padding inside the button
  playButton.style('box-shadow', '0 4px 8px rgba(0, 0, 0, 0.2)');  // Add a box shadow
  playButton.style('transition', 'all 0.3s ease');  // Smooth transition for hover effect
}

