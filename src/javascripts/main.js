import petData from './helpers/data/petData';
import '../styles/main.scss';
import 'jquery';
import eat from './components/eat/eat';
import fight from './components/fight/fight';
import play from './components/play/play';
import sleep from './components/sleep/sleep';

const init = () => {
  petData.getPetData();
  eat.buildEatComponent();
  fight.buildFightComponent();
  play.buildPlayComponent();
  sleep.buildSleepComponent();
  eat.eatButtonEvents();
  play.playButtonEvents();
  fight.fightButtonEvents();
  sleep.sleepButtonEvents();
};

init();
