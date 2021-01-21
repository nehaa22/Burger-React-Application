import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Layout from './Hoc/Layout/Layout';

function App() {
  return (
    <div >
      <Layout>
      <BurgerBuilder/>
      </Layout>
    </div>
  );
}

export default App;
