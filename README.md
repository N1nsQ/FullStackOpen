# FullStackOpen
Node.js | JavaScript | React | 

Helsingin yliopiston MOOC-kurssin [Full Stack Open](https://fullstackopen.com/) tehtävät löytyvät tästä reposta.

## Osa 0

* Tutustuttiin selaimen Developer-konsoliin ja Network -tabiin
* Tutustuttiin selaimen ja serverin väliseen kommunikointiin ja HTTP-protokollaan
* Tutustuttiin JSON-muotoiseen dataan ja asennettiin JSONView -lisäosa
* Tutustuttiin tapahtumankäsittelijöihin ja callback-funktioihin, joita käytetään mm. HTTP-vastausten käsittelyyn
* Kerrattiin CSS ja HTML
* AJAX = HTML-sivulle sisällytetty JavaScript mahdollistaa uuden sisällön lataamisen lataamatta itse sivua uudelleen

## Osa 1

### Reactin alkeet

* React-projektin luominen Viten avulla
* React-komponentit ovat funktioita
* Tiedon välitys komponenttien välillä propsien avulla
*  **Objects are not valid as a React child** --> Virheilmoitus kertoo, että Reactissa ei voida renderöidä objekteja.
    * Yksittäisten aaltosulkeissa renderöitävien asioiden tulee Reactissa olla primitiivisiä arvoja, kuten lukuja tai merkkijonoja. 

### JavaScriptia

* JavaScript transipoilointi tehdään yleensä Babelin avulla.
  * Transpilointi tarkoittaa sitä, että uudempi JavaScript käännetään johonkin vanhempaan, selaimen tukemaan versioon
* `Node.js` on JavaScript-moottoriin perustuva suoritusympäristö
* JavaScript muuttujat
* JavaScript taulukot
  * `concat` -metodi luo uuden taulukon vanhan pohjalta, lisäten sinne uuden halutun arvon, esim. `const t2 = t.concat(5)`
  * `map` -metodi muodostaa taulukon perusteella uuden taulukon, jonka jokainen alkio luodaan map:in parametrina olevan funktion avulla
* JavaScript oliot
* JavaScript funktiot
* Luokkasyntaksi
