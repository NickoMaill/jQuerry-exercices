$(() => {

    $(".btn").click(function() {

        const square = $("#square");

        square.animate({

            width: '500px'

        }, 1000);
    });

});