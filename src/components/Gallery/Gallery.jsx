import { useState } from "react";

function Selection(){

    const [showGrizz, setGrizzMessage] = useState(false);
    const [showBlack, setBlackMessage] = useState(false);
    const [showPolar, setPolarMessage] = useState(false);
    const [showAndean, setAndeanMessage] = useState(false);
    const [showSloth, setSlothMessage] = useState(false);
    const [showKoala, setKoalaMessage] = useState(false);
    const [showTardigrade, setTardigradeMessage] = useState(false);

    return (
        <>
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
                {showGrizz && (<img src="../assets/grizzBear1.avif" alt="Grizzly Bear holding fish" className="vert"/>)}
                {showGrizz && (<img src="../assets/grizzBear2.jpg" alt="Grizzly bear sleeping"/>)}
                {showBlack && (<img src="../assets/blackBear1.jpeg" alt="Black bear in forest"/>)}
                {showBlack && (<img src="../assets/blackBear2.webp" alt="Black bear next to river"/>)}
                {showPolar && (<img src="../assets/polarBear1.jpg" alt="Polar bear in snow"/>)}
                {showPolar && (<img src="../assets/polarBear2.webp" alt="Polar bear waving"/>)}
                {showAndean && (<img src="../assets/andeanBear1.jpg" alt="Andean bear cubs"/>)}
                {showAndean && (<img src="../assets/andeanBear2.jpg" alt="Andean bear eating apple"/>)}
                {showSloth && (<img src="../assets/slothBear1.avif" alt="Sloth bear standing" className="vert"/>)}
                {showSloth && (<img src="../assets/slothBear2.jpg" alt="Sloth bear in forest"/>)}
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
                {showKoala && (<img src="../assets/koala1.jpg" alt="Koala on tree" className="vert"/>)}
                {showKoala && (<img src="../assets/koalaOnTree.jpg" alt="Koala looking left of camera"/>)}
                {showTardigrade && (<img src="../assets/tardigrade.jpg" alt="Tardigrade bear"/>)}
                {showTardigrade && (<img src="../assets/tardigrade1.jpg" alt="Tardigrade bear"/>)}
            </div>
        </>
    )
}

function Gallery(){
    return (
        <div>
            <h1>Bear Gallery!</h1>
            <p>Yappin here</p>
        <>
        <Selection />
        </>
        </div>
    )
}

export default Gallery;