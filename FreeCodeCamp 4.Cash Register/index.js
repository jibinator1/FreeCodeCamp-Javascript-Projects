document.getElementById('purchase-btn').onclick = handlePurchase;

function handlePurchase() {
  let price = parseFloat(document.getElementById('price').value);
  let cash = parseFloat(document.getElementById('cash').value);
  let changeDue = parseFloat((cash - price).toFixed(2));
  let changeTextElement = document.getElementById('change-due');

  if (changeDue < 0) {
    alert("Customer does not have enough money to purchase the item");
    return;
  } else if (changeDue === 0) {
    changeTextElement.textContent = "No change due - customer paid with exact cash";
    return;
  }

  let cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ];

  const currencyUnits = [
    ["ONE HUNDRED", 100.00],
    ["TWENTY", 20.00],
    ["TEN", 10.00],
    ["FIVE", 5.00],
    ["ONE", 1.00],
    ["QUARTER", 0.25],
    ["DIME", 0.10],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]
  ];

  let totalCID = parseFloat(cid.reduce((acc, curr) => acc + curr[1], 0).toFixed(2));

  if (totalCID < changeDue) {
    changeTextElement.textContent = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  let changeArray = [];
  for (let i = 0; i < currencyUnits.length; i++) {
    let unitName = currencyUnits[i][0];
    let unitValue = currencyUnits[i][1];
    let amountAvailable = cid.find(currency => currency[0] === unitName)[1];
    let amountNeeded = Math.min(Math.floor(changeDue / unitValue) * unitValue, amountAvailable);

    if (amountNeeded > 0) {
      changeArray.push([unitName, parseFloat(amountNeeded.toFixed(2))]);
      changeDue = parseFloat((changeDue - amountNeeded).toFixed(2));
    }
  }

  if (changeDue > 0) {
    changeTextElement.textContent = "Status: INSUFFICIENT_FUNDS";
  } else if (totalCID === parseFloat(cash - price)) {
    let changeText = changeArray.map(item => `${item[0]}: $${item[1].toFixed(2).replace(/\.?0+$/, '')}`).join(", ");
    changeTextElement.textContent = `Status: CLOSED ${changeText}`;
  } else {
    let changeText = changeArray.map(item => `${item[0]}: $${item[1].toFixed(2).replace(/\.?0+$/, '')}`).join(", ");
    changeTextElement.textContent = `Status: OPEN ${changeText}`;
  }
}
