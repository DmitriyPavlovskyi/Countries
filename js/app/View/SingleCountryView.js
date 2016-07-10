var SingleCountryView = Backbone.View.extend({
	tagName: 'div',

	compiled: _.template('<%= name %><button>Show info</button>'),

	events: {
		'click button': 'showInfo'
	},

	initialize: function () {
	},

	render: function () {
		this.$el.html(this.compiled(this.model.toJSON()));

		return this;
	},

	showInfo: function () {
		var info = new CountryInformationView({
			model: this.model
		});

		$('#countryInfo').html('');
		$('#countryInfo').append(info.render().el);
	}
});