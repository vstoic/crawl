import axios from "axios";

export const fetchAllCrawls = () => {
    return axios.get("/api/crawls/");
};

export const fetchCrawl = id => {
    return axios.get(`/api/crawls/${id}`);
};

export const createCrawl = async (crawl) => {
    let crawlAll = await axios.post('/api/crawls');
    console.log("CrawlAll=======>",crawlAll)
    return crawlAll
};