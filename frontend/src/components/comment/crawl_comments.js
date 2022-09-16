import React from "react";
import { withRouter } from "react-router-dom";

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // creator_id: this.props.currentUser.id,
            comments: "",
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchCommentByCrawl(this.props.crawlId)
            .then((response) => {
                this.setState({
                    comments: response.comments.data
                })
            })
    }

    // update(field) {
    //     return (e) =>
    //         this.setState({
    //             [field]: e.currentTarget.value,
    //         });
    // }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     const { createComment, login, history, currentUser } = this.props;
    //     const comment = Object.assign({}, this.state);
    //     createComment(comment).then(res => {
    //         history.push("/commentShow/1234");
    //     });
    // }

    render() {
        console.log(this.state.comments)
    return (
        <div className="comment-background">
            {/* <h1 className="signup-text1">Comments</h1>
            <form onSubmit={this.handleSubmit}>
                <div>     
                    <input
                        className="Comment-input"
                        type="text"
                        value={this.state.comment}
                        onChange={this.update("comment")}
                        placeholder=""
                    />
                    <br />
                    <input className="submit-comment" type="submit" value="Create Comment" />
                </div>
            </form> */}

            work in progress

        </div>
    );
    }
}

export default withRouter(CommentForm);
