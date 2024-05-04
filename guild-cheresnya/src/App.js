import './components/header/header-styles.css';
import './App.css'
import Header from './components/header/header.js';
import MainList from './components/main/main.js';
import { dataForList } from './content/mainData';
import Button from './components/button/button.js';
import Footer from './components/footer/footer.js';
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div class = 'helo'>
        <h1>Приветсвуем на официальном сайте<br/>"Гильдия Черешня!"</h1>
        </div>
        <div class = 'backi'>
          <div class = 'Rules1'>
            <dl>
              {dataForList.map((item) => <MainList {...item[0]} />)}
            </dl>
          </div>
          <div class = 'Rules2'>
            <dl>
              {dataForList.map((item) => <MainList {...item[1]} />)}
            </dl>
          </div>
        </div>
        <section>
          <h3>Test buttons</h3>
          <Button />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
