import React from 'react';

class CommentBox extends React.Component {
    
    componentDidMount() {
        this.props.fetchUsers()
    }

    renderName = (user_id) => {
        let text = this.props.users?.data?.find((x) => x._id == user_id)?.username;
        return text;
    };
        
    render() {
        const { comments, text } = this.props
        return (
            <>
                <div>
                    <h3>{text}</h3>
                </div>
                <div>
                {(comments || []).map((item) => (
                    <div key={item._id}>
                     {this.renderName(item.user_id)}:
                     {item.body}
                     
                
            </div>
          ))}
                </div>
            </>
        );
    }
}

export default CommentBox;