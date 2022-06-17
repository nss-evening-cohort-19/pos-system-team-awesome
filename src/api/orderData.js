import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getOrders = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const deleteOrders = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/orders/${firebaseKey}.json`)
    .then(() => {
      getOrders().then((ordersArray) => resolve(ordersArray));
    })
    .catch((reject));
});

const createOrder = (cardObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/orders.json`, cardObject)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/orders/${response.data.name}.json`, payload)
        .then(() => {
          getOrders(cardObject).then(resolve);
        });
    }).catch(reject);
});

export {
  getOrders,
  deleteOrders,
  createOrder
};
