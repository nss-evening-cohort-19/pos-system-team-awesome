import axios from 'axios';

const dbUrl = 'https://hip-hop-pizza-and-wangs-default-rtdb.firebaseio.com';

const getMenuItems = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const createNewMenuItem = (itemObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/items.json`, itemObject)
    .then((response) => {
      const addFBK = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/items/${response.data.name}.json`, addFBK)
        .then(() => {
          getMenuItems().then((itemArray) => resolve(itemArray));
        });
    }).catch((error) => reject(error));
});

const updateMenuItem = (orderId) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/items/${orderId}.json`)
    .then(() => {
      getMenuItems().then((itemArray) => resolve(itemArray));
    }).catch((error) => reject(error));
});

const deleteMenuItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/items/${firebaseKey}.json`)
    .then(() => {
      getMenuItems().then((itemArray) => resolve(itemArray));
    }).catch((error) => reject(error));
});
const getSingleItem = (firebasekey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items.json?orderBy="firebasekey"&equalTo="${firebasekey}"`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getMenuItems,
  createNewMenuItem,
  updateMenuItem,
  deleteMenuItem,
  getSingleItem
};
