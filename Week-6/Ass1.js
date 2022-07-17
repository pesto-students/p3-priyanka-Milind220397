function maxSubArraySum(a, size)
{
    var maxint = Math.pow(2, 53)
    var max = -maxint - 1
    var sum = 0;
       
    for (var i = 0; i < size; i++)
    {
        sum = sum + a[i]
        if (max < sum)
            max = sum;
  
        if (sum < 0)
            sum = 0 ;
    }
    return max;
}
   
// Driver code
var a = [ -2, -3, 4, -1, -2, 1, 5, -3 ]
console.log("Maximum contiguous sum is", 
               maxSubArraySum(a, a.length))
   