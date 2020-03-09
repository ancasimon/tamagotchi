import petData from '../../helpers/data/petData';
import utils from '../../helpers/utils';

import './sleep.scss';

const buildSleepComponent = () => {
  const pet = petData.getPetData();
  let domString = '<h2>SLEEP</h2>';
  domString += `<h3>${pet.name}</h3>`;
  domString += `<p>${pet.energyScore}</p>`;
  domString += '<button id="nap">Napped!</button>';
  domString += '<button id="slumber">Really slept!!</button>';
  utils.printToDom('sleep', domString);
};

export default { buildSleepComponent };
