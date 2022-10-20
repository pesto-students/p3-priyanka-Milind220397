var findJudge = function(n, trust) {
    let counts = new Array(n+1).fill(0);

    for(let [p,j] of trust){
        counts[p] -= 1;

        counts[j] += 1;
    }

    for(let i=1; i<counts.length; ++i){
        if(counts[i] === (n-1)){
            return i;
        }
    }
    return -1;
};

n = 2, trust = [[1,2]]
console.log(findJudge(n, trust))