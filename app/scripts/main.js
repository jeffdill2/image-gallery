'use strict';

////////////////////////////////////////////////////////////
///////////////////////////////////// INITIALIZE APPLICATION
////////////////////////////////////////////////////////////
$(document).ready(function() {
	loadImages();

	$('.form-url').focus();
});

////////////////////////////////////////////////////////////
/////////////////////////////////////////////// CONSTRUCTORS
////////////////////////////////////////////////////////////
function Image(strURL, strCaption) {
	switch(true) {
		case strURL.length <= 0:
			throw new Error("The URL may not be left blank!");
			break;

		case strCaption.length <= 0:
			throw new Error("The caption may not be left blank!");
			break;

		default:
			this.url = strURL;
			this.caption = strCaption;
			break;
	}
}

////////////////////////////////////////////////////////////
//////////////////////////////////////LOAD AND SUBMIT IMAGES
////////////////////////////////////////////////////////////
var imageCollection = new ImageCollection();

function loadImages() {
	imageCollection.fetch().done(function() {
		imageCollection.each(function(image) {
			new ThumbnailView({model: image});
		});

		new DetailView({model: {attributes: {url: '../images/placeholder-image.png', caption: 'placeholder'}}});
	});
}

$('.form-url').change(function() {
	var strURL = $('.form-url').val();

	$('.form-image').attr('src', strURL);
});