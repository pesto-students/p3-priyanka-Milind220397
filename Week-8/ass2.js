class TreeNode
{
  constructor(value)
  {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
let root = null;

function createBSTRecur(root, key)
{
  if(root === null)
  {
    root = new TreeNode(key);
    return root;
  }

  if(key < root.value)
  {
    root.left = createBSTRecur(root.left, key);
  }
  else if (key > root.value)
  {
    root.right = createBSTRecur(root.right, key);
  }

  return root;
}

function createBST(arr)
{
  for(let a of arr)
  {
    root = createBSTRecur(root, a);
  }
}

function isBST(node)
{
    if (node == null)
        return true;
      
  
    if (node.left != null && node.left.data > node.data)
        return false;
      
    
    if (node.right != null && node.right.data < node.data)
        return false;
      
    
    if (!isBST(node.left) || !isBST(node.right))
        return false;
      
    
    return true;
}

let arr = [20,10,5,15,30,25,35];
createBST(arr);
console.log(isBST(root));