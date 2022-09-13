import React from "react";
import { Link, withRouter } from "react-router-dom";

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            creator_id:this.props.currentUser.id,
            comment: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.clearedErrors = false;
    }

    componentDidMount() {
        this.props.fetchAllComments();
    }

    update(field) {
        return (e) =>
            this.setState({
                [field]: e.currentTarget.value,
            });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { createComment, login, history, currentUser } = this.props;
        const comment = Object.assign({}, this.state);
        createComment(comment).then(res => {
            history.push("/commentShow/1234");
        });
    }

    render() {
        // debugger
        // const { errors } = this.props;

    return (
        <div className="session-background">
            <h1 className="signup-text1">Comments</h1>
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
            </form>
        </div>
    );
    }
}

export default withRouter(CommentForm);
