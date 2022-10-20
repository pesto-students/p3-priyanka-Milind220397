function GreaterElement(arr){

    var Mystack = [];
  
   // insert first element to stack
    Mystack.push(arr[0]);

    var next = arr[0];
    var index = 0;
  
    // iterate for rest of the elements
    for (var i = 1; i < arr.length; i++) 
    {
        if (Mystack.length == 0) {
            Mystack.push(arr[i]);
            continue;
        }

        while (Mystack.length ==0 == false 
            && Mystack[Mystack.length-1] < arr[i]) 
     {
         console.log( Mystack[Mystack.length-1] 
              + " --> " + arr[i]);
         Mystack.pop();
     }

     Mystack.push(arr[i]);

    }

}

var arr = [1,2,3,4];
 GreaterElement(arr);