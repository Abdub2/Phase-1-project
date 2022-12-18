const signUpDet=document.getElementById('signUpForm')
const form=document.getElementById('form')
const logInDet=document.getElementById('logInForm')
const findChap=document.getElementById('Chapter-finder')
const about=document.getElementById('about')
const aboutInfo=document.getElementById('aboutInfo')
const feedbackInfo=document.getElementById('feedbackInfo')
const feedback=document.getElementById('feedback')
const submit=document.getElementById('submit')
const champName=document.getElementById('chapter-name')
const numberOfAyahs=document.getElementById('number-of-ayahs')
const englishNameTranslation=document.getElementById('english-name-translation')
const ayah=document.getElementById('ayah')
const revelationType=document.getElementById('revelation-type')
const surahContainer=document.getElementById('surah-container')

feedbackInfo.style.display="none";
aboutInfo.style.display="none";
findChap.style.display="none";

function hideForm(){
    signUpDet.style.display="none";
    logInDet.style.display="none";

}

logInDet.addEventListener('submit',(e)=>{
    e.preventDefault()
    hideForm()
    findChap.style.display="block";


})
signUpDet.addEventListener('submit',(e)=>{
    e.preventDefault()
    hideForm()

    findChap.style.display="block";

})
about.addEventListener('click',()=> {
    hideForm()

    findChap.style.display="none";
    feedbackInfo.style.display="none";
    aboutInfo.style.display="block";
    surahContainer.style.display="none";


})
feedback.addEventListener('click',()=>{
    hideForm()
    findChap.style.display="none";
    surahContainer.style.display="none";
    aboutInfo.style.display="none";
    feedbackInfo.style.display="block"

})

submit.addEventListener('click',() =>{

    hideForm()
    function renderOneSurah(data){
        champName.innerText=`Arabic Name: ${data.data.englishName}`
        numberOfAyahs.innerText=`Number of Verses: ${data.data.numberOfAyahs}`
        englishNameTranslation.innerText=`English Name Translation: ${data.data.englishNameTranslation}`
        revelationType.innerText=`Revelation Type: ${data.data.revelationType}`

    }

    const input=document.getElementById("search")

    fetch(`https://api.alquran.cloud/v1/surah/${input.value}`)
    .then((res) => res.json())
    .then((data => renderOneSurah(data)))

})

