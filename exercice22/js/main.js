$(() => {

    $(".btn").click(function () {

        const text = $("#text");

        text.animate({

            fontSize: "50px",

        }, 1000);
    });

});