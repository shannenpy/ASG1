// nav menu
let mainNav = document.createElement("nav")
mainNav.classList.add("main-navigation")
document.body.appendChild(mainNav)
mainnav = document.querySelector(".main-navigation")
let logo = document.createElement("img")
logo.setAttribute("src", "/images/logo.png")
logo.setAttribute("alt", "logo of The Digital Zone")
logo.setAttribute("id", "logo")
mainnav.append(logo)
let company = document.createElement("label")
mainnav.append(company)
const compName = `<a href = "/index.html" class="name">The Digital Zone</a>`
company.innerHTML = compName
let navList = document.createElement("ul")
navList.classList.add("nav-list")
mainnav.append(navList)
const navContent = 
`<li class="nav-content"><a href = "/account.html" class="nav-a">Login/ Signup</a></li>
<li class="nav-content"><a href = "/product.html" class="nav-a">Products & Services</a></li>
<li class="nav-content"><a href = "/review.html" class="nav-a">Reviews</a></li>
<li class="nav-content"><a href = "/price/pricing.html" class="nav-a">Pricings</a></li>
<li class="nav-content"><a href = "/contact.html" class="nav-a">Contact Us</a></li>`
navList.innerHTML = navContent

/*----- packages -----*/
let packages = document.createElement("div")
packages.classList.add("packages")
document.body.appendChild(packages)

let packagesList = document.createElement("ul")
packagesList.classList.add("packages-list")
packages.append(packagesList)
var packType =
`<li id="free-pack" class="pack-type">Free</li>
<li id="month-pack" class="pack-type">Monthly</li>
<li id="year-pack" class="pack-type">Yearly</li>`
packagesList.innerHTML = packType

// free
let freeInfoList = document.createElement("ul")
freeInfoList.setAttribute("id", "free-info-list")
document.querySelector("#free-pack").append(freeInfoList)
var freeInfo = 
`<li>Download any 3 templetes for free</li>
<li>For the first time you engage a designer, pay without platform fee</li>
<li>Subscribe to our plans for full access to any template`
freeInfoList.innerHTML = freeInfo

// monthly
let monthInfoList = document.createElement("ul")
monthInfoList.setAttribute("id", "month-info-list")
document.querySelector("#month-pack").append(monthInfoList)
var monthInfo = 
`<li>Pay $20 monthly</li>
<li>Cancel anytime you want</li>
<li>Full access to any template</li>
<li>Platform fee charged when you engage a designer</li>`
monthInfoList.innerHTML = monthInfo

// yearly
let yearInfoList = document.createElement("ul")
yearInfoList.setAttribute("id", "year-info-list")
document.querySelector("#year-pack").append(yearInfoList)
var yearInfo = 
`<li>Pay $149 yearly</li>
<li>Cancel anytime you want</li>
<li>Full access to any template</li>
<li>No platform fee charged when you engage a designer</li>`
yearInfoList.innerHTML = yearInfo