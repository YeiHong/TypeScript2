import { dataSeries } from "./data.js";
var seriesTbody = document.getElementById("series");
var avgSeasonsElem = document.getElementById("avg-seasons");
cargarSeries(dataSeries);
avgSeasonsElem.innerHTML = "Seasons average: ".concat(getAvgSeasons(dataSeries));
function cargarSeries(series) {
    console.log('Cargando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML =
            "<td>".concat(serie.id, "</td>\n        <td class=\"link\">").concat(serie.title, "</td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        trElement.onclick = function () { return cargarCard(serie); };
    });
}
function getAvgSeasons(series) {
    var avgSeasons = 0;
    series.forEach(function (serie) {
        avgSeasons = avgSeasons + serie.seasons;
    });
    return avgSeasons / series.length;
}
function cargarCard(Serie) {
    var serieImage = document.getElementById("cardImg");
    var seriesTitle = document.getElementById("cardTitle");
    var seriesResume = document.getElementById("cardResume");
    var seriesLink = document.getElementById("cardLink");
    serieImage.setAttribute("src", Serie.image);
    seriesTitle.innerHTML = Serie.title;
    seriesResume.innerHTML = "".concat(Serie.resume);
    seriesLink.setAttribute("href", Serie.link);
    seriesLink.innerHTML = "".concat(Serie.link);
}
