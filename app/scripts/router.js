'use strict';

var imageCollection = new ImageCollection();
var placeholderModel = new ImageModel({url: '../images/placeholder-image.png', caption: 'placeholder', isPlaceholder: true});

var AppRouter = Backbone.Router.extend({
	routes: {
		""					: "renderHome",
		"image/:imageId"	: "renderImage"
	},

	initialize: function() {
		loadImages();

		new DetailView({model: placeholderModel});

		$('.form-url').focus();

	},

	renderHome: function() {
		new DetailView({model: placeholderModel});
	},

	renderImage: function(imageId) {
		new DetailView({model: imageCollection.get(imageId)});
	}
});