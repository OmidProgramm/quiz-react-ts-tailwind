
import { useState } from 'react';
import {questions} from './questions';

const Quiz = () => {

    const [selectedOption, setSelectedOption] = useState<string>('');
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [isFinal, setIsFinal] = useState<boolean>(false);
    const handelAnswer = (option:string)=>{
        setSelectedOption(option)
       if(option === questions[currentQuestion].answer){
            console.log(option)
        }
        setTimeout(
            ()=>{
                if(currentQuestion<questions.length-1){
                    setCurrentQuestion(prev=>prev+1);
                }else{
                    setIsFinal(true);
                }
            }
            ,500)
    }
  return (
    <div className="w-full">
        <div className="w-full flex flex-col items-center p-3 gap-2 font-poppins">
            <h3 className="text-2xl font-bold">{questions[currentQuestion].question}</h3>
            <ul className="w-full flex flex-col justify-center items-center gap-2">

                {
                    questions[currentQuestion].options.map(
                        (item:string,index:number)=>(
                            <li 
                                onClick={()=>handelAnswer(item)}
                                key={index} className="w-full text-left font-bold text-lg hover:bg-gray-700 p-2 rounded-lg cursor-pointer transition-all duration-300 hover:text-white">{item}</li>
                        )
                            
                        
                    )
                }


                
                
            </ul>
        </div>
    </div>
  )
}

export default Quiz;