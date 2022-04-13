class Node
{
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.parent = null;

    if (this.left)
      left.parent = this;
    if (this.right)
      right.parent = this;
  }

  * _traverse(current) {
    yield current;
    if (current.left) {
      for (let left of this._traverse(current.left))
        yield left;
    }
    if (current.right) {
      for (let right of this._traverse(current.right))
        yield right;
    }
  }

  * preorder() {
    for (let node of this._traverse(this))
      yield node.value;
  }
}


let root = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, new Node(6), new Node(7)));


for (let value of root.preorder())
      console.log(value)