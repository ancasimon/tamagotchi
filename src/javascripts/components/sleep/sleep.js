import petData from '../../helpers/data/petData';
import utils from '../../helpers/utils';
import './sleep.scss';

const buildSleepComponent = () => {
  const pet = petData.getPetData();
  let domString = '<div class="sleep pet-quadrant">';
  domString += '<h2>SLEEP</h2>';
  domString += `<h3>${pet.name}</h3>`;
  domString += `<p>${pet.energyScore}</p>`;
  domString += '<button id="nap">Napped!</button>';
  domString += '<button id="slumber">Really slept!!</button>';
  domString += '</div>';
  utils.printToDom('sleep', domString);
};

const sleepEvent = (e) => {
  const buttonId = e.target.id;
  petData.setEnergyScore(buttonId);
  buildSleepComponent();
};

const sleepButtonEvents = () => {
  $('body').on('click', '#nap', sleepEvent);
  $('body').on('click', '#slumber', sleepEvent);
};


export default { buildSleepComponent, sleepButtonEvents };
