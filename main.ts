import { Serie } from "./serie.js";
import { dataSeries } from "./data.js";

let seriesTbody : HTMLElement = document.getElementById("series")!;
let avgSeasonsElem : HTMLElement = document.getElementById("avg-seasons")!;

cargarSeries(dataSeries);
avgSeasonsElem.innerHTML = `Seasons average: ${getAvgSeasons(dataSeries)}`;

function cargarSeries(series: Serie[]): void{
    console.log('Cargando series');
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = 
        `<td>${serie.id}</td>
        <td class="link">${serie.title}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>`
        seriesTbody.appendChild(trElement);
        trElement.onclick = () => cargarCard(serie);
    });
}

function getAvgSeasons(series: Serie[]): number{
    let avgSeasons: number = 0;
    series.forEach((serie)=>{
        avgSeasons = avgSeasons + serie.seasons;
    });
    return avgSeasons/series.length;
}

function cargarCard(Serie: Serie){
    let serieImage: HTMLElement = document.getElementById("cardImg")!;
    let seriesTitle: HTMLElement = document.getElementById("cardTitle")!;
    let seriesResume: HTMLElement = document.getElementById("cardResume")!;
    let seriesLink: HTMLElement = document.getElementById("cardLink")!;
    
    serieImage.setAttribute("src",Serie.image);
    seriesTitle.innerHTML = Serie.title;
    seriesResume.innerHTML = `${Serie.resume}`;
    seriesLink.setAttribute("href",Serie.link);
    seriesLink.innerHTML = `${Serie.link}`;
}