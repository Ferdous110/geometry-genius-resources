
function calculateParallelogramArea() { 
  
  const base = getInputValueById("parallelogram-length");
  console.log(base);
 
  const height = getInputValueById("parallelogram-width");
  console.log(height);

  // calculate
  const area = base * height

  setInnerTextById('parallelogram-area', area);

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