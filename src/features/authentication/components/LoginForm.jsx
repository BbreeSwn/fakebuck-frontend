import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import validateLogin from "../validators/validate-login";

const initialInput = {
  emailOrMobile: "",
  password: "",
};
const initialInputError = {
  emailOrMobile: "",
  password: "",
};

export default function LoginForm() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const error = validateLogin(input);
    if (error) {
      return setInputError(error);
    }
    setInputError(initialInput);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="grid gap-4">
        <div>
          <Input
            placeholder="Email address or phone number"
            name="emailOrMobile"
            value={input.emailOrMobile}
            error={inputError.emailOrMobile}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={input.password}
            error={inputError.password}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <Button bg="blue" color="white" width="full">
            Log in
          </Button>
        </div>
      </div>
    </form>
  );
}
