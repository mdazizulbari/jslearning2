// if statements:
const ifageinput = document.getElementById('ifageinput');
const ifagebutton = document.getElementById('ifagebutton');
const resultif = document.getElementById('resulfif');
let age;
ifagebutton.onclick = function(){
    age = ifageinput.value;
    age = Number(age);
    if(age >= 100){
        resultif.textContent = `Go and spend time with Nature, use the time you have in something memorable.`;
    }
    else if(age == 0, age <= 0){
        resultif.textContent = `Don't start lying here, you are being tracked!`;
    }
    else if(age >= 18){
        resultif.textContent = `Welcome!`;
    }
    else if(age = ''){
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