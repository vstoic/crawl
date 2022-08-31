import axios from "axios";

export const fetchAllCrawls = () => {
    return axios.get("/api/crawls/");
};

export const fetchCrawl = id => {
    return axios.get(`/api/crawls/${id}`);
};

export const createCrawl = (crawl) => {
    return axios.post('/api/crawls', crawl);
};

export const updateCrawl = (crawl) => {
    return axios.patch(`/api/crawls/${crawl.id}`, crawl);
};