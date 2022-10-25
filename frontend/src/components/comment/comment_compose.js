import React from "react";
import { withRouter } from "react-router-dom";
import CommentBox from "./comment_box";

class CommentCompose extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            crawl_id: this.props.crawlId,
            user_id: this.props.currentUser?.id,
            newComment: "",
            commentsReader:[]
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        this.setState({commentsReader:this.props.comments})
    }
    handleSubmit(e) {
        e.preventDefault();
        const comment = {
            body: this.state.body,
            crawl_id: this.props.crawlId,
            user_id: this.props.currentUser?.id,
        };
        this.props.composeComment(comment);
        this.setState({ body: ''})
    }
    update() {
        return e => this.setState({ body: e.currentTarget.value });
    }
    componentDidUpdate(prevProps){
        if(prevProps.newComment != this.props.newComment){
            
            this.setState({          
                newComment: this.props.newComment
            });
        }
    }
    render() {
        return (
            <div className="main-create-comment-container">
                <br />
                  <CommentBox 
                    body={this.props.newComment }
                    comments={this.props.comments} 
                    crawlId={this.props.match.params?.id}
                    fetchUsers={this.props.fetchUsers}
                    users={this.props.users}
                    currentUser={this.props.currentUser}
                />
                <form onSubmit={this.handleSubmit} className="create-comment-container">
                    <textarea
                        value={this.state.body}
                        onChange={this.update()}
                        placeholder="Add your comment.."
                        required
                    />
                    <br/>
                    <input className="comment-submit" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
export default withRouter(CommentCompose);
