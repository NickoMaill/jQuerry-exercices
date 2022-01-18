$(() => {

    $(".btn").click(function () {

        let textArea = $(".form-control");
        textArea = textArea.val();

        $.ajax({

            url: `https://restcountries.com/v3.1/name/${textArea}`,

            success: function (data) {

                data.forEach((country) => {

                    $("#country").html(
                        `${country.name.common}`
                    );

                    $("#capital").html(
                        `${country.capital}`
                    );

                });

            },
        });
    });
})