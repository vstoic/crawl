import React from "react";
import { withRouter } from 'react-router-dom';

class CrawlEdit extends React.Component {
   constructor(props){
    super(props);

       this.state = {
           category: '',
           title: '',
           description: '',
           cost: '',
           time: '',
           distance: ''
       };

    this.handleSubmit = this.handleClick.bind(this);
   }
   
    componentDidMount(){
        this.props.fetchCrawl(this.props.match.params.crawlId)
    }

    handleSubmit(e){
        const { createCrawl, user } = this.props;

        e.preventDefault();
        const crawl = Object.assign({}, this.state);

        createCrawl(crawl)
            .then(() => history.push(`/users/${user.id}`));
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render() {
        return(
            <>
                <form onSubmit={this.handleSubmit}
                     className='crawl-edit-form-box'>
                    <div className="crawl-edit-">
                        <input 
                            type="text" 
                            placeholder="Crawl Title"
                            value={this.state.title}
                            onChange={this.update('title')}>
                    </div>
                </form>
            </>
        )
    }

}

export default CrawlEdit;