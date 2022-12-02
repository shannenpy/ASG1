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
<li class="nav-content"><a href = "review.html">Reviews</a></li>
<li class="nav-content"><a href = "pricing.html">Pricings</a></li>
<li class="nav-content"><a href = "contact.html">Contact Us</a></li>`
navList.innerHTML = navContent

// homepage
let homePage = document.createElement("div")
homePage.classList.add("homepage")
document.body.appendChild(homePage)
var homepage = document.querySelector(".homepage")

let productServices = document.createElement('h2')
productServices.classList.add("products-services")
homepage.append(productServices)
var productServicesHeading = `Products`
productServices.innerHTML = productServicesHeading

let pricing = document.createElement("section")
pricing.classList.add("pricing")
homepage.append(pricing)
var pricingHeading = `<h2>Pricings</h2>`
pricing.innerHTML = pricingHeading
var pricingContent =
`<p class="pricingContent">Most Popular!!</p>
<p class="pricingContent">Full access with <strong>yearly</strong> subscription at only <strong>$149</strong></p>`
pricing.innerHTML = pricingContent

let review = document.createElement('section')
review.classList.add("review")
homepage.append(review)
var reviewHeading = `<h2>Reviews</h2>`
review.innerHTML = reviewHeading
let reviewContentList = document.createElement("ul")
review.append(reviewContentList)
var reviewContent = 
`<li class="review-content">Isobella Mckee: This website is easy to use and has great templates. Highly recommend!</li>
<li class="review-content">Olive Wall: Always come here for their templates when I need to start a new project.</li>
<li class="review-content">Nevaeh Coffey: Many themes to choose from and helps me start my project easily. Strongly recommend to get!!</li>`
reviewContentList.innerHTML = reviewContent

let contact = document.createElement("section")
contact.classList.add("contact")
homepage.append(contact)
var contactHeading = `<h2>Contact Us</h2>`
contact.innerHTML = contactHeading
let contactContentList = document.createElement("ul")
contact.append(contactContentList)
var contactContent = 
`<li>Tel: 67836755</li>
<li>Email: queries@tdz.com</li>
<li>Instagram: TheDigitalZone</li>`
contactContentList.innerHTML = contactContent