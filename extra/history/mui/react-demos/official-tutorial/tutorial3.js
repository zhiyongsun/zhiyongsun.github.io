// tutorial3.js
var CommmentBox = React.createClass({
	render: function() {
		return(
			<div className="commentBox">
				<CommentList />
				<CommentForm />
			</div>
			);
	}
});