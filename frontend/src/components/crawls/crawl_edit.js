import React, {useState, useEffect} from "react";
import { withRouter } from 'react-router-dom';


class CrawlEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            crawl: this.props.crawl
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

   
    componentDidMount(){
        this.props.fetchAllVenues();
        this.props.fetchCrawl(this.props.match.params.id)
            .then((response) => {
                console.log(response.crawl.data)
                this.setState({
                crawl: response.crawl.data
                })
            })
    
        // const fetchCrawl = this.props.fetchCrawl(this.props.match.params.id)
        // this.setState({crawl : fetchCrawl});
    }

    // componentWillUnmount(){

    // }

    
    handleSubmit(e){
        const { updateCrawl } = this.props;

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
    }

    render() {
        // debugger

        const { crawl } = this.props;

        if (!crawl) {
            return null
        }

        console.log(this.state.crawl.venues)
        const { errors } = this.props;
  
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
                        <div>
                            <select className="username-input"
                                    onChange={this.update("category")}
                            >
                                <option value="defaultValue">{this.state.crawl.category}</option>
                                <option value={"Food and Drinks"}>Food and Drinks</option>
                                <option value={"Active Life"}>Active Life</option>
                                <option value={"Arts and Entertainment"}>Arts and Entertainment</option>
                                <option value={"Night Life"}>Night Life</option>
                                <option value={"Shopping"}>Shopping</option>
                                <option value={"Wellness"}>Wellness</option>
                                <option value={"Other"}>Other</option>
                            </select>
                            
                            {/* <div className="errors">{errors.category}</div>  */}


                            <textarea
                                className="username-input"
                                type="description"
                                value={this.state.crawl.description}
                                onChange={this.update("description")}
                                placeholder="Description: What's your crawl all about?."
                            />


                            {/* <div className="errors">{errors.description}</div> */}

                            <input
                                className="username-input"
                                type="cost"
                                value={this.state.crawl.cost}
                                onChange={this.update("cost")}
                                placeholder="$$$"
                            />


                            {/* <div className="errors">{errors.cost}</div> */}


                            <input
                                className="username-input"
                                type="text"
                                value={this.state.crawl.title}
                                onChange={this.update("title")}
                                placeholder="Title"
                            />


                            {/* <div className="errors">{errors.title}</div> */}
       
                        
                            <input
                                className="username-input"
                                type="text"
                                value={this.state.crawl.time}
                                onChange={this.update("time")}
                                placeholder="Time: How long will this crawl take?"
                            />


                            {/* <div className="errors">{errors.time}</div> */}

                            <input
                                className="username-input"
                                type="distance"
                                value={this.state.crawl.distance}
                                onChange={this.update("distance")}
                                placeholder="Distance: How much traveling between venues?"
                            />

                            {/* <div className="errors">{errors.distance}</div> */}

                            <div>
                                <p>Venues</p>
                                <ul className='selected-venues'>
                                     {
                                        this.state.crawl.venues.map((venue_id, idx) => 
                                            <li className="selected-exercises-individuals">
                                                    <p>{renderName(venue_id)}</p>
                                                    <button className="button" id="remove-from-list" onClick={() => this.removeVenue(idx)}>Remove Venue</button>  
                                            </li>
                                        )}
                                </ul>

                                   

                                <select 
                                    onChange={this.update("venue")}
                                    className="username-input"
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

export default CrawlEdit;