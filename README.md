# PJSLibrary

PJSLibrary is a lightweight, reusable, and scalable JavaScript library inspired by ProcessingJS. It provides a familiar API for drawing shapes and graphics using the HTML5 CanvasRenderingContext2D, making it easy to build visual applications, animations, and interactive sketches.

---

# Setup

Initiate a canvas for the PJSLibrary by running initPJS.js directly via CDN:

```html
<script src="https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.0/initPJS.js"></script>
```

After that, just import and call the functions to use with your created canvas! Super easy!

Here's a primitive code setup:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PJSLibrary Sketch</title>
    <script src="https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.0/initPJS.js"></script>
  </head>
  <body>
    <!-- Creates the canvas -->
    <script src="https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.0/initPJS.js"></script>
    <script type="module">
        import { rect, ellipse, rectMode, ellipseMode } from "https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.0/shapes.js";

        rectMode("CENTER");
        ellipseMode("CENTER");

        rect(200, 200, 100, 50);
        ellipse(200, 200, 80, 80);
    </script>
  </body>
</html>

```

# Documentation (Currently Incomplete)
## colors.js
This module provides color utilities for setting fill and stroke styles, background fills, gradients, and color interpolation using RGBA values or CSS color strings.

### color(r, g?, b?, a?)
Returns a hex color string based on the provided RGB(A) values. Also sets the global alpha for the canvas context.

#### Parameters:

r (number) – Red value (0–255), or grayscale if g, b, and a are omitted.

g (number, optional) – Green value.

b (number, optional) – Blue value.

a (number, optional) – Alpha (opacity), default is 255.

Returns: string – Hex color string (e.g., #FFAA33)

### fill(r, g?, b?, a?)
Sets the fill color for shapes. Accepts either a CSS color string or individual RGBA values.

#### Parameters:

r (number|string) – Red value or CSS color string.

g, b, a (number, optional) – Green, Blue, and Alpha values (0–255).

### noFill()
Disables filling shapes by setting the fill style to fully transparent.

### stroke(r, g?, b?, a?)
Sets the stroke color for outlines. Accepts either a CSS color string or individual RGBA values.

#### Parameters:

r (number|string) – Red value or CSS color string.

g, b, a (number, optional) – Green, Blue, and Alpha values (0–255).

### noStroke()
Disables stroke outlines by setting the stroke style to fully transparent.

### strokeWeight(thickness)
Sets the line width for strokes.

#### Parameters:

thickness (number) – Line width in pixels.

### background(r, g?, b?, a?)
Fills the entire canvas with the specified color.

#### Parameters:

Same as fill().

### lerpColor(color1, color2, amt)
Interpolates between two colors and returns the result as an rgb(r, g, b) string.

#### Parameters:

color1 (string) – Starting color (#rrggbb or rgb(r, g, b)).

color2 (string) – Ending color.

amt (number) – Interpolation amount (0.0 to 1.0).

Returns: string – Interpolated RGB color string.

### gradient(x, y, width, height, color1, color2, direction)
Draws a linear gradient-filled rectangle.

#### Parameters:

x, y (number) – Top-left corner of the rectangle.

width, height (number) – Dimensions of the rectangle.

color1, color2 (string) – Start and end colors.

direction (string) – "vertical" (default) or "horizontal"

## complexShapes.js
This module provides utilities for constructing complex shapes using vertex-based paths, bezier curves, and custom stroke joins. It mimics ProcessingJS-style shape building with beginShape() and endShape() blocks.

### beginShape()
Starts a new shape path. Must be called before using vertex() or bezierVertex().

Sets internal state to expect the first vertex.

Begins a new path on the canvas context.

Returns: void

### endShape()
Closes the current shape path and renders it with fill and stroke.

Closes the path using ctx.closePath().

Fills and strokes the shape.

Returns: void

### vertex(x, y)
Adds a vertex to the current shape. The first vertex uses moveTo(), subsequent ones use lineTo().

#### Parameters:
x (number) – The x-coordinate of the vertex.

y (number) – The y-coordinate of the vertex.

Returns: void

### bezierVertex(cx1, cy1, cx2, cy2, x, y)
Adds a bezier curve segment to the shape. Must be preceded by at least one vertex() call.

#### Parameters:
cx1 (number) – First control point x.

cy1 (number) – First control point y.

cx2 (number) – Second control point x.

cy2 (number) – Second control point y.

x (number) – Destination x.

y (number) – Destination y.

Throws: Error if no vertex has been added yet.

Returns: void

### strokeJoin(MODE)
Sets the style of line joins between segments.

#### Parameters:
MODE (string) – One of "MITER", "BEVEL", or "ROUND".

Logs an error if an invalid mode is provided.

Returns: void