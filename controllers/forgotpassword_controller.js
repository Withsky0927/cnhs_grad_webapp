"use strict";

const getForgotPasswordForm = async (req, res) => {
  try {
    const title = "Forgot Password Form";
    await res.render("forgotpassword", { title });
  } catch (error) {
    await res.sendStatus(404);
  }
};

module.exports = {
  getForgotPasswordForm
};
