function countdown() { //Created function countdown().
    var seconds = document.getElementById("seconds").value; //Created variable seconds and grabbed Id of "seconds" and got the value.

    function tick() { //Created function tick(). 
        seconds = seconds - 1; // expression for function tick() seconds = seconds - 1.
        timer.innerHTML = seconds; //Connects HTML to create timer.
        var time = setTimeout(tick, 1000); //Created variable time with statement that pauses for 1,000 milliseconds.
        if (seconds == -1) { //if statement with condition (seconds == -1).
            alert("Time's up!"); //alert with string for when timer is done.
            clearTimeout(time); //Clears an existing timer.
            timer.innerHTML = ""; //timer connected to HTML.
        }
    }
    tick(); //Calls tick().
}

var slideIndex = 1; //Created variable slideIndex with value of 1.
showSlides(slideIndex); //Calls showslides(slideIndex).

// Next/previous controls 
function plusSlides(n) { //Created function plusSlides(n)
  showSlides(slideIndex += n); //Expression for showSlides(slideIndex += n).
}

// Thumbnail image controls
function currentSlide(n) { //Created function currentSlide(n).
  showSlides(slideIndex = n); //Expression for showSlides(slideIndex = n).
}

function showSlides(n) { //Created function showSlides(n).
  var i; //Created variable i.
  var slides = document.getElementsByClassName("mySlides"); //Created variable slides
  var dots = document.getElementsByClassName("dot"); //Created variable dots
  if (n > slides.length) {slideIndex = 1} //if statement created with condition (n > slides.length)
  if (n < 1) {slideIndex = slides.length} //if statement created with condition (n < 1)
  for (i = 0; i < slides.length; i++) { //for statement created with condition (i = 0; i < slides.length; i++).
      slides[i].style.display = "none"; //for statement condition
  }
  for (i = 0; i < dots.length; i++) { //for statement with condition (i = 0; i < dots.length; i++).
      dots[i].className = dots[i].className.replace(" active", ""); //for statement condition
  }
  slides[slideIndex-1].style.display = "block"; //for statement condition.
  dots[slideIndex-1].className += " active"; //for statement condition.
}

var slideIndex = 0; //Created variable slideIndex with value of 0.
showSlides(); //Calls first showSlides().

function showSlides() { //Created function showSlides().
  var i; //Created variable "i".
  var slides = document.getElementsByClassName("mySlides"); //Created variable slides
  for (i = 0; i < slides.length; i++) { //for statement with condition (i = 0; i < slides.length; i++).
    slides[i].style.display = "none"; //condition included within for statement
  }
  slideIndex++; //
  if (slideIndex > slides.length) {slideIndex = 1} //if statement with condition (slideIndex > slides.length).
  slides[slideIndex-1].style.display = "block"; //condition included within if statement.
  setTimeout(showSlides, 2000); // Change image every 2 seconds.
}