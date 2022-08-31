import React from "react";
import { withRouter } from 'react-router-dom';

class CrawlEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.crawl;
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)

    }

    componentDidMount(){
        this.props.fetchCrawl(this.props.match.params.crawlId)
    }

    handleSubmit(e){
        const { updateCrawl} = this.props;

        e.preventDefault();
        const crawl = Object.assign({}, this.state);

        updateCrawl(crawl)
            // .then(() => history.push(`/users/${user.id}`));
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleClick(e){
        e.preventDefault();
        return(
            <h1>Hello</h1>
        )
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}
                    className='crawl-edit-form-box'
                >
                    <div className="crawl-edit-">
                        <input
                            type="text"
                            placeholder="Crawl Title"
                            // value={this.state.title}
                            onChange={this.update('title')}/>
                            <button onClick={this.handleClick}>Create Crawl</button>
                    </div>
                    <div>
                         <input
                            type="text"
                            placeholder="Crawl Title"
                            // value={this.state.title}
                            onChange={this.update('title')}/>
                    </div>
                    
                </form>
            </>
        )
    }

}

export default CrawlEdit;