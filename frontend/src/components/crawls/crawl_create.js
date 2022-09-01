import React from "react";
import { withRouter } from 'react-router-dom';

class CrawlCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.crawl;
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)

    }

    componentDidMount() {
        this.props.fetchCrawl(this.props.match.params.crawlId)
    }

    handleSubmit(e) {
        const { createCrawl } = this.props;

        e.preventDefault();
        const crawl = Object.assign({}, this.state);

        createCrawl(crawl)
        // .then(() => history.push(`/users/${user.id}`));
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleClick(e) {
        e.preventDefault();
        return (
            <h1>Hello</h1>
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}
                    className='crawl-create-form-box'>
                    <div className="crawl-create-">
                        <input
                            type="text"
                            placeholder="Crawl Title"
                            // value={this.state.title}
                            onChange={this.create('title')} />
                        <button onClick={this.handleClick}>Create Crawl</button>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Crawl Title"
                            // value={this.state.title}
                            onChange={this.create('title')} />
                    </div>
                </form>
            </div>
        )
    }

}

export default CrawlEdit;