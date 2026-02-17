# FullStackOpen

Node.js | JavaScript | React |

Helsingin yliopiston MOOC-kurssin [Full Stack Open](https://fullstackopen.com/) tehtävät löytyvät tästä reposta.

## Osa 0

- Tutustuttiin selaimen Developer-konsoliin ja Network -tabiin
- Tutustuttiin selaimen ja serverin väliseen kommunikointiin ja HTTP-protokollaan
- Tutustuttiin JSON-muotoiseen dataan ja asennettiin JSONView -lisäosa
- Tutustuttiin tapahtumankäsittelijöihin ja callback-funktioihin, joita käytetään mm. HTTP-vastausten käsittelyyn
- Kerrattiin CSS ja HTML
- AJAX = HTML-sivulle sisällytetty JavaScript mahdollistaa uuden sisällön lataamisen lataamatta itse sivua uudelleen

## Osa 1

### Reactin alkeet

- React-projektin luominen Viten avulla
- React-komponentit ovat funktioita
- Tiedon välitys komponenttien välillä propsien avulla
- **Objects are not valid as a React child** --> Virheilmoitus kertoo, että Reactissa ei voida renderöidä objekteja.
  - Yksittäisten aaltosulkeissa renderöitävien asioiden tulee Reactissa olla primitiivisiä arvoja, kuten lukuja tai merkkijonoja.

### JavaScriptia

- JavaScript transipoilointi tehdään yleensä Babelin avulla.
  - Transpilointi tarkoittaa sitä, että uudempi JavaScript käännetään johonkin vanhempaan, selaimen tukemaan versioon
- `Node.js` on JavaScript-moottoriin perustuva suoritusympäristö
- JavaScript muuttujat
- JavaScript taulukot
  - `concat` -metodi luo uuden taulukon vanhan pohjalta, lisäten sinne uuden halutun arvon, esim. `const t2 = t.concat(5)`
  - `map` -metodi muodostaa taulukon perusteella uuden taulukon, jonka jokainen alkio luodaan map:in parametrina olevan funktion avulla
- JavaScript oliot
- JavaScript funktiot
- Luokkasyntaksi

### Komponentin tila ja tapahtumankäsittely

- Destruktointi = esimerkiksi propsien arvojen kerääminen suoraan oliosta omiin muuttujiin, ilman että niitä tarvitsee hakea erikseen (tai purkaa props -objektia)
- ```js
  const Hello = (props) => {
  const { name, age } = props
  ```
  ```js
  const Hello = ({ name, age }) => {
  ```
- Komponentin tila ja `useState` -hook
  - ```js
    const [counter, setCounter] = useState(0); // destruktointisyntaksi
    ```
- **Too many re-renders. React limits the number of renders to prevent an infinite loop.** --> Tapahtumankäsittelijäksi täytyy määritellä joko _funktio_ tai _viite funktioon_
- ```js
  <button onClick={() => setCounter(counter + 1)}>
    {" "}
    // Tämä on ok, tapahtumankäsittelijä on funktio plus
  </button>
  ```
- ```js
  const App = () => {
    const [counter, setCounter] = useState(0);

    const increaseByOne = () => setCounter(counter + 1); // funktio asetetaan muuttujaan

    const setToZero = () => setCounter(0); // funktio asetetaan muuttujaan

    return (
      <div>
        <div>{counter}</div>

        <button onClick={increaseByOne}>
          {" "}
          // Tapahtumankäsittelijäksi asetetaan viite funktioon, tämä on ok plus
        </button>

        <button onClick={setToZero}>
          {" "}
          // Tapahtumankäsittelijäksi asetetaan viite funktioon, tämä on ok zero
        </button>
      </div>
    );
  };
  ```

- ```js
  <button onClick={setCounter(counter + 1)}>  // tämä on FUNKTIOKUTSU ja se aiheuttaa ikuisen loopin
  ```

### Monimutkaisempi tila, Reactin debuggaus

- Komponentin tila voidaan jakaa pienempiin osiin useammalla `useState` -hookilla.
- **Object spread -syntaksi:** `{ ...clicks }`
  - Tila voidaan pitää myös yhtenäisenä tallentamalla muuttuvat osat yhteen olioon:
  - ```js
    {
      left: 0,
      right: 0
    }
    ```
- Tilan päivittäminen object spread -syntaksilla:
  - ```js
    const handleLeftClick = () =>
      setClicks({ ...clicks, left: clicks.left + 1 });
    ```
  - `{ ...clicks }` pitää muut objektin arvot muuttumattomina
- Älä muuta React-komponentin tilaa suoraan!
  - ```js
    const handleLeftClick = () => {
      clicks.left++; // EI SALLITTU!
      setClicks(clicks);
    };
    ```
- Tilan päivitys tapahtuu **asynkronisesti.**
- **React-sovelluksen debuggaus:**
  - Developer-konsoli
    - muista kirjoittaa riittävästi `console.log()`:eja sopiviin kohtiin!
  - Chromen developer-konsolin `debugger`in hyödyntäminen, [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)
  - React Developer Tools
  - [Debug JavaScript](https://developer.chrome.com/docs/devtools/javascript)
- Älä kutsu `useState` tai `useEffect` -funktioita silmukassa, ehtolauseen sisällä tai muista kuin komponentin määrittelevästä funktiosta. **Kutsu vain React-komponentin määrittelevän funktion rungosta.**
- Älä määrittele komponenttia komponentin sisään

## Osa 2

### Kokoelmien renderöinti ja moduulit

- Taulukoiden käsittely funktionaalisesti metodien `filter`, `reject`, `map`, `find`, ja `reduce` avulla.
  - `filter`: luo uuden taulukon, joka pitää sisällään vain ehdon täyttävät alkiot
    - esim. `const dogs = animals.filter(({ species }) => species === 'dog')` // ota vain nämä
    - `reject`: Voidaan käyttää filterin tapaan **käänteisesti**: se **poistaa** alkiot jotka täyttävät ehdon
    - esim. `const notDogs = animals.filter(({ species }) => species !== 'dog'` // älä ota näitä
  - `map`: luo uuden, samanmittaisen taulukon, joka muuttaa kaikkia alkioita annetun funktion mukaisesti
    - esim. `const names = animals.map((animal) => animal.name)` Palauttaa vain eläimen nimen, ei muuta taulukon tietoa
  - `find`: palauttaa **ensimmäisen** alkion joka täyttää ehdon, muuttaen taulukon yhdeksi alkioksi
    - `filter` palauttaa siis kaikki ehdon täyttävät alkiot, kun `find` palauttaa vain ensimmäisen!
    - `const ekaKoira = animals.find(({ species }) => species === 'dog');`
  - `reduce`: monikäyttöinen metodi joka palauttaa aina **yhden arvon**
    - Voidaan käyttää esim. taulukossa olevien summien yhteenlaskemiseen
    - esim.
    ```js
    const totalAmount = orders.reduce((sum, order) => {
      return sum + order.amount;
    }, 0);
    ```
- **Each child in array or iterator should have a unique "key" prop.** --> `map`-funktiolle pitää määritellä uniikki avain, key.
  - Älä kuitenkaan käytä indeksiä avaimena
- **You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.** --> käytä onChange -funktiota lomakkeen tilan hallintaan
- `event.preventDefault()` estää lomakkeen lähetyksen oletusarvoisen toiminnan, joka aiheuttaisi mm. sivun uudelleenlatautumisen.

### Palvelimella olevan datan hakeminen

- JSON Serverin käynnistäminen projektin juurihakemistossa: `npx json-server --port 3001 db.json`
- ulkoisten kirjastojen asentaminen React sovellukseen: axios, json-server
- useEffect -hookin käyttö
  - Sopii esim. datan hakemiseen
- axios-kirjasto. datan hakeminen serveriltä
- json-muotoinen tietokanta projektin juuressa, db.json
- JavaScript promiset

### Palvelimella olevan datan muokkaaminen
