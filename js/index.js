const signUpDet=document.getElementById('signUpForm')
const form=document.getElementById('form')
const logInDet=document.getElementById('logInForm')
const findPet=document.getElementById('Pet-finder')

function hideForm(){
    signUpDet.style.display="none";
    logInDet.style.display="none";
}

logInDet.addEventListener('submit',(e)=>{
    e.preventDefault()
    hideForm()

    findPet.style.display="block";

})
signUpDet.addEventListener('submit',(e)=>{
    e.preventDefault()
    hideForm()

    findPet.style.display="block";

})
