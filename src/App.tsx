import './App.css';
import { Charts } from './components/Charts';
import { Context } from './components/Context';
import { Results } from './components/Results';
import { Weather } from './components/Weather';
import { Footer } from './components/nav/Footer';
import { Header } from './components/nav/Header';
import { nestedDataTable } from './helpers/api.helper';
import { getAllPredictions, saveGroundTruth } from './helpers/db.helper';

export interface prediction {
  id: number,
  time_period: string,
  predicted_value: number,
  ground_truth: number,
  created_at: Date
}
export const data: prediction[] | undefined = await getAllPredictions();

function App() {
  async function setGroundTruthWhenAvailable(data: prediction[]) {
    for (let i = 0; i < data.length; i++) {
      const [year, quarter] = data[i].time_period.split("-");

      // We check if the nestedDataTable has value for this time period
      if (nestedDataTable[year][quarter]) saveGroundTruth(data[i].time_period, nestedDataTable[year][quarter])
    }
  }

  setGroundTruthWhenAvailable(data!);

  return (
    <div id="wrapper" className="App text-center">
      <Header />

      <main className="mx-auto">
        <Weather />
        <Context />
        <Charts />
        <Results />
      </main>

      <Footer />
    </div>
  );
}

export default App;
