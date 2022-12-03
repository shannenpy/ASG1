// nav menu
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
const compName = `<a href = "index.html" class="name">The Digital Zone</a>`
company.innerHTML = compName
let navList = document.createElement("ul")
navList.classList.add("nav-list")
mainnav.append(navList)
const navContent = 
`<li class="nav-content"><a href = "account.html" class="nav-a">Login/ Signup</a></li>
<li class="nav-content"><a href = "product.html" class="nav-a">Products & Services</a></li>
<li class="nav-content"><a href = "review.html" class="nav-a">Reviews</a></li>
<li class="nav-content"><a href = "pricing.html" class="nav-a">Pricings</a></li>
<li class="nav-content"><a href = "contact.html" class="nav-a">Contact Us</a></li>`
navList.innerHTML = navContent