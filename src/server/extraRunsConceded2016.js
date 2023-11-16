function extraRunsConceded2016(matches,deliveries){

    const idSeasonMap = matches.reduce( (acc,cv) => {

        acc[cv["id"]] = cv["season"]
        return acc;

    },{});

    const ans = deliveries.reduce( (acc,cv) => {

        if(idSeasonMap[cv["match_id"]] !== '2016') return acc;

        if(!acc[cv["bowling_team"]]){
            acc[cv["bowling_team"]] = 0;
        }

        acc[cv["bowling_team"]] += parseInt([cv["extra_runs"]]);

        return acc;
    },{});

    return ans;
}

module.exports = extraRunsConceded2016;