// export function ColorInput({ onSetColorStyle, backgroundColor }) {
//     const colors = [
//         '#f28b8254', '#fbbd0460', '#FFF475', '#CCFF90', '#A7FFEB',
//         '#CBF0F8', '#AECBFA', '#D7AEFB', '#FDCFE8', '#E6C9A8',
//         '#E8EAED'
//     ]

//     function onSetColor(color) {
//         const newStyle = {
//             backgroundColor: color || null
//         }
//         onSetColorStyle(newStyle)
//     }

//     return (
//         <section className="color-input">
//             <div className="items-container">
//                 <div
//                     className={`item no-color ${!backgroundColor ? 'chosen' : ''}`}
//                     title="No color"
//                     onClick={() => onSetColor(null)}
//                 >
//                     <img src="icon/keep-assets/asset 5.svg" alt="" />
//                 </div>
//                 {colors.map(color => (
//                     <div
//                         key={color}
//                         className={`item ${color === backgroundColor ? 'chosen' : ''}`}
//                         style={{ backgroundColor: color }}
//                         onClick={() => onSetColor(color)}
//                     />
//                 ))}
//             </div>
//         </section>
//     )
// }


const { useState } = React

export function ColorInput({ onSetColorStyle, backgroundColor }) {
    const [isOpen, setIsOpen] = useState(false)

    const colors = [
        '#f28b8254', '#fbbd0460', '#FFF475', '#CCFF90', '#A7FFEB',
        '#CBF0F8', '#AECBFA', '#D7AEFB', '#FDCFE8', '#E6C9A8',
        '#E8EAED'
    ]

    function onSetColor(color) {
        const newStyle = {
            backgroundColor: color || null
        }
        onSetColorStyle(newStyle)
        setIsOpen(false) // סגור את התפריט אחרי בחירה
    }

    return (
        <section className="color-input">
            <button className="palette-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                <img src="icon/keep-assets/asset 40.svg" alt="Palette" className = "icon-palette" />
            </button>

            {isOpen && (
                <div className="color-palette">
                    <div
                        className={`item no-color ${!backgroundColor ? 'chosen' : ''}`}
                        title="No color"
                        onClick={() => onSetColor(null)}
                    >
                        <img src="icon/keep-assets/asset 5.svg" alt="" />
                    </div>
                    {colors.map(color => (
                        <div
                            key={color}
                            className={`item ${color === backgroundColor ? 'chosen' : ''}`}
                            style={{ backgroundColor: color }}
                            onClick={() => onSetColor(color)}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}
