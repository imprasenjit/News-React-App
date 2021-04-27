import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const userBaseUrl = 'https://hacker-news.firebaseio.com/v0/user/';
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const askstoriesURL = `${baseUrl}askstories.json`;
export const showstoriesURL = `${baseUrl}showstories.json`;
export const jobstoriesURL = `${baseUrl}jobstories.json`;

export const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyId) => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`);

  //return selectFields(result.data);
  return result.data;
};
export const getUserDetail = async (userID) => {
  const result = await axios
    .get(`${userBaseUrl + userID}.json`);
  //return selectFields(result.data);
  return result.data;
};

export const getStoryIds = async (val) => {
  let url="";
  console.log(typeof(val));
  switch(val){
    case "Top":url=topStoriesUrl;break;
    case "Ask":url=askstoriesURL;break;
    case "Show":url=showstoriesURL;break;
    case "Job":url=jobstoriesURL;break;
    default:url=topStoriesUrl;break;
  }
  const result = await axios.get(url);
  return result.data;
};

  