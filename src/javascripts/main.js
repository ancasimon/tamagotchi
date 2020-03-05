import '../styles/main.scss';
import eat from './components/eat';
import eatData from './helpers/data/eatData';
import play from './components/play';
import playData from './helpers/data/playData';
import fight from './components/fight';
import fightData from './helpers/data/fightData';
import sleep from './components/sleep';
import sleepData from './helpers/data/sleepData';

// eslint-disable-next-line consistent-return
const increaseFullScore = () => {
  const healthierScore = eatData.getFullScore + 10;
  if (healthierScore <= 100) {
    eat.buildEatComponent();
  } else {
    return 100;
  }
};

// eslint-disable-next-line consistent-return
const decreaseFullScore = () => {
  const lowerScore = eatData.getFullScore - 3;
  if (lowerScore <= 100) {
    eat.buildEatComponent();
  } else {
    return 100;
  }
};

// eslint-disable-next-line consistent-return
const increaseFunScore = () => {
  const superFunScore = playData.getFunScore + 50;
  if (superFunScore <= 100) {
    play.buildPlayComponent();
  } else {
    return 100;
  }
};

// eslint-disable-next-line consistent-return
const increaseFunScoreSlightly = () => {
  const slightlyFunScore = playData.getFunScore + 2;
  if (slightlyFunScore <= 100) {
    play.buildPlayComponent();
  } else {
    return 100;
  }
};

// eslint-disable-next-line consistent-return
const increaseStrengthScore = () => {
  const strongerScore = fightData.getStrengthScore + 50;
  if (strongerScore <= 100) {
    fight.buildFightComponent();
  } else {
    return 100;
  }
};

// eslint-disable-next-line consistent-return
const decreaseStrengthScore = () => {
  const lessStrongScore = fightData.getStrengthScore - 3;
  if (lessStrongScore <= 100) {
    fight.buildFightComponent();
  } else {
    return 100;
  }
};

// eslint-disable-next-line consistent-return
const increaseEnergyScore = () => {
  const postNapScore = sleepData.getEnergyScore + 50;
  if (postNapScore <= 100) {
    sleep.buildSleepComponent();
  } else {
    return 100;
  }
};

// eslint-disable-next-line consistent-return
const increaseEnergyScoreMore = () => {
  const postSleepScore = sleepData.getEnergyScore + 60;
  if (postSleepScore <= 100) {
    sleep.buildSleepComponent();
  } else {
    return 100;
  }
};


const init = () => {
  eat.buildEatComponent();
  play.buildPlayComponent();
  fight.buildFightComponent();
  sleep.buildSleepComponent();
  $('#healthy').click(increaseFullScore);
  $('#junk').click(decreaseFullScore);
  $('#superFun').click(increaseFunScore);
  $('#slightlyFun').click(increaseFunScoreSlightly);
  $('#ran').click(increaseStrengthScore);
  $('violence').click(decreaseStrengthScore);
  $('nap').click(increaseEnergyScore);
  $('slumber').click(increaseEnergyScoreMore);
};

init();
