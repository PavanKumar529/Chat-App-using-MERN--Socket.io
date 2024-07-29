

const registerController = (req, res) => {
  res.status(200).send({ message: "I am Register Controller" });
};

const loginController = (req, res) => {
  res.status(200).send({ message: "I am Login Controller" });
};

module.exports = {
  registerController,
  loginController,
};
