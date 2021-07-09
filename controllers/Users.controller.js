const { successRes, errorRes } = require("../helpers/apiResponses");
const { deleteMany } = require("../models/Users.model");
const User = require("../models/Users.model");

const showUsers = (req, res) => {
  User.find((err, docs) => {
    if (err) {
      errorRes(res, err.message);
    } else {
      successRes(res, docs);
    }
  });
};

const addUser = (req, res) => {
  let {
    body: { user },
  } = req;

  User.find()
    .where("name")
    .equals(user.name)
    .select("name")
    .exec()
    .then((docs) => {
      // console.log(docs);
      if (docs.length > 0) throw new Error("Username already present");
    })
    .then(() => {
      User.create(req.body.user, (err, doc) => {
        if (err) throw err;
        else successRes(res, doc);
      });
    })
    .catch((err) => {
      // console.log(err);
      errorRes(res, err.message);
    });
  // .exec((err, docs) => {
  //   if (err) {
  //     errorRes(res, err);
  //   } else {
  //     console.log(docs);
  //     if (docs.length > 0) {
  //       errorRes(res, "Username already present");
  //     } else {
  //       User.create(req.body.user, (err, doc) => {
  //         if (err) {
  //           console.log(err.message);
  //           errorRes(res, err.message);
  //         } else successRes(res, doc);
  //       });
  //     }
  //   }
  // });
};

const deleteUser = (req, res) => {
  let {
    body: { user },
  } = req;
  User.deleteOne({ name: user.name }).then((err, result) => {
    if (err) errorRes(res, err);
    else successRes(res, result);
  });
  // User.deleteOne({ name: user.name }, (err) => {
  //   if (err) errorRes(res, err);
  //   else successRes(res, "Deleted All");
  // });
};

module.exports = { showUsers, addUser, deleteUser };