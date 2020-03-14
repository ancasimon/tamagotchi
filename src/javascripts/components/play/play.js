import petData from '../../helpers/data/petData';
import './play.scss';

const buildPlayComponent = () => {
  const pet = petData.getPetData();
  let domString = '<div class="play pet-quadrant">';
  domString += '<h2>PLAY</h2>';
  domString += `<h3>${pet.name}</h3>`;
  domString += `<p>${pet.funScore}</p>`;
  domString += '<button id="superFun">Super Fun Activity</button>';
  domString += '<button id="slightlyFun">Just Slightly Fun Activity</button>';
  domString += '</div>';
  return domString;
};

export default { buildPlayComponent };
