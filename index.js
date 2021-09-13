// SOURCE FOR THIS TUTORIAL: https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d



//---------------------------- .map() -------------------------
// I need a new array of only the id's
let officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
];

// using .forEach()
let officerIds = [];

officers.forEach((o) => {
    officerIds.push(o.id)
})

// using .map()
let officerIds2 = officers.map((o) => o.id)

// console.log(officerIds2)

// -------------------------- .reduce() ---------------------------

// I NEED TO STUDY THIS MORE

let pilots = [
  {
    id: 10,
    name: 'Poe Dameron',
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: 'Tallissan Lintra',
    years: 16,
  },
  {
    id: 99,
    name: 'Ello Asty',
    years: 22,
  },
];

// We need to know the total years of experience of all of them
let totalYears = pilots.reduce((accumulator, pilot) => accumulator + pilot.years, 0)

// console.log(totalYears) // 82

// I want to find which pilot is the most experienced one
let mostExpPilot = pilots.reduce((oldest, pilot) => {
    return (oldest.years || 0) > pilot.years ? oldest : pilot
}, {})

// -------------------------- .filter() ---------------------------

let pilots2 = [
  {
    id: 2,
    name: 'Wedge Antilles',
    faction: 'Rebels',
  },
  {
    id: 8,
    name: 'Ciena Ree',
    faction: 'Empire',
  },
  {
    id: 40,
    name: 'Iden Versio',
    faction: 'Empire',
  },
  {
    id: 66,
    name: 'Thane Kyrell',
    faction: 'Rebels',
  },
];

// Say we want two arrays now: one for rebel pilots, the other one for imperials

let rebels = pilots2.filter(pilot => pilot.faction === 'Rebels')
let empire = pilots2.filter(pilot => pilot.faction === 'Empire')

// console.log(rebels, empire) 

/**
 * [
  { id: 2, name: 'Wedge Antilles', faction: 'Rebels' },
  { id: 66, name: 'Thane Kyrell', faction: 'Rebels' }
] [
  { id: 8, name: 'Ciena Ree', faction: 'Empire' },
  { id: 40, name: 'Iden Versio', faction: 'Empire' }
]
 */

// -------------------- COMBINING .map(), reduce(), .filter() -----------------------

let personnel = [
  {
    id: 5,
    name: 'Luke Skywalker',
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: 'Sabine Wren',
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: 'Zeb Orellios',
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: 'Ezra Bridger',
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: 'Caleb Dume',
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

// Get the total score of force users only
//we need to filter out the personnel who can’t use the force

let jediPersonnel = personnel.filter(person => {
    return person.isForceUser;
})

// Result: [{...}, {...}, {...}] (Luke, Ezra and Caleb)

// We now need to create an array containing the total score of each Jedi
let jediScores = jediPersonnel.map(jedi => {
    return jedi.pilotingScore + jedi.shootingScore
})

// let’s use reduce to get the total
let totalJediScore = jediScores.reduce((acc, score) => {
    return acc + score
}, 0)

// Result: 420



// We can chain this into one
const totalJediScore2 = personnel
  .filter((person) => person.isForceUser)
  .map((jedi) => jedi.pilotingScore + jedi.shootingScore)
  .reduce((acc, score) => acc + score, 0);

// OR we can use .reduce() only
const totalJediScore3 = personnel.reduce(
  (acc, person) =>
    person.isForceUser
      ? acc + person.pilotingScore + person.shootingScore
      : acc,
  0
);