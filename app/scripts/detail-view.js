'use strict';

var DetailView = Backbone.View.extend({
	className: 'detail',

	detailTemplate: _.template($('.detail-template').text()),

	events: {
		"click .submit-button" 	: "submit",
		"click .preview-button"	: "preview",
		"click .update-button"	: "update",
		"click .delete-button"	: "destroy"
	},

	initialize: function() {
		$('.image-form').html('');
		$('.image-form').append(this.el);
		this.render();
	},

	render: function() {
		var rendered = this.detailTemplate(this.model.attributes);
		this.$el.html(rendered);
	},

	reset: function() {
		new DetailView({model: placeholderModel});
	},

	submit: function() {
		var objImage = new Image($('.form-url').val(), $('.form-caption').val());
		var objThumbnailModel = imageCollection.add(objImage);

		objThumbnailModel.save();
		new ThumbnailView({model: objThumbnailModel});

		this.remove();
		this.reset();
	},

	preview: function() {

	},

	update: function() {
		this.model.set({
			url: 		this.$el.find('.form-url').val(),
			caption: 	this.$el.find('.form-caption').val()
		}).save().done(function() {
			this.$el.find('.status').html('Saved!');
		});

		this.remove();
		this.reset();
	},

	destroy: function() {
		this.model.destroy();
		this.remove();
		this.reset();
	}
});