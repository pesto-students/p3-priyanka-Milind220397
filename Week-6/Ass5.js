function diff(a,b){

    for(let i = 0 ;i<a.length ;i++)
        {
            for(let j = i + 1 ;j<a.length ;j++)
            { 
                // difference
                let dif = a[j] - a[i];
                if (dif<0)
                  dif = dif * -1;

                if ( dif == b )
                {
                   return 1
                }
            }
        }
        
    return 0;
    
    }
    
    
    var a = [ 5,10,3,2,50,80 ]
    let b = 11
    console.log(diff(a,b));
