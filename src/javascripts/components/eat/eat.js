import petData from '../../helpers/data/petData';
import './eat.scss';
import utils from '../../helpers/utils';

const buildEatComponent = () => {
  const pet = petData.getPetData();
  let domString = '<div class="eat pet-quadrant">';
  domString += '<h2>EAT</h2>';
  domString += `<h3>${pet.name}</h3>`;
  domString += `<p>${pet.fullScore}</p>`;
  domString += '<button id="healthy">Healthy Food</button>';
  domString += '<button id="junk">Junk Food</button>';
  domString += '</div>';
  utils.printToDom('eat', domString);
};

const eatEvent = (e) => {
  const buttonId = e.target.id;
  petData.setFullScore(buttonId);
  buildEatComponent();
};

const eatButtonEvents = () => {
  $('body').on('click', '#healthy', eatEvent);
  $('body').on('click', '#junk', eatEvent);
};

export default { buildEatComponent, eatButtonEvents };
