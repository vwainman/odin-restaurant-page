import './style.css';

// do 6. https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page
// Image by <a href="https://pixabay.com/users/buffetcrush-4147660/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2009590">지원 이</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2009590">Pixabay</a>

function createDefinedElement(type, text, attributes) {
    const element = document.createElement(type);
    if (attributes) {
        for (let key of Object.keys(attributes)) {
            element.setAttribute(key, attributes[key]);
        }
    }
    element.textContent = text;
    return element;
}

function showSelectedTab(e) {
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach((link) => {
        link.classList.remove("selected");
    })
    e.target.classList.add("selected");
    main.innerHTML = getTabComponent(e.target.id).innerHTML;
}

function getTabComponent(componentId) {
    const id = componentId.toLowerCase();
    let component;
    switch (id) {
        case "about":
            component = aboutComponent();
            break;
        case "home":
            component = homeComponent();
            break;
        case "contact":
            component = contactComponent();
            break;
        default:
            console.log(id);
            throw new Error("incorrect tab ID, can only choose between id, home and contact.");
    }
    return component;
}

function headerComponent() {
    const header = document.createElement('header');
    const title = createDefinedElement('h1', 'Nostalgia', { id: "title" });
    const subtitle = createDefinedElement('h2', 'Re-experience the best meals from your childhood');
    const nav = document.createElement('nav');
    const navAbout = createDefinedElement('a', 'About', { href: "#", class: "menu-link", id: "about" });
    const navHome = createDefinedElement('a', 'Home', { href: "#", class: "menu-link selected", id: "home" });
    const navContact = createDefinedElement('a', 'Contact', { href: "#", class: "menu-link", id: "contact" });
    [navAbout, navHome, navContact].forEach((ele) => {
        ele.addEventListener("click", showSelectedTab, false);
        nav.appendChild(ele)
    });
    [title, subtitle, nav].forEach((ele) => { header.appendChild(ele) });
    return header;
}

function homeComponent() {
    const home = createDefinedElement('div', '', { id: "home" })
    const p = createDefinedElement('p', 'Take a trip down memory lane with the classics that have stood the test of time.');
    home.appendChild(p);
    return home;
}

function aboutComponent() {
    const about = createDefinedElement('div', '', { id: "about" })
    const p1 = createDefinedElement('p', "Nostalgia was born out of a desire to remind your tastebuds of simpler times.");
    about.appendChild(p1);
    return about;
}

function contactComponent() {
    const contact = createDefinedElement('div', '', { id: "contact" })
    const subTitle = createDefinedElement('h2', 'Coming soon to your location!');
    const phone = createDefinedElement('p', 'Phone: 555-555-5555')
    const email = createDefinedElement('p', 'Email: nostalgia@restaurant.com');
    contact.appendChild(subTitle);
    contact.appendChild(phone);
    contact.appendChild(email);
    return contact;
}

function footerComponent() {
    const footer = document.createElement('footer');
    const githubLink = createDefinedElement('a', '', { href: "https://github.com/vwainman", target: "_blank" });
    const fontAwesomeEle = createDefinedElement('i', '', { class: "fab fa-github" });
    githubLink.appendChild(fontAwesomeEle);
    footer.appendChild(githubLink);
    return footer;
}

const content = document.querySelector("#content");
const main = document.createElement('main');
main.innerHTML = homeComponent().innerHTML;
content.appendChild(headerComponent());
content.appendChild(main);
content.appendChild(footerComponent());