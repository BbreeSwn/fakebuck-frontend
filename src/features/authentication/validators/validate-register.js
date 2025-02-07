import Joi, { string } from "joi";

//* จะเอา Joi ไป validate value ที่มีค่าเป็นอะไร
const registerSchema = Joi.object({
  firstName: Joi.string().required().trim(),
  lastName: Joi.string().required().trim(),
  emailOrMobile: Joi.alternatives([
    Joi.string().email({ tlds: false }),
    Joi.string().pattern(/^[0-9]{10}$/),
  ]),
  password: Joi.string()
    .required()
    .pattern(/^[0-9-a-zA-Z]{6,}$/),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")),
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
