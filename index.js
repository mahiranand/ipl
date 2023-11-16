const matches = require('./src/data/matches.json');
const fs = require('fs');
const matchesPlayerPerYear = require('./src/server/matchesPlayedPerYear');
const matchesWonPerTeamPerYear = require('./src/server/matchesWonPerTeamPerYear');

const ans1 = matchesPlayerPerYear(matches);
fs.writeFileSync('./src/public/output/matchesPlayerPerYear.json' , JSON.stringify(ans1));

const ans2 = matchesWonPerTeamPerYear(matches);
fs.writeFileSync('./src/public/output/matchesWonPerTeamPerYear.json',JSON.stringify(ans2));