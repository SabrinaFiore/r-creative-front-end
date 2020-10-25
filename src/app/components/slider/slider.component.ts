import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slideConfig = {
    "slidesToShow" : 1,
    "slidesToScroll" : 1,
    "dots" : true,
    "infinite" : true,
    "autoplay" : true,
    "autoplaySpeed" : 3000,
    "showArrow" : false
  };

  slides = [
    { 
      id: 1,
      img: "../../../assets/images/united-arab-emirates-padiglione-expo-milano.png",
      title: "United Arab Emirates - Padiglione EXPO Milano 2015",
      description: "I grandi eventi e le manifestazioni temporanee di portata internazionale sono l’ambito lavorativo nel quale le capacità di RIMOND si esprimono al meglio. Progetti ambiziosi, soluzioni architettoniche all’avanguardia, utilizzo di nuove tecnologie, coordinamento di fornitori provenienti dai quattro angoli del mondo e soprattutto tempi compressi e consegne tassative.",
    },
    { 
      id: 2,
      img: "../../../assets/images/centro-congressi-la-nuvola-roma.jpg",
      title: "Centro Congressi “La Nuvola” - Auditorium principale",
      description: "In RIMOND siamo appassionati di ambienti artistici e culturali, crediamo che possano eccitare, educare e intrattenere tutte le generazioni, unendo le culture. Creare luoghi che ispirano e stimolano ogni senso richiede una profonda comprensione della relazione tra l'esperienza del visitatore e l'ambiente che la crea.",
    },
    { 
      id: 3,
      img: "../../../assets/images/grand-theatre-of-rabat.png",
      title: "Grand Theatre of Rabat",
      description: "Il “Grand Theatre” è parte del programma nazionale per lo sviluppo culturale promosso dal Re Mohammed VI. Sorge sul fiume Bouregreg tra le due antiche città di Rabat e Sale. Il progetto trae particolare forza dal dialogo con il fiume, infatti attorno al fiume si sviluppa il parco che avvolge l’anfiteatro ed il teatro. ",
    },
  ];
}
