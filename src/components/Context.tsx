export const Context = () => {
  return (
    <div id="contexte" className="my-2">
      <h3>Contexte: </h3>

      <p>Depuis le 1er Février 2023, l'assurance chômage est devenue <q>&nbsp;plus stricte quand trop d'emplois sont non pourvus, plus généreuse
        quand le chômage est élevé&nbsp;</q>, dixit Emmanuel Macron. Plus concrètement c'est -25% sur les durées d'allocations chômage quand l'emploi se porte bien&nbsp;!</p>

      <p>Mais à cela, quelques règles s'imposent&nbsp;; la durée de l'ouverture de vos droits à l'assurance chômage sera dégradée de 25% si&nbsp;:</p>

      <ul className="mt-0">
        <li>Le taux de chômage est inférieur à 9% pendant 3 trimestres consécutifs.</li>
        <li>Le taux de chômage n'a pas augmenté de 0.8 point sur le dernier trimestre.</li>
      </ul>

      <p className="mb-0">Ne sont pas concernés&nbsp;:</p>

      <ul className="mt-0">
        <li>Les personnes résidants dans les DOM.</li>
        <li>Les métiers déjà exemptés de la précédente réforme de l'assurance-chômage (marins, pêcheurs, dockers, intermittents, expatriés).</li>
      </ul>

      <p>Le plancher minimal de l'ouverture aux droits reste de 6 mois. Le plancher maximal quant à lui descend à 18 mois au lieu de 24 - pour les personnes de moins de 53 ans&nbsp;- quand le marché de l'emploi se porte bien.</p>
      <p>Cela sera valable pour tous les contrats prenant fin après le 1er février 2023 et avant le 31 décembre 2023 ; pour la suite, advienne que pourra&nbsp;...</p>
      <p><sub>Source&nbsp;: <a href="https://www.francetvinfo.fr/economie/emploi/chomage/reforme-de-l-assurance-chomage-on-vous-explique-les-nouvelles-regles-d-indemnisation-des-demandeurs-d-emploi_5490423.html" hrefLang="fr" target="_blank" rel="noreferrer">France Info</a></sub></p>
    </div>
  )
}