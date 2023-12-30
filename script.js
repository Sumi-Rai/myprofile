function myfunction(){
    var x = document.getElementById("navv");
    if (x.className === "nav"){
        x.className += " responsive";
    }
    else {
        x.className = "nav";
    }
}






let currentIndex = 0;

function showSlide(index){
const slider = document.querySelector('.slider');
const totalSildes = document.querySelectorAll('.slide').length;



if(index < 0){
    index = totalSildes - 1;
}
else if (index >= totalSildes){
 index =0;   
}

currentIndex = index;
const translateValue = -index * 100 + '%';
slider.style.transform = 'translateX('+ translateValue + ')'; 
}

function prevSlide(){
showSlide(currentIndex - 1);
}
 

function nextSlide() {
showSlide(currentIndex + 1);
}


    