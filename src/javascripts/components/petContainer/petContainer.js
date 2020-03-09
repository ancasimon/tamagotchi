// import eat from '../eat/eat';
import utils from '../../helpers/utils';

import eat from '../eat/eat';
import fight from '../fight/fight';
import play from '../play/play';
import sleep from '../sleep/sleep';

import './petContainer.scss';


const buildPetContainer = () => {
  let domString = '<div class="pet-container">';
  domString += '<div>';
  // domString += '<div class="row">';
  domString += '<div class="eat pet-quadrant">';
  domString += eat.buildEatComponent();
  domString += '</div>';
  domString += '<div class="play pet-quadrant">';
  domString += play.buildPlayComponent();
  domString += '</div>';
  // domString += '</div>';
  // domString += '<div class="row">';
  domString += '<div class="fight pet-quadrant">';
  domString += fight.buildFightComponent();
  domString += '</div>';
  domString += '<div class="sleep pet-quadrant">';
  domString += sleep.buildSleepComponent();
  domString += '</div>';
  // domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  utils.printToDom('app', domString);
};

export default { buildPetContainer };
