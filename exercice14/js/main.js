// $(() => {

//     $(".btn").click(function () {

//         const text = $("#text");
//         text.attr("class", "float-right");

//     });

// });

const btn = document.querySelector(".btn");
const text = document.querySelector("#text");

btn.addEventListener("click", () => {

    text.setAttribute("class", "float-end"); // float-end = float-right (ancienne version bootstrap);

});