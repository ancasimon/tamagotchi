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
  // utils.printToDom('eat', domString);
  return domString;
};

// const updateFullScore = (e) => {
//   const pet = petData.getPetData();
//   if (pet.fullScore <= 90 && e.target.id === '#healthy') {
//     pet.fullScore += 10;
//   } else if (pet.fullScore > 90 && e.target.id === '#healthy') {
//     pet.fullScore = 100;
//   } else if (pet.fullScore >= 3 && e.target.id === '#junk') {
//     pet.fullScore -= 3;
//   } else if (pet.fullScore < 3 && e.target.id === '#junk') {
//     pet.fullScore = 0;
//   }
//   buildEatComponent();
// };

// const decreaseFullScore = () => {
//   const pet = petData.getPetData();
//   let lowerScore = pet.fullScore;
//   if (lowerScore >= 3) {
//     lowerScore -= 3;
//     buildEatComponent(lowerScore);
//   } else if (lowerScore < 3) {
//     lowerScore = 0;
//     buildEatComponent(lowerScore);
//   }
// };

// const buttonEvents = () => {
//   $('body').on('click', '#healthy', updateFullScore());
//   // $('body').on('click', '#junk', decreaseFullScore);
// };

export default { buildEatComponent };

// buttonEvents
