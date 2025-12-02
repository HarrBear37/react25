import { useState } from "react";
import brown from "../assets/grizzBear2.jpg"
import black from "../assets/blackBear2.webp"
import andean from "../assets/andeanBear1.jpg"
import polar from "../assets/polarBear2.webp"
import sloth from "../assets/slothBear1.avif"
import koala from "../assets/koala1.jpg"
import tardigrade from "../assets/tardigrade1.jpg"

export default function Gallery(){
    const images = [
        {src: brown, title: 'Grizzly Bear', desc: 'Grizzly bear sleeping'},
        {src: black, title: 'Black Bear', desc: 'Black beat by the river'},
        {src: andean, title: 'Andean Bear', desc: 'Andean cubs'},
        {src: polar, title: 'Polar Bear', desc: 'Polar bear waving'},
        {src: sloth, title: 'Sloth Bear', desc: 'Sloth bear Standing'},
    ]
    const images1 = [
        {src: koala, title: 'Koala', desc: 'Koala on tree'},
        {src: tardigrade, title: 'Tardigrade', desc: 'Tardigrade.'},
    ]

    const [index, setIndex] = useState(0);
    const [index1, setIndex1] = useState(0)

    const next = () => setIndex((index + 1) % images.length);
    const prev = () => setIndex((index - 1 + images.length) % images.length);

    const next1 = () => setIndex1((index1 + 1) % images1.length);
    const prev1 = () => setIndex1((index1 + 1 + images1.length) % images1.length);

    return (
        <div>
            <div>
                <h1>Bear Gallery</h1>
                <button onClick={prev}>Previous</button>
                <button onClick={next}>Next</button>
            </div>
            <div>
                <img src={images[index].src} alt={images[index].title}/>
            </div>
            <div>
                <h1>"Bear" Gallery</h1>
                <button onClick={prev1}>Previous</button>
                <button onClick={next1}>Next</button>
            </div>
            <div>
                <img src={images1[index1].src} alt={images1[index1].title}/>
            </div>
        </div>
    )
}