var EditionView = Backbone.View.extend({
	// tagName: 'div',
	el: '#countryEdition',

	compiled: _.template(`<div>Fill the form for new country:</div>
							<input placeholder = "Country name">
							<input placeholder = "Capital">
							<input placeholder = "Population">
							<button class = "create-country">Create new country</button>`),

	events: {
		'click .create-country': 'createCountry'
	},

	initialize: function () {
	},

	render: function () {
		// $('#countryEdition').append(this.compiled());
		this.$el.html(this.compiled());

		return this;
	},

	createCountry: function () {
		debugger;
		console.log('wefwe');
	}

});

// Не вешается событие