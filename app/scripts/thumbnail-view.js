'use strict';

var ThumbnailView = Backbone.View.extend({
	className: 'thumbnail',

	thumbnailTemplate: _.template($('.thumbnail-template').text()),

	events: {
		"click" : "showDetailView"
	},

	initialize: function() {
		$('.container').append(this.el);
		this.render();
	},

	render: function() {
		var rendered = this.thumbnailTemplate(this.model.attributes);
		this.$el.html(rendered);
	},

	showDetailView: function() {
		new DetailView({model: this.model});
	}
});