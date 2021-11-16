var number1 = 0;
var number2 = 0;
var operator;
var result;

function button(deger) {
  let label = document.querySelector(".lbl");
  let available = document.querySelector(".available");
  var labels = document.querySelectorAll(".btnOperator");
  var resultDOM = document.querySelectorAll(".result");
  var values = available.innerHTML.split(operator);

  label.innerHTML = deger == "=" ? "" : deger;
  available.innerHTML =
    available == ""
      ? `${deger}`
      : available.innerHTML.concat(deger == "=" ? "" : deger);

  labels.forEach((element) => {
    element.onclick = () => {
      if (operator != element.innerHTML) {
        if (values[1] != "" && values[1] != null) {
          getNumbers();
          label.innerHTML = label.innerHTML.replace(
            label.innerHTML,
            `${result}`
          );
          if (available == "") {
            available.innerHTML = `${deger}`;
          } else {
            var deneme = available.innerHTML.replace(
              available.innerHTML,
              `${result}${element.innerHTML}`
            );
            available.innerHTML = `${deneme}`;
          }
          operator = element.innerHTML;
        } else if (available.innerHTML.includes(operator)) {
          label.innerHTML = element.innerHTML;
          var deneme1 = available.innerHTML.replace(
            operator,
            `${element.innerHTML}`
          );
          available.innerHTML = `${deneme1}`;
          operator = element.innerHTML;
        } else {
          operator = element.innerHTML;
          label.innerHTML = element.innerHTML;
          available.innerHTML =
            available == ""
              ? `${element.innerHTML}`
              : `${available.innerHTML}${element.innerHTML}`;
        }
      }
    };
  });

  resultDOM.forEach((element) => {
    element.onclick = () => {
      getNumbers();
    };
  });
}

function getNumbers() {
  let available = document.querySelector(".available");
  var values = available.innerHTML.split(operator);

  if (values[1] == 0 && !isNaN(values[1])) {
    number1 = values[0];
    number2 = values[0];
  } else if (values[1] == null) {
    number1 = values[0];
  } else {
    number1 = values[0];
    number2 = values[1];
  }
  calculate(number1, number2, operator);
  number1 = 0;
}

function clearLabel() {
  let label = document.querySelector(".lbl");
  let available = document.querySelector(".available");
  available.innerHTML = "";
  label.innerHTML = 0;
  number1 = 0;
  number2 = 0;
  operator = "";
  result = 0;
}

function reset() {
  window.location.reload();
}

function calculate(number1, number2, operation) {
  let label = document.querySelector(".lbl");
  let available = document.querySelector(".available");

  switch (operation) {
    case "+":
      result = Number(number1) + Number(number2);
      label.innerHTML = result;
      available.innerHTML = result;
      break;
    case "-":
      result = Number(number1) - Number(number2);
      label.innerHTML = result;
      available.innerHTML = result;
      break;
    case "/":
      result = Number(number1) / Number(number2);
      label.innerHTML = result;
      available.innerHTML = result;
      break;
    case "*":
      result = Number(number1) * Number(number2);
      label.innerHTML = result;
      available.innerHTML = result;
      break;
    default:
      "İşlem giriniz:";
      break;
  }
}
