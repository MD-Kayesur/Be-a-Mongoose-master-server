
  //inserting data in mongodb
  /**
   * step by step
   *  1. inteface
   * 2. schema
   * 3.model
   * 4. database queary
   */
  //  1. Create an interface representing a document in mongoose.



export   interface IUser {
    id: number;
    role: "student";
    name: {
      firstname: string;
      lastname: string;
    };
    age: number;
    proffesion?: string;
    gender: "male" | "female";
    email: string;
  }


  
 export  interface UserMethods {
  updateName(name: string): Promise<any>;
}

