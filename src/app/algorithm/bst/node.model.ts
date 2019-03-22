export default class NodeModel {
  public data;
  public left;
  public right;
  constructor(data, left, right){
    this.data = data;
    this.left = left;
    this.right = right;
  }
  public show(){
    return this.data
  }
}
