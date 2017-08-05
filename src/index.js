import Headroom from 'headroom.js';
import '../styles/global.css';
import './hero.js';


const header = document.querySelector(".header");
// construct an instance of Headroom, passing the element

if(header){
const headroom = new Headroom(header, {
        tolerance: 5,
        offset : 205,
        classes: {
          initial: "animated",
          pinned: "slideDown",
          unpinned: "slideUp"
        }
    });

headroom.init();
}