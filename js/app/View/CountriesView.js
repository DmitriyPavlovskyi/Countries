var CountriesView = Backbone.View.extend({
	tagName: 'div',

	events: {
		'click button.start': 'showCountries'
	},

	initialize: function () {
		this.collection = new CountriesCollection();
		this.collection.on('remove', this.showCountries, this);
		this.renderEditView();
	},

	render: function () {
		this.$el.html('<button class = "start">Show Countries</button>');

		return this;
	},

	renderEditView: function () {
		var edition = new EditionView({
			model: this.model
		});

		$('#countryEdition').html('');
		$('#countryEdition').append(edition.render().el);
	},

	showCountries: function () {
		this.$el.html('');

		this.collection.each(function (country) {
			var country = new SingleCountryView({
				model: country
			});

			this.$el.append(country.render().el);
		}, this);
	}
});