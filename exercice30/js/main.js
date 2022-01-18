$(() => {

    $(".form-control").keyup(function () {

        const input = $("input");
        // input.attr("class", "form-control is-valid mb-3");

        if (input.val().length > 5) {
            input.attr("class", "form-control is-valid mb-3");
            
        } else {
            input.attr("class", "form-control is-invalid mb-3");

        }

     });

});