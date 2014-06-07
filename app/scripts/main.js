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

		// new DetailView({model: imageCollection.first()});
	});
}

$('.submit-button').click(function() {
	var strURL = $('.form-url').val();
	var strCaption = $('.form-caption').val();
	var objImage = new Image(strURL, strCaption);
	var objThumbnailModel = imageCollection.add(objImage);

	objThumbnailModel.save();
	new ThumbnailView({model: objThumbnailModel});

	$('.form-url').focus();
});

$('.form-url').change(function() {
	var strURL = $('.form-url').val();

	$('.form-image').attr('src', strURL);
});

$('.form-url').keypress(function(key) {
	if (key.keyCode == '13') {
		key.preventDefault();

		$('.submit-button').trigger('click');
	}
});

$('.form-caption').keypress(function(key) {
	if (key.keyCode == '13') {
		key.preventDefault();

		$('.submit-button').trigger('click');
	}
});