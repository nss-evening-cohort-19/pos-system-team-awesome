import axios from 'axios';

const dbUrl = 'https://hip-hop-pizza-and-wangs-default-rtdb.firebaseio.com'

const getMenuItems = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/menus.json?orderBy="uid"&equalTo="${}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const createNewMenuItem = () => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/menus.json`, obj)
    .then((response) => {
      const addFBK = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/menus/${response.data.name}.json`, addFBK)
        .then(() => {
          getMenuItems().then((menusArray) => resolve(menusArray));
        });
    }).catch((error) => reject(error));
});

const updateMenuItem = (obj, firebaseKey) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/menus/${obj.firebaseKey || firebaseKey}.json`, obj)
    .then(() => {
      getMenuItems(obj.).then((menusArray) => resolve(menusArray));
    }).catch((error) => reject(error));
});

const deleteMenuItem = (firebaseKey, ) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/menus/${firebaseKey}.json`)
    .then(() => {
      getMyWords().then((menusArray) => resolve(menusArray));
    }).catch((error) => reject(error));
});

export {
  getMenuItems, 
  createNewMenuItem, 
  updateMenuItem, 
  deleteMenuItem
}
