const matches = require('./src/data/matches.json');
const fs = require('fs');
const matchesPlayerPerYear = require('./src/server/matchesPlayedPerYear');

const ans1 = matchesPlayerPerYear(matches);

fs.writeFileSync('./src/public/output/matchesPlayerPerYear.json' , JSON.stringify(ans1));