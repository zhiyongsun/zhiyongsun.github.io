// tutorial6.js
var Comment = React.createClass({
	render: function() {
		var md = new Remakable();
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				{md.render(this.props.children.toString())}
			</div>	
			);
	}
});