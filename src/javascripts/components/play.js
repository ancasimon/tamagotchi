import playData from '../helpers/data/playData';
import utils from '../helpers/utils';

const buildPlayComponent = () => {
  let domString = '<h2>PLAY</h2>';
  domString += '<h3>Rosie</h3>';
  domString += `<p>${playData.getFunScore}</p>`;
  domString += '<button id="superFun">Super Fun Activity</button>';
  domString += '<button id="slightlyFun">Just Slightly Fun Activity</button>';
  utils.printToDom('play', domString);
};

export default { buildPlayComponent };
