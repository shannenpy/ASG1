/* give id to element: element.setAttribute('id', 'name') */

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

// homepage
let homePage = document.createElement("section")
homePage.classList.add("homepage")
document.body.appendChild(homePage)
var homepage = document.querySelector(".homepage")

let productServices = document.createElement('h2')
productServices.classList.add("products-services")
homepage.append(productServices)
var productServicesContent = `Products & Services`
productServices.innerHTML = productServicesContent

let contact = document.createElement("h2")
contact.classList.add("contact")
homepage.append(contact)
var contactContent = `Contact Us`
contact.innerHTML = contactContent

let pricings = document.createElement("h2")
pricings.classList.add("pricings")
homepage.append(pricings)
var pricingsContact = `Pricings`
pricings.innerHTML = pricingsContact

let reviews = document.createElement('h2')
reviews.classList.add("reviews")
homepage.append(reviews)
var reviewsContent = `Reviews`
reviews.innerHTML = reviewsContent