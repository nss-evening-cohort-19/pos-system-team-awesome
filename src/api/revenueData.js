import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getRevenue = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/revenue.json?orderBy="firebaseKey"&equalTo="${firebaseKey}`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((reject));
});

const createRevenue = (revenueObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/revenue.json`, revenueObj)
    .then((response) => {
      // Remember to pass in a payload
      const authPayload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/revenue/${authPayload.firebaseKey}.json`, authPayload)
        .then(() => {
          getRevenue(revenueObj).then(resolve);
        });
    }).catch(reject);
});

const updateRevenue = (revenueObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/revenue/${revenueObj.firebaseKey}.json`, revenueObj)
    .then(() => getRevenue().then(resolve))
    .catch(reject);
});

const deleteRevenue = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/revenue/${firebaseKey}.json`)
    .then(() => {
      getRevenue().then((revenueArray) => resolve(revenueArray));
    })
    .catch(reject);
});

export {
  getRevenue,
  createRevenue,
  updateRevenue,
  deleteRevenue
};
