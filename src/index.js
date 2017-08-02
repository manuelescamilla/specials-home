import Headroom from 'headroom.js';
import '../styles/global.css';
import './hero.js';


const myElement = document.querySelector(".header");
// construct an instance of Headroom, passing the element
// const headroom  = new Headroom(myElement);
// // initialise
// headroom.init();


const headroom = new Headroom(document.querySelector(".header"), {
        tolerance: 5,
        offset : 205,
        classes: {
          initial: "animated",
          pinned: "slideDown",
          unpinned: "slideUp"
        }
    });
    headroom.init();