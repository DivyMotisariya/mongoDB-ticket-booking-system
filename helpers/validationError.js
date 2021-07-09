const validationError = (error) => {
  const errors = [];
  // console.log(error.message);
  if (!error || !error.message) return [];
  // if (error.errors.isEmpty()) return [];
  // error.array().map((err) =>
  //   errors.push({
  //     [err.path]: err.message,
  //   })
  // );
  // return errors;

  let errs = error.message.split(":");
  errs.splice(0, 1);
  errs = errs.join(":");
  // console.log(errs);
  errs.split(",").forEach((err) => {
    // console.log(err);
    errors.push({
      [err.split(":")[0].trim()]: err.split(":")[1].trim(),
    });
  });
  console.log(errors);
  return errors;
};

module.exports = validationError;