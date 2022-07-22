function spiralPrint(m, n, arr) {
    let i, k = 0, l = 0;
   
    while (k < m && l < n) {
   
        for (i = l; i < n; ++i) {
            console.log(arr[k][i] + ' ');
        }
        k++;

        for (i = k; i < m; ++i) {
            console.log(arr[i][n - 1] + ' ');
        }
        n--;
        if (k < m) {
            for (i = n - 1; i >= l; --i) {
                console.log(arr[m - 1][i] + ' ');
            }
            m--;
        }
        if (l < n) {
            for (i = m - 1; i >= k; --i) {
                console.log(arr[i][l] + ' ');
            }
            l++;
        }
    }
}

let arr = [[ 1, 2, 3, 4 ],
     [ 5, 6, 7, 8 ],
     [ 9, 10, 11, 12 ],
     [ 13, 14, 15, 16 ]];
let r = arr.length;
let c = arr[0].length;
  
spiralPrint(r, c, arr);