import axios from "axios";

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const fetchAllCrawls = () => {
  return axios.get("/api/crawls/");
};

export const fetchCrawl = (id) => {
  return axios.get(`/api/crawls/${id}`);
};

export const updateCrawl = (crawl) => {
    return axios.patch(`/api/crawls/${crawl.id}`, crawl);
}

export const createCrawl = async (crawlData) => {

  let create_crawl = await axios.post("/api/crawls", crawlData);
  console.log("create_crawl",create_crawl)
  return create_crawl
};
export const getCrawlsByUser = async(userId) => {
  let getcrawl = await axios.get(`/api/crawls/users/${userId}`);
  console.log("Data=========>",getcrawl)
  return getcrawl;
}

export const deleteCrawl = (crawlId) => {
  return axios.delete(`/api/crawls/${crawlId}`);
};