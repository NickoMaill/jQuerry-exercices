// $(() => {

//     $(".btn").click(function () {

//         const text = $("#text");

//         text.css("font-size", "50px");

//     });

// });

const btn = document.querySelector(".btn");
const text = document.querySelector("#text");

btn.addEventListener("click", () => {
    square.style.fontSize = "50px";

})