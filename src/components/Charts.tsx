import { lastUpdate } from "../helpers/api.helper"
import { Chart10Years } from "./charts/Chart10Years"
import { Chart1975 } from "./charts/Chart1975"
export const Charts = () => {
  return (
    <div id="chart-container" className="my-2">
      <h3>Data visualisation:</h3>

      <h4>Graphique des chiffres du chômage de 1975 à nos jours</h4>
      <Chart1975>Un problème à eu lieu lors du chargement du graphique ...</Chart1975>

      <h4>Graphique des chiffres du chômage sur les 10 dernières années</h4>
      <Chart10Years>Un problème à eu lieu lors du chargement du graphique ...</Chart10Years>

      <p className="mt-0"><sub>Sources: <a href="https://www.insee.fr/fr/statistiques/serie/001688527" target="_blank" rel="noreferrer">INSEE</a>. Dernière mise à jour : {lastUpdate}. N.B.: le graphique ci-dessus peut ne pas s'afficher sur mobile.</sub></p>
    </div>
  )
}