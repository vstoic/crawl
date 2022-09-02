import { connect } from "react-redux";
import { createCrawl } from "../../actions/crawl_actions";
import { fetchAllVenues } from "../../actions/venue_actions";
import CrawlForm from "./crawl_create";

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        venues: state.entities.venues.venues
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createCrawl: (crawl) => dispatch(createCrawl(crawl)),
        fetchAllVenues: () => dispatch(fetchAllVenues())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CrawlForm);
