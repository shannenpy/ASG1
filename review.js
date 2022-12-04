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


/*----- general reviews -----*/
let generalReviews = document.createElement("section")
generalReviews.classList.add("general-reviews")
document.body.appendChild(generalReviews)
generalreviews = document.querySelector(".general-reviews")
let uploadGeneral = document.createElement("button")
uploadGeneral.classList.add("button")
uploadGeneral.setAttribute("data-modal", "upload")
generalreviews.append(uploadGeneral)
const uploadGeneralContent = `Upload`
uploadGeneral.innerHTML = uploadGeneralContent
let modalOne = document.createElement("div")
modalOne.classList.add("modal")
generalreviews.append(modalOne)
var modalOneContent = 
`<div class="modal-content">
<div class="review-form">
  <a class="close">&times;</a>
  <form action="/">
    <h2>How was your experience</h2>
    <div>
      <input class="fname" type="text" name="name" placeholder="Full name" />
    </div>
    <span>Message</span>
    <div>
      <textarea rows="2"></textarea>
    </div>
    <button type="submit" href="/">Submit</button>
  </form>
</div>
</div>`
modalOne.innerHTML = modalOneContent


/* ----- designer reviews ----- */
let designerReviews = document.createElement("section")
designerReviews.classList.add("designer-reviews")
document.body.appendChild(designerReviews)
designerreviews = document.querySelector(".designer-reviews")
let uploadDesigner = document.createElement("button")
uploadDesigner.classList.add("button")
uploadDesigner.setAttribute("data-modal", "upload")
designerreviews.append(uploadDesigner)
const uploadDesignerContent = `Upload`
uploadDesigner.innerHTML = uploadDesignerContent
let modalTwo = document.createElement("div")
modalTwo.classList.add("modal")
designerreviews.append(modalTwo)
var modalTwoContent = 
`<div class="modal-content">
<div class="review-form">
  <span class="close">&times;</span>
  <form action="/">
    <h2>How was your designer</h2>
    <div>
      <input class="fname" type="text" name="name" placeholder="Full name" /><br>
      <input type="text" name="name" placeholder="Designer name" />
    </div>
    <span>Message</span>
    <div>
      <textarea rows="2"></textarea>
    </div>
    <button type="submit" href="/">Submit</button>
  </form>
</div>
</div>`
modalTwo.innerHTML = modalTwoContent

let modalBtns = document.querySelectorAll(".button")
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.getAttribute("data-modal")
    document.getElementById(modal).style.display = "block"
  }
})
let closeBtns = document.querySelectorAll(".close")
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.closest(".modal");
    modal.style.display = "none";
  }
})
window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none"
  }
}