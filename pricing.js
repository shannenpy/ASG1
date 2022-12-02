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

/*----- packages -----*/
let packages = document.createElement("div")
packages.classList.add("packages")
document.body.appendChild(packages)

let packagesList = document.createElement("ul")
packagesList.classList.add("packages-list")
packages.append(packagesList)
var packType =
`<li class="free-pack">Free</li>
<li class="month-pack">Monthly</li>
<li class="year-pack">Yearly</li>`
packagesList.innerHTML = packType

// free
let freeInfoList = document.createElement("ul")
freeInfoList.classList.add("free-info-list")
document.querySelector(".free-pack").append(freeInfoList)
var freeInfo = 
`<li>Download any 3 templetes for free</li>
<li>For the first time you engage a designer, pay without platform fee</li>
<li>Subscribe to our plans for full access to any template`
freeInfoList.innerHTML = freeInfo

// monthly
let monthInfoList = document.createElement("ul")
monthInfoList.classList.add("month-info-list")
document.querySelector(".month-pack").append(monthInfoList)
var monthInfo = 
`<li>Pay $20 monthly</li>
<li>Cancel anytime you want</li>
<li>Full access to any template</li>
<li>Platform fee charged when you engage a designer</li>`
monthInfoList.innerHTML = monthInfo

// yearly
let yearInfoList = document.createElement("ul")
yearInfoList.classList.add("year-info-list")
document.querySelector(".year-pack").append(yearInfoList)
var yearInfo = 
`<li>Pay $149 yearly</li>
<li>Cancel anytime you want</li>
<li>Full access to any template</li>
<li>No platform fee charged when you engage a designer</li>`
yearInfoList.innerHTML = yearInfo