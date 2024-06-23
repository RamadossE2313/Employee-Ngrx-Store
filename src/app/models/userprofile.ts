export class UserProfile {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    avatar: string;
  
    constructor(id: number, email: string, firstname: string, lastname: string, avatar: string) {
      this.id = id;
      this.email = email;
      this.firstName = firstname;
      this.lastName = lastname;
      this.avatar = avatar
    }
  }
  