import classes from './App.module.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div className={classes.App}>
      <Layout>
      <BurgerBuilder/>
      </Layout>
    </div>
  );
}

export default App;
