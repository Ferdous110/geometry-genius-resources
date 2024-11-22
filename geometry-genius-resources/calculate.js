
// calculate Parallelogram 
function calculateParallelogramArea() { 
  
  const base = getInputValueById("parallelogram-length");
  console.log(base);
 
  const height = getInputValueById("parallelogram-width");
  console.log(height);

  // calculate
  const area = base * height

  setInnerTextById('parallelogram-area', area);

}


// calculata calculateRhombusArea

function calculateRhombusArea() {
  const b1 = getInputValueById("rhombus-length");

  const b2 = getInputValueById("rhombus-width");

  const area = 0.5 * b1 * b2;
  setInnerTextById("rhombus-area", area);
}

// calculation Pentagon

function calculatePentagonArea() {
  const p = getInputValueById("pentagon-length");
  const b = getInputValueById("pentagon-width");
  const area = 0.5 * p * b
  
  setInnerTextById("pentagon-area", area);
}

// calculation Ellipse

function calculateEllipseArea() {
  const a = getInputValueById("ellipse-length");
  const b = getInputValueById("ellipse-width");
  const area = parseFloat((3.1416 * a * b).toFixed(2)); 

  setInnerTextById("ellipse-area",area);
}



function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);
  return inputValue;
}

function setInnerTextById(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area
}