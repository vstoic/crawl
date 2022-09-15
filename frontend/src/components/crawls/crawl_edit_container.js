import React from "react";
import { connect } from "react-redux";
import { fetchCrawl, updateCrawl } from "../../actions/crawl_actions";
import { fetchAllVenues } from "../../actions/venue_actions";
import CrawlEdit from "./crawl_edit";

const mapStateToProps = (state) => ({
    // console.log(ownProps)
    crawl: state.entities.crawls.byId.data,
    user: state.session.user,
    allVenues: state.entities.venues.venues
})

const mapDispatchToProps = (dispatch) => ({
    fetchCrawl: crawlId => dispatch(fetchCrawl(crawlId)),
    updateCrawl: crawl => dispatch(updateCrawl(crawl)),
    fetchAllVenues: () => dispatch(fetchAllVenues()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CrawlEdit)