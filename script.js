/* give id to element: element.setAttribute('id', 'name') */

// nav menu
let mainNav = document.createElement("nav")
mainNav.setAttribute("class", "main-navigation")
document.body.appendChild(mainNav)
let navList = document.createElement("ul")
navList.classList.add("nav-list")
document.querySelector(".main-navigation").append(navList);
const navContent = 
`<li class="nav-content"><a href = "#">The Digital Zone</a></li>
<li class="nav-content"><a href = "#">Login/ Signup</a></li>
<li class="nav-content"><a href = "#">Products & Services</a></li>
<li class="nav-content"><a href = "#">Contact Us</a></li>
<li class="nav-content"><a href = "#">Reviews</a></li>
<li class="nav-content"><a href = "#">Pricings</a></li>`
navList.innerHTML = navContent

let productServices = document.createElement('h2')
productServices.classList.add("products-services")