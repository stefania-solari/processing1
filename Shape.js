class Shape {
    constructor(type, size, color, strokeColor) {
      this.type = type;
      this.size = size;
      this.color = color;
      this.strokeColor = strokeColor;
    }
  
    // Method to display the shape
    display(t, xOffset = 0, yOffset = 0) {
      push(); // Save the current drawing state
      translate(xOffset, yOffset); // Apply the offset
  
      if (this.type === 'noiseShape') {
        push();
        translate(80, 50);
        stroke(this.strokeColor); // Apply stroke for noise shape
        noFill(); // No fill for the noise shape
        beginShape();
        for (let i = 0; i < 100; i++) {
          let ang = map(i, 0, 120, 0, TWO_PI);
          let rad = this.size * noise(i * 0.05, t * 0.002);
          let x = rad * cos(ang);
          let y = rad * sin(ang);
          curveVertex(x, y);
          
        }
        endShape(CLOSE);
        pop();
      } else if (this.type === 'circle') {
        noStroke(); // Remove stroke for the circle
        fill(this.color); // Apply the fill color
        ellipse(0, 0, this.size, this.size); // Draw the circle
        drawingContext.shadowOffsetX = 0;
        drawingContext.shadowOffsetY = 0;
        drawingContext.shadowBlur = 70;
        drawingContext.shadowColor = 'black';
      } else if (this.type === 'noiseShape1') {
        stroke(this.strokeColor); // Apply stroke for noise shape
        noFill(); // No fill for the noise shape
        push();
        translate(-120, 0);
        beginShape();
        for (let i = 0; i < 150; i++) {
          let ang = map(i, 0, 100, 0, TWO_PI);
          let rad = this.size * noise(i * 0.02, t * 0.002);
          let x = rad * cos(ang);
          let y = rad * sin(ang);
          curveVertex(x, y);
        }
        endShape(CLOSE);
        pop();
      }else if (this.type === 'noiseShape2') {
        stroke(this.strokeColor); // Apply stroke for noise shape
        noFill(); // No fill for the noise shape
        push();
        translate(0, 0);
        beginShape();
        blendMode(OVERLAY);

        for (let i = 0; i < 150; i++) {
          let ang = map(i, 0, 100, 1, TWO_PI);
          let rad = this.size * noise(i * 0.02, t * 0.002);
          let x = rad * cos(ang);
          let y = rad * sin(ang);
          curveVertex(x, y);
        }
        endShape(CLOSE);
        pop();
    }
  
      pop(); // Restore the previous drawing state
    }
  }
  