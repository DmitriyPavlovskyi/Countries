var CountryInformationView = Backbone.View.extend({
	// tagName: 'div',
	// className: 'current'

	compiled: _.template(`Country name: <span class = "current">
							<%= name %></span> <br> 
							Capital: <%= capital %> <br>
							Population: <%= population %>
							<button class = "delete-country">Delete country</button>`),

	events: {
		'click button.delete-country': 'removeCountry'
	},

	initialize: function () {
	},

	render: function () {
		this.$el.html(this.compiled(this.model.toJSON()));

		return this;
	},

	removeCountry: function () {
		this.$el.html('');
		this.model.destroy();
	}
});