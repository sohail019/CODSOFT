// Function to handle temperature conversion
function convertTemperature() {
  // Get the input value and selected unit
  const temperatureInput = parseFloat(
    document.getElementById("temperatureInput").value
  );
  const unitSelector = document.getElementById("unitSelector");
  const selectedUnit = unitSelector.options[unitSelector.selectedIndex].value;

  // Perform the temperature conversion
  let convertedTemperature = 0;
  let unitName = "";

  switch (selectedUnit) {
    case "celcius":
      convertedTemperature = ((temperatureInput - 32) * 5) / 9;
      unitName = "Celsius (°C)";
      break;
    case "fahrenheit":
      convertedTemperature = (temperatureInput * 9) / 5 + 32;
      unitName = "Fahrenheit (°F)";
      break;
    case "kelvin":
      convertedTemperature = temperatureInput + 273.15;
      unitName = "Kelvin (K)";
      break;
  }

  // Display the converted temperature
  const resultContainer = document.getElementById("resultContainer");
  resultContainer.textContent = `Converted Temperature: ${convertedTemperature.toFixed(
    2
  )} ${unitName}`;
}

// Attach the convertTemperature function to the button click event
const convertButton = document.getElementById("convertButton");
convertButton.addEventListener("click", convertTemperature);
