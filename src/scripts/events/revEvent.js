import { renderRevenue } from '../components/showRevenue';

const revEvent = () => {
  document.querySelector('#revLink').addEventListener('click', () => {
    renderRevenue();
  });
};

export default revEvent;
