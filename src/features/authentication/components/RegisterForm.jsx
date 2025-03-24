import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import validateRegister from "../validators/validate-register";
import authAPI from "../../../apis/auth";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

/*
*ต้องการให้ค่าใน Input มี key เป็นอะไรบ้าง
{
firstName : String
lastName : String
emailOrMobile : String
password : String
confirmPassword : String
}
*/

const initialInput = {
  firstName: "",
  lastName: "",
  emailOrMobile: "",
  password: "",
  confirmPassword: "",
};

const initialInputError = {
  firstName: "",
  lastName: "",
  emailOrMobile: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterForm({onSuccess}) {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const handleChangInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      // เรียกใช้  validate ตอนจะ submit form และส่งค่าใน input ไป validate ใน Fn
      const error = validateRegister(input);
      if (error) {
        return setInputError(error);
      }
      setInputError({ ...initialInput });

      await authAPI.register(input);
      onSuccess()
      toast.success('Registered successfully. please log-in to continue.')
    } catch (err) {
      console.log(err);
      //* check ว่าเป็น err จาก Axios  หรือเปล่า ถ้าเป็น err from axios  ค่อย throw err ออกไป
      if (err instanceof AxiosError) {
        if (err.response.data.field === "emailOrMobile")
          setInputError((prev) => ({
            ...prev,
            emailOrMobile: "email or mobile already in use",
          }));
      }
    }
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input
            placeholder="First name"
            value={input.firstName}
            onChange={handleChangInput}
            name="firstName"
            error={inputError.firstName}
          />
        </div>
        <div>
          <Input
            placeholder="Last name"
            value={input.lastName}
            onChange={handleChangInput}
            name="lastName"
            error={inputError.lastName}
          />
        </div>
        <div className="col-span-2">
          <Input
            placeholder="Email address or mobile number"
            value={input.emailOrMobile}
            onChange={handleChangInput}
            name="emailOrMobile"
            error={inputError.emailOrMobile}
          />
        </div>
        <div className="col-span-2">
          <Input
            placeholder="Password"
            type="password"
            value={input.password}
            onChange={handleChangInput}
            name="password"
            error={inputError.password}
          />
        </div>
        <div className="col-span-2">
          <Input
            placeholder="Confirm password"
            type="password"
            value={input.confirmPassword}
            onChange={handleChangInput}
            name="confirmPassword"
            error={inputError.confirmPassword}
          />
        </div>
        <div className="col-span-2 text-center">
          <Button bg="green" width="50">
            Sign up
          </Button>
        </div>
      </div>
    </form>
  );
}
