const express = require("express");

const { isLoggedIn } = require("./middlewares");
const { addFollowing, removeFollowing } = require("../controllers/user");

const router = express.Router();

router.post("/:id/follow", isLoggedIn, addFollowing);
router.post("/:id/unfollow", isLoggedIn, removeFollowing);

// router.post("/:id/profile", isLoggedIn, async (req, res, next) => {
//   try {
//     console.log(req);
//     const user = await User.findOne({
//       where: {
//         id: req.user.id,
//       },
//     });

//     if (user) {
//       if (password === "") {
//         await user.update({
//           nick,
//         });
//       } else {
//         await user.update({
//           nick,
//           password,
//         });
//       }
//       res.send("success");
//     } else {
//       res.status(404).send("no user");
//     }
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// });
module.exports = router;
