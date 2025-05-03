type InputBoxProps = {
    label: string;
    placeholder: string;
}

export default function InputBox({label, placeholder}: InputBoxProps) {
  return (
    <div>
        <div className="text-sm px-2 font-medium text-left py-2 ">
            {label}
        </div>
        <input placeholder={placeholder} 
            className="w-full px-2 py-1 border-2 rounded border-slate-200"
        />
    </div>
  )
}
