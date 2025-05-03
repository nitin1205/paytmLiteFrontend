type BalanceProps = {
    value: string;
}

export default function Balance({value}: BalanceProps) {
  return (
    <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-6 text-lg">
            Rs {value}
        </div>
    </div>
  )
}
