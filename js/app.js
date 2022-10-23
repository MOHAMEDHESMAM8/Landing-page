

//create menu bar 
//get all sections from the html file and add it by id to the navbar__list
navMenu = document.getElementById("navbar__list");

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


//function to add sections dynamiclly 
function addSections (num) {

  for (var next = 1; next < num; next++){

    var section = `
    <section id="section${next}" data-nav="Section ${next}">
      <div class="landing__container">
        <h2>Section ${next}</h2>

        <h3>Hello, this is the body for section ${next} .</h3>
      
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga voluptatem quo perspiciatis atque totam optio earum quasi ullam laudantium, dicta pariatur maiores animi aut perferendis reprehenderit, nam similique dolorem.</p>
        <p>doloremque id culpa asperiores voluptas pariatur quasi aspernatur omnis corrupti. Quas in dolore numquam accusantium eos, voluptates magni blanditiis tempore doloremque harum ex nostrum distinctio neque. Iure culpa, dicta placeat quam dolor fugit, blanditiis assumenda neque aliquid quos, quibusdam consequatur. Porro magni fugit iste corrupti dicta esse quibusdam animi doloremque libero eum, cumque perspiciatis hic aspernatur iure autem necessitatibus et enim architecto illo atque doloribus asperiores id totam! Id maxime velit a earum harum consequatur minus similique, perspiciatis mollitia molestiae illum eligendi magnam quis!</p>
      
        </div>
    </section>`;
    document.querySelector("main").insertAdjacentHTML("beforeend", section);

    }
};



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


// functions call
addSections(6);
createMenuItems();

