import petData from '../../helpers/data/petData';

import './fight.scss';

const buildFightComponent = () => {
  const pet = petData.getPetData();
  let domString = '<div class="fight pet-quadrant">';
  domString += '<h2>FIGHT</h2>';
  domString += `<h3>${pet.name}</h3>`;
  domString += `<p>${pet.strengthScore}</p>`;
  domString += '<button id="ran">Ran</button>';
  domString += '<button id="violence">Committed Violence</button>';
  domString += '</div>';
  return domString;
};

export default { buildFightComponent };
