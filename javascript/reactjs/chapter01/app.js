var App = React.createClass({
	render: function(){
		return (React.createElement('div',null,'Hello React World'));
	}
});

React.render(React.createElement(App),document.body);