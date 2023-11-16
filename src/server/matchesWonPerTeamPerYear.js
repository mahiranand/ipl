function matchesWonPerTeamPerYear(matches){

    const ans = matches.reduce( (acc,cv) => {

        if(!cv["winner"]) return acc;

        if(!acc[cv["winner"]]){
            acc[cv["winner"]] = {};
        }
        if(!acc[cv["winner"]][cv["season"]]){
            acc[cv["winner"]][cv["season"]] = 0;
        }
        acc[cv["winner"]][cv["season"]]++

        return acc;
    },{})

    return ans;
}

module.exports = matchesWonPerTeamPerYear;