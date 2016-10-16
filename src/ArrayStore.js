import {transient} from 'aurelia-framework';

@transient()
export class ArrayStore {
  constructor() {
    this.store = [];
  }
  addEntry(entry){
    this.store.push(entry);
  }
  replaceStore(store){
    this.store = store;
    return this;
  }
  getEntries(){
    return this.store;
  }
}
