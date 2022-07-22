function sum3(a, b) {
    let min_diff = 0;
    let sum = 0;
    for (let i = 0; i < a.length - 3; i++) {
        let j = i + 1;
        let k = j + 1;
        // difference
        let add = a[i] + a[j] + a[k];
        let dif = b - sum;
        if (dif < 0)
            dif = dif * -1;
        if (min_diff > dif) {
            min_diff = dif;
            sum = add
        }

        if (dif == b) {
            return 1
        }

    }

    return sum;

}
//O(n) time complexity
var a = [-1, 2, -1, 4]
let b = 1
console.log(sum3(a, b));
