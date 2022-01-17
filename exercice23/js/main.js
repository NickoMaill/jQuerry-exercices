$(() => {

    $(".btn").click(function() {

        const square = $("#square");

        square.animate({

            marginLeft: "950px",
            marginTop: "100px",


        }, 1000);
    });

});