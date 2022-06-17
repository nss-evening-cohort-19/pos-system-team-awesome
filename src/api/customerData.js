import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// Get all customers
const getCustomers = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/customers.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const deleteCustomer = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/customers/${firebaseKey}.json`)
    .then(() => {
      getCustomers().then((customerArray) => resolve(customerArray));
    }).catch(reject);
});

const createCustomer = (customerObject) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/customers.json`, customerObject)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios
        .patch(`${dbUrl}/customers/${response.data.name}.json`, payload)
        .then(() => {
          getCustomers().then((customerArray) => resolve(customerArray));
        });
    })
    .catch((error) => reject(error));
});

const updateCustomer = (customerObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/customers/${customerObject.firebaseKey}.json`, customerObject)
    .then(() => getCustomers(customerObject))
    .then(resolve)
    .catch(reject);
});

export {
  getCustomers, deleteCustomer, createCustomer, updateCustomer
};
