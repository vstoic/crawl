import React from "react";
import { withRouter } from "react-router-dom";
import CommentBox from "./comment_box";

class CommentCompose extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            crawl_id: this.props.crawlId,
            user_id: this.props.currentUser.id,
            newComment: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this)
    }

   

    handleSubmit(e) {
        e.preventDefault();
        const comment = {
            body: this.state.body,
            crawl_id: this.props.crawlId,
            user_id: this.props.currentUser.id,
        };
        

        this.props.composeComment(comment);
        this.setState({ body: ''})
    }

    update() {
        return e => this.setState({ body: e.currentTarget.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <textarea
                            value={this.state.body}
                            onChange={this.update()}
                            placeholder="Add your comment.."
                        />
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <br />
                <CommentBox 
                    body={this.state.newComment}
                    comments={this.props.comments} 
                    crawlId={this.props.match.params.id}
                    fetchUsers={this.props.fetchUsers}
                    users={this.props.users}
                    currentUser={this.props.currentUser}
                />
            </div>
        )
    }
}

    
    

    

       
        


export default withRouter(CommentCompose);
