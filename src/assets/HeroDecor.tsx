// // HeroDecor.jsx
// export default function HeroDecor() {
//     return (
//         <svg
//             viewBox="0 0 600 800"  // riduci i valori per zoommare, aumenta per rimpicciolirlo
//             aria-hidden
//             style={{
//                 position: "absolute",
//                 top: "-180px",     // alza/abbassa per “attaccarlo” al menu
//                 left: "-80px",     // sposta verso il bordo
//                 width: "min(100vw, 1220px)",  // occupa il ? del vw ma non oltre i ? px
//                 height: "auto",
//                 zIndex: 0,
//                 pointerEvents: "none",  // lo rende non interattivo
//             }}
//         >
//             <defs>
//                 {/* Cambia qui i motivi: dots, righe, ecc. */}
//                 <pattern id="motivi" width="14" height="14" patternUnits="userSpaceOnUse">
//                     {/* Indicano la dimensione di una “tessera” del motivo che si ripete */}
//                     {/* width="8" height="8"   // puntini più ravvicinati */}
//                     {/* width="20" height="20" // puntini più radi */}


//                     <circle cx="3" cy="3" r="3" fill="#440c0c21" />
//                     {/* cx, cy → coordinate del centro del cerchio dentro la tessera. */}
//                     {/* r → raggio del cerchio (più grande = puntino più visibile) */}
//                     {/* fill → colore del puntino. */}

//                 </pattern>

//                 {/* Maschera “cerchio” per ottenere la mezzaluna/semicerchio visibile */}
//                 <mask id="semi">
//                     <rect width="100%" height="100%" fill="black" />
//                     {/* sposta il centro per scegliere quale porzione di cerchio si vede */}
//                     <circle cx="220" cy="-40" r="380" fill="white" />
//                 </mask>
//             </defs>

//             {/* riempi tutta l’area con il pattern e ritaglia col cerchio */}
//             <rect width="100%" height="100%" fill="url(#motivi)" mask="url(#semi)" />
//         </svg>
//     );
// }

// HeroDecor.jsx
export default function HeroDecor() {
    return (
        <svg
            viewBox="0 0 600 800"
            aria-hidden
            style={{
                position: "absolute",
                top: "-180px",
                left: "-80px",
                width: "min(100vw, 1220px)",
                height: "auto",
                zIndex: 0,
                pointerEvents: "none",
            }}
        >
            <defs>
                {/* Maschera cerchio per semicerchio */}
                <mask id="semi">
                    <rect width="100%" height="100%" fill="black" />
                    <circle cx="220" cy="-40" r="380" fill="white" />
                </mask>
            </defs>

            {/* Rettangolo principale mono colore */}
            <rect
                width="100%"
                height="100%"
                fill="#440c0c" // colore unico del blocco
                opacity="0.5"
                mask="url(#semi)"
            />
        </svg>
    );
}
