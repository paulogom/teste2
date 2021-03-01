// scripts para o carrossel

		var slideIndex = 0;
		mostraSlides(slideIndex);

		function acrescentaSlides(n) {
		  mostraSlides(slideIndex = slideIndex + n);
		}

		function mostraSlides(n){
			var slides = document.getElementsByClassName("slide");

			if(n>=slides.length){slideIndex=0;}
			if(n<0){slideIndex=slides.length-1;}

			for(i=0;i<slides.length;i++){
				slides[i].style.display = "none";
			}
			
			slides[slideIndex].style.display = "block";
		}