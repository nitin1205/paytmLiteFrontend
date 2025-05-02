type SubheadingProps = {
    label: string
}


export default function Subheading({label}: SubheadingProps) {
  return (
    <div className="text-slate-500 text-sm pt-1 px-4 pb-4">
        {label}
    </div>
  )
}
