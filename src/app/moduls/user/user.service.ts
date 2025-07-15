import { User } from "./user.schemaandmodel";



 export  const createusertoDB = async () => {
    const user = new User({
      id: 10,
      role: "student",
      name: {
        firstname: "MD",
        lastname: "moklas",
      },
      age: 20,
      proffesion: "programmer",
      gender: "male",
      email: "crazyboy@gmail.com",
    });
    await user.save();
    console.log(user);
    return user
  };