/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const beforeStart = performance.now();
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
if(sections != null){
    const docFrag = document.createDocumentFragment();
    sections.forEach(function(element, i){
    const section = document.createElement('li');
    const aTag = document.createElement('a');
    aTag.setAttribute("href", "#section" + (i+1));
    aTag.setAttribute("class", "menu__link");
    aTag.textContent = "Section " + (i + 1);
    section.appendChild(aTag);
        docFrag.appendChild(section);
    })
    const mainNavList = document.querySelector('#navbar__list');
    mainNavList.appendChild(docFrag);
}

// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event
const navList = document.querySelectorAll('.menu__link');
navList.forEach(function(element, i){
    element.addEventListener('click', function(event){
        event.preventDefault();
        sections.forEach(function(section){
            section.removeAttribute("class");
        })
        sections[i].scrollIntoView({behavior: "smooth"});
        sections[i].setAttribute("class", "your-active-class")
    })
});


// Hide fixed navigation bar while not scrolling
let timer = 0;
const navHeader = document.querySelector(".page__header");
document.addEventListener('scroll',function(){
    navHeader.setAttribute("style", "position:fixed;");
    clearTimeout(timer);
    timer = setTimeout(scrollFunction, 1500);
});

function scrollFunction() {
    navHeader.setAttribute("style", "position:absolute;");
  }

// check performance time
  const afterEnd = performance.now();
  console.log((afterEnd - beforeStart) + " milliseconds")

/**
 * End Main Functions
 * Begin Events
 * 
*/


// Set sections as active
document.addEventListener('scroll', function(){
    sections.forEach(function(section, i){
        const sectionPos = section.getBoundingClientRect();
        if(sectionPos.top >= 0 && (sectionPos.bottom > 150 && sectionPos.bottom < 750)){
            navList.forEach(function(navItem){
                navItem.removeAttribute("id", "active");
            })
            navList[i].setAttribute("id", "active");
            sections.forEach(function(section1){
                section1.removeAttribute("class");
            })
            section.setAttribute("class", "your-active-class")
        }
    });
});