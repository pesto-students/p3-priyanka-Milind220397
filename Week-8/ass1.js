class node {
    constructor(item) {
        this.value = item;
        this.left = null;
        this.right = null;
    }
}

function max_depth(root) {

    let max = 0;
    let max1 = 0;
    let max2 = 0;

    if (root == null)
        return null;
    else {
       
        if (root.left != null) {
             max1 = max_depth(root.left);
        }

        if (root.right != null) {
             max2 = max_depth(root.right);
        }

        if (max1 > max2)
            max = max1 + 1;
        else
            max = max2 + 1;
    }

    return max;

}


root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(max_depth(root));
