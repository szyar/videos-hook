import axios from 'axios';

const KEY = "AIzaSyDwbMjJlVzFPsEYob4sLhY_OgKJ-35Klcg";

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
