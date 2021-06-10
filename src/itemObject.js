class ItemObject {
  static all = [];
  constructor(name) {
    this.name = name;
    ItemObject.all.push(this)
    this.id = ItemObject.all.length
  }

  static delete(item){
    let index = ItemObject.all.indexOf(item)
    ItemObject.all.splice(index, 1)
  }
}

export {ItemObject};