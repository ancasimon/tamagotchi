import eatData from '../../helpers/data/eatData';
import utils from '../../helpers/utils';


const buildEatComponent = (score) => {
  let domString = '<h2>EAT</h2>';
  domString += '<h3>Rosie</h3>';
  domString += `<p>${score}</p>`;
  domString += '<button id="healthy">Healthy Food</button>';
  domString += '<button id="junk">Junk Food</button>';
  utils.printToDom('eat', domString);
};

export default { buildEatComponent };
