let Experience= 3;
let performance= 7;
let salary=5000; 
let bonusPercentage = 0;{
  if (yearsOfExperience > 5 && performanceScore > 8) {
    bonusPercentage = 20;
} else if (yearsOfExperience > 3 && yearsOfExperience <= 5 && performanceScore > 7) {
    bonusPercentage = 10;
} else if (yearsOfExperience <= 3) {
    bonusPercentage = 5;
}

}

 
  const bonus = (bonusPercentage / 100) * salary;
  return {
      bonusPercentage,
      bonus
  };
}

const yearsOfExperience = 4;
const performanceScore = 9;
const salary = 50000; 

const result = calculateBonus(yearsOfExperience, performanceScore, salary);
console.log(`Bonus Percentage: ${result.bonusPercentage}%`);
console.log(`Bonus Amount: $${result.bonus}`);
