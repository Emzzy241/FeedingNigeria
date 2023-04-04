// Importing all necessary tools to our main file(which will has been set as our entry-point file for webpack)
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import 'animate.css';
// import 'fortawesome';
// import 'fortawesome@6.2.0'


// import fontawesome from "@fortawesome/fontawesome-free/scss/fontawesome.scss";
// import regular from "@fortawesome/fontawesome-free/scss/regular.scss";
// import solid from "@fortawesome/fontawesome-free/scss/solid.scss";
// import brands from "@fortawesome/fontawesome-free/scss/brands.scss";

// importing the all.css and all.js to enable me to use social media icons
import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";

// Importing all of my app-images

import jsBadgeImg from "./assets/images/js-badge.svg";
import appImg from "./assets/images/FeedingNigeriaFoodLogo.png";
import  founderImage from "./assets/images/me.jpg";
import  kidsImage from "./assets/images/childrenHands.jpg";
import  osunImage from "./assets/images/osun1.jpg";
import  nassarawaImage from "./assets/images/nassarawa.jpg";
import  ilorinImage from "./assets/images/Hunger.jpg";
import  bornoImage from "./assets/images/borno.jpg";
import  naruwaImage from "./assets/images/naruwa.jpg";
import  ogbomosoImage from "./assets/images/ogbomoso.jpg";
import  awuluImage from "./assets/images/awuluPeople.jpg";
import  echiImage from "./assets/images/echi.jpg";



// importing font-awesome into my project
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
// import { facebookLogo } from "@fortawesome/fontawesome-common-types/attribution";
// import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
// import { faInfinity } from "@fortawesome/free-solid-svg-icons/faInfinity";


library.add(faChevronLeft);
library.add(faChevronRight);
// library.add(facebookLogo);
// library.add(faBars);
// library.add(faInfinity);


dom.watch();
// Note: without dom.watch(), automatic replacement of your Font Awesome icons won’t work in the rendered page!


$(document).ready(()=>{
    let myAppImg = $(".appImg");
    myAppImg.attr("href", appImg);

    // let myHeroImg = $("#hero");
    // myHeroImg.background(linear-gradient(to right, rgba(115, 155, 39, 0.6), rgba(20, 54, 1, 0.4)), url("../assets/images/js-badge.svg")center top no-repeat);

    let showMyImage = $("#teamImg1");
    showMyImage.attr("src", founderImage);

    let kidImg = $("#img2");
    kidImg.attr("src", kidsImage);

    let osunImg = $("#img1");
    osunImg.attr("src", osunImage);

    let nassarawaImg = $("#img3");
    nassarawaImg.attr("src", nassarawaImage);

    let ilorinImg = $("#img4");
    ilorinImg.attr("src", ilorinImage);

    let bornoImg = $("#img5");
    bornoImg.attr("src", bornoImage);

    // iMAGES FOR OUR finished projects

    let naruwaImg = $("#finImg1");
    naruwaImg.attr("src", naruwaImage);

    let ogbomosoImg = $("#finImg2");
    ogbomosoImg.attr("src", ogbomosoImage);

    let awuluImg = $("#finImg3");
    awuluImg.attr("src", awuluImage);

    let echiImg = $("#finImg4");
    echiImg.attr("src", echiImage);


});