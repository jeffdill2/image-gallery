'use strict';

var DetailView = Backbone.View.extend({
	className: 'detail',

	detailTemplate: _.template($('.detail-template').text()),

	// events: {
	// 	"click .submit-button" : "updateModel"
	// },

	initialize: function() {
		$('.submit-button').text('Save');
		$('.image-form').html('');
		$('.image-gallery').append(this.el);
		this.render();
	},

	render: function() {
		var rendered = this.detailTemplate(this.model.attributes);
		this.$el.html(rendered);
	},

	reset: function() {
		$('.form-image').attr('src', '../images/placeholder-image.png');
		$('.form-url').val('');
		$('.form-caption').val('');
		$('.submit-button').text('Submit');
	}//,

	// updateModel: function() {
	// 	console.log(this.model);
	// 	console.log("url:", this.$el.find('.form-url').val());
	// 	console.log("caption:", this.$el.find('.form-caption').val());

	// 	this.model.set({
	// 		url: 		this.$el.find('.form-url').val(),
	// 		caption: 	this.$el.find('.form-caption').val()
	// 	}).save().done(function() {
	// 		this.$el.find('.status').html('Saved!');
	// 	});

	// 	this.reset();
	// }
});