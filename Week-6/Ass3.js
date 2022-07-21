
function sort (a)
{
    let cnt_0 = 0
    let cnt_1 = 0
    let cnt_2 = 0
    for(let i = 0 ;i<a.length ;i++)
    {
        if ( a[i] == 0 )
          cnt_0++;

          if ( a[i] == 1 )
          cnt_1++;

          if ( a[i] == 2 )
          cnt_2++;
    }
   
    let j = 0;
    //add 0s
    for( j = 0 ;j<cnt_0 ;j++){
        a[j] = 0;
    }
    //add 1s
   
    for( j = cnt_0 ;j<cnt_1 + cnt_0;j++){
        a[j] = 1;
    }
   //addd 2s
 
    for( j = cnt_1 + cnt_0 ;j<(cnt_1 + cnt_0 +cnt_2);j++){
        a[j] = 2;
    }
}

var a = [ 1,1,0,2,2,1,0 ]
sort(a);
console.log(a)