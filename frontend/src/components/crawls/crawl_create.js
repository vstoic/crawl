import React from "react";
import { Link, withRouter } from "react-router-dom";

class CrawlForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            creator_id:this.props.currentUser.id,
            category: "",
            title: "",
            description: "",
            cost: "",
            time: "",
            distance: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.clearedErrors = false;
    }

    componentDidMount() {
        this.props.fetchAllVenues();
    }

    update(field) {
        return (e) =>
            this.setState({
                [field]: e.currentTarget.value,
            });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { createCrawl, login, history, currentUser } = this.props;
        const crawl = Object.assign({}, this.state);
        createCrawl(crawl).then(res => {
            history.push("/crawlShow/1234");
        });
    }

    render() {
        // debugger
        // const { errors } = this.props;

        return (
            <div className="session-background">
                <div className="session-image-container">
                    <img
                        className="logo-image"
                        src="https://i.postimg.cc/tRWyZch1/snail-logo.png"
                    />
                    <img
                        className="google-image"
                        src="https://i.postimg.cc/8zjb85Sr/Crawl-logo-transparent.png"
                    />
                </div>
                <div className="signup-container">
                    <div className="signup-text">
                        <h1 className="signup-text1">Create a Crawl</h1>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <select className="username-input"
                                    onChange={this.update("category")}
                            >
                                <option value="selected">Select a Category</option>
                                <option value={this.state.category}>Food and Drinks</option>
                                <option value={this.state.category}>Active Life</option>
                                <option value={this.state.category}>Arts and Entertainment</option>
                                <option value={this.state.category}>Night Life</option>
                                <option value={this.state.category}>Shopping</option>
                                <option value={this.state.category}>Wellness</option>
                                <option value={this.state.category}>Other</option>
                            </select>
                            {/* <div className="errors">{errors.category}</div> */}
                            <textarea
                                className="username-input"
                                type="description"
                                value={this.state.description}
                                onChange={this.update("description")}
                                placeholder="Description: What's your crawl all about?."
                            />
                            {/* <div className="errors">{errors.description}</div> */}

                            <input
                                className="username-input"
                                type="cost"
                                value={this.state.cost}
                                onChange={this.update("cost")}
                                placeholder="$$$"
                            />
                            {/* <div className="errors">{errors.cost}</div> */}
                            <input
                                className="username-input"
                                type="text"
                                value={this.state.title}
                                onChange={this.update("title")}
                                placeholder="Title"
                            />
                            {/* <div className="errors">{errors.title}</div> */}
       
                        
                            <input
                                className="username-input"
                                type="text"
                                value={this.state.time}
                                onChange={this.update("time")}
                                placeholder="Time: How long will this crawl take?"
                            />
                            {/* <div className="errors">{errors.time}</div> */}

                            <input
                                className="username-input"
                                type="distance"
                                value={this.state.distance}
                                onChange={this.update("distance")}
                                placeholder="Distance: How much traveling between venues?"
                            />
                            {/* <div className="errors">{errors.distance}</div> */}

                            <div>
                                <p>Venues</p>
                                <select>
                                    <option value="selected" selected>Select a Venue</option>
                                    {
                                        this.props.venues.map(venue => (
                                            <option value={this.state.category}>{venue.name}</option>
                                        )

                                        )
                                    }
                                </select>
                                <div>
                                    <button>Add Venue</button>
                                </div>
                            </div>

                            <br />
                            <input className="submit-signup" type="submit" value="Create Crawl" />

                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(CrawlForm);
