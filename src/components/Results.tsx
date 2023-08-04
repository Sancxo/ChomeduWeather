import { data, prediction } from "../App";

export const Results = () => {
  function createRows(data: prediction[]) {
    const rows: JSX.Element[] = [];

    for (let i = 0; i < data.length; i++) {
      const predictedValue = data[i].predicted_value;
      const groundTruth = data[i].ground_truth;

      const diff = Number((predictedValue - groundTruth).toFixed(1));

      const isPredictionRight = () => {
        let result = ["", ""];
        if (!groundTruth) {
          result = ["", "En attente"]
        } else if (diff === 0.0) {
          result = ["block-success", "succès"];
        } else if (diff > 0 || diff < 0) {
          result = ["block-danger", "échec"];
        }

        return result;
      };

      const [color, isSuccess] = isPredictionRight();

      rows.push(
        <tr className={color} key={data[i].id}>
          <td>{data[i].id}</td>
          <td>{data[i].time_period}</td>
          <td>{predictedValue}</td>
          <td>{groundTruth || "En attente"}</td>
          <td>{isSuccess}</td>
        </tr>
      );
    }

    return rows;
  }

  return (
    <div id="predictions-table" className="my-2">
      <h3>Archive des prédictions passées:</h3>
      <table className="mx-auto w-100">
        <thead>
          <tr>
            <th>N°</th>
            <th>Période</th>
            <th>Prédiction</th>
            <th>Ground truth<sup>*</sup></th>
            <th>Succès/échec</th>
          </tr>
        </thead>
        <tbody>
          {createRows(data!)}
        </tbody>
      </table>
      <p className="mt-0"><small>*<span className="italic">Ground truth</span>: Valeur faisant office de vérité observée sur le terrain; ici il s'agit du chiffre retourné par l'INSEE le trimestre suivant la prédiction.</small></p>
    </div>
  )
}