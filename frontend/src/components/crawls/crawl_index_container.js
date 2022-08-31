import { connect } from "react-redux";
import CrawlIndex from "./crawl_index";
import { fetchAllCrawls } from "../../actions/crawl_actions";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    crawlsReducer: state.crawlsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCrawls: () => dispatch(fetchAllCrawls()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CrawlIndex);
