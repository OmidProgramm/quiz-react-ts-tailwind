import {questions} from './questions';

const Quiz = () => {
  return (
    <div className="w-full">
        <div className="w-full flex flex-col items-center p-3 gap-2 font-poppins">
            <h3 className="text-2xl font-bold">{questions[0].question}</h3>
            <ul className="w-full flex flex-col justify-center items-center gap-2">

                {
                    questions[0].options.map(
                        (item:string,index:number)=>
                            <li key={index} className="w-full text-left font-bold text-lg hover:bg-gray-700 p-2 rounded-lg cursor-pointer transition-all duration-300 hover:text-white">{item}</li>
                        
                    )
                }


                
                
            </ul>
        </div>
    </div>
  )
}

export default Quiz;