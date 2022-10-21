import React from "react";
import { withRouter } from 'react-router-dom';


class CrawlEdit extends React.Component {
    constructor(props) {
        super(props);
        let { category, description, cost, title, time, distance, venues, _id, creator_id, votecount, users
        } = this.props.crawl;
       
        this.state = {
            creator_id,
            category,
            title,
            cost,
            time,
            distance,
            venues,
            votecount,
            users,
            description,
            _id,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        // console.log(field)
        return e => 
        this.setState({
            [field]: e.currentTarget.value,           
        });
    }

  
    handleSubmit(e) {
        e.preventDefault();
        const { updateCrawl, history, errors } = this.props;
        const crawl = Object.assign({}, this.state);
        // console.log(crawl)
        updateCrawl(crawl)

        // if (!errors) {
        //      history.push(`/crawl/${crawl._id}`)
        // }
        

        .then((res) => { 
            if(res.type === "RECEIVE_CRAWL_ERRORS"){
                return
            }
           return history.push(`/crawl/${crawl._id}`);
        });
    }

   
    componentDidMount() {
        // debugger
        this.props.fetchAllVenues()
        this.props.fetchCrawl(this.props.match.params.id)
            .then((response) => {
                // console.log(response.crawl.data)
                this.setState({ crawl: response.crawl.data })
            })
    
        // const fetchCrawl = this.props.fetchCrawl(this.props.match.params.id)
        // this.setState({crawl : fetchCrawl});
    }

    // componentWillUnmount(){

    // }

    addVenue = (e) => {
        e.preventDefault();
        const newVenues = Object.assign([], this.state.venues)
        const venue_id = this.state.venue;
        if(!newVenues.includes(venue_id)) {
            newVenues.push(venue_id)
        }
        this.setState({ venues: newVenues })
        // console.log(this.state.venues)
    }

    removeVenue = (idx) => {
        const newVenues = Object.assign([], this.state.venues)
        newVenues.splice(idx, 1)
        this.setState({ venues: newVenues })
        // delete newVenues[idx]
    //   return this.state.venues.remove(venue_id)
    //    this.state.venues.splice(idx, 1)
    }
    
  

   

    handleClick(e){
        e.preventDefault(); 
    }

    render() {
        // debugger

        const { crawl, errors } = this.props;

        if (!crawl) {
            return null
        }

        
        const renderName = (id) => {
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
                        <h1 className="signup-text1">Edit Crawl</h1>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="venue-create-form">
                            {/* <p>Category</p> */}
                            <select className="venue-input-cost"
                                    onChange={this.update("category")}
                            >
                                <option value="defaultValue">{this.state.category}</option>
                                <option value={"Food and Drinks"}>Food and Drinks</option>
                                <option value={"Active Life"}>Active Life</option>
                                <option value={"Arts and Entertainment"}>Arts and Entertainment</option>
                                <option value={"Night Life"}>Night Life</option>
                                <option value={"Shopping"}>Shopping</option>
                                <option value={"Wellness"}>Wellness</option>
                                <option value={"Other"}>Other</option>
                            </select>
                            
                            <div className="errors">{errors.category}</div> 

                            {/* <p>Description</p> */}
                            <textarea
                                className="venue-input"
                                type="description"
                                value={this.state.description}
                                onChange={this.update("description")}
                                placeholder="Description: What's your crawl all about?."
                            />


                            <div className="errors">{errors.description}</div>

                            
                            {/* <p>Cost</p> */}
                            <select className="venue-input-cost"
                                    onChange={this.update("cost")}
                            >
                                <option value="defaultValue">{this.state.cost}</option>
                                <option value={"$"}>$</option>
                                <option value={"$$"}>$$</option>
                                <option value={"$$$"}>$$$</option>
                                <option value={"$$$$"}>$$$$</option>
                                <option value={"$$$$$"}>$$$$$</option>
                            </select>

                            <div className="errors">{errors.cost}</div>

                            {/* <p>Title</p> */}
                            <input
                                className="venue-input"
                                type="text"
                                value={this.state.title}
                                onChange={this.update("title")}
                                placeholder="Title"
                            />


                            <div className="errors">{errors.title}</div>
       
                            {/* <p>Time</p> */}
                            <input
                                className="venue-input"
                                type="text"
                                value={this.state.time}
                                onChange={this.update("time")}
                                placeholder="Time: How long will this crawl take?"
                            />


                            <div className="errors">{errors.time}</div>
                            {/* <p>Distance</p> */}
                            <input
                                className="venue-input"
                                type="distance"
                                value={this.state.distance}
                                onChange={this.update("distance")}
                                placeholder="Distance: How much traveling between venues?"
                            />

                            <div className="errors">{errors.distance}</div>

                            <div>
                                <span>Venues</span>
                                <ul className='selected-venues'>
                                     {
                                        this.state.venues.map((venue_id, idx) => 
                                            <li className="selected-exercises-individuals">
                                                    <div>{renderName(venue_id)}</div>
                                                    <button className="button" id="remove-from-list" onClick={() => this.removeVenue(idx)}>Remove Venue</button>  
                                            </li>
                                        )}
                                </ul>

                                   

                                <select 
                                    onChange={this.update("venue")}
                                    className="venue-input-cost"
                                >
                                    <option value="defaultValue">Select a Venue</option>
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
                                <div>
                                    <button onClick={this.addVenue}>Add Venue</button>
                                </div>
                            </div>

                            <br />
                            <input 
                                className="submit-signup" 
                                type="submit" 
                                value="Edit Crawl"
                            />
                        </div>
                    </form>
                </div>
            </div>


        );
    }
}

export default withRouter(CrawlEdit);