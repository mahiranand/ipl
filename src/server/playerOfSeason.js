function playerOfSeason(matches){

    const list = matches.reduce( (acc,cv) => {

        if(!acc[cv["season"]]){
            acc[cv["season"]] = {};
        }
        if(!acc[cv["season"]][cv["player_of_match"]]){
            acc[cv["season"]][cv["player_of_match"]] = 0;
        }
        acc[cv["season"]][cv["player_of_match"]]++;
        return acc;
    },{});

    const ans = {}

    for(let year in list){
        ans[year] = {};
        let max = 0;
        for(let player in list[year]){

            if(list[year][player] > max){
                max = list[year][player];
                ans[year] = {};
                ans[year][player] = list[year][player]
            }

            if(list[year][player] == max){
                ans[year][player] = list[year][player];
            }
            
        }
    }

    return ans;
}

module.exports = playerOfSeason;