import { useState } from 'react'
import grizzBear1 from './assets/grizzBear1.avif'
import grizzBear2 from './assets/grizzBear2.jpg'
import blackBear1 from './assets/blackBear1.jpeg'
import blackBear2 from './assets/blackBear2.webp'
import polarBear1 from './assets/polarBear1.jpg'
import polarBear2 from './assets/polarBear2.webp'
import andeanBear1 from './assets/andeanBear1.jpg'
import andeanBear2 from './assets/andeanBear2.jpg'
import slothBear1 from './assets/slothBear1.avif'
import slothBear2 from './assets/slothBear2.jpg'
import koala1 from './assets/koala1.jpg'
import koala2 from './assets/koalaOnTree.jpg'
import tardigrade1 from './assets/tardigrade.jpg'
import tardigrade2 from './assets/tardigrade1.jpg'
import './App.css'

function App() {
  const [showGrizz, setGrizzMessage] = useState(false);
  const [showBlack, setBlackMessage] = useState(false);
  const [showPolar, setPolarMessage] = useState(false);
  const [showAndean, setAndeanMessage] = useState(false);
  const [showSloth, setSlothMessage] = useState(false);
  const [showKoala, setKoalaMessage] = useState(false);
  const [showTardigrade, setTardigradeMessage] = useState(false);

  return (
    <>
      <h1>Bear Gallery!</h1>
      <div className="card">
        <button onClick={() => setGrizzMessage(!showGrizz)}>
          Brown Bear
        </button>
        <button onClick={() => setBlackMessage(!showBlack)}>
            Black Bear
        </button>
        <button onClick={() => setPolarMessage(!showPolar)}>
            Polar Bear
        </button>
        <button onClick={() => setAndeanMessage(!showAndean)}>
            Andean Bear
        </button>
        <button onClick={() => setSlothMessage(!showSloth)}>
            Sloth Bear
        </button>
      </div>
        <div>
            {showGrizz && (<img src={grizzBear1} alt="Grizzly Bear holding fish" className="vert"/>)}
            {showGrizz && (<img src={grizzBear2} alt="Grizzly bear sleeping"/>)}
            {showBlack && (<img src={blackBear1} alt="Black bear in forest"/>)}
            {showBlack && (<img src={blackBear2} alt="Black bear next to river"/>)}
            {showPolar && (<img src={polarBear1} alt="Polar bear in snow"/>)}
            {showPolar && (<img src={polarBear2} alt="Polar bear waving"/>)}
            {showAndean && (<img src={andeanBear1} alt="Andean bear cubs"/>)}
            {showAndean && (<img src={andeanBear2} alt="Andean bear eating apple"/>)}
            {showSloth && (<img src={slothBear1} alt="Sloth bear standing" className="vert"/>)}
            {showSloth && (<img src={slothBear2} alt="Sloth bear in forest"/>)}
        </div>
        <h1>"Bear" Gallery</h1>
        <div>
        <button onClick={() => setKoalaMessage(!showKoala)}>
            Koala
        </button>
        <button onClick={() => setTardigradeMessage(!showTardigrade)}>
            Tardigrade
        </button>
        </div>
        <div>
            {showKoala && (<img src={koala1} alt="Koala on tree" className="vert"/>)}
            {showKoala && (<img src={koala2} alt="Koala looking left of camera"/>)}
            {showTardigrade && (<img src={tardigrade1} alt="Tardigre bear"/>)}
            {showTardigrade && (<img src={tardigrade2} alt="Tardigre bear"/>)}
        </div>
    </>
  )
}

export default App
