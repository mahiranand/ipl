function highestDismissal(deliveries){

    const list = deliveries.reduce( (acc,cv) =>{

        if(!cv["dismissal_kind"] || cv["dismissal_kind"] === "run out"){
            return acc;
        }
        if(!acc[cv["bowler"]]){
            acc[cv["bowler"]] = {};
        }
        if(!acc[cv["bowler"]][cv["player_dismissed"]]){
            acc[cv["bowler"]][cv["player_dismissed"]] = 0;
        }
        acc[cv["bowler"]][cv["player_dismissed"]]++;
        return acc;
    
    },{});

    let ans = [];
    let max = 0;

    for(let bowl in list){

        for(let bat in list[bowl]){

            if(list[bowl][bat] > max){
                max = list[bowl][bat];
                ans = [];
            }

            if(max === list[bowl][bat]){
                ans.push( {batsman : bat , bowler : bowl , dismissal : list[bowl][bat]});
            }
        }
    }
    return ans;
}

module.exports = highestDismissal;