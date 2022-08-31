import React from "react";
import { connect } from "react-redux";
import { fetchCrawl, createCrawl } from "../../actions/crawl_actions";

const mapStateToProps = (state) => ({
    crawl: state.entities.crawls[ownProps.match.params.crawlId],
    user: state.session.user
})

const mapDispatchToProps = (dispatch) => ({
    fetchCrawl: crawlId => dispatch(fetchCrawl(crawlId)),
    createCrawl: crawl => dispatch(createCrawl(crawl))
})

export default connect(mapStateToProps, mapDispatchToProps)(CrawlEdit)