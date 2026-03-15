const form = document.getElementById("feedbackForm");
const tooltip = document.getElementById("tooltip");
const feedbackDisplay = document.getElementById("feedback-display");

const comments = document.getElementById("comments");
const charCount = document.getElementById("charCount");


/* character count */

comments.addEventListener("input", function(){

    let length = comments.value.length;
    charCount.textContent = length + " / 250";

});


/* event delegation for tooltip */

form.addEventListener("mouseover", function(e){

    if(e.target.dataset.tip){

        tooltip.style.display = "block";
        tooltip.textContent = e.target.dataset.tip;

        tooltip.style.top = e.pageY + "px";
        tooltip.style.left = e.pageX + "px";

    }

});


form.addEventListener("mouseout", function(e){

    if(e.target.dataset.tip){

        tooltip.style.display = "none";

    }

});


/* stop bubbling */

form.addEventListener("click", function(e){
    e.stopPropagation();
});


/* validation and submit */

form.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let comment = document.getElementById("comments").value;

    let valid = true;

    if(name === ""){
        document.getElementById("nameError").textContent = "Name required";
        valid = false;
    }

    if(email === ""){
        document.getElementById("emailError").textContent = "Email required";
        valid = false;
    }

    if(comment === ""){
        document.getElementById("commentError").textContent = "Comment required";
        valid = false;
    }

    if(valid){

        let box = document.createElement("div");

        box.classList.add("feedback");

        box.innerHTML =
        "<strong>" + name + "</strong><br>" +
        email + "<br>" +
        comment;

        feedbackDisplay.appendChild(box);

        form.reset();
        charCount.textContent = "0 / 250";

    }

});