import fightData from '../helpers/data/fightData';
import utils from '../helpers/utils';

const buildFightComponent = () => {
  let domString = '<h2>FIGHT</h2>';
  domString += '<h3>Rosie</h3>';
  domString += `<p>${fightData.getStrengthScore()}</p>`;
  domString += '<button id="ran">Ran</button>';
  domString += '<button id="violence">Committed Violence</button>';
  utils.printToDom('fight', domString);
};

export default { buildFightComponent };
