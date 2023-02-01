// import logo from './logo.svg';
import Header from '../components/header/Header';
import TopBlock from '../components/topBlock/TopBlock';
import BenefitsBlock from '../components/benefitsBlock/BenefitsBlock';
import AnswersBlock from '../components/answersBlock/AnswersBlock';
import StatisticsBlock from '../components/statisticsBlock/StatisticsBlock';
import TopBestBlock from '../components/topBestBlock/TopBestBlock';
import MapBlock from '../components/mapBlock/MapBlock';
import './App.scss';

function App() {
  return (
    <div className="wrap-a11">

      <Header />
      <TopBlock />
      <BenefitsBlock />
      <AnswersBlock />
      <StatisticsBlock />
      <TopBestBlock />
      <MapBlock />




    </div>
  );
}

export default App;
