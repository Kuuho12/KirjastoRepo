const body = document.querySelector("body");
const html = document.querySelector("html");
const langSelect = document.querySelector(".language-selector")
const suodattimetButton = document.querySelector(".suodattimet-button")
const genreButton = document.querySelector(".genre-button")
const genreOptions = document.querySelectorAll(".genre-dropdown .dropdown-item")
const genreSuodatin = document.querySelectorAll("#suodattimet label")
const kirjailijaSearchBar = document.querySelector("#kirjailijaInput")
const loginButton = document.querySelector(".login-button")
const searchBar = document.querySelector(".kirjahaku input")
const openingHours = document.querySelector(".opening-hours")
const newsletter = document.querySelector(".newsletter a")

const genreOptionsFi = ["Fantasiakirjat", "Kaunokirjallisuus", "Tietokirjat", "Kauhukirjat", "Lastenkirjat", "Nuortenkirjat", "Englanninkieliset kirjat", "E-kirjat", "Äänikirjat"]
const genreOptionsEn = ["Fantasy books", "Fiction", "Non-fiction", "Horror books", "Children's books", "Young adult books", "English books", "E-books", "Audiobooks"]
const genreSuodatinFi = ["Fantasia", "Kaunokirjallisuus", "Tietokirjallisuus", "Kauhu", "Lastenkirjat", "Nuortenkirjat", "Englanninkielinen", "E-kirjat", "Äänikirjat"]
const genreSuodatinEn = ["Fantasy", "Fiction", "Non-fiction", "Horror", "For children", "For young adults", "English books", "E-books", "Audiobooks"]


langSelect.addEventListener("change", () => {
    if (html.getAttribute("lang") == "fi") {
        body.setAttribute("lang", "en");
        html.setAttribute("lang", "en");
        genreButton.textContent = "Genres"
        loginButton.textContent = "Login"
        suodattimetButton.textContent = "Filters"
        searchBar.setAttribute("placeholder", "Search books...")
        kirjailijaSearchBar.setAttribute("placeholder", "Search a writer...")
        openingHours.textContent = "Opening hours: Mon-Fri 9-18, Sat 10-16, Sun closed"
        newsletter.textContent = "Subscribe to our newsletter"
        genreOptions.forEach((link, index) => link.textContent = genreOptionsEn[index]);
        genreSuodatin.forEach((label, index) => {
            const textNode = Array.from(label.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
            if (textNode) textNode.nodeValue = genreSuodatinEn[index];
        });
        kieli = 1
        priceRange.textContent = `${labelTekstit[kieli][0]}: ${hintaMin}–${hintaMax} €`;
        vuosiRange.textContent = `${labelTekstit[kieli][1]}: ${vuosiMin}–${vuosiMax}`;
        console.log("english");
    } else {
        body.setAttribute("lang", "fi");
        html.setAttribute("lang", "fi");
        genreButton.textContent = "Genret"
        loginButton.textContent = "Kirjaudu"
        suodattimetButton.textContent = "Suodattimet"
        searchBar.setAttribute("placeholder", "Etsi kirjoja...")
        kirjailijaSearchBar.setAttribute("placeholder", "Etsi kirjailijaa...")
        openingHours.textContent = "Aukioloajat: Ma-Pe 9-18, La 10-16, Su suljettu"
        newsletter.textContent = "Tilaa uutiskirjeemme"
        genreOptions.forEach((link, index) => link.textContent = genreOptionsFi[index]);
        genreSuodatin.forEach((label, index) => {
            const textNode = Array.from(label.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
            if (textNode) textNode.nodeValue = genreSuodatinFi[index];
        });
        kieli = 0
        priceRange.textContent = `${labelTekstit[kieli][0]}: ${hintaMin}–${hintaMax} €`;
        vuosiRange.textContent = `${labelTekstit[kieli][1]}: ${vuosiMin}–${vuosiMax}`;
        console.log("finnish");
    }
});