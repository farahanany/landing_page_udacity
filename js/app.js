/*** Comments should be present at the beginning of each procedure and class.*Great to have comments before crucial code sections within the procedure.*/

  //I added more sections because it's required to have at least 4 sections so I wannted to put 6 sections in the html file
const navList = document.getElementById('navbar__list');
const sections = Array.from(document.querySelectorAll('section'));

/*
Navigation, I used append, appendChild, and innerHTML to built the items in the navigation bar to correspond to the section.
*/
function createListItem() {
  for (sec of sections) {

     secName=sec.getAttribute('data-nav');
     secLink=sec.getAttribute('id');
     listItem=document.createElement('li');
     listItem.innerHTML=`<a class='menu__link' href='#${secLink}'>${secName}</a>`;
     navList.appendChild(listItem);


  }
}
createListItem();
/*Section Active State- I used a function so when I scroll and view the sectionn I'm hoverinng over it's shown. */
window.onscroll = function() {
  document.querySelectorAll("section").forEach(function(active) {

    if (
      active.getBoundingClientRect().top >= -400 &&
      active.getBoundingClientRect().top <= 165
    ) {
      active.classList.add("your-active-class");
    } else {
      active.classList.remove("your-active-class");

    }


  });


};
/*
Scroll to Anchor--When clicking on an item from the navigation menu,the link should scroll  to the appropriate section.
*/
navList.addEventListener("click", (event) => {
  toSec.preventDefault();
  if (event.target.dataset.nav) {
    document
    .getElementById(`${event.target.dataset.nav}`)
    .scrollIntoView({behavior: "smooth"});
    setTimeout(() => {
      location.hash = `${event.target.dataset.nav}`;
    }, 200);

  }
});
