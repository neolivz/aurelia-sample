export class UserInfo {
  constructor() {
      this.user = {};
  }
  detail(){
    return this.user;
  }
  setName(name){
    this.user.name = name;
  }
  getName(){
    console.log('Name Incocation');
    return this.user.name;
  }
  setAge(age){
    this.user.age = age;
  }
  getAge(){
    console.log('Age Incocation');
    return this.user.age;
  }

}
