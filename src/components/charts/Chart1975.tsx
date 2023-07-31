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


export const Chart1975 = ({ children }: { children: string }) => {
  const data = {
    labels: timePeriods,
    datasets: [{
      label: 'Taux de chômage',
      data: values,
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

  return <Line data={data}>{children}</Line>
}