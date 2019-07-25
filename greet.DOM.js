var radioBtnElement = document.querySelector(".radioBtn");
var greetBtnElem = document.querySelector(".buttonClicked");
var itemType = document.querySelector(".stringField");
var displayBoxElem = document.querySelector(".displayBox");
var theCounter = document.querySelector(".counter")
var resetBtnElem = document.querySelector(".clearClicked")


var storeName = localStorage.getItem('name') ? JSON.parse(localStorage.getItem('name')) : {};

var input = itemType.value

var greetings = GreetFactory(storeName);


// var storeName = localStorage.getItem('counterValue');

theCounter.innerHTML = greetings.counterValue()

function addButton() {

    greetings.greet(itemType.value)

    var checkedRadioBtn = document.querySelector("input[name='language']:checked");

    if (checkedRadioBtn) {
        var radioType = checkedRadioBtn.value;
    }
    if (itemType.value) {
        display = greetings.greet(itemType.value, radioType);
        displayBoxElem.innerHTML = display;
    }


    localStorage.setItem('name', JSON.stringify(greetings.findName()));


     theCounter.innerHTML = greetings.counterValue()
}

resetBtnElem.addEventListener('click', function () {
    window.location.reload();
    localStorage.clear();
    displayBoxElem.innerHTML = 0;
});


greetBtnElem.addEventListener('click', addButton);