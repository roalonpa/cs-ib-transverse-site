import { Fragment, useState } from "react"
import "./logic-gates.css"

export default function ComponentLogicGates() {

    const tables = [
        {
            name: "and-table",
            P: [0, 0, 1, 1],
            Q: [0, 1, 0, 1],
            output: [0, 0, 0, 1]
        },
        {
            name: "or-table",
            P: [0, 0, 1, 1],
            Q: [0, 1, 0, 1],
            output: [0, 1, 1, 1]
        },
        {
            name: "not-table",
            P: [0, 1],
            output: [1, 0]
        },
        {
            name: "nand-table",
            P: [0, 0, 1, 1],
            Q: [0, 1, 0, 1],
            output: [1, 1, 1, 0]
        },
        {
            name: "nor-table",
            P: [0, 0, 1, 1],
            Q: [0, 1, 0, 1],
            output: [1, 0, 0, 0]
        },
        {
            name: "xor-table",
            P: [0, 0, 1, 1],
            Q: [0, 1, 0, 1],
            output: [0, 1, 1, 0]
        },
        {
            name: "xnor-table",
            P: [0, 0, 1, 1],
            Q: [0, 1, 0, 1],
            output: [1, 0, 0, 1]
        }
    ]

    const [compuertas, setCompuertas] = useState([
        {
            name: "and",
            description: "La compuerta AND produce una salida de 1 solo si todas sus entradas son 1. Si alguna de las entradas es 0, la salida será 0.",
            table: tables[0],
            p: 0,
            q: 0,
        },
        {
            name: "or",
            description: "La compuerta OR produce una salida de 1 si al menos una de sus entradas es 1. La salida será 0 solo si todas las entradas son 0.",
            table: tables[1],
            p: 0,
            q: 0,
        },
        {
            name: "not",
            description: "La compuerta NOT, también conocida como inversor, produce una salida que es el complemento de su entrada. Si la entrada es 1, la salida será 0, y viceversa.",
            table: tables[2],
            p: 0,
            q: 0,
        },
        {
            name: "nand",
            description: "La compuerta NAND es la negación de la compuerta AND. Produce una salida de 0 solo si todas sus entradas son 1. En cualquier otro caso, la salida será 1.",
            table: tables[3],
            p: 0,
            q: 0,
        },
        {
            name: "nor",
            description: "La compuerta NOR es la negación de la compuerta OR. Produce una salida de 1 solo si todas sus entradas son    0. Si al menos una de las entradas es 1, la salida será 0.",
            table: tables[4],
            p: 0,
            q: 0,
        },
        {
            name: "xor",
            description: "La compuerta XOR (exclusive OR) produce una salida de 1 si un número impar de sus entradas es 1. Si un número par de entradas es 1, la salida será 0.",
            table: tables[5],
            p: 0,
            q: 0,
        },
        {
            name: "xnor",
            description: "La compuerta XNOR (exclusive NOR) es la negación de la compuerta XOR. Produce una salida de 1 si un número par de sus entradas es 1, y una salida de 0 si un número impar de entradas es 1.",
            table: tables[6],
            p: 0,
            q: 0,
        }
    ])

    function calculateOutput(p, q, compuerta) {
        let output = 0
        if (compuerta == "and") {
            output = p === 1 && q === 1 ? 1 : 0
        }
        if (compuerta == "or") {
            output = p === 1 || q === 1 ? 1 : 0
        }
        if (compuerta == "not") {
            output = p === 1 ? 0 : 1
        }
        if (compuerta == "nand") {
            output = p === 1 && q === 1 ? 0 : 1
        }
        if (compuerta == "nor") {
            output = p === 1 || q === 1 ? 0 : 1
        }
        if (compuerta == "xor") {
            output = p != q ? 1 : 0
        }
        if (compuerta == "xnor") {
            output = p == q ? 1 : 0
        }
        return output
    }

    return (
        <div className="logic-gates">
            <header>
                <h1 className="titulo">Compuertas Lógicas</h1>
                <span id="subtitulo">¿Cuándo hay un 0 y cuándo hay un 1?</span>
                <p className="description">Las compuertas lógicas son dispositivos electrónicos que realizan operaciones lógicas sobre una o más señales de entrada para producir una señal de salida. Estas compuertas son fundamentales en la construcción de circuitos digitales y se utilizan para implementar funciones lógicas básicas como AND, OR, NOT, NAND, NOR, XOR y XNOR.</p>
            </header>
            <section id="compuertas">
                <div id="compuertas-container">
                    {compuertas.map((compuerta) => (
                        <div key={compuerta.name} className="compuerta-card">
                            <h2 className="compuerta-title">{compuerta.name.toUpperCase()}</h2>
                            <p className="description">{compuerta.description}</p>
                            <table className="compuerta-table">
                                <thead>
                                    <tr className="compuerta-table-row">
                                        {compuerta.table.P && <th className="compuerta-table-header">P</th>}
                                        {compuerta.table.Q && <th className="compuerta-table-header">Q</th>}
                                        {compuerta.table.output && <th className="compuerta-table-header">Output</th>}
                                    </tr>
                                </thead>
                                <tbody>
                                    {compuerta.table.P.map((value, index) => (
                                        <tr key={index} className="compuerta-table-row">
                                            <td>{value}</td>
                                            {compuerta.table.Q && <td>{compuerta.table.Q[index]}</td>}
                                            {compuerta.table.output && <td>{compuerta.table.output[index]}</td>}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="compuerta-simulator">
                            <div className="simulator-inputs">
                                <div className="simulator-value-p">
                                    <span className="simulator-span">P: </span>
                                    <button 
                                        onClick={() => setCompuertas((prevCompuertas) => prevCompuertas.map((x) => (
                                            compuerta.name === x.name
                                                ? { ...x, p: x.p === 0 ? 1 : 0 }
                                                : x
                                        )))} 
                                        className={`simulator-btn ${compuerta.p === 1 ? "active" : ""}`}
                                    >{compuerta.p}</button>
                                </div>
                                {compuerta.name.toLowerCase() !== "not" && (
                                    <div className="simulator-value-q">
                                        <span className="simulator-span">Q: </span>
                                        <button 
                                            onClick={() => setCompuertas((prevCompuertas) => prevCompuertas.map((x) => (
                                                compuerta.name === x.name
                                                    ? { ...x, q: x.q === 0 ? 1 : 0 }
                                                    : x
                                            )))} 
                                            className={`simulator-btn ${compuerta.q === 1 ? "active" : ""}`}
                                        >{compuerta.q}</button>
                                    </div>
                                )}
                            </div>
                            <div className="simulator-result">
                                <span className="simulator-span">Output: </span>
                                <button className={`simulator-btn result ${calculateOutput(compuerta.p, compuerta.q, compuerta.name.toLowerCase()) === 1 ? "active" : ""}`}>{calculateOutput(compuerta.p, compuerta.q, compuerta.name.toLowerCase())}</button>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}