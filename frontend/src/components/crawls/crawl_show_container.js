import { connect } from "react-redux";
// import VenueSection from "./venue_show";
import crawlShow from "./crawl_show"
import { fetchCrawl, updateCrawl} from "../../actions/crawl_actions";
import { fetchAllVenues } from "../../actions/venue_actions";
import { composeComment, fetchCrawlComments } from "../../actions/comment_actions";
import { fetchUsers } from "../../actions/user_actions";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    crawlsReducer: state.entities.crawls,
    venueReducer: state.entities.venues,
    session:state.session,
    venue: Object.values(state.entities.venues),
    comments: state.entities.comments.crawl,
    users: state.entities.users,
    currentUser: state.session.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCrawl: (id) => dispatch(fetchCrawl(id)),
    fetchAllVenues: () => dispatch(fetchAllVenues()),
    updateCrawl: (crawl) => dispatch(updateCrawl(crawl)),
    fetchCrawlComments: (crawlId) => dispatch(fetchCrawlComments(crawlId)),
    fetchUsers: () => dispatch(fetchUsers()),
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(crawlShow);
