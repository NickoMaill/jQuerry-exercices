// $(() => {

//     $(".btn").click(displaySecretText);

// });

const btn = document.querySelector(".btn");
const text = document.querySelector("#text");

btn.addEventListener("click", () => {
    text.style.display = "block";

})
