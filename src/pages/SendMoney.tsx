
export default function SendMoney() {
  return (
    <div className="flex justify-center h-screen bg-gray-100">
      <div className="h-full flex flex-col justify-center">
        <div className="h-min max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col space-y-1.5 px-6 pt-6">
            <h2 className="text-3xl font-bold text-center">send Money</h2>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-2xl text-white">A</span>
              </div>
              <h3 className="text-2xl font-semibold">friend's Name</h3>
            </div>
            <div className="space-y-8 pt-2">
              <div className="space-y-2" >
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed
                  peer-disabled:opacity-70" 
                >
                  Amount (in Rs)
                </label>
                <input type="number" className="flex h-10 w-full rounded-md border border-gray-300 px-3 text-sm" 
                id='amount'
                placeholder="Enter Amount"
                />
              </div>
              <button className="justify-center rounded-md text-sm font-medium ring-offset-gray-500 transition-colors
                    h-10 px-4 py-2 w-full bg-green-500 text-white"
              >
                Initiate Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
