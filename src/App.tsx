import quizImg from '../src/assets/quiz.jpg';
import Quiz from './Quiz';

const App = () => {
  return (
    <div className="w-120 font-poppins bg-gray-200 rounded-3xl mx-auto mt-30 p-2 flex flex-col justify-center">
      <div className="flex flex-row justify-center items-center gap-3 p-2">
        <div className='w-20 h-20 rounded-2xl overflow-hidden'>
          <img src={quizImg} alt="quiz-foto" className='w-full h-full rounded-2xl'/>
        </div>
        <h1 className='font-poppins font-bold text-3xl'>Quiz</h1>
      </div>
      <Quiz/>
    </div>
  )
}

export default App;