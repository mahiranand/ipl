function tossAndMatchWin(matches){

    const ans = matches.reduce( (acc,cv) => {
        if(cv["toss_winner"] === cv["winner"]){
            if(!acc[cv["winner"]]){
                acc[cv["winner"]] = 0;
            }
            acc[cv["winner"]]++;
        }
        return acc;
    },{});

    return ans;
}

module.exports = tossAndMatchWin;