const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const goToNext = document.querySelector(".arrow_right");
const goToBack = document.querySelector(".arrow_left");
const dotContainer= document.querySelector(".dots");
const slideImg= document.querySelector(".banner-img");
const slideText= document.querySelector("#banner p");
let counter= 0;

//set des dots//
for (let i=0; i<slides.length; i++){
	const dot = document.createElement("div");
	dot.classList.add("dot");
    dotContainer.appendChild(dot); 
}
dotContainer.children[0].classList.add("dot_selected");


// fonction flèche droite//

goToNext.addEventListener("click", () => nextSlide());

function nextSlide() {
	counter++;
	setCounter()
	displaySlide(counter);
}
//fonction flèche gauche//

goToBack.addEventListener("click",() => prevSlide());

function prevSlide (){
	counter--;
	setCounter()
	displaySlide(counter);
}
// fonction pour afficher les slides//
function displaySlide(index) {
	const slide = slides[index];
    slideImg.src="./assets/images/slideshow/"+slide.image
	console.log('display slide : '+index);
	slideText.innerHTML=slide.tagLine;
	dotContainer.querySelector(".dot_selected").classList.remove("dot_selected")
	dotContainer.children[index].classList.add("dot_selected");
}
//fonction de calcul counter//
function setCounter(){
	if (counter>slides.length-1){
		counter=0
	}
	else if (counter<0){
		counter=slides.length-1
	}
}

