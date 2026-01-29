
import { useState } from 'react';
import {questions} from './questions';

const Quiz = () => {

    const [score, setScore] = useState<number>(0)
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [isFinal, setIsFinal] = useState<boolean>(false);
    const handelAnswer = (option:string)=>{
        setSelectedOption(option)
       if(option === questions[currentQuestion].answer){
            setScore(score+1)
        }
        setTimeout(
            ()=>{
                if(currentQuestion<questions.length-1){
                    setCurrentQuestion(prev=>prev+1);
                }else{
                    setIsFinal(true);
                }
            }
            ,800)
    }
     const windowRefresh =()=>{
        setScore(0);
        setCurrentQuestion(0);
        setSelectedOption('');
        setIsFinal(false);
         window.location.reload();
    }
  return (
    <div className="w-full">
        {
            isFinal?(
                <div>
                    <h2 className='text-3xl font-bold p-3'>Quiz completed</h2>
                    <p className='text-xl font-bold p-3'>Your score is: {score} from {questions.length}</p>
                    <button className='bg-blue-500 text-white p-3 rounded-xl cursor-pointer mt-2 mb-2 hover:bg-blue-600 transition-all duration-300' onClick={windowRefresh}>Refresh</button>
                </div>
            ):(
                <div className="w-full flex flex-col items-center p-3 gap-2 font-poppins">
            <h3 className="text-2xl font-bold">{`${currentQuestion+1} : ${questions[currentQuestion].question}`}</h3>
            <ul className="w-full flex flex-col justify-center items-center gap-2">

                {
                    questions[currentQuestion].options.map(
                        (item:string,index:number)=>(
                            <li 
                                onClick={()=>handelAnswer(item)}
                                key={index} className={`
                                        w-full text-left font-bold text-lg p-2 rounded-lg cursor-pointer transition-all duration-300
                                        hover:bg-gray-400
                                        ${
                                        selectedOption === item
                                            ? item === questions[currentQuestion].answer
                                            ? 'bg-green-300'
                                            : 'bg-red-400'
                                            : ''
                                        }
                                    `}
                                >{item}</li>
                        )
                    )
                } 
            </ul>
        </div>
            )
        }
        
    </div>
  )
}

export default Quiz;