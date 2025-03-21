import Button from "../../../components/Button";
import Input from "../../../components/Input";

export default function LoginForm() {
  return (
    <form>
      <div className="grid gap-4">
        <div>
          <Input placeholder="Email address or phone number" />
        </div>
        <div>
          <Input
            placeholder="Password"
            type="password"
          
          />
        </div>
        <div>
          <Button bg="blue" color="white" width="full">Log in</Button>
        </div>
      </div>
    </form>
  );
}
