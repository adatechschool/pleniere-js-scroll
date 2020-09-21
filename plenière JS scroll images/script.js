//var section1 = document.getElementById("section1");
var section1 = $("#section1")[0];
var intro = $("#intro");

window.addEventListener("scroll", changeImages)
// $("#section1").live("click", changeImages());

const heightSection1 = section1.getBoundingClientRect().height;
const premier5 = heightSection1 / 5 - (heightSection1 * 0.3);
const deuxieme5 = heightSection1 * 2 / 5 - (heightSection1 * 0.3);
const troisieme5 = heightSection1 * 3 / 5 - (heightSection1 * 0.3);
const quatrieme5 = heightSection1 * 4 / 5 - (heightSection1 * 0.3);
let distanceFromTop = -(section1.getBoundingClientRect().top);
let intro_opacity = 1;


function changeImages() {
    distanceFromTop = -(section1.getBoundingClientRect().top);

    console.log("distance: " + distanceFromTop)

    if (distanceFromTop <= premier5) {
        section1.style.backgroundImage = "url('img/cover-01.jpg')";
    } else if (distanceFromTop >= premier5 && distanceFromTop <= deuxieme5) {
        section1.style.backgroundImage = "url('img/cover-03.jpg')";
    } else if (distanceFromTop >= deuxieme5 && distanceFromTop <= troisieme5) {
        section1.style.backgroundImage = "url('img/cover-07.jpg')";
    } else if (distanceFromTop >= troisieme5 && distanceFromTop <= quatrieme5) {
        section1.style.backgroundImage = "url('img/cover-08.jpg')";
    } else if (distanceFromTop >= quatrieme5) {
        section1.style.backgroundImage = "url('img/cover-09.jpg')";
    }

    intro_opacity = 1-(distanceFromTop/(heightSection1-300));
    intro.css("opacity", intro_opacity);
    // section1.style.backgroundImage = "url('/img/cover-05.jpg')";

}


// changeImages()
