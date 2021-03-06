$(function() {
var newAnimal, currentAnimal, last, next;
var animals = [
	{
		name: [{
			en: 'cow',
			fr: 'la vache'
		}],
		image:'images/cow-1.png'
	},
	{
		name: [{
			en: 'cat',
			fr: 'le chat'
		}],
		image:'images/cat-1.png'
	},
	{
		name: [{
			en: 'dog',
			fr: 'le chien'
		}],
		image: 'images/dog-1.png'
	},
	{
		name:'owl',
		image: 'https://mysteriousfacts.com/wp-content/uploads/2016/09/Owl.jpg'
	},
	{
		name: 'donkey',
		image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/09/30/08/donkey1.jpg'
	},
	{
		name: 'monkey',
		image: 'https://i.ndtvimg.com/i/2015-03/monkey-650-generic-thinkstock_650x400_41427714356.jpg'
	},
	{
		name: 'elephant',
		image: 'images/elephant-1.png'
	},
	{
		name: 'hippo',
		image: 'http://binscorner.com/mails/c/cute-hippo-pictures/126687107217.jpg'
	},
	{
		name: 'snake',
		image: 'http://ichef.bbci.co.uk/naturelibrary/images/ic/credit/640x395/s/sn/snake/snake_1.jpg'
	},
	{
		name: 'lion',
		image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg'
	},
	{
		name: 'tiger',
		image: 'http://www.woburnsafari.co.uk/media/2835348/tigers-3_2-1.jpg?width=920&height=460&mode=crop'
	},
	{
		name: 'duck',
		image: 'images/duck-1.jpg'
	}
];

generateAnimal();

$("button.generate-animal").on("click", function() {
	//$(this).attr("disabled", "disabled");
	console.log('clicked');
	generateAnimal();
	//$(this).removeAttr("disabled");     
});

function generateAnimal() {
		//get the random number based on number of items in the array
		do { 
			next = Math.floor(Math.random() * animals.length);
		} while( next === last );
		
		last = next;
			console.log('gen');
		var newAnimal = animals[next];
		
		displayAnimal(newAnimal);

	}

	function displayAnimal(newAnimal){
		//$(".animal-wrapper").fadeOut(0);
		$(".animal img").attr("src", newAnimal.image);
		$(".animal-wrapper h1").html(newAnimal.name[0].en + ' / ' +newAnimal.name[0].fr );
		//$(".animal-wrapper").fadeIn();

	}
	
});

