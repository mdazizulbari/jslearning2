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
