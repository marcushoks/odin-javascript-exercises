const findTheOldest = function (people) {
  const ages = people.reduce((array, { name, yearOfBirth, yearOfDeath }) => {
    const age = (yearOfDeath ?? new Date().getFullYear()) - yearOfBirth;
    array.push({ name, age });
    return array;
  }, []);

  const oldestAge = Math.max(...ages.map(({ age }) => age));
  return ages.find(({ age }) => age === oldestAge);
};

// Do not edit below this line
module.exports = findTheOldest;
