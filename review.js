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
const compName = `<a href = "index.html" id="name">The Digital Zone</a>`
company.innerHTML = compName
let navList = document.createElement("ul")
navList.classList.add("nav-list")
mainnav.append(navList)
const navContent = 
`<li class="nav-content"><a href = "account.html" class="nav-a">Login/ Signup</a></li>
<li class="nav-content"><a href = "product.html" class="nav-a">Products & Services</a></li>
<li class="nav-content"><a href = "review.html" class="nav-a">Reviews</a></li>
<li class="nav-content"><a href = "price/pricing.html" class="nav-a">Pricings</a></li>
<li class="nav-content"><a href = "contact.html" class="nav-a">Contact Us</a></li>`
navList.innerHTML = navContent

// general reviews
let generalReviews = document.createElement("section")
generalReviews.classList.add("general-reviews")
document.body.appendChild(generalReviews)
generalreviews = document.querySelector(".general-reviews")
let uploadGeneral = document.createElement("button")
uploadGeneral.setAttribute("type", "button")
uploadGeneral.classList.add("submit")
generalreviews.append(uploadGeneral)
const uploadGeneralContent = `Upload`
uploadGeneral.innerHTML = uploadGeneralContent

let printGeneral = document.createElement("ul")
printGeneral.classList.add("general-list")
generalreviews.append(printGeneral)
function generalReview(name, review) {
        this.name = name
        this.review = review
        this.printGeneralContentFunction = function() {
            let printGeneralContent =`<li>${this.name}<br>${this.review}</li>`
            return printGeneral.innerHTML = printGeneralContent
    }
}

const generalList = []
let generalReview1 = new generalReview (
    "Allan Cervantes",
    "Saw this on Instagram, decided to give it a try and I absolutely \
    love it. I can find any template I need to kick start my projects. Subscribed to their yearly package."
)
generalList.push(generalReview1)


// for (let i = 0; i < generalList.length; i++) {
//     username = i["name"]
//     review = i["review"]
    
// }