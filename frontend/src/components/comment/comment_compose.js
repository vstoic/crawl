import React from "react";
import { withRouter } from "react-router-dom";
import CommentBox from "./comment_box_container";

class CommentCompose extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            crawl_id: this.props.crawlId,
            user_id: this.props.currentUser?.id,
            newComment: "",
            commentsReader:[],
            comments: this.props.comments
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.forceRender = this.forceRender.bind(this);
    }
    async componentDidMount(){
        this.setState({commentsReader:this.props.comments})
        await this.props.fetchCrawlComments(this.props.crawlId)
        .then((response)=>{
            this.setState({
                comments: response.comments.data
            })
        })
    };

    


    handleSubmit(e) {
        e.preventDefault();
        const comment = {
            body: this.state.body,
            crawl_id: this.props.crawlId,
            user_id: this.props.currentUser?.id,
           
        };
        this.props.composeComment(comment)
        .then(async()=>{
            await this.props.fetchCrawlComments(this.props.crawlId)
            .then((response)=>{
                this.setState({
                    comments: response.comments.data
                })
            })
        })
        this.setState({ body: ''})
    }
    update() {
        return e => this.setState({ body: e.currentTarget.value });
    }
    // componentDidUpdate(prevProps){
    //     if(prevProps.newComment !== this.props.newComment){
            
    //         this.setState({          
    //             newComment: this.props.newComment
    //         });
    //     }
    // }

    async forceRender(){
        await this.props.fetchCrawlComments(this.props.crawlId)
            .then((response)=>{
                this.setState({
                    comments: response.comments.data
                })
            })
    }
    render() {
        // console.log(this.props.comments)
        return (
            <div className="main-create-comment-container">
                <br />
                  <CommentBox 
                    body={this.props.newComment }
                    comments={this.state.comments} 
                    crawlId={this.props.match.params?.id}
                    fetchUsers={this.props.fetchUsers}
                    users={this.props.users}
                    currentUser={this.props.currentUser}
                    forceRender={this.forceRender}
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
