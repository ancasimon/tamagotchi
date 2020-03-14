const pet = {
  id: 'pet1',
  name: 'Rosie',
  fullScore: 10,
  funScore: 50,
  strengthScore: 100,
  energyScore: 50,
};

const getPetData = () => pet;

const setFullScore = (e) => {
  const buttonId = e.target.id;
  if (pet.fullScore <= 90 && buttonId === '#healthy') {
    pet.fullScore += 10;
  } else if (pet.fullScore > 90 && buttonId === '#healthy') {
    pet.fullScore = 100;
  } else if (pet.fullScore >= 3 && buttonId === '#junk') {
    pet.fullScore -= 3;
  } else if (pet.fullScore < 3 && buttonId === '#junk') {
    pet.fullScore = 0;
  }
};

export default { getPetData, setFullScore };
