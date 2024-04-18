import { useRoutes } from 'react-router-dom';
import {routess} from './route/routes';

const App = () => {
  const element = useRoutes(routess);
  return element;
}

export default App;
