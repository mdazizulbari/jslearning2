// if statements:
const ifageinput = document.getElementById('ifageinput');
const ifagebutton = document.getElementById('ifagebutton');
const resultif = document.getElementById('resulfif');
let ifage;
ifagebutton.onclick = function(){
    age = ifageinput.value;
    age = Number(ifage);
    if(ifage >= 100){
        resultif.textContent = `Go and spend time with Nature, use the time you have in something memorable.`;
    }
    else if(ifage == 0, age <= 0){
        resultif.textContent = `Don't start lying here, you are being tracked!`;
    }
    else if(ifage >= 18){
        resultif.textContent = `Welcome!`;
    }
    else if(ifage = ''){
        resultif.textContent = `Told you to enter the age first.`
    }
    else{
        resultif.textContent = `You shouldn't be here! Become 18 first.`;
    }
}


// Checked:
const ckdchackbox = document.getElementById('ckdchackbox');
const visa = document.getElementById('visa');
const paypal = document.getElementById('paypal');
const mastercard = document.getElementById('mastercard');
const ckdsubmit = document.getElementById('ckdsubmit');
const donationresult = document.getElementById('donationresult');
const paymentresult = document.getElementById('paymentresult');
ckdsubmit.onclick = function(){
    if(ckdchackbox.checked){donationresult.textContent = `You are donating.`}
    else{donationresult.textContent = `You are not donating.`}

    if(visa.checked){paymentresult.textContent = `With Visa.`}
    else if(paypal.checked){paymentresult.textContent = `With PayPal.`}
    else if(mastercard.checked){paymentresult.textContent = `With Master Card.`}
    else{paymentresult.textContent = `Please check a paymentmethod.`}
}



// Ternary Oparator
// shortcut to if{} else{} statements
// condition ? codeTrue : codeFalse
let age = 12;
let message1 = age >= 18 ? "You're an Adult" : "You're an Minor"
console.log(message1)

let time = 7
let greeting = time > 12 ? "Good Morning!" : "Good Afternoon"
console.log(greeting)

let isStudent = true
let message2 = isStudent ? "You are a Student." : "You are not a Student."
console.log(message2)

let purchaseAmount = 3500
let discount = purchaseAmount >= 100 ? 10 : 0
console.log(`Your total cost is $${purchaseAmount - purchaseAmount * (discount/100)}`)

// Switch
let testscore = 60
let grade
switch(true){
    case testscore >= 80: grade ="A+"
    break
    case testscore >= 70: grade ="A"
    break
    case testscore >= 60: grade ="A-"
    break
    case testscore >= 50: grade ="B"
    break
    case testscore >= 40: grade ="C"
    break
    case testscore >= 33: grade ="D"
    break
    default: grade ="F"
}
console.log(grade)

// String method : maniplute text (string) at will
// See documentation for the syntex



// String Slicing
let fullname = "SMA Bari"
// let firstname = fullname.slice(0, 3)
// let lastname = fullname.slice(4)
let firstname = fullname.slice(0, fullname.indexOf(" "))
let lastname = fullname.slice(fullname.indexOf(" ") + 1)
console.log(firstname)
console.log(lastname)