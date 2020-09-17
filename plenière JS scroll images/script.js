var section1 = document.getElementById("section1");

window.addEventListener("scroll", changeImages)


function changeImages() {
    var heightSection1 = section1.getBoundingClientRect().height;
    var distanceFromTop = -(section1.getBoundingClientRect().top);

    var premier5 = heightSection1 / 5 - (heightSection1 * 0.3);
    var deuxieme5 = heightSection1 * 2 / 5 - (heightSection1 * 0.3);
    var troisieme5 = heightSection1 * 3 / 5 - (heightSection1 * 0.3);
    var quatrieme5 = heightSection1 * 4 / 5 - (heightSection1 * 0.3);

    console.log("distance: " + distanceFromTop)

    if (distanceFromTop <= premier5) {
        section1.style.backgroundImage = "url('/img/cover-01.jpg')";
    } else if (distanceFromTop >= premier5 && distanceFromTop <= deuxieme5) {
        section1.style.backgroundImage = "url('/img/cover-03.jpg')";
    } else if (distanceFromTop >= deuxieme5 && distanceFromTop <= troisieme5) {
        section1.style.backgroundImage = "url('/img/cover-07.jpg')";
    } else if (distanceFromTop >= troisieme5 && distanceFromTop <= quatrieme5) {
        section1.style.backgroundImage = "url('/img/cover-08.jpg')";
    } else if (distanceFromTop >= quatrieme5) {
        section1.style.backgroundImage = "url('/img/cover-09.jpg')";
    }






    // section1.style.backgroundImage = "url('/img/cover-05.jpg')";

}


// changeImages()