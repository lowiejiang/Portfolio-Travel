var locations = {
	"locations": [{
		"imageUrl": "pictures/newzealand.jpg",
		"imageAlt": "New Zealand Hobbiton",
		"name": "New Zealand",
		"date": "April 2017"
	},
	{
		"imageUrl": "pictures/washingtondc.jpg",
		"imageAlt": "Washington D.C.",
		"name": "Washington D.C.",
		"date": "March 2017"
	},
	{
		"imageUrl": "pictures/hongkong.jpg",
		"imageAlt": "Hong Kong",
		"name": "Hong Kong",
		"date": "October 2016"
	},
	{
		"imageUrl": "pictures/nepal.jpg",
		"imageAlt": "Nepal",
		"name": "Nepal",
		"date": "October 2016"
	}],
	"display": function () {
		console.log ("this function is running");
		var item = 0;
		for (i = 0; i < (locations.locations.length/3); i++) {
			$("#location").append(HTMLrowStart);

			for (count=0; count < 3; count++) {
				$(".row").append(HTMLitemStart);

				var formattedImageUrl = HTMLimageUrl.replace("%data%", locations.locations[item].imageUrl);
				var formattedImageAlt = HTMLimageAlt.replace("%data%", locations.locations[item].imageAlt);
				var formattedImageStuff = formattedImageUrl + formattedImageAlt;
				$(".col-md-4:last").append(formattedImageStuff);

				var formattedLocationName = HTMLlocationName.replace("%data%", locations.locations[item].name);
				$(".col-md-4:last").append(formattedLocationName);

				var formattedDate = HTMLlocationDate.replace("%data%", locations.locations[item].date);
				$(".col-md-4:last").append(formattedDate);
				item++;
			};
		};
	}
};

locations.display();