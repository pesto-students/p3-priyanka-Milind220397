class MyStack {
    constructor() {
        this.items = [];
        this.top = -1;
        this.maxSize = 5;
    }

    // get the size of the stack
    get size() {
        return this.items.length;
    }

    // add a new item to the top of the stack
    push(newItem) {
        //can't push if stack is full
        if (this.size === this.maxSize) {
            throw "Stack Overflow"
        }

        this.items.push(newItem);
        //set pointer
        this.top = newItem;

    }

    // remove an item from the top of the stack
    pop() {
        let currentSize = this.size;

        //nothing to return if the stack is empty
        if (currentSize === 0) {
            throw "Stack Underflow"
        }

        //point top to previous item
        this.top = this.items[currentSize - 2];

        // remove the top item from the stack and return it
        let topItem = this.items.pop();

        return topItem;
    }

    // retun the top item without removing it
    peek() {
        let currentSize = this.size;
        //nothing to return if the stack is empty
        if (currentSize === 0) {
            throw "Stack is empty"
        }

        return this.top;

    }

    //log the items in the stack
    logItems() {
        console.log(this.items);
    }


}

function parenthesis(str) {
    
    let obj = new MyStack();
    for (let i = 0; i < str.length; i++) {
        obj.logItems();
        
        // top item in stack
       

        if (str.charAt(i) =='(' || str.charAt(i) == '{' || str.charAt(i) == '[' ) {
           obj.push(str.charAt(i)) 
        }
        
        if ( str.charAt(i) == ')' ) 
        {
           let topitem = obj.peek();
           if (topitem == '('){
            obj.pop();
           }else{
            return 'Incorrect';
           }
        }
        
        if( str.charAt(i) == '}' )
        {
            let topitem = obj.peek();
            if (topitem == '{'){
                obj.pop();
               }else{
                return 'Incorrect';
               }
        }
        
        if ( str.charAt(i) == ']' )
        {
            let topitem = obj.peek();
            if (topitem == '['){
                obj.pop();
               }else{
                return 'Incorrect';
               }
        }



    }
    
   return 'Corrrect';

}

console.log(parenthesis('{]}'));


