$(() => {

    $(".btn").click(function() {

        const area = $("input");
        area.removeAttr("disabled").removeAttr("value").attr("placeholder", "Konexio!");

        // .removeAttr() enlève un attribut

    });

});