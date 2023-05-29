let volcanoes = [
    {
          "name": "Azufral",
          "type": "Stratovolcano",
          "last": "-930",
          "lat": "1.08",
          "lng": "-77.68"
    },
    {
          "name": "Bravo, Cerro",
          "type": "Stratovolcano",
          "last": "1720",
          "lat": "5.091",
          "lng": "-75.293"
    },
    {
          "name": "Cisne, Nevado el",
          "type": "Dome of Ruiz, Nevado del",
          "last": "",
          "lat": "4.842528",
          "lng": "-75.345278"
    },
    {
          "name": "Cumbal",
          "type": "Stratovolcano",
          "last": "1926",
          "lat": "0.95",
          "lng": "-77.87"
    },
    {
          "name": "Dona Juana",
          "type": "Stratovolcano",
          "last": "1906",
          "lat": "1.5",
          "lng": "-76.936"
    },
    {
          "name": "Galeras",
          "type": "Complex",
          "last": "2014",
          "lat": "1.22",
          "lng": "-77.37"
    },
    {
          "name": "Huila, Nevado del",
          "type": "Stratovolcano",
          "last": "2012",
          "lat": "2.93",
          "lng": "-76.03"
    },
    {
          "name": "Machin",
          "type": "Stratovolcano",
          "last": "1180",
          "lat": "4.487",
          "lng": "-75.389"
    },
    {
          "name": "Pan de Az\u00facar",
          "type": "Stratovolcano of Purace",
          "last": "",
          "lat": "2.874167",
          "lng": "-75.715"
    },
    {
          "name": "Purace",
          "type": "Stratovolcano(es)",
          "last": "2022",
          "lat": "2.32",
          "lng": "-76.4"
    },
    {
          "name": "Romeral",
          "type": "Stratovolcano",
          "last": "-5390",
          "lat": "5.203",
          "lng": "-75.363"
    },
    {
          "name": "Ruiz, Nevado del",
          "type": "Stratovolcano",
          "last": "2023",
          "lat": "4.892",
          "lng": "-75.324"
    },
    {
          "name": "Santa Isabel",
          "type": "Shield",
          "last": "-850",
          "lat": "4.818",
          "lng": "-75.365"
    },
    {
          "name": "Sotara",
          "type": "Stratovolcano",
          "last": "Unknown",
          "lat": "2.108",
          "lng": "-76.592"
    },
    {
          "name": "Tolima, Nevado del",
          "type": "Stratovolcano",
          "last": "1943",
          "lat": "4.658",
          "lng": "-75.33"
    },
    {
          "name": "Cerro Negro de Mayasquer",
          "type": "",
          "last": "",
          "lat": "0.824056",
          "lng": "-77.965694"
    },
    {
          "name": "Volc\u00e1n Chiles",
          "type": "",
          "last": "",
          "lat": "0.821111",
          "lng": "-77.935"
    },
    {
          "name": "Volc\u00e1n El Escondido",
          "type": "",
          "last": "",
          "lat": "5.516668",
          "lng": "-75.047889"
    },
    {
          "name": "Volc\u00e1n Las \u00c1nimas",
          "type": "",
          "last": "",
          "lat": "1.565139",
          "lng": "-76.856944"
    },
    {
          "name": "Volc\u00e1n Petacas",
          "type": "",
          "last": "",
          "lat": "0.675083",
          "lng": "-76.82"
    },
    {
          "name": "Nevado del Quind\u00edo",
          "type": "",
          "last": "",
          "lat": "4.703778",
          "lng": "-75.383361"
    },
    {
          "name": "Laguna San Diego",
          "type": "",
          "last": "",
          "lat": "5.650222",
          "lng": "-74.960222"
    },
    {
          "name": "Volc\u00e1n Alto de Mulatos",
          "type": "",
          "last": "",
          "lat": "8.135822",
          "lng": "-76.55035"
    },
    {
          "name": "Volc\u00e1n Alto Mellizos",
          "type": "",
          "last": "",
          "lat": "5.504194",
          "lng": "-75.661833"
    },
    {
          "name": "Volc\u00e1n Arboletes",
          "type": "",
          "last": "",
          "lat": "8.850367",
          "lng": "-76.432275"
    },
    {
          "name": "Volc\u00e1n Bordoncillo",
          "type": "",
          "last": "",
          "lat": "1.156056",
          "lng": "-77.098806"
    },
    {
          "name": "Volc\u00e1n Morasurco",
          "type": "",
          "last": "",
          "lat": "1.270556",
          "lng": "-77.240833"
    },
    {
          "name": "Volc\u00e1n Patascoy",
          "type": "",
          "last": "",
          "lat": "0.961389",
          "lng": "-77.071944"
    },
    {
          "name": "Paramillo de Santa Rosa",
          "type": "",
          "last": "",
          "lat": "4.787772",
          "lng": "-75.465247"
    }
]

// THIS BLOCK SHOULD APPEAR ON EACH EXCLUSION ZONE CALCULATION .js
//--------------------------------------------------------------------------------------

// Obtains the checkbox object related to the population exclusion
let volcanoe_exclusion = document.getElementById('volcanoe_exclusion');

// If the box is checked at the program start, then draw
if (!volcanoe_exclusion.checked){
      draw_exclusion_volcanoes('rgba(0, 0, 128, 0.7)');
}

// Detects changes in the checkbox related to the population exclusion and "erase" by reloading or draws it
volcanoe_exclusion.addEventListener('change', (event) => {

  if (volcanoe_exclusion.checked){
    window.location.reload();
  } else {
    draw_exclusion_volcanoes('rgba(0, 0, 128, 0.7)');
  }
})

// If the box is checked draw all exclusions by the same color
all_same_color.addEventListener('change', (event) => {

  if (all_same_color.checked){
    draw_exclusion_volcanoes('rgba(255, 0, 0, 0.8)');
  } else {
    window.location.reload();
  }
})

//--------------------------------------------------------------------------------------

function draw_exclusion_volcanoes(colors){

    for (let i = 0; i < volcanoes.length; i++){
        addPolygonToMap(map, parseFloat(volcanoes[i].lat), parseFloat(volcanoes[i].lng), colors);
    }
}
// Function to draw volcano triangles
function addPolygonToMap(map, lat, lng, colors) {

    var lineString = new H.geo.LineString(
    [
        lat+0.05, lng, 0,
        lat-0.05, lng+0.05, 0,
        lat-0.05, lng-0.05, 0,
    ],
    'values lat lng alt');

    map.addObject(
        new H.map.Polygon(lineString, {
        style: {
        fillColor: colors,
        strokeColor: colors,
        lineWidth: 1,
        opacity: 1
        }
    })
    );
}


