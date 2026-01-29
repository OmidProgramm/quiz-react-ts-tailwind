

const Quiz = () => {
  return (
    <div className="w-full">
        <div className="w-full flex flex-col items-center p-3 gap-2 font-poppins">
            <h3 className="text-2xl font-bold">question 1</h3>
            <ul className="w-full flex flex-col gap-2">
                <li className="w-full text-center font-bold text-lg hover:bg-gray-700 p-2 rounded-lg cursor-pointer transition-all duration-300 hover:text-white">option 1</li>
                <li className="w-full text-center font-bold text-lg hover:bg-gray-700 p-2 rounded-lg cursor-pointer transition-all duration-300 hover:text-white">option 1</li>
                <li className="w-full text-center font-bold text-lg hover:bg-gray-700 p-2 rounded-lg cursor-pointer transition-all duration-300 hover:text-white">option 1</li>
            </ul>
        </div>
    </div>
  )
}

export default Quiz;