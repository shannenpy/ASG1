/*----- nav menu -----*/
let mainNav = document.createElement("nav")
mainNav.classList.add("main-navigation")
document.body.appendChild(mainNav)
mainnav = document.querySelector(".main-navigation")
let logo = document.createElement("img")
logo.setAttribute("src", "images/logo.png")
logo.setAttribute("alt", "logo of The Digital Zone")
logo.setAttribute("id", "logo")
mainnav.append(logo)
let company = document.createElement("label")
mainnav.append(company)
const compName = `<a href = "index.html" id="name" class="vertical-center">The Digital Zone</a>`
company.innerHTML = compName
let navList = document.createElement("ul")
navList.classList.add("nav-ul")
mainnav.append(navList)
const navContent = 
`<li class="nav-li"><a href = "product.html" class="nav-a">Products & Services</a></li>
<li class="nav-li"><a href = "review.html" class="nav-a">Reviews</a></li>
<li class="nav-li"><a href = "pricing.html" class="nav-a">Pricings</a></li>
<li class="nav-li"><a href = "contact.html" class="nav-a">Contact Us</a></li>`
navList.innerHTML = navContent

let navSmall = document.createElement("label")
navSmall.setAttribute("id", "icon")
mainnav.append(navSmall)
const navSmallContent = `<i class="fas fa-bars" style="margin-right:20px;"></i>`
navSmall.innerHTML = navSmallContent

// toggling menu
let navSection = document.createElement("section")
mainnav.append(navSection)
navSmall.innerHTML = navSmallContent


/* ----- Cart + wishlist -----*/

/*----- products -----*/
// powerpoint
let powerPoint = document.createElement("section")
powerPoint.setAttribute("id", "ppt-template")
document.body.append(powerPoint)
let pptHeading = document.createElement("h2")
pptHeading.classList.add("product-headings")
powerPoint.append(pptHeading)
var pptHead = `PowerPoints`
pptHeading.innerHTML = pptHead
let templatesPpt = document.createElement("ul")
templatesPpt.classList.add("templates-class")
powerPoint.append(templatesPpt)
var pptList =
`<li><a href="templates/ppt templates/ppt1/pdf1.pdf" target="blank"><img class="ppt-list1" src="templates/ppt templates/ppt1/1.png">
<img class="ppt-list1" src="templates/ppt templates/ppt1/2.png">
<img class="ppt-list1" src="templates/ppt templates/ppt1/3.png"></a></li>

<li><a href="templates/ppt templates/ppt2/pdf2.pdf" target="blank"><img class="ppt-list2" src="templates/ppt templates/ppt2/1.png">
<img class="ppt-list2" src="templates/ppt templates/ppt2/2.png">
<img class="ppt-list2" src="templates/ppt templates/ppt2/3.png"></a></li>

<li><a href="templates/ppt templates/ppt3/pdf3.pdf" target="blank"><img class="ppt-list3" src="templates/ppt templates/ppt3/1.png">
<img class="ppt-list3" src="templates/ppt templates/ppt3/2.png">
<img class="ppt-list3" src="templates/ppt templates/ppt3/3.png"></a></li>`
templatesPpt.innerHTML = pptList


var myIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("ppt-list1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 5000);
}

var myIndex1 = 0;
carousel1();
function carousel1() {
  var i;
  var x = document.getElementsByClassName("ppt-list2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex1++;
  if (myIndex1 > x.length) {myIndex1 = 1}
  x[myIndex1-1].style.display = "block";
  setTimeout(carousel1, 5000);
}

var myIndex2 = 0;
carousel2();
function carousel2() {
  var i;
  var x = document.getElementsByClassName("ppt-list3");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex2++;
  if (myIndex2 > x.length) {myIndex2 = 1}
  x[myIndex2-1].style.display = "block";
  setTimeout(carousel2, 5000);
}


// class templateSlideshow {
//     constructor (templateClass) {
//         this.templateClass = templateClass
//     }
//     carousel() {
//         var myIndex = 0;
//         carousel();
//         var i;
//         var x = document.getElementsByClassName(this.templateClass);
//         for (i = 0; i < x.length; i++) {
//             x[i].style.display = "none";
//         }
//         myIndex++;
//         if (myIndex > x.length) {myIndex = 1}
//         x[myIndex-1].style.display = "block";
//         setTimeout(carousel, 2000);
// }
// }

// var firstPpt = document.querySelector(".ppt-list1")
// let ppt1 = new templateSlideshow(firstPpt)

// logo
let logoTemp = document.createElement("section")
logoTemp.setAttribute("id", "logo-template")
document.body.append(logoTemp)
let logoHeading = document.createElement("h2")
logoHeading.classList.add("product-headings")
logoTemp.append(logoHeading)
var logoHead = `Logos`
logoHeading.innerHTML = logoHead
let templatesLogo = document.createElement("ul")
templatesLogo.classList.add("templates-class")
logoTemp.append(templatesLogo)
var logoList =
`<li><a href="templates/logo templates/logo1/pdf1.pdf" target="blank"><img class="logoTemps" src="templates/logo templates/logo1/1.png"></a></li>
<li><a href="templates/logo templates/logo2/pdf2.pdf" target="blank"><img class="logoTemps" src="templates/logo templates/logo2/1.png"></a></li>
<li><a href="templates/logo templates/logo3/pdf3.pdf" target="blank"><img class="logoTemps" src="templates/logo templates/logo3/1.png"></a></li>
<li><a href="templates/logo templates/logo4/pdf4.pdf" target="blank"><img class="logoTemps" src="templates/logo templates/logo4/1.png"></a></li>
<li><a href="templates/logo templates/logo5/pdf5.pdf" target="blank"><img class="logoTemps" src="templates/logo templates/logo5/1.png"></a></li>`
templatesLogo.innerHTML = logoList

// Instagram Stories
let insta = document.createElement("section")
insta.setAttribute("id", "insta-template")
document.body.append(insta)
let instaHeading = document.createElement("h2")
instaHeading.classList.add("product-headings")
insta.append(instaHeading)
var instaHead = `Instagram Stories`
instaHeading.innerHTML = instaHead
let templatesInsta = document.createElement("ul")
templatesInsta.classList.add("templates-class")
insta.append(templatesInsta)
var instaList =
`<li><a href="templates/insta templates/insta1/pdf1.pdf" target="blank"><img class="insta" src="templates/insta templates/insta1/1.png"></a></li>
<li><a href="templates/insta templates/insta2/pdf2.pdf" target="blank"><img class="insta" src="templates/insta templates/insta2/1.png"></a></li>
<li><a href="templates/insta templates/insta3/pdf3.pdf" target="blank"><img class="insta" src="templates/insta templates/insta3/1.png"></a></li>
<li><a href="templates/insta templates/insta4/pdf4.pdf" target="blank"><img class="insta" src="templates/insta templates/insta4/1.png"></a></li>
<li><a href="templates/insta templates/insta5/pdf5.pdf" target="blank"><img class="insta" src="templates/insta templates/insta5/1.png"></a></li>`
templatesInsta.innerHTML = instaList

// Instagram Stories
let info = document.createElement("section")
info.setAttribute("id", "info-template")
document.body.append(info)
let infoHeading = document.createElement("h2")
infoHeading.classList.add("product-headings")
info.append(infoHeading)
var infoHead = `Infographics`
infoHeading.innerHTML = infoHead
let templatesInfo = document.createElement("ul")
templatesInfo.classList.add("templates-class")
info.append(templatesInfo)
var infoList =
`<li><a href="templates/info templates/info1/pdf1.pdf" target="blank"><img class="info" src="templates/info templates/info1/1.png"></a></li>
<li><a href="templates/info templates/info2/pdf2.pdf" target="blank"><img class="info" src="templates/info templates/info2/1.png"></a></li>
<li><a href="templates/info templates/info3/pdf3.pdf" target="blank"><img class="info" src="templates/info templates/info3/1.png"></a></li>
<li><a href="templates/info templates/info4/pdf4.pdf" target="blank"><img class="info" src="templates/info templates/info4/1.png"></a></li>
<li><a href="templates/info templates/info5/pdf5.pdf" target="blank"><img class="info" src="templates/info templates/info5/1.png"></a></li>`
templatesInfo.innerHTML = infoList

/* ----- services -----*/
let service = document.createElement("section")
service.setAttribute("id", "service")
document.body.append(service)
let serviceHeading = document.createElement("h2")
serviceHeading.classList.add("product-headings")
service.append(serviceHeading)
var serviceHead = `Services`
serviceHeading.innerHTML = serviceHead
let designers = document.createElement("ul")
designers.classList.add("designer-ul")
service.append(designers)

let designer1 = document.createElement("ul")
designer1.classList.add("designer")
designers.append(designer1)
var designerInfo1 = 
`
<li><strong>Aisyah Azmi</strong></li>
<li>9+ years of experience in Web and Design</li>
<li><a href="https://www.linkedin.com/in/aisyahazmi" target="blank">LinkedIn Profile</a></li>`
designer1.innerHTML = designerInfo1

let designer2 = document.createElement("ul")
designer2.classList.add("designer")
designers.append(designer2)
var designerInfo2 = 
`
<li><strong>M Ejaz Azeem Awan</strong></li>
<li>Full Stack Graphic Designer</li>
<li>All Designing Services</li>
<li><a href="https://www.linkedin.com/in/m-ejaz-azeem-awan-665791200" target="blank">LinkedIn Profile</a></li>`
designer2.innerHTML = designerInfo2

let designer3 = document.createElement("ul")
designer3.classList.add("designer")
designers.append(designer3)
var designerInfo3 = 
`
<li><strong>Bart Herrman</strong></li>
<li>Experienced graphic design & creative services professional</li>
<li><a href="https://www.linkedin.com/in/jbartdesign" target="blank">LinkedIn Profile</a></li>`
designer3.innerHTML = designerInfo3

let designer4 = document.createElement("ul")
designer4.classList.add("designer")
designers.append(designer4)
var designerInfo4 = 
`
<li><strong>Arriane P.</strong></li>
<li>Freelance Graphic Designer</li>
<li>Services: Logo Design, Presentation Design, Ad Design etc.</li>
<li><a href="https://www.linkedin.com/in/arrianepena" target="blank">LinkedIn Profile</a></li>`
designer4.innerHTML = designerInfo4