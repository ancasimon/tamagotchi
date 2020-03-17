const pet = {
  id: 'pet1',
  name: 'Rosie',
  fullScore: 100,
  funScore: 50,
  strengthScore: 100,
  energyScore: 50,
};

const getPetData = () => pet;

const setFullScore = (buttonId) => {
  if (pet.fullScore <= 90 && buttonId === 'healthy') {
    pet.fullScore += 10;
  } else if (pet.fullScore > 90 && buttonId === 'healthy') {
    pet.fullScore = 100;
  } else if (pet.fullScore >= 3 && buttonId === 'junk') {
    pet.fullScore -= 3;
  } else if (pet.fullScore < 3 && buttonId === 'junk') {
    pet.fullScore = 0;
  }
};

const setFunScore = (buttonId) => {
  if (pet.funScore <= 50 && buttonId === 'superFun') {
    pet.funScore += 50;
  } else if (pet.fullScore > 50 && buttonId === 'superFun') {
    pet.funScore = 100;
  } else if (pet.funScore <= 98 && buttonId === 'slightlyFun') {
    pet.funScore += 2;
  } else if (pet.funScore > 98 && buttonId === 'slightlyFun') {
    pet.funScore = 100;
  }
};

const setStrengthScore = (buttonId) => {
  if (pet.strengthScore <= 99 && buttonId === 'ran') {
    pet.strengthScore += 1;
  } else if (pet.strengthScore > 99 && buttonId === 'ran') {
    pet.strengthScore = 100;
  } else if (pet.strengthScore >= 10 && buttonId === 'violence') {
    pet.strengthScore -= 10;
  } else if (pet.strengthScore < 10 && buttonId === 'violence') {
    pet.strengthScore = 0;
  }
};

const setEnergyScore = (buttonId) => {
  if (pet.energyScore <= 50 && buttonId === 'nap') {
    pet.energyScore += 50;
  } else if (pet.energyScore > 50 && buttonId === 'nap') {
    pet.energyScore = 100;
  } else if (pet.energyScore <= 40 && buttonId === 'slumber') {
    pet.energyScore += 60;
  } else if (pet.energyScore > 40 && buttonId === 'slumber') {
    pet.energyScore = 100;
  }
};

export default {
  getPetData, setFullScore, setFunScore, setStrengthScore, setEnergyScore,
};
