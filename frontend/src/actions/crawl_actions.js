import * as CrawlApiUtil from "../util/crawl_api_util.js";

export const RECEIVE_ALL_CRAWLS = "RECEIVE_ALL_CRAWLS";
export const RECEIVE_CRAWL = "RECEIVE_CRAWL";
export const RECEIVE_CRAWL_USER = "RECEIVE_CRAWL_USER"

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
})
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
);


export const createCrawl = (crawl) => (dispatch) => {
  return CrawlApiUtil.createCrawl(crawl)
  .then((crawl) => dispatch(receiveCrawl(crawl)));
};
export const fetchCrawlByUser = (userId) => (dispatch) => {
  CrawlApiUtil.getCrawlsByUser(userId).then((crawl)=>{
    dispatch(receiveCrawlUser(crawl))
  })
}

      

