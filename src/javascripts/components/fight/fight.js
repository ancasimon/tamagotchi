import petData from '../../helpers/data/petData';
import utils from '../../helpers/utils';

import './fight.scss';

const buildFightComponent = () => {
  const pet = petData.getPetData();
  let domString = '<h2>FIGHT</h2>';
  domString += `<h3>${pet.name}</h3>`;
  domString += `<p>${pet.strengthScore}</p>`;
  domString += '<button id="ran">Ran</button>';
  domString += '<button id="violence">Committed Violence</button>';
  utils.printToDom('fight', domString);
};

export default { buildFightComponent };
