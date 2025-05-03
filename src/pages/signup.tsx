import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";

export default function signup() {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign Up"} />
          <Subheading label={"Enter your information to create account."} />
          <InputBox placeholder="John" label={"First Name"}/>
          <InputBox placeholder="Doe" label={"Last Name"}/>
          <InputBox placeholder="example@gmail.com" label={"Email"}/>
          <InputBox placeholder="1234567" label={"Password"}/>
          <div className="pt-4">
            <Button label={"Sign Up"} />
          </div>
            <BottomWarning label={'Already have an account?'} buttonText={'Sign In'} to={'/signin'} />
        </div>
      </div>
    </div>
  )
}
