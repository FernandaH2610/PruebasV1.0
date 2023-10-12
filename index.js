const main = () => {
    bindElements();
    addEventListeners();
    showStoredHistoryItems();
}

window.onload = main;



let numbers = null;
let plus = null;
let minus = null;
let multiply = null;
let divide = null;
let delet = null;
let reset = null;
let equal = null;
let displayText = null;
let historyList = null;
let operators = {};

const bindElements = () => {
    numbers = document.querySelectorAll(".number");
    plus = document.querySelector("#plus");
    minus = document.querySelector("#minus");
    multiply = document.querySelector("#times");
    divide = document.querySelector("#divide");
    delet = document.querySelector(".delete-button");
    reset = document.querySelector(".reset-button");
    equal = document.querySelector(".equals-button");
		operators = {
        plus,
        minus,
        multiply,
        divide,
    };
}


displayText = document.querySelector(".calculator-screen-text");
historyList = document.querySelector(".history-list");


const addEventListeners = () => {
	//Event Listener
};

number.addEventListener(
    "click", () => {
}
);


if (checkError()) {
    displayText.innerHTML = "";
  }
  displayText.innerHTML += number.innerHTML;

const firstNumber = displayText.innerHTML.split(/[\+\-\*\/]/)[0];
const secondNumber = displayText.innerHTML.split(/[\+\-\*\/]/)[1];

if (firstNumber?.length > 9 || secondNumber?.length > 9) 
{
    displayText.innerHTML = displayText.innerHTML.slice(0, -1);
}

if (firstNumber) {
    const dotsFirst = firstNumber.match(/\./g);
    if (dotsFirst && dotsFirst.length > 1) {
      displayText.innerHTML = displayText.innerHTML.slice(0, -1);
    }
  }
  
  if (secondNumber) {
    const dotsSecond = secondNumber.match(/\./g);
  
    if (dotsSecond && dotsSecond.length > 1) {
      displayText.innerHTML = displayText.innerHTML.slice(0, -1);
    }
  }



  for (const operator in operators) {
    operators[operator].addEventListener("click", () => {
      if (!checkError() && displayText.innerHTML !== "") {
        displayText.innerHTML += operators[operator].innerHTML;
      }
  
     const operatorsInDisplay = displayText.innerHTML.match(/[\+\-\*\/]/g);
  
      if (operatorsInDisplay && operatorsInDisplay.length > 1) {
        displayText.innerHTML = displayText.innerHTML.slice(0,- 1);
      }
    });
  };


  delet.addEventListener("click", () => {
    if (!checkError()) {
      displayText.innerHTML = displayText.innerHTML.slice(0, -1);
    }
  });


  equal.addEventListener("click", () => {
    operateAndShow();
  });

  const calculate = (a, b, operator) => {
    // Switch
  };

  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }

  const checkError = () => {
    if (
      displayText.innerHTML === "Error" ||
      displayText.innerHTML === "Infinity" ||
      displayText.innerHTML === "undefined" ||
      displayText.innerHTML === "NaN"
    ) {
      return true;
    }
  };

  const operateAndShow = () => {
    try {
      // try code
    } catch (e) {
      // catch code
    }
  };
  const operator = displayText.innerHTML.match(/[\+\-\*\/]/)[0];


  const result = calculate(
    parseFloat(firstNumber),
    parseFloat(secondNumber),
    operator
  );
const roundedResult = Math.round(result * 10000) / 10000;

if (!checkError()) {
    displayText.innerHTML = roundedResult;
}

isplayText.innerHTML = "";
const renderHistoryItem = (item) => {
    const historyItem = document.createElement("li");
    historyItem.classList.add("history-item");
    historyItem.innerHTML = item;
  };

  if (!checkError()) {
    historyList.prepend(historyItem);
}

if (historyList.children.length > 9) {
    historyList.removeChild(historyList.lastChild);
}

if (!checkError()) {
    //This function must be added
const historyItem = `${firstNumber} ${operator} ${secondNumber} = ${roundedResult}`;
renderHistoryItem(historyItem);
}

const getHistoryItemsFromLocalStorage = () => {
	const historyItems = JSON.parse(localStorage.getItem("historyItems")) || [];
	return historyItems;
};

const addHistoryItemToLocalStorage = (item) => {
    if (!checkError()) {
          const historyItems = getHistoryItemsFromLocalStorage();
          historyItems.push(item);
          if (historyItems.length > 9) {
              historyItems.shift();
          }
          localStorage.setItem("historyItems", JSON.stringify(historyItems));
      }
  };

  if (!checkError()) {
    // This function must be added
    addHistoryItemToLocalStorage(historyItem);
  }


  const showStoredHistoryItems = () => {
    const historyItems = getHistoryItemsFromLocalStorage();
    historyItems.forEach((item) => renderHistoryItem(item));
};






