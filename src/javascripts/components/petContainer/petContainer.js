// import eat from '../eat/eat';
import utils from '../../helpers/utils';

import eat from '../eat/eat';
import fight from '../fight/fight';
import play from '../play/play';
import sleep from '../sleep/sleep';

import './petContainer.scss';


const buildPetContainer = () => {
  let domString = '<div class="pet-container">';
  domString += eat.buildEatComponent();
  domString += play.buildPlayComponent();
  domString += fight.buildFightComponent();
  domString += sleep.buildSleepComponent();
  domString += '</div>';
  utils.printToDom('app', domString);
};

export default { buildPetContainer };
