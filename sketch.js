let circles = []

function setup() {
  createCanvas(400, 400)

 

  //Set semi random radiuses for the circles and locations
  for (let y = 0; y < height; y += 20) {
    for (let x = 0; x < width; x += 20) {
      // Create said radius and push info to array
      let radius = random(5, 20)
      circles.push({ x: x, y: y, initialRadius: radius })
    }
  }
}

function draw() {
  background(220)
  frameRate(24)

  // This loop updates the radius's
  for (let circle of circles) {
    // Use sin() to change the size every frame and allow the grow and shrink when working with oscillation
    let oscillation = sin(frameCount * 0.1)
    //This below sets the maximum limit they can grow and shrink
    let radius = circle.initialRadius + oscillation * 7
    
    // Draw the circles and set the fills to equal the mouse position and random255
    fill(mouseX, mouseY, random(255))
    ellipse(circle.x, circle.y, radius, radius)
  }
}