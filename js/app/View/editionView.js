var EditionView = Backbone.View.extend({
	tagName: 'div',

	compiled: _.template(`<div>Fill the form for new country:</div>
							<input placeholder = "Country name"><input placeholder = "Capital">
							<input placeholder = "Population">
							<button class = "createCountry">Create new country</button>`),
	


	initialize: function () {
		console.log($('.createCountry').length);
	},

	render: function () {
		$('#countryEdition').append(this.compiled());
		console.log($('.createCountry').length);
		return this;
	},

	events: {
		'click .createCountry': 'createCountry'
	},
	createCountry: function () {
		debugger;
		console.log('wefwe');
	}

});

// Не вешается событие