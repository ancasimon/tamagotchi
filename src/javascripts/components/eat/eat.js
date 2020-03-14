import petData from '../../helpers/data/petData';
// import utils from '../../helpers/utils';
import './eat.scss';

const buildEatComponent = () => {
  const pet = petData.getPetData();
  let domString = '<div class="eat pet-quadrant">';
  domString += '<h2>EAT</h2>';
  domString += `<h3>${pet.name}</h3>`;
  domString += `<p>${pet.fullScore}</p>`;
  domString += '<button id="healthy">Healthy Food</button>';
  domString += '<button id="junk">Junk Food</button>';
  domString += '</div>';
  return domString;
};

const buttonEvents = () => {
  $('body').on('click', '#healthy', petData.setFullScore());
  $('body').on('click', '#junk', petData.setFullScore());
};

export default { buildEatComponent, buttonEvents };
