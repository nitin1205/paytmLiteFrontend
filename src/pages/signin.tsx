import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";

export default function signin() {
  return (
    <div>
      <Heading label="SingIn"/>
      <Subheading label="Enter to login information"/>
      <InputBox label="Name" placeholder="Nitin" />
    </div>
  )
}
