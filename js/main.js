$('.container-slider').slick({
    dots:true,
    arrows:false,
    speed:1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay:true,
    autoplaySpeed: 3000,
    pauseOnHover:false,
    responsive: 
    [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ],
});



const inputs = document.querySelectorAll(".input");

function focusFunc(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function blurFunc(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}

	
}

inputs.forEach(input => {
	input.addEventListener("focus", focusFunc);
	input.addEventListener("blur", blurFunc);
})


/* 
    MENU MOBILE
*/

var menuBTN = document.querySelector('.items-menu-mobile i');
menuBTN.addEventListener('click',()=>{
    let itemsMenu = document.querySelector('.menu-mobile');
    if(itemsMenu.classList.contains('show')){
        itemsMenu.classList.remove('show');
        itemsMenu.classList.add('hide');
    }else{
        itemsMenu.classList.remove('hide');
        itemsMenu.classList.add('show');
    }

});

$('.menu a, footer a').click(function(){
    var href = $(this).attr('href');
    var offSetTop = $(href).offset().top;

    $('html,body').animate({'scrollTop':offSetTop});

    return false;
})

