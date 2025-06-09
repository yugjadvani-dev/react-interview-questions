import { createBrowserRouter, RouterProvider } from 'react-router';
import FirstQuestions from './Questions/first-questions';
import Sidebar from './components/Sidebar';

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
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
