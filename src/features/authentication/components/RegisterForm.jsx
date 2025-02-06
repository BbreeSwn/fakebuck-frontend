import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import validateRegister from "../validators/validate-register";

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

export default function RegisterForm() {
  const [input, setInput] = useState(initialInput);

  const handleChangInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    // เรียกใช้  validate ตอนจะ submit form และส่งค่าใน input ไป validate ใน Fn
    validateRegister(input)
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
          />
        </div>
        <div>
          <Input
            placeholder="Last name"
            value={input.lastName}
            onChange={handleChangInput}
            name="lastName"
          />
        </div>
        <div className="col-span-2">
          <Input
            placeholder="Email address or mobile number"
            value={input.emailOrMobile}
            onChange={handleChangInput}
            name="emailOrMobile"
          />
        </div>
        <div className="col-span-2">
          <Input
            placeholder="Password"
            type="password"
            value={input.password}
            onChange={handleChangInput}
            name="password"
          />
        </div>
        <div className="col-span-2">
          <Input
            placeholder="Confirm password"
            type="password"
            value={input.confirmPassword}
            onChange={handleChangInput}
            name="confirmPassword"
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
