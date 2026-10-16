function filterAdults(people) {
  return people.filter((person) => person.age >= 18);
}

module.exports = filterAdults;