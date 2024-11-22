
// get triangle base value 

function calculateTriangleArea() {
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  console.log(base)

  // get triangle height value

  const triangleHightInput = document.getElementById("triangle-height");
  const triangleHightText = triangleHightInput.value;
  const height = parseFloat(triangleHightText);
  console.log(height);

  // calculate triangle area

  const area = 0.5 * base * height;
  console.log('area of the trianle is:', area);

  // display triangle area
  const triangleAreaSpan = document.getElementById("triangle-area");
  triangleAreaSpan.innerText = area;



}

