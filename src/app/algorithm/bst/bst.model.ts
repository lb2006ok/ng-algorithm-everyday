import Node from './node.model';

export default class BstModel {
  public root = null;

  //插入点
  public insert(data) {
    let node = new Node(data, null, null);
    if (this.root == null) {
      this.root = node;
    } else {
      let current = this.root;
      let parent;
      while (true) {
        parent = current;
        if (data < current.data) {
          current = current.left;
          if(current == null){
            parent.left = node;
            break;
          }
        } else {
          current = current.right;
          if(current == null){
            parent.right = node;
            break;
          }
        }
      }
    }
  };

  //删除点
  public delete;
  public remove(data){
    this.removeNode( this.root , data);
  }
  /** 2019/3/22
  *author: Liu
  *function:
   * params data值
   * params node开始搜索的根节点
   * return node返回处理之后的树
  *email:saten.liubo@gmail.com
  */
  private removeNode(node, data) {
    if (node == null) {
      return null;
    }
    if (data == node.data) {
      if (node.left == null && node.right == null) {
        return null;
      } else if (node.left == null) {
        return node.right;
      } else if (node.right == null) {
        return node.left;
      }
      let replaceNode = this.getSmallest(node.right);
      //两种情况，左树不变，将右树最小值上移,删除右树中最小值
      node.data = replaceNode.data;
      node.right = this.removeNode(node.right, replaceNode.data);
      return node;
    } else if (data < node.data) {
      //指定值小于当前节点值迭代
      node.left = this.removeNode(node.left, data);
      return node;
    } else{
      //指定值小于当前节点值迭代
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }
  private getSmallest(node){
    if (node.left == null) {
      return node;
    }
    else {
      return this.getSmallest(node.left);
    }
  }
  //查找点
  public find(data){
    let current = this.root;
    while(true){
      if(current.data == data){
        console.log(current)
        return current;
        break;
      }else if(data < current.data){
        current = current.left;
      }else if(data > current.data){
        current = current.right;
      }
    }
  };
  //前序遍历
  public preOrder(node: Node){
    if(node != null){
      console.log(node.show() + ' ');
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  };
  //中序遍历
  public inOrder(node: Node){
    if(node != null){
      this.inOrder(node.left);
      console.log(node.show() + ' ');
      this.inOrder(node.right);
    }
  };
  //后序遍历
  public postOrder(node: Node){
    if(node != null){
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show() + ' ');
    }
  };
  //最大值
  public getMax(){
    let current = this.root;
    while(current.right != null){
      current = current.right;
    }
    console.log('max='+current.show());
  };
  //最小值
  public getMin(){
    let current = this.root;
    while(current.left != null){
      current = current.left;
    }
    console.log('min='+current.show());
  };
}
