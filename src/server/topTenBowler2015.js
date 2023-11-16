function topTenBowler2015(matches,deliveries){

    const idSeasonMap = matches.reduce( (acc,cv) => {

        acc[cv["id"]] = cv["season"]
        return acc;

    },{});

    const list = deliveries.reduce( (acc,cv) => {

        if(idSeasonMap[cv["match_id"]] !== '2015') return acc;

        if(!acc[cv["bowler"]]){
            acc[cv["bowler"]] = { runs : 0 , balls : 0 };
        }

        acc[cv["bowler"]].runs += parseInt(cv["total_runs"]);

        if(parseInt(cv["wide_runs"]) > 0 || parseInt(cv["noball_runs"]) > 0){
            return acc;
        }

        acc[cv["bowler"]]["balls"]++;
        return acc;
    },{});

    let arr = [];

    for(let key in list){
        arr.push({bowler : key, economy : ( (list[key].runs)/(list[key].balls)*6).toFixed(2) });
    }

    const ans = arr.sort((a,b) => a.economy - b.economy).slice(0,10);

    return ans;
}

module.exports = topTenBowler2015;