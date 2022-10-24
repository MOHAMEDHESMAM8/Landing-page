

//create menu bar 
//get all sections from the html file and add it by id to the navbar__list
const navMenu = document.getElementById("navbar__list");

function createMenuItems () {
  navMenu.innerHTML = "";
  sections =  document.querySelectorAll("section")
  for (section of sections){
    sectionName = section.getAttribute("data-nav");
    sectionId = section.getAttribute("id");
    const listItem = `<li><a href="#${sectionId}" class="menu__link" data-active="${sectionId}">${sectionName}</a></li>`;
    navMenu.innerHTML += listItem ;
  }
};


// function call
createMenuItems();


// I use getBoundingClientRect to get the postion of the section & test if it the current section ot not 
// then add active class to the section & active menu to the navbar
function isActive(){
  for(section of sections){
    let postion =  section.getBoundingClientRect();
    console.log(postion.top)

    if(postion.top <=250 && postion.top>= -300){
      section.classList.add('active');
      navMenu.querySelector(`[data-active=${section.getAttribute('id')}]`).classList.add("active-menu");
    }
    else{
      section.classList.remove('active');
      navMenu.querySelector(`[data-active=${section.getAttribute('id')}]`).classList.remove("active-menu");

    }
  }
}
// run th function while scrolling
document.addEventListener("scroll",isActive);

const topicon = document.getElementById("top");

// by Clicking on the top icon the page will scroll to the top smoothly
topicon.addEventListener("click", () => {
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
});



const items = document.getElementsByClassName("menu__link");

for(item of items){
  item.addEventListener("click",scrollBehavior)
}
function scrollBehavior(e){
    e.preventDefault();
    target = this.getAttribute("href");
    document.querySelector(target).scrollIntoView({
      behavior:"smooth",
    });
}





