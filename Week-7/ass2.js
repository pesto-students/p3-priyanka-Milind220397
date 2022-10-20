class Node {
    // constructor
    constructor(element) {
        this.element = element;
        this.next = null
    }
}
// linkedlist class
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // adds an element at the end
    // of list
    add(element) {
        // creates a new node
        var node = new Node(element);

        // to store current node
        var current;

        // if list is Empty add the
        // element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }

            // add node
            current.next = node;
        }
        this.size++;
    }


    isEmpty() {
        return this.size == 0;
    }

    // gives the size of the list
    size_of_list() {
        console.log(this.size);
    }


    // prints the list items
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }

    reverseList() {
        var prev = null;
        var current = this.head;
        var next = null;

        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;

        // ll.printList();

    }

    left_shift(num) {
        var current;
        var last;
        var k = 0;

        current = this.head;

        //traverse to last
        while (current != null) {
            last = current;
            current = current.next;
        }

        while (k != num) {
            current = this.head;
            this.head = this.head.next;
            last.next = current;
            last = last.next;
            last.next = null;
            k++;
        }
    }

}

// creating an object for the
// Linkedlist class
var ll = new LinkedList();

// testing isEmpty on an empty list
// returns true
console.log(ll.isEmpty());

// adding element to the list
ll.add(10);

// prints 10
ll.printList();

// returns 1


// adding more elements to the list
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

// returns 10 20 30 40 50
ll.printList();

ll.left_shift(3);

ll.printList();
