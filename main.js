let currentScene = -1; // Initially, no scene is active (waiting for Play button)
let sound; // Variable to hold the sound
let soundPlayed = false; // Boolean to track if the sound has been played
let playButton; // Variable for the play button

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create a "Play" button
  playButton = createButton('Play');
  playButton.position(width / 2 - 50, height / 2); // Center the button
  playButton.size(100, 50); // Set button size
  playButton.style('font-size', '20px');

  // On button click, start the scene and resume AudioContext
  playButton.mousePressed(() => {
    // Resume AudioContext and start the scene
    if (getAudioContext().state !== 'running') {
      getAudioContext().resume().then(() => {
        startScene(); // Only start the scene after AudioContext is resumed
      });
    } else {
      startScene(); // Start the scene immediately if AudioContext is already running
    }
  });
}

function draw() {
  background(0); // Clear the background

  // Show the play screen if no scene has started
  if (currentScene === -1) {
    showPlayScreen(); // Display the play button screen
  } else if (currentScene === 0) {
    drawScene1(); // Call the draw function for Scene 1
  } else if (currentScene === 1) {
    drawScene2(); // Call the draw function for Scene 2
  } else if (currentScene === 2) {
    drawScene3(); // Call the draw function for Scene 3
  }
}

// Function to display the play screen
function showPlayScreen() {
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(48);
  text("Welcome to the Story", width / 2, height / 2 - 100);
  textSize(24);
  text("Tap Play to start the adventure", width / 2, height / 2 - 50);
}

// Function to start the first scene when the play button is pressed
function startScene() {
  currentScene = 0; // Start with Scene 1
  playButton.hide(); // Hide the play button

  // Load and play the sound after the button click and AudioContext resume
  if (!soundPlayed) {
    sound = loadSound('./Assets/underwater.mp3', () => {
      sound.play();
    });
    soundPlayed = true; // Prevent the sound from being loaded and played again
  }

  // Initialize Scene 1
  setupScene1(); // Ensure setupScene1 is called to initialize Scene 1
}

// Function to handle key press and switch between scenes
function keyPressed() {
  if (currentScene !== -1) {
    currentScene = (currentScene + 1) % 3; // Cycle through 3 scenes (0, 1, 2)

    if (currentScene === 0) {
      setupScene1(); // Initialize Scene 1
    } else if (currentScene === 1) {
      setupScene2(); // Initialize Scene 2 (defined in scene2.js)
    } else if (currentScene === 2) {
      setupScene3(); // Initialize Scene 3 (defined in scene3.js)
    }
  }
}

// Handle window resizing and adjust canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  playButton.position(width / 2 - 50, height / 2); // Recenter the play button when resizing
}
