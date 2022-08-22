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

function levelorder(root)
{
  let queue = [];
  queue.push(root);
  while(queue.length !== 0)
  {
    let node = queue.shift();
    process.stdout.write(node.value.toString() + ' ');
    if(node.left)
      queue.push(node.left);
    if(node.right)
      queue.push(node.right);
  }
}

let arr = [20,10,5,15,30,25,35];
createBST(arr);

levelorder(root);