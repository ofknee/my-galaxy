var elementIsVisible = false;

function toggleContact() {
    if (elementIsVisible == false) {
        document.getElementById("contact").removeAttribute("hidden");
        elementIsVisible = true;
    } else {
        document.getElementById("contact").setAttribute("hidden", true);
        elementIsVisible = false;
    }
}

document.getElementById("contact-button").addEventListener("click", toggleContact);