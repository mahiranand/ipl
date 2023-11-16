function matchesPlayerPerYear(matches){

    const ans = matches.reduce( (acc,cv) => {
        if(!acc[cv["season"]]){
            acc[cv["season"]] = 0;
        }
        acc[cv["season"]]++;
        return acc;
    },{});
    return ans;
}
module.exports = matchesPlayerPerYear;
