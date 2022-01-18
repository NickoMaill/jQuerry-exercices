$(() => {

	$(".btn").click(function () {

		$.ajax({

			url: "https://restcountries.com/v3.1/name/France",

			success: function (data) {

				data.forEach((country) => {
					console.log(country);
				});
			},
		});
	});
})

