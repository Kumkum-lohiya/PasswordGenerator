

const btn = document.getElementById('genPass');
const newPass = document.getElementById('newPass')
const slider = document.getElementById("range")
const rangeVal = document.getElementById("rangeVal")

const upperCase = document.getElementById("capLet")
const lowerCase = document.getElementById("samLet")
const numberStr = document.getElementById("number")
const symbol = document.getElementById("symbol")

const copybtn = document.getElementById("copybtn")



rangeVal.innerText = slider.value

slider.addEventListener('input',(e) =>{
    rangeVal.innerText = e.target.value;
})

btn.addEventListener('click',()=>{
    let capitalLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let smallLetter = 'abcdefghijklmnopqrstuvwxyz'
    let number = '0123456789'
    let symbolStr = '~`!@$%^&*()_-+={}[]:;|\<>,.?/'
    
    
    let finalStr ='';

    if(upperCase.checked){
        finalStr += capitalLetter;
    }
    if(lowerCase.checked){
        finalStr += smallLetter;
    }
    if(numberStr.checked){
        finalStr += number;
    }
    if(symbol.checked){
        finalStr += symbolStr;
    }

    if(finalStr === ''){
        alert("Please Select atleast one field");
    }

    let lastestPass = ''
 
    for(let i = 0;i<slider.value;i++){
        let randNum = Math.floor(Math.random() * finalStr.length);
        // latestPass += finalStr[randNum];
        lastestPass +=finalStr.charAt(randNum);
    }
    newPass.innerText = `${lastestPass}`;



})

copybtn.addEventListener('click' ,()=>{
    window.navigator.clipboard.writeText( newPass.innerText)
})

slider.style.accentColor = '#309794';



const checkBoxes = document.getElementsByClassName('checkBox');

for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].style.accentColor = '#309794'; // color set initially

    checkBoxes[i].addEventListener('click', () => {
        checkBoxes[i].style.accentColor = '#309794'; // color after click (optional)
    });
}
