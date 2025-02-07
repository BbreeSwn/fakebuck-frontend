import Joi, { alternatives, string } from "joi";

//* จะเอา Joi ไป validate value ที่มีค่าเป็นอะไร
const registerSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .messages({ "string.empty": "First name is required" }),
  lastName: Joi.string()
    .required()
    .trim()
    .messages({ "string.empty": "Lastname is required" }),
  emailOrMobile: Joi.alternatives([
    Joi.string().email({ tlds: false }),
    Joi.string().pattern(/^[0-9]{10}$/),
  ]).messages({
    "alternatives.match": "Invalid email address or mobile number",
  }),
  password: Joi.string()
    .required()
    .pattern(/^[0-9-a-zA-Z]{6,}$/)
    .messages({
      "string.empty": "password is require.",
      "string.pattern.base":
        "password must be at least6 characters and contain only alphabet and number",
    }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "string.empty": "password is require.",
    "any.only": "password did not match",
  }),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });

  // อ่านค่า err จาก detail
  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
};

export default validateRegister;
