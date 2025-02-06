import Joi, { string } from "joi";

//* จะเอา Joi ไป validate value ที่มีค่าเป็นอะไร
const registerSchema = Joi.object({
  firstName: Joi.string().required().trim(),
  lastName: Joi.string().required().trim(),
  emailOrMobile: Joi.string(),
  password: Joi.string().required().pattern(/^[0-9-a-zA-Z]{6,}$/),
  confirmPassword: Joi.string().required().valid()



});

const result = registerSchema.validate()
const validateRegister = (input) => {};

export default validateRegister;
