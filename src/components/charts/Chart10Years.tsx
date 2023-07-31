import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from "react-chartjs-2";
import { timePeriods, values } from "../../helpers/api.helper";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const Chart10Years = ({ children }: { children: string }) => {

  const getLast10Years = () => {
    const lastTimePeriods = [];
    const lastValues = [];

    // The iteration is on the 40 latest quarters so we get 10 full years
    for (let i = 0; i < 40; i++) {
      lastTimePeriods.push(timePeriods[timePeriods.length - i]);
      lastValues.push(values[values.length - i]);
    }
    return [lastTimePeriods.reverse(), lastValues.reverse()]
  }

  const [lastTimePeriods, lastValues] = getLast10Years();

  const data = {
    labels: lastTimePeriods,
    datasets: [{
      label: 'Taux de chômage',
      data: lastValues,
      fill: {
        target: "origin",
        above: "#4682B444"
      },
      borderColor: "steelBlue",
      backgroundColor: "steelBlue",
      showLine: true,
      tension: 0
    }]
  };
  return <Line data={data} >{children}</Line>
}