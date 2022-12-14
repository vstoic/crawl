
import { connect } from "react-redux";
import { fetchCrawl, updateCrawl } from "../../actions/crawl_actions";
import { fetchAllVenues } from "../../actions/venue_actions";
import CrawlEdit from "./crawl_edit";

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps)
    // debugger
    return {
    crawl: state.entities.crawls.byMo[ownProps.match.params.id],
    currentUser: state.session.user,
    allVenues: Object.values(state.entities.venues),
    errors: state.errors.crawl
}}

const mapDispatchToProps = (dispatch) => ({
    fetchCrawl: crawlId => dispatch(fetchCrawl(crawlId)),
    updateCrawl: crawl => dispatch(updateCrawl(crawl)),
    fetchAllVenues: () => dispatch(fetchAllVenues()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CrawlEdit)