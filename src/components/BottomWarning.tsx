import { Link } from "react-router-dom";

type ButtomWarningProps = {
    label: string;
    buttonText: string;
    to: string;
}

export default function BottomWarning({label, buttonText, to}: ButtomWarningProps) {
  return (
    <div className="py-2 text-sm justify-center">
        <div>
            {label}
        </div>
        <Link className="pointer underline pl-1 cursor-pointer" to={to}>
            {buttonText}
        </Link>
    </div>
  )
}
