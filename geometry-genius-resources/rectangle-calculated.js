
function calculateRectangleArea() {
  // get lenght of the rectangle
  const lengthInput = document.getElementById("rectangle-length");
  const lenghtText = lengthInput.value;
  const lenght = parseFloat(lenghtText);

  // get width oof the rectanle

  const widthInput = document.getElementById("rectangle-width");
  const widthText = widthInput.value;
  const weidth = parseFloat(widthText);

  //  display ractangle area
  const area = lenght * weidth;

  console.log(area);

  // display ractangle area
  
  const areaDisplay = document.getElementById("ractangle-area");
  areaDisplay.innerText = area;
  document.querySelector(".calculate").innerText =
    "Calculate Rectangle: " + area + ` cm 2`;
}