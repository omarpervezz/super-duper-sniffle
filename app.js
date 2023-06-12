 // Separate the logic into functions for better modularity
 function generatePercentageList() {
    let counter = 0;
    let storePercentage = ""; // corrected the variable name from 'storePercentenge' to 'storePercentage'
  
    while (counter < 100) {
      counter++;
      const formattedCounter = counter < 10 ? `0${counter}` : (counter === 100 ? 1 : counter % 100);
      storePercentage += `<div class="percentageList"><span>0.${formattedCounter}</span> <span>=</span> <span>${counter}%</span></div>`;
    }
  
    return storePercentage;
  }
  
  function updateLastElement() {
    const percentageContainer = document.querySelector('.percentengeContainer'); // corrected the variable name from 'percentengeContainer' to 'percentageContainer'
    percentageContainer.innerHTML += generatePercentageList();
    const lastElement = percentageContainer.lastElementChild;
    const lastChild = lastElement.querySelector('span');
    lastChild.innerText = '1';
  }
  
  // Execute the logic after the DOM is loaded
  window.addEventListener('DOMContentLoaded', updateLastElement);