
// counter to count  the  number of the new section
let counter = 0;
const createSection = () => {
  counter++;
  const section = `
    <section id="section${counter}" data-nav="Section ${counter}">
      <div class="landing__container">
        <h2>Section ${counter}</h2>

        <h3>Hello, this is the body for section ${counter} .</h3>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga voluptatem quo perspiciatis atque totam optio earum quasi ullam laudantium, dicta pariatur maiores animi aut perferendis reprehenderit, nam similique dolorem.</p>
        <p>doloremque id culpa asperiores voluptas pariatur quasi aspernatur omnis corrupti. Quas in dolore numquam accusantium eos, voluptates magni blanditiis tempore doloremque harum ex nostrum distinctio neque. Iure culpa, dicta placeat quam dolor fugit, blanditiis assumenda neque aliquid quos, quibusdam consequatur. Porro magni fugit iste corrupti dicta esse quibusdam animi doloremque libero eum, cumque perspiciatis hic aspernatur iure autem necessitatibus et enim architecto illo atque doloribus asperiores id totam! Id maxime velit a earum harum consequatur minus similique, perspiciatis mollitia molestiae illum eligendi magnam quis!</p>
      
        </div>
    </section>`;
  document.querySelector("main").insertAdjacentHTML("beforeend", section);
};
//create maneu bar 
//get all sections from the html file and add it by id to the navbar__list
const navBar = document.getElementById("navbar__list");
const createNavItems = () => {
  navBar.innerHTML = "";
  document.querySelectorAll("section").forEach((section) => {
    const listItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
    navBar.insertAdjacentHTML("beforeend", listItem);
  });
};

// create 5 section & create the nav bar items
for (let i = 1; i < 6; i++) createSection();
createNavItems();


const topicon = document.getElementById("top");
const header = document.querySelector(".page__header");

// by Clicking on the top icon the page will scroll to the top smoothly
topicon.addEventListener("click", () => {
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
});



//the header with disapear if the user stop scroll for 5 seconds & appear again when scrolling.
//make the top icon appear if the user scroll more than 900
let isScrolling;
document.onscroll = () => {
  header.style.display = "block"
  clearTimeout(isScrolling)
   isScrolling = setTimeout(() => {
    header.style.display = "none";
  }, 5000);

  window.scrollY > 900 ? (topicon.style.display = "block"): (topicon.style.display = "none");
};





// I use getBoundingClientRect to test the postion of the section and get the current section on the viewport
//then add active class to the section & active menu to the navbar
window.onscroll = function() {
	document.querySelectorAll("section").forEach(function(active) {
    let activeMenuItem = navBar.querySelector(`[data-nav=${active.id}]`);
    if(active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150){

      active.classList.add("active");
      activeMenuItem.classList.add("active-menu");

    }
    else{
      active.classList.remove("active");
      activeMenuItem.classList.remove("active-menu");
    }
	});
}



navBar.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.dataset.nav) {
    document
      .getElementById(`${event.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      location.hash = `${event.target.dataset.nav}`;
    }, 200);
  }
});


