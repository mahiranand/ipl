function strikeRateOfBatsman(matches,deliveries,player = "Mahir"){

    const idSeasonMap = matches.reduce( (acc,cv) => {
        acc[cv["id"]] = cv["season"];
        return acc;
    },{});
    
    const ans = deliveries.reduce( (acc,cv) => {
       
        if(!acc[cv["batsman"]]){
            acc[cv["batsman"]] = {};
        }
        if(!acc[cv["batsman"]][idSeasonMap[cv["match_id"]]]){
            acc[cv["batsman"]][idSeasonMap[cv["match_id"]]] = [0,0,0];
        }
        acc[cv["batsman"]][idSeasonMap[cv["match_id"]]][0] += parseInt(cv["batsman_runs"]);
    
        if(parseInt(cv["wide_runs"]) > 0 || parseInt(cv["noball_runs"]) > 0){
            return acc;
        }
        acc[cv["batsman"]][idSeasonMap[cv["match_id"]]][1]++;
        acc[cv["batsman"]][idSeasonMap[cv["match_id"]]][2] = (acc[cv["batsman"]][idSeasonMap[cv["match_id"]]][0]/acc[cv["batsman"]][idSeasonMap[cv["match_id"]]][1]*100).toFixed(2);
        return acc;
    },{});
    
    for(let player in ans){
    
        for(let season in ans[player]){
            ans[player][season] = ans[player][season][2];
        }
    }

    if(player === "Mahir") return ans;
    return ans[player];
}

module.exports = strikeRateOfBatsman;