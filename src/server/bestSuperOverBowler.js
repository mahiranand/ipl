function bestSuperOverBowler(deliveries){
    const list = deliveries.reduce( (acc,cv) => {
    
        if(cv["is_super_over"] === "0") return acc;
    
        if(!acc[cv["bowler"]]){
            acc[cv["bowler"]] = { "runs" : 0 , "balls" : 0 ,"economy" : 0};
        }
    
        acc[cv["bowler"]]["runs"] += parseInt(cv["total_runs"]);
    
        if(parseInt(cv["wide_runs"]) > 0 || parseInt(cv["noball_runs"]) > 0){
            acc[cv["bowler"]]["economy"] = acc[cv["bowler"]]["runs"]/acc[cv["bowler"]]["balls"]*6;
            return acc;
        }
    
        acc[cv["bowler"]]["balls"]++;
        acc[cv["bowler"]]["economy"] = acc[cv["bowler"]]["runs"]/acc[cv["bowler"]]["balls"]*6
        return acc;
        
    },{});

    let ans = [];
    let min = 100;

    for(let bowl in list){

        if(list[bowl]["economy"] < min){
            min = list[bowl]["economy"]
            ans = [];
        }

        if(list[bowl]["economy"] == min){
            ans.push( {bowler : bowl , economy : list[bowl]["economy"]});
        }
    }
    return ans;
}
module.exports = bestSuperOverBowler;