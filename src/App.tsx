import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SpecificPage from './pages/SpecificPage';

const App = () => {
  const Components: Record<string, () => JSX.Element> = {
    '/': MainPage,
    cards: MainPage,
    '/cards/:ID': SpecificPage,
  };

  const SpecificRoute = (routeName: string) => {
    const Component = Components[routeName];
    return Component ? <Component /> : <h1>Not found</h1>;
  };

  return (
    <div className="App">
      <Routes>
        {Object.keys(Components).map((route) => (
          <Route path={route} key={route} element={SpecificRoute(route)} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
