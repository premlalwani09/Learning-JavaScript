class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    // Not give access to everyone, means never accessible
    static createId(){
        return `123`;
    }
}


const prem = new User("prem");
// console.log(prem.createId());


class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email = email;
    }
}


const iphone = new Teacher("iphone", "i@phone.com");

iphone.logMe();
// console.log(iphone.createId())


