import { useState } from "react"
export default function AddEvent(props) {
    const [titreinput, setTitreInput] = useState("")
    const [dateinput, setDateInput] = useState("")
    const [locationinput, setLocationInput] = useState("");
    const [typeinput, setTypeInput] = useState("");
    const [descriptioninput, setDescriptionInput] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!titreinput || !dateinput) return;

        const newEvent = {
            id: Date.now(),
            title: titreinput,
            date: dateinput,
            location: locationinput,
            type: typeinput,
            description: descriptioninput,
        };

        props.enregister(newEvent);

        setTitreInput("");
        setDateInput("");
        setLocationInput("");
        setTypeInput("");
        setDescriptionInput("");
    };

    return (
        <div className="add-event">
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={titreinput} onChange={(e) => setTitreInput(e.target.value)} />
                </div>
                <div>
                    <input type="date" value={dateinput} onChange={(e) => setDateInput(e.target.value)} />
                </div>
                <div>
                    <input type="text" value={locationinput} onChange={(e) => setLocationInput(e.target.value)} />
                </div>
                <div>
                    <select value={typeinput} onChange={(e) => setTypeInput(e.target.value)}>
                        <option value="">-- Choisir le type --</option>
                        <option value="Atelier">Atelier</option>
                        <option value="Conférence">Conférence</option>
                        <option value="Personnel">Personnel</option>
                        <option value="Autre">Autre</option>
                    </select>
                </div>
                <div>
                    <input type="text" value={descriptioninput} onChange={(e) => setDescriptionInput(e.target.value)} />
                </div>
                <div><button type="submit">Enregistrer</button></div>
            </form>
        </div>

    )
}