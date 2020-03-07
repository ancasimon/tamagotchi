import sleepData from '../helpers/data/sleepData';
import utils from '../helpers/utils';

const buildSleepComponent = () => {
  let domString = '<h2>SLEEP</h2>';
  domString += '<h3>Rosie</h3>';
  domString += `<p>${sleepData.getEnergyScore()}</p>`;
  domString += '<button id="nap">Napped!</button>';
  domString += '<button id="slumber">Really slept!!</button>';
  utils.printToDom('sleep', domString);
};

export default { buildSleepComponent };
