import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { updateComment } from '../../util/comment_api_util';
class CommentBox extends React.Component {
     constructor(props){
        super(props)
        this.state={
            isEdit:false,
            id:null,
            bodyText:''
        }
     }
    componentDidMount() {
        this.props.fetchUsers()
    }

    renderName = (user_id) => {
        let text = this.props.users?.data?.find((x) => x._id == user_id)?.username;
        text += ": "
        return text;
    };

 handleInputChange = async(e,id,crawl_id,index)=>{
    //  console.log( e.target.value ,index );
     this.setState({indexCheck:index})
     var obj = {
        id:id,
        body:e.target.value,
        crawl_id:crawl_id,
        user_id:this.props.currentUser.id,
        indexCheck :null
     }

    await updateComment(obj)
  this.props.comments[index].body = e.target.value
}
    render() {
        const {comments, text, body, crawlId} = this.props
        // console.log("PropsComments=====>",this.props)
        return (
            <div className='main-comment-container'>
                {body && crawlId == body.crawl_id && (
                <div className='comment-container'>
                    {this.renderName(body.user_id)}: 
                    {body.body}
                </div>
                )}
                <div className='comment-container'>
                {(comments || []).map((item,index) => (
                    <div key={item._id} className="each-comment">
                        {this.state.isEdit && item._id == this.state.id  ?
                         <input type = 'text' onChange={(e)=>this.handleInputChange(e,item._id,item.crawl_id,index)} defaultValue = {item.body}/>: 
                    (<div className='each-comment'>
                        {this.renderName(item.user_id)}
                        {item.body}
                        </div>
                    )
                    }
                   {/* {item.user_id == this.props.currentUser.id && this.state.indexCheck != index   && (
                    <Link onClick={()=>this.setState({isEdit:!this.state.isEdit,id:item._id})} >
                    <img className="edit-icon" src="https://i.postimg.cc/mkny8198/edit-icon.png" alt="" /></Link>
                   )}
                    
                    {item.user_id == this.props.currentUser.id && this.state.indexCheck == index   && (
                    <Link onClick={()=>this.setState({isEdit:!this.state.isEdit,id:item._id,indexCheck:null})} >Done</Link>
                   )} */}
                </div>
            ))}
            </div>
        </div>
        );
    }
}

export default CommentBox;