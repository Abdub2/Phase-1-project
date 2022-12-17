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


})
feedback.addEventListener('click',()=>{
    hideForm()
    aboutInfo.style.display="none";
    feedbackInfo.style.display="block"
})


submit.addEventListener('click',() =>{

    hideForm()
    function renderOneSurah(data){
        champName.innerText=`English Name: ${data.data.englishName}`
        numberOfAyahs.innerText=`Number of Verses: ${data.data.numberOfAyahs}`
        englishNameTranslation.innerText=`English Name Translation: ${data.data.englishNameTranslation}`
    }


    const input=document.getElementById("search")

    fetch(`http://api.alquran.cloud/v1/surah/${input.value}`)
    .then((res) => res.json())
    .then((data => renderOneSurah(data)))

})

