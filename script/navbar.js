console.log("navBar.js");

const DOM_NAV_BAR = document.querySelector('#navBar');
// const DOM_OPEN_BTN = document.querySelector('#openBtn');
// const DOM_CLOSE_BTN = document.querySelector('#closeBtn');
const DOM_NAV = document.querySelector("nav");
const DOM_UL = document.querySelector("ul");

console.log();


var addA, addSpanGroupe, addSpanUn, addSpanDeux, addSpanTrois, addALogo, addImgLogo;

window.onload = loadLogoNavbar;


function init(){
    // console.log("Fonction : Init");
    
    addA = document.createElement("a");
    addA.setAttribute("href","#");
    addA.setAttribute("id","openBtn");
    addA.setAttribute("onclick","openNav()");
    DOM_NAV.appendChild(addA);

    addSpanGroupe = document.createElement("span");
    addSpanGroupe.setAttribute("class","burgerIconeOpen");
    addA.appendChild(addSpanGroupe);

    addSpanUn = document.createElement("span");
    addSpanGroupe.appendChild(addSpanUn);

    addSpanDeux = document.createElement("span");
    addSpanGroupe.appendChild(addSpanDeux);

    addSpanTrois = document.createElement("span");
    addSpanGroupe.appendChild(addSpanTrois);
}

// DOM_OPEN_BTN.onclick = openNav;
// DOM_CLOSE_BTN.onclick = closeNav;

function openNav(){
    DOM_NAV_BAR.classList.add("active");

    addA.remove();

    addA = document.createElement("a");
    addA.setAttribute("href","#");
    addA.setAttribute("id","openBtn");
    addA.setAttribute("onclick","closeNav()");
    DOM_NAV.appendChild(addA);

    addSpanGroupe = document.createElement("span");
    addSpanGroupe.setAttribute("class","burgerIconeClose");
    addA.appendChild(addSpanGroupe);

    addSpanUn = document.createElement("span");
    addSpanUn.setAttribute("class","un");
    addSpanGroupe.appendChild(addSpanUn);

    addSpanDeux = document.createElement("span");
    addSpanDeux.setAttribute("class","deux");
    addSpanGroupe.appendChild(addSpanDeux);
}

function closeNav(){
    DOM_NAV_BAR.classList.remove("active");

    console.log("test2");
    addA.remove();
    init();
}

function loadLogoNavbar(){
    let width = window.innerWidth; 

    // Ajout du lien
    addALogo = document.createElement("a");
    addALogo.setAttribute("href","/main/index");
    addALogo.setAttribute("class","navDivImgH1");

    // Ajout de l'image
    addImgLogo = document.createElement("img");
    addImgLogo.setAttribute("src","/media/img/logoGravennes.png");
    addImgLogo.setAttribute("alt","Logo du site");
    addImgLogo.setAttribute("class","navImgLogo");
    addALogo.appendChild(addImgLogo);

    if(width <= 769){
        DOM_NAV.prepend(addALogo);
    } else if (width >= 770){
        DOM_UL.insertBefore(addALogo, DOM_UL.children[4]);
    }
}

function linkLogo(){

}

init();