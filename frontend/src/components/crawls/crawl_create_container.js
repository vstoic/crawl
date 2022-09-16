import { connect } from "react-redux";
import { createCrawl, clearCrawlErrors } from "../../actions/crawl_actions";
import { fetchAllVenues } from "../../actions/venue_actions";
import CrawlForm from "./crawl_create";


const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        allVenues: Object.values(state.entities.venues),
        errors: state.errors.crawl,
        newCrawl: state.entities.crawls.byId.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createCrawl: (crawl) => dispatch(createCrawl(crawl)),
        fetchAllVenues: () => dispatch(fetchAllVenues()),
        clearErrors: () => dispatch(clearCrawlErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CrawlForm);
