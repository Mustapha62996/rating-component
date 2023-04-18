const ratings = document.querySelectorAll(".number-items");

ratings.forEach(element => element.addEventListener("click",getRating));

function getRating(e){
    if (e.target == ratings[0]) {
        toggleRating(0);
    }
    if (e.target == ratings[1]) {
       toggleRating(1);
    }
    if (e.target == ratings[2]) {
        toggleRating(2);
    }
    if (e.target == ratings[3]) {
        toggleRating(3);
    }
    if (e.target == ratings[4]) {
        toggleRating(4);
    }

    function toggleRating(index) {
        ratings[index].setAttribute("id","selected");
        for (let i = 0; i < ratings.length; i++) {
            if (i == index) {
                continue;
            }
            ratings[i].removeAttribute("id");
        }
    }

    let userRating = e.target.innerText;
    document.querySelector(".rating-score").innerText = `You selected ${userRating} out of 5`;
}

document.querySelector("#submit-btn").addEventListener('click',() => {
    document.querySelector('.rating-state').style.display = "none";
    document.querySelector('.thank-you-state').style.display = "block";
});


