function maxprofit(a){

let max = 0;

for(let i = 0 ;i<a.length ;i++)
    {
        for(let j = i + 1 ;j<a.length ;j++)
        { 
            // profit 
            let prof = a[j] - a[i];
            if ( prof > max)
            {
               
                max = prof;
            }
        }
    }
    
if (max < 0) 
max = 0;

return max;

}


var a = [ 7,1,5,3,6,4 ]
console.log("Maximum Profit ",maxprofit(a));