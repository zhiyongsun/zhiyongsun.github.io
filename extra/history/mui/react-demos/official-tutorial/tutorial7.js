// tutorial7.js
var Comment = React.createClass({
	rawMarkup: function() {
		var md = new Remakable();
		var rawMarkup = md.render(this.props.children.toString());
		return { __html:rawMarkup};
	},

	render: function() {
		return (
			<div className="comment"
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				<span dangerouslySetInnerHTML={this.rawMarkup()} />
			</div>
			);
	}
});