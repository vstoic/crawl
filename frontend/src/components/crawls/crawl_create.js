import React from "react";
import { withRouter } from "react-router-dom";

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
            distance: "",
            venue:[],
            venues: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addVenue = this.addVenue.bind(this);
        // this.clearedErrors = false;
    }
    
    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    componentDidMount() {
        this.props.fetchAllVenues();
        this.props.clearErrors();
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

   
    handleSubmit = async (e) => {
        e.preventDefault();
        const { history, createCrawl } = this.props;
        const crawl = Object.assign({}, this.state);
       await createCrawl(crawl)
       .then((response) => {
        if (response.crawl.data._id) {
          history.push(`/crawl/${response.crawl.data._id}`);
        }
    });
    //    if(crawl.id){
    //     history.push(`/crawl/{crawl.id}`)
    //    } 
    //    .then(history.push(`/crawl/{crawl.id}`))
        
        // removeCrawl = async (crawlId) => {
        //     const {deleteCrawl, currentUser, history} = this.props
        //     await deleteCrawl(crawlId);
        //       history.push("/");

        // if (newCrawl && errors.length === 0) {
        //      .then(
        //     history.push(`/crawl/{crawl.id}`)
        // );
            // history.push(`/crawl/{crawl.id}`);
        // }
    }
    addVenue = (e) => {
        e.preventDefault();
        const newVenues = Object.assign([], this.state.venues)
        const venue_id = this.state.venue;
        if(!newVenues.includes(venue_id)) {
            newVenues.push(venue_id)
        }
        this.setState({ venues: newVenues })
    }
    removeVenue = (idx) => {
        const newVenues = Object.assign([], this.state.venues)
        newVenues.splice(idx, 1)
        this.setState({ venues: newVenues })
        // delete newVenues[idx]
    //   return this.state.venues.remove(venue_id)
    //    this.state.venues.splice(idx, 1)
    }
    render() {
        const { errors } = this.props;
        const renderName = (id) => {
            // console.log("Data(renderName before)========>", props.venueReducer?.venues);
            let text = this.props.allVenues?.find((x) => x._id == id)?.name;
            return text;
          };
        return (
            <div className="session-background">
                <div className="session-image-container">
                    <img
                        className="google-image"
                        src="https://i.postimg.cc/05ZwPz18/Shining-bright-idea-light-bulb-with-cogs-on-transparent-background-PNG.png"
                    />
                </div>
                <div className="signup-container">
                    <div className="signup-text">
                        <h1 className="signup-text1">Create a Crawl</h1>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <select className="username-input"
                                    onChange={this.update("category")}>
                                <option value="defaultValue" selected="true" disabled="disabled">Select a Category</option>
                                <option value={"Food and Drinks"}>Food and Drinks</option>
                                <option value={"Active Life"}>Active Life</option>
                                <option value={"Arts and Entertainment"}>Arts and Entertainment</option>
                                <option value={"Night Life"}>Night Life</option>
                                <option value={"Shopping"}>Shopping</option>
                                <option value={"Wellness"}>Wellness</option>
                                <option value={"Other"}>Other</option>
                            </select>
                            <div className="errors">{errors.category}</div>
                            <textarea
                                className="username-input"
                                type="description"
                                value={this.state.description}
                                onChange={this.update("description")}
                                placeholder="Description: What's your crawl all about?."
                            />
                            <div className="errors">{errors.description}</div>
                            <select className="username-input"
                                    onChange={this.update("cost")}
                                >
                                <option value="defaultValue" selected="true" disabled="disabled">Select a Cost</option>
                                <option value={"$"}>$</option>
                                <option value={"$$"}>$$</option>
                                <option value={"$$$"}>$$$</option>
                                <option value={"$$$$"}>$$$$</option>
                                <option value={"$$$$$"}>$$$$$</option>
                            </select>
                            <div className="errors">{errors.cost}</div>
                            <input
                                className="username-input"
                                type="text"
                                value={this.state.title}
                                onChange={this.update("title")}
                                placeholder="Title"
                            />
                            <div className="errors">{errors.title}</div>
                            <input
                                className="username-input"
                                type="text"
                                value={this.state.time}
                                onChange={this.update("time")}
                                placeholder="Time: How long will this crawl take?"
                            />
                            <div className="errors">{errors.time}</div>
                            <input
                                className="username-input"
                                type="distance"
                                value={this.state.distance}
                                onChange={this.update("distance")}
                                placeholder="Distance: How much traveling between venues?"
                            />
                            <div className="errors">{errors.distance}</div>
                            <div>
                                <p>Venues</p>
                                <ul className='selected-venues'>
                                     {
                                        this.state.venues.map((venue_id, idx) => 
                                            <li key={idx} className="venues-list">
                                                    <p>{renderName(venue_id)}</p>
                                                    <button 
                                                        className="button" 
                                                        id="remove-from-list" 
                                                        onClick={() => this.removeVenue(idx)}>Remove Venue
                                                    </button>  
                                            </li>
                                        )}
                                </ul>
                                    {/* {
                                        this.props.allVenues.map(venue => (
                                            <VenueListItem
                                             key={venue._id}
                                             value="venue"
                                             venue={venue}
                                           />
                                            ))
                                    } */}
                                <select 
                                    onChange={this.update("venue")}
                                    className="username-input"
                                >
                                    <option value="defaultValue" selected="true" disabled="disabled">Select a Venue</option>
                                    {
                                        this.props.allVenues.map(venue => (
                                            <option
                                             key={venue._id}
                                             value={venue._id}
                                           >
                                            {venue.name}</option>
            
                                            ))
                                    }
                                </select>
                                <div className="errors">{errors.venues}</div>
                                <div>
                                    <button onClick={this.addVenue}>Add Venue</button>
                                </div>
                            </div>
                            <br />
                            <input 
                                className="submit-signup" 
                                type="submit" 
                                value="Create Crawl"
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(CrawlForm);
