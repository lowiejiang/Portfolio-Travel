var travels = {
	"locations": [{
		"imageUrl": "pictures/newzealand.jpg",
		"imageAlt": "New Zealand Hobbiton",
		"name": "New Zealand",
		"date": "April 2017",
		"location": {"lat": -42.017564, "lng": 173.397440}
	},
	{
		"imageUrl": "pictures/washingtondc.jpg",
		"imageAlt": "Washington D.C.",
		"name": "Washington D.C.",
		"date": "March 2017",
		"location": {"lat": -42.017564, "lng": 173.397440}
	},
	{
		"imageUrl": "pictures/hongkong.jpg",
		"imageAlt": "Hong Kong",
		"name": "Hong Kong",
		"date": "October 2016",
		"location": {"lat": -42.017564, "lng": 173.397440}
	},
	{
		"imageUrl": "pictures/nepal.jpg",
		"imageAlt": "Nepal",
		"name": "Nepal",
		"date": "October 2016",
		"location": {"lat": -42.017564, "lng": 173.397440}
	},
	{
		"imageUrl": "pictures/london.jpg",
		"imageAlt": "London",
		"name": "London",
		"date": "June 2016",
		"location": {"lat": -42.017564, "lng": 173.397440}
	},
	{
		"imageUrl": "pictures/greece.jpg",
		"imageAlt": "Greece",
		"name": "Greece",
		"date": "October 2015",
		"location": {"lat": -42.017564, "lng": 173.397440}
	},
	{
		"imageUrl": "pictures/madagascar.jpg",
		"imageAlt": "Madagascar",
		"name": "Madagascar",
		"date": "December 2013",
		"location": {"lat": -42.017564, "lng": 173.397440}
	},
	{
		"imageUrl": "pictures/botswana.jpg",
		"imageAlt": "Botswana",
		"name": "Botswana",
		"date": "July 2013",
		"location": {"lat": -42.017564, "lng": 173.397440}
	},
	{
		"imageUrl": "pictures/swaziland.jpg",
		"imageAlt": "Swaziland",
		"name": "Swaziland",
		"date": "March 2013",
		"location": {"lat": -42.017564, "lng": 173.397440}
	},
	{
		"imageUrl": "pictures/southafrica.jpg",
		"imageAlt": "South Africa",
		"name": "South Africa",
		"date": "December 2012",
		"location": {"lat": -42.017564, "lng": 173.397440}
	},
	{
		"imageUrl": "pictures/mozambique.jpg",
		"imageAlt": "Mozambique",
		"name": "Mozambique",
		"date": "July 2012",
		"location": {"lat": -42.017564, "lng": 173.397440}
	},
	{
		"imageUrl": "pictures/lesotho.jpg",
		"imageAlt": "Lesotho",
		"name": "Lesotho",
		"date": "October 2011",
		"location": {"lat": -42.017564, "lng": 173.397440}
	},
	{
		"imageUrl": "pictures/atlanta.jpg",
		"imageAlt": "Atlanta",
		"name": "Atlanta",
		"date": "June 2011",
		"location": {"lat": -42.017564, "lng": 173.397440}
	},
	{
		"imageUrl": "pictures/vegas.jpg",
		"imageAlt": "Las Vegas",
		"name": "Las Vegas",
		"date": "May 2011",
		"location": {"lat": -42.017564, "lng": 173.397440}
	},
	{
		"imageUrl": "pictures/india.jpg",
		"imageAlt": "India",
		"name": "Chennai",
		"date": "December 2009",
		"location": {"lat": -42.017564, "lng": 173.397440}
	},
	{
		"imageUrl": "pictures/rome.jpg",
		"imageAlt": "Rome",
		"name": "Rome",
		"date": "June 2008",
		"location": {"lat": -42.017564, "lng": 173.397440}
	},
	{
		"imageUrl": "pictures/singapore.jpg",
		"imageAlt": "Singapore",
		"name": "Singapore",
		"date": "June 2007",
		"location": {"lat": -42.017564, "lng": 173.397440}
	},
	{
		"imageUrl": "pictures/newyork.jpg",
		"imageAlt": "New York",
		"name": "New York City",
		"date": "March 2007",
		"location": {"lat": -42.017564, "lng": 173.397440}
	},
	{
		"imageUrl": "pictures/sf.jpg",
		"imageAlt": "San Francisco",
		"name": "San Francisco",
		"date": "December 2006",
		"location": {"lat": -42.017564, "lng": 173.397440}
	},
	{
		"imageUrl": "pictures/sandiego.jpg",
		"imageAlt": "San Diego",
		"name": "San Diego",
		"date": "June 2006",
		"location": {"lat": -42.017564, "lng": 173.397440}
	},
	{
		"imageUrl": "pictures/spain.jpg",
		"imageAlt": "Spain",
		"name": "Spain",
		"date": "April 2005",
		"location": {"lat": -42.017564, "lng": 173.397440}
	}
	],
	"display": function () {
		var item = 0;
		for (i = 0; i < (travels.locations.length/3); i++) {
			$("#location").append(HTMLrowStart(i));

			for (count=0; count < 3; count++) {
				$(".location-row-" + i).append(HTMLitemStart);

				var formattedImageUrl = HTMLimageUrl.replace("%data%", travels.locations[item].imageUrl);
				var formattedImageAlt = HTMLimageAlt.replace("%data%", travels.locations[item].imageAlt);
				var formattedImageStuff = formattedImageUrl + formattedImageAlt;
				$(".col-md-4:last").append(formattedImageStuff);

				var formattedLocationName = HTMLlocationName.replace("%data%", travels.locations[item].name);
				$(".col-md-4:last").append(formattedLocationName);

				var formattedDate = HTMLlocationDate.replace("%data%", travels.locations[item].date);
				$(".col-md-4:last").append(formattedDate);
				item++;
			}
		}
	}
};
travels.display();
$("#mapDiv").append(googleMap);