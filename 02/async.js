async function findAndSaveUser(Users) {
  try {
    let user = await Users.findOne({});
    user.name = "zero";
    user = await user.save();
    user = await Users.findOne({ gender: "m" });
  } catch (error) {
    console.log(error);
  }
}

//화살표 함수로 바꾸기
const findAndSaveUser = async (Users) => {
  try {
    let user = await Users.findOne({});
    user.name = "zero";
    user = await user.save();
    user = await Users.findOne({ gender: "m" });
  } catch (error) {
    console.log(error);
  }
};
