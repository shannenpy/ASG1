// nav menu
let mainNav = document.createElement("nav")
mainNav.classList.add("main-navigation")
document.body.appendChild(mainNav)
let navList = document.createElement("ul")
navList.classList.add("nav-list")
document.querySelector(".main-navigation").append(navList)
const navContent = 
`<li class="nav-content"><a href = "homepage.html">The Digital Zone</a></li>
<li class="nav-content"><a href = "account.html">Login/ Signup</a></li>
<li class="nav-content"><a href = "product.html">Products & Services</a></li>
<li class="nav-content"><a href = "contact.html">Contact Us</a></li>
<li class="nav-content"><a href = "review.html">Reviews</a></li>
<li class="nav-content"><a href = "pricing.html">Pricings</a></li>`
navList.innerHTML = navContent

/*----- packages -----*/
let packages = document.createElement("section")
packages.classList.add("packages")
document.body.appendChild(packages)

let packagesList = document.createElement("ul")

//free
let freePack = document.createElement("div")
freePack.classList.add("freePack")