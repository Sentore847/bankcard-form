const bankTypes = [
	{
		src: "img/visa.png",
	},
	{
		src: "img/mastercard.png",
	},
	{
		src: "img/amex.png",
	},
	{
		src: "img/none.png",
	},
];

const bankImg = document.querySelectorAll("img");
const firstRow = document.querySelector("#card-number");

const setImg = (currentDataImg) => {
	bankImg.forEach((img) => {
		img.src = currentDataImg.src;
	})
};

firstRow.addEventListener("input", onChangeImg)

function onChangeImg() {
	const cardPrefix = firstRow.value.substring(0, 2);
	console.log(cardPrefix)
	if(cardPrefix === "4" || cardPrefix === "41" || cardPrefix === "42" || cardPrefix === "43" || cardPrefix === "44" || cardPrefix === "45" || cardPrefix === "46" || cardPrefix === "47" || cardPrefix === "48" || cardPrefix === "49") {
		setImg(bankTypes[0]);
	} else if(cardPrefix === "51" || cardPrefix === "52" || cardPrefix === "53" || cardPrefix === "54" || cardPrefix === "55") {
		setImg(bankTypes[1]);
	} else if(cardPrefix === "34" || cardPrefix === "37") {
		setImg(bankTypes[2]);
	} else {
		setImg(bankTypes[3]);
	}
}

document.querySelectorAll('.input-cart-number').forEach(function(input, index, array) {
    input.addEventListener('input', function(event) {
        input.value = input.value.replace(/\D/g, '');
        if (input.value.length > 4) {
            input.value = input.value.slice(0, 4);
        }
        if (input.value.length === 4) {
            setTimeout(function() {
                array[index + 1].focus();
            }, 10); 
        }

        let cardNumber = '';
        array.forEach(function(item, index) {
            cardNumber += item.value;
            if (index < array.length - 1) {
                cardNumber += ' ';
            }
            if (item.value.length === 4 && index < array.length - 1) {
                item.nextElementSibling.focus();
            }
        });

        document.querySelector('.credit-card-box .number').innerHTML = cardNumber;
    });
});


document.querySelectorAll('.input-cart-number').forEach(function(input, index, array) {
    input.addEventListener('keydown', function(event) {
        if (event.keyCode === 8 && input.selectionStart === 0 && input.value === '' && index !== 0) {
            event.preventDefault();
            setTimeout(function() {
                array[index - 1].focus();
                array[index - 1].selectionStart = array[index - 1].selectionEnd = array[index - 1].value.length;
            }, 10);
        }
    });
});

document.getElementById('card-holder').addEventListener('keyup', function(event) {
    document.querySelector('.credit-card-box .card-holder div').innerHTML = this.value;
});

document.getElementById('card-expiration-month').addEventListener('change', updateExpirationDate);
document.getElementById('card-expiration-year').addEventListener('change', updateExpirationDate);

function updateExpirationDate() {
    let monthIndex = document.getElementById('card-expiration-month').selectedIndex;
    let month = (monthIndex < 10) ? '0' + monthIndex : monthIndex;
    let year = document.getElementById('card-expiration-year').value.substr(2, 2);
    document.querySelector('.card-expiration-date div').innerHTML = month + '/' + year;
}

document.getElementById('card-cvv').addEventListener('focus', function(event) {
    document.querySelector('.credit-card-box').classList.add('hover');
});

document.getElementById('card-cvv').addEventListener('click', function(event) {
    document.querySelector('.credit-card-box').classList.add('hover');
});

document.getElementById('card-cvv').addEventListener('blur', function(event) {
    document.querySelector('.credit-card-box').classList.remove('hover');
});

document.getElementById('card-cvv').addEventListener('keyup', function(event) {
    document.querySelector('.cvv div').innerHTML = this.value;
});

setTimeout(function() {
    document.getElementById('card-cvv').focus();
    setTimeout(function() {
        document.getElementById('card-cvv').blur();
    }, 1000);
}, 500);


