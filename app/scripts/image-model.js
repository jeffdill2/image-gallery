'use strict';

var strPhotosURL = 'http://tiny-pizza-server.herokuapp.com/collections/jdill-photos';

var ImageModel = Backbone.Model.extend({
	idAttribute: '_id',

	defaults: {
		url: 'http://i.giftrunk.com/d3fqzq.gif',
		caption: 'shaq attack!'
	},
});

var ImageCollection = Backbone.Collection.extend({
	model: ImageModel,

	url: strPhotosURL
});