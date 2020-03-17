import petData from '../../helpers/data/petData';
import './play.scss';
import utils from '../../helpers/utils';

const buildPlayComponent = () => {
  const pet = petData.getPetData();
  let domString = '<div class="play pet-quadrant">';
  domString += '<h2>PLAY</h2>';
  domString += `<h3>${pet.name}</h3>`;
  domString += `<p>${pet.funScore}</p>`;
  domString += '<button id="superFun">Super Fun Activity</button>';
  domString += '<button id="slightlyFun">Just Slightly Fun Activity</button>';
  domString += '</div>';
  utils.printToDom('play', domString);
};

const playEvent = (e) => {
  const buttonId = e.target.id;
  petData.setFunScore(buttonId);
  buildPlayComponent();
};

const playButtonEvents = () => {
  $('body').on('click', '#superFun', playEvent);
  $('body').on('click', '#slightlyFun', playEvent);
};

export default { buildPlayComponent, playButtonEvents };
