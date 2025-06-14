import { createBrowserRouter, RouterProvider } from 'react-router';
import FirstQuestions from './Questions/first-questions';
import Sidebar from './components/Sidebar';
import SecondQuestions from './Questions/second-questions';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Sidebar,
    },
    {
        path: "/first-question",
        Component: FirstQuestions,
      },
      {
        path: "/second-question",
        Component: SecondQuestions
      }
  ]);

  return (
    <>
      <div className="flex h-full gap-4 p-4">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
