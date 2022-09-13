import axios from "axios";

export const fetchAllCrawls = () => {
  return axios.get("/api/crawls/");
};

export const fetchCrawl = (id) => {
  return axios.get(`/api/crawls/${id}`);
};

export const updateCrawl = (crawl) => {

    return axios.patch(`/api/crawls/${crawl.id}`, crawl);
}



export const createCrawl = async (crawl) => {
  let crawlAll = await axios.post("/api/crawls");
  return crawlAll;
};
export const getCrawlsByUser = async(userId) => {
  let getcrawl = await axios.get(`/api/crawls/users/${userId}`);
  console.log("Data=========>",getcrawl)
  return getcrawl;
}