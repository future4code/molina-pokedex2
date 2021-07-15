import GlobalState from './global/GlobalState';
import Router from './Router/Router'

function App() {
  return (
    <GlobalState>
      <Router/>
    </GlobalState>
  );
}

export default App;
