import Joi from "joi";

const loginSchema = Joi.object({
  emailOrMobile: Joi.string().required().messages({ "string.empty": "Email Or Mobile is required" }),
  password: Joi.string().required().messages({ "string.empty": "Invalid password" }),
});

const validateLogin = (input) => {
  const { error } = loginSchema.validate(input, { abortEarly: false });

  // อ่านค่า err จาก detail
  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
};

export default validateLogin;
