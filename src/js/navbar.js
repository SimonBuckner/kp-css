const navPages = [
    ["index", "Home", "home"],
    ["pages/hero-text", "Hero Text", "hero-text"],
    ["pages/flex-columns", "Flex Columns", "flex-columns"],
    ["pages/hero-image", "Hero Image", "hero-image"],
];

class Navbar extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        console.log("connected nav bar");
        let content = `<ul>\n`;
        navPages.forEach((item) => {
            let link = `<li><a href="\\${item[0]}.html" id="navbar__${item[2]}">${item[1]}</a></li>\n`;
            content = content + link;
        });
        content = content + `</ul>\n`;
        this.innerHTML = content
    }
}

customElements.define('nav-bar', Navbar);

function setActivePage(pageName) {
    console.log("load nav bar");
    
    let item = document.getElementById("navbar__" + pageName)
    console.log(item)
    if (item != null) {
        item.setAttribute("class", "navbar__item--active")
    }
    // let activeClass = "";
    // if (pageName === item[2]) {
    //     activeClass = "class=\"navbar__item--active\"";
    // }

}


export { setActivePage };
window.setActivePage = setActivePage;