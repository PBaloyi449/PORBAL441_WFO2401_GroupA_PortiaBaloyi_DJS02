const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Extract values from form fields
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Check if either input is empty
  if (!dividend.trim() || !divider.trim()) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return;
  }

  // Convert values to numbers
  const dividendNum = parseFloat(dividend);
  const dividerNum = parseFloat(divider);

  // Check if inputs are valid numbers
  if (isNaN(dividendNum) || isNaN(dividerNum)) {
    document.body.innerHTML = "<h1>Something critical went wrong. Please reload the page</h1>";
    console.error("Critical error: Non-numeric value encountered.");
    return;
  }

  // Check if the divider is zero
  if (dividerNum === 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error("Division by zero error occurred.");
    return;
  }

  // Perform division
  const divisionResult = dividendNum / dividerNum;

  // Display result without decimal if it's a whole number or convert to integer if it's a decimal
  result.innerText = Number.isInteger(divisionResult) ? divisionResult.toFixed(0) : Math.trunc(divisionResult);
});
