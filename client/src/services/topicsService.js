import Axios from 'axios';

const topicsURL = '/api/topics';

export const getTopics = async () => {
  try {
    let response = await Axios.get(topicsURL);
    return response.data;
  } catch (err) {
    console.error(err.message);
  }
};
export const getTopic = async id => {
  try {
    let response = await Axios.get(`${topicsURL}/${id}`);
    return response.data;
  } catch (err) {
    console.error(err.message);
  }
};
export const createTopic = async topic => {
  try {
    console.log(topic);
    let response = await Axios.post(topicsURL, topic);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err.message);
  }
};

export const updateTopic = async topic => {
  try {
    let response = await Axios.put(`${topicsURL}/${topic._id}`, topic);
    return response.data;
  } catch (err) {
    console.error(err.message);
  }
};
export const deleteTopic = async id => {
  try {
    let response = await Axios.delete(`${topicsURL}/${id}`);
    return response.data;
  } catch (err) {
    console.error(err.message);
  }
};
