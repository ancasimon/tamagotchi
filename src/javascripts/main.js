// import petData from './helpers/data/petData';
import 'jquery';
// import eat from './components/eat/eat';
import petContainer from './components/petContainer/petContainer';
// import play from './components/play/play';
// import fight from './components/fight/fight';
// import sleep from './components/sleep/sleep';
import '../styles/main.scss';


// // eslint-disable-next-line consistent-return
// const increaseFunScore = () => {
//   const superFunScore = playData.getFunScore() + 50;
//   if (superFunScore <= 100) {
//     play.buildPlayComponent();
//   } else {
//     return 100;
//   }
// };

// // eslint-disable-next-line consistent-return
// const increaseFunScoreSlightly = () => {
//   const slightlyFunScore = playData.getFunScore() + 2;
//   if (slightlyFunScore <= 100) {
//     play.buildPlayComponent();
//   } else {
//     return 100;
//   }
// };

// // eslint-disable-next-line consistent-return
// const increaseStrengthScore = () => {
//   const strongerScore = fightData.getStrengthScore() + 50;
//   if (strongerScore <= 100) {
//     fight.buildFightComponent();
//   } else {
//     return 100;
//   }
// };

// // eslint-disable-next-line consistent-return
// const decreaseStrengthScore = () => {
//   const lessStrongScore = fightData.getStrengthScore() - 3;
//   if (lessStrongScore <= 100) {
//     fight.buildFightComponent();
//   } else {
//     return 100;
//   }
// };

// // eslint-disable-next-line consistent-return
// const increaseEnergyScore = () => {
//   const postNapScore = sleepData.getEnergyScore() + 50;
//   if (postNapScore <= 100) {
//     sleep.buildSleepComponent();
//   } else {
//     return 100;
//   }
// };

// // eslint-disable-next-line consistent-return
// const increaseEnergyScoreMore = () => {
//   const postSleepScore = sleepData.getEnergyScore() + 60;
//   if (postSleepScore <= 100) {
//     sleep.buildSleepComponent();
//   } else {
//     return 100;
//   }
// };


const init = () => {
  // petData.getPetData();
  // eat.buildEatComponent();
  // eat.buttonEvents();
  petContainer.buildPetContainer();
  // play.buildPlayComponent();
  // fight.buildFightComponent();
  // sleep.buildSleepComponent();
  // $('#superFun').click(increaseFunScore);
  // $('#slightlyFun').click(increaseFunScoreSlightly);
  // $('#ran').click(increaseStrengthScore);
  // $('#violence').click(decreaseStrengthScore);
  // $('#nap').click(increaseEnergyScore);
  // $('#slumber').click(increaseEnergyScoreMore);
};

init();
