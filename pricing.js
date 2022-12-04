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


/*----- packages -----*/
let packages = document.createElement("div")
packages.classList.add("packages")
document.body.appendChild(packages)

let packagesList = document.createElement("ul")
packagesList.classList.add("packages-list")
packagesList.setAttribute("class", "page-top")
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