import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './component/Home/Home';
import Question from './component/Question/Question';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>,
        },
        {
          path: '/quiz/:quizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <Question></Question>
        }
      ]
    }
  ])
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
