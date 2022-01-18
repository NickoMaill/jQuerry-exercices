// $(() => {

//     $(".btn").click(function () {

//         const square = $("#square");

//         square.css("background-color", "red");

//     });

// });

const btn = document.querySelector(".btn");
const square = document.querySelector("#square");

btn.addEventListener("click", () => {
    square.style.width = "500px";

})