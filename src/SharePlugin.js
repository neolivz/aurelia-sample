export class SharePlugin {
  constructor() {
    this.pluginName = '';
    this.shared = false;
  }
  share(){
    console.log(this.pluginName,'Shared');
    this.shared = true;
  }
}
