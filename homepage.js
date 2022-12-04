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
`<li class="nav-li"><a href = "account.html" class="nav-a">Login/ Signup</a></li>
<li class="nav-li"><a href = "product.html" class="nav-a">Products & Services</a></li>
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


/*----- homepage -----*/
let homePage = document.createElement("div")
homePage.classList.add("homepage")
document.body.appendChild(homePage)
var homepage = document.querySelector(".homepage")

// products & services
let productServices = document.createElement('section')
productServices.classList.add("homepage-content")
productServices.setAttribute("id", "products-services")
homepage.append(productServices)
var productServicesHeading = `<h2><a href="product.html" class="homepage-links">Products</a></h2>`
productServices.innerHTML = productServicesHeading
let productList = document.createElement("ul")
productServices.append(productList)
var productListContent =
`<li></li>
<li></li>
`
productList.innerHTML = productListContent

// pricing
let pricing = document.createElement("section")
pricing.classList.add("homepage-content")
pricing.setAttribute("id", "pricing")
homepage.append(pricing)
var pricingHeading = `<h2><a href="pricing.html" class="homepage-links">Pricings</a></h2>`
pricing.innerHTML = pricingHeading
let pricingContentDiv = document.createElement("div")
pricingContentDiv.classList.add("pricing-content")
pricing.append(pricingContentDiv)
var pricingContent =
`<p style="color:red; font-weight:bold">Most Popular!!</p>
<p>Full access with <strong>yearly</strong> subscription at only <strong>$149</strong></p>`
pricingContentDiv.innerHTML = pricingContent

// contact us
let contact = document.createElement("section")
contact.classList.add("homepage-content")
contact.setAttribute("id", "contact")
homepage.append(contact)
var contactHeading = `<h2><a href="contact.html" class="homepage-links">Contact Us</a></h2>`
contact.innerHTML = contactHeading
let contactContentList = document.createElement("ul")
contact.append(contactContentList)
var contactContent = 
`<li class="contact-content">Tel: 67836755</li>
<li class="contact-content">Email: queries@tdz.com</li>
<li class="contact-content">Instagram: TheDigitalZone</li>`
contactContentList.innerHTML = contactContent

// pricing + contact table
let homeTable = document.createElement("table")
homeTable.classList.add("home-table")
homepage.append(homeTable)
let tableRow = document.createElement("tr")
homeTable.append(tableRow)
let tableData1 = document.createElement("td")
tableData1.classList.add("table-data")
tableRow.append(tableData1)
tableData1.append(pricing)
let tableData2 = document.createElement("td")
tableData2.classList.add("table-data")
tableRow.append(tableData2)
tableData2.append(contact)


// reviews
let review = document.createElement('section')
review.classList.add("homepage-content")
review.setAttribute("id", "review")
homepage.append(review)
var reviewHeading = `<h2><a href="review.html" class="homepage-links">Reviews</a></h2>`
review.innerHTML = reviewHeading
let reviewContentList = document.createElement("ul")
reviewContentList.classList.add("review-list")
review.append(reviewContentList)
var reviewContent = 
`<li class="review-content"><strong>Isobella Mckee</strong><br>This website is easy to use and has great templates. Highly recommend!</li>
<li class="review-content"><strong>Olive Wall</strong><br>Always come here for their templates when I need to start a new project.</li>
<li class="review-content"><strong>Nevaeh Coffey</strong><br>Many themes to choose from and helps me start my project easily. Strongly recommend to get!!</li>`
reviewContentList.innerHTML = reviewContent