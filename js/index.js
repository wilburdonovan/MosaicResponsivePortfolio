// Solves the problem of the fixed navBar blocking content
var shiftWindow = function() { scrollBy(0, -80) };
window.addEventListener("hashchange", shiftWindow);
function load() { 
  if (window.location.hash) 
    shiftWindow(); 
}


// Functionality to add the highlighted class to navButtons
var navAbout = document.getElementById("navAbout");
var navPortfolio = document.getElementById("navPortfolio");
var navContact = document.getElementById("navContact");
var aboutY, portfolioY, contactY, windowY;
var aboutTitle = document.getElementById("aboutTitle");
var portfolioTitle = document.getElementById("portfolioTitle");
var contactTitle = document.getElementById("contactTitle");

function addScrolledOver (buttonToHighlight, otherBtn1, otherBtn2) {
  buttonToHighlight.classList.add("scrolledOver");
  otherBtn1.classList.remove("scrolledOver");
  otherBtn2.classList.remove("scrolledOver");
} 

function setYValues () {
  var temp = aboutTitle.getBoundingClientRect();
  aboutY = temp.top;
  temp = portfolioTitle.getBoundingClientRect();
  portfolioY = temp.top - 75;
  temp = contactTitle.getBoundingClientRect();
  contactY = temp.top -75;
}

setYValues(); // Initial call

window.addEventListener("scroll", function () {
  windowY = window.pageYOffset;
  
  if (windowY >= 0 && windowY < portfolioY) {
    addScrolledOver(navAbout, navPortfolio, navContact);
  }
  
  if (windowY >= portfolioY && windowY < contactY) {
     addScrolledOver(navPortfolio, navAbout, navContact);
  }
  
  if (windowY >= contactY) {
     addScrolledOver(navContact, navAbout, navPortfolio);
  }
});