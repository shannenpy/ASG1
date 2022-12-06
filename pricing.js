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
let priceHead = document.createElement("h1")
priceHead.classList.add("price-heading")
document.body.append(priceHead)
var priceHeading = `Subscription Packages`
priceHead.innerHTML = priceHeading

let packList = document.createElement("section")
packList.classList.add("pack-list")
document.body.append(packList)

// free
let freePack = document.createElement("div")
freePack.classList.add("pack-type")
freePack.setAttribute("id", "free-pack")
packList.append(freePack)
freeHead = document.createElement("h2")
freeHead.classList.add("pack-head")
freePack.append(freeHead)
var freeHeading = `Free`
freeHead.innerHTML = freeHeading
let freeInfoList = document.createElement("ul")
freeInfoList.classList.add("pack-ul")
freePack.append(freeInfoList)
var freeInfo = 
`<li>Download any 3 templetes for free</li>
<li>For the first time you engage a designer, pay without platform fee</li>
<li>Subscribe to our plans for full access to any template`
freeInfoList.innerHTML = freeInfo

// monthly
let monthPack = document.createElement("div")
monthPack.classList.add("pack-type")
monthPack.setAttribute("id", "month-pack")
packList.append(monthPack)
monthHead = document.createElement("h2")
monthHead.classList.add("pack-head")
monthPack.append(monthHead)
var monthHeading = `Monthly`
monthHead.innerHTML = monthHeading
let monthInfoList = document.createElement("ul")
monthInfoList.classList.add("pack-ul")
monthPack.append(monthInfoList)
var monthInfo = 
`<li>Pay $20 monthly</li>
<li>Cancel anytime you want</li>
<li>Full access to any template</li>
<li>Platform fee charged when you engage a designer</li>`
monthInfoList.innerHTML = monthInfo

// yearly
let yearPack = document.createElement("div")
yearPack.classList.add("pack-type")
yearPack.setAttribute("id", "year-pack")
packList.append(yearPack)
yearHead = document.createElement("h2")
yearHead.classList.add("pack-head")
yearPack.append(yearHead)
var yearHeading = `Yearly !!`
yearHead.innerHTML = yearHeading
let yearInfoList = document.createElement("ul")
yearInfoList.classList.add("pack-ul")
yearPack.append(yearInfoList)
var yearInfo = 
`<li>Pay $149 yearly</li>
<li>Cancel anytime you want</li>
<li>Full access to any template</li>
<li>No platform fee charged when you engage a designer</li>`
yearInfoList.innerHTML = yearInfo