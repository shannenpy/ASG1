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

/* ----- Forms ----- */
let formDiv = document.createElement("div")
formDiv.classList.add("forms")
document.body.append(formDiv)
let form = document.createElement("form")
form.setAttribute("name", "contactForm")
form.setAttribute("onsubmit", "return validateForm()")
formDiv.append(form)
var formContent =
`<h2>Questions about our website</h2><br>
<input type="email" placeholder="Your email" name="emailAdd"><br><br>
<textarea rows="4" cols="30" placeholder="Ask us anything!" name="feedback"></textarea><br><br>
<input type="submit" value="Submit" id="submit-button">`
form.innerHTML = formContent

function validateForm() {
    let email = document.forms["contactForm"]["emailAdd"].value;
    if (email == "") {
        alert("Email Address compulsory");
        return false;
    }

    function ValidateEmail(inputText){
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputText.value.match(mailformat))
        {
        return true;
        }
        else
        {
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
        }
        }

}