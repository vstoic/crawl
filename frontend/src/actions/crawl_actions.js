import * as CrawlApiUtil from "../util/crawl_api_util.js";

export const RECEIVE_ALL_CRAWLS = "RECEIVE_ALL_CRAWLS";
export const RECEIVE_CRAWL = "RECEIVE_CRAWL";
export const RECEIVE_CRAWL_USER = "RECEIVE_CRAWL_USER"
export const REMOVE_CRAWL = 'REMOVE_CRAWL';
export const RECEIVE_CRAWL_ERRORS = 'RECEIVE_CRAWL_ERRORS';
export const CLEAR_CRAWL_ERRORS = 'CLEAR_CRAWL_ERRORS';

const receiveAllCrawls = (crawls) => ({
  type: RECEIVE_ALL_CRAWLS,
  crawls,
});

const receiveCrawl = (crawl) => ({
  type: RECEIVE_CRAWL,
  crawl,
});
const receiveCrawlUser = (crawl) =>({
  type: RECEIVE_CRAWL_USER,
  crawl
});

const removeCrawl = (crawlId) => ({
  type: REMOVE_CRAWL,
  crawlId,
});

const receiveCrawlErrors = errors => ({
  type: RECEIVE_CRAWL_ERRORS,
  errors
});

export const clearCrawlErrors = () => ({
  type: CLEAR_CRAWL_ERRORS
});



export const fetchAllCrawls = () => (dispatch) =>
  CrawlApiUtil.fetchAllCrawls().then((crawlsResponse) =>
    dispatch(receiveAllCrawls(crawlsResponse.data))
  );

export const fetchCrawl = (crawlId) => (dispatch) =>
  CrawlApiUtil.fetchCrawl(crawlId).then((crawl) =>
    dispatch(receiveCrawl(crawl))
  );


export const updateCrawl = (crawl) => dispatch => (
    CrawlApiUtil.updateCrawl(crawl)
        .then(payload => dispatch(receiveCrawl(payload.data)))
        .catch(err => dispatch(receiveCrawlErrors(err.response.data)))
);


export const createCrawl = (crawl) => (dispatch) => {
  return CrawlApiUtil.createCrawl(crawl)
  .then((crawl) => dispatch(receiveCrawl(crawl)))
  .catch(err => dispatch(receiveCrawlErrors(err.response.data)))
}

export const fetchCrawlByUser = (userId) => (dispatch) => {
  CrawlApiUtil.getCrawlsByUser(userId).then((crawl)=>{
    dispatch(receiveCrawlUser(crawl))
  })
}

export const deleteCrawl = (crawlId) => dispatch => (
  CrawlApiUtil.deleteCrawl(crawlId)
    .then(() => dispatch(removeCrawl(crawlId)))
);

      

