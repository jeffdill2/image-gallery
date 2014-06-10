'use strict';

var imageCollection = new ImageCollection();

var AppRouter = Backbone.Router.extend({
	routes: {
		""					: "renderHome",
		"image/:imageId"	: "renderImage"
	},

	initialize: function() {
		loadImages();

		new DetailView({model: {attributes: {url: '../images/placeholder-image.png', caption: 'placeholder'}}});

		$('.form-url').focus();

	},

	renderHome: function() {
		new DetailView({model: {attributes: {url: '../images/placeholder-image.png', caption: 'placeholder'}}});
	},

	renderImage: function(imageId) {
		// grab an image here.
	}
});