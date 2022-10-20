const { Console } = require('console');
const fs = require('fs')
let parkArr = [null]
class Heap {

    constructor() {
        /* Initialing the array heap and adding a dummy element at index 0 */
        this.heap = []
    }

    getMin() {
        /* Accessing the min element at index 1 in the heap array */
        return this.heap[1]
    }

    insert(node) {

        let flag = true;
        /* Finding the correct position for the new node */
        for (let i = 0; i < this.heap.length; i++) {
            if (this.heap[i] == null) {
                this.heap[i] = node;
                console.log("Vehicle Parked" + node.regNo + "Color:" + node.color);
                flag = false;
                break;
            }
        }

        if (flag) {
            console.log(flag);
            console.log("Parking is full");
        }
        
    }

    remove(node) {

        console.log("Vehicle Left" + this.heap[node])
        console.log("Parking Slot Free" + node)
        this.heap[node] = null;

    }
}

let parheap = new Heap()
const data = fs.readFileSync('input.txt', 'utf-8')
let queries = data.split('\r\n')
let num = 0

while (num < queries.length) {
    let query = queries[num]
    console.log(query)
    if (query.startsWith('create_parking_lot')) {
        let numq = query.split(' ')
        let n = numq[numq.length - 1]
        console.log(`Created a parking lot with ${n} slots`)
        let i = 0
        while (i < n) {
            parheap.heap.push(null);
            i++
        }
    }
    else if (query.startsWith('park')) {

        let vehinfo = query.replace('park ', '').split(' ')
        parheap.insert({ regNo: vehinfo[0], color: vehinfo[1] });

    }
    else if (query.startsWith('leave')) {

        let num = query.split(' ')
        let n = num[num.length - 1];
        console.log('N:'+n);
        parheap.remove(n)


    }
    else if (query.startsWith('status')) {
        
        for (let i of parheap.heap) {
                if (i!=null)
                {
                    console.log('Slot occupied :'+i.regNo + ' Color :'+ i.color);
                }
                else
                {
                    console.log('Slot is free');
                }
            
        }
    }
    else if (query.startsWith('registration_numbers_for_cars_with_colour')) {
        let col = query.replace('registration_numbers_for_cars_with_colour ', '')
        let flg = true
        for (let i of parheap.heap) {
            if (i != null && i.color == col) {
                console.log(i.regNo)
                flg = false
            }
        }
        if (flg) console.log('Not found')

    }
    else if (query.startsWith('slot_numbers_for_cars_with_colour')) {
        let col = query.replace('slot_numbers_for_cars_with_colour ', '')
        let flg = true;
        let j = 1;
        for (let i of parheap.heap) {
            if (i != null && i.color == col) {
                console.log(j)
                flg = false
            }
            j++;
        }
        if (flg) console.log('Not found')


    }
    else if (query.startsWith('slot_number_for_registration_number')) {
        let regno = query.replace('slot_number_for_registration_number ', '')
        let flg = true;
        let j = 1;
        for (let i of parheap.heap) {
            if (i != null && i.regNo == regno) {
                console.log(j)
                flg = false
            }
            j++;
        }
        if (flg) console.log('Not found')

    }
    num++

}