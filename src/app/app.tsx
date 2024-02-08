import { AppRouter } from '@app/providers/router';
import {Navbar} from '@widgets/Navbar'
export function App() {
  return (
  <>
    <Navbar/>
    <AppRouter />
  </>
  );
}

export default App;
