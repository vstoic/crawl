import React from "react";
import { connect } from "react-redux";
import { fetchCrawl, } from "../../actions/crawl_actions";
import CrawlEdit from "./crawl_edit";

const mapStateToProps = (state, ownProps) => ({
    crawl: state.entities.crawls.allIds[ownProps.match.params.crawlId],
    user: state.session.user
})

const mapDispatchToProps = (dispatch) => ({
    fetchCrawl: crawlId => dispatch(fetchCrawl(crawlId)),
    createCrawl: crawl => dispatch(fetchCrawl(crawl))
})

export default connect(mapStateToProps, mapDispatchToProps)(CrawlEdit)