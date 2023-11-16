const matches = require('./src/data/matches.json');
const deliveries = require('./src/data/deliveries.json');
const fs = require('fs');
const matchesPlayerPerYear = require('./src/server/matchesPlayedPerYear');
const matchesWonPerTeamPerYear = require('./src/server/matchesWonPerTeamPerYear');
const extraRunsConceded2016 = require('./src/server/extraRunsConceded2016');
const topTenBowler2015 = require('./src/server/topTenBowler2015');

const ans1 = matchesPlayerPerYear(matches);
fs.writeFileSync('./src/public/output/matchesPlayerPerYear.json' , JSON.stringify(ans1));

const ans2 = matchesWonPerTeamPerYear(matches);
fs.writeFileSync('./src/public/output/matchesWonPerTeamPerYear.json',JSON.stringify(ans2));

const ans3 = extraRunsConceded2016(matches,deliveries);
fs.writeFileSync('./src/public/output/extraRunsConceded2016.json',JSON.stringify(ans3));

const ans4 = topTenBowler2015(matches,deliveries);
fs.writeFileSync('./src/public/output/topTenBowler2015.json',JSON.stringify(ans4));