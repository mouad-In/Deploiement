import AddEvent from "./AddEvent";
import EventItem from "./EventItem";
import Header from "./Header";
import SearchEvent from "./SearchEvent";
import { useState } from "react";
export default function EventList() {
    const [evenements, setEvenments] = useState([{
        id: 1,
        title: "Photographie",
        description: "",
        date: "2025-12-19",
        location: "Tanger",
        type: "Atelier",

    },
    {
        id: 2,
        title: "Machine Learning",
        description: "Learning machine",
        date: "2025-12-27",
        location: "À distance",
        type: "Conférence",

    },])
    const [favoris, setFavoris] = useState([])
    const [show, setShow] = useState()
    const [type, setType] = useState("");


    const favorite = (id) => {

        if (favoris.includes(id)) {
            setFavoris(favoris.filter((f) => f !== id));
        } else {
            setFavoris([...favoris, id]);
        }
    }
    const supprimer = (id) => {
        const sup = evenements.filter((e) => e.id !== id)
        setEvenments(sup)
    }
    const enregister = (newevent) => {

        setEvenments([...evenements, newevent])
        setShow(false)

    }

    let filteredEvents =
        type === ""
            ? evenements
            : evenements.filter((e) => e.type === type);


    const triage = () => {
        const sorted = [...filteredEvents].sort(
            (a, b) => new Date(a.date) - new Date(b.date)
        );

        setEvenments([...sorted]);
    };
    const handleAdd = () => {
        setShow(true)

    }
    return (
        <div className="container">
            <div>
                <Header favoris={favoris} evenements={evenements} /></div>
            <div>
                <SearchEvent evenements={evenements} triage={triage} setType={setType} />
            </div>
            <button className="btn-add" onClick={handleAdd}> Ajouter un evenment</button>
            <div className="event-list">
                {filteredEvents.map((e, index) => (<EventItem key={index} evenements={e} supprimer={supprimer} favorite={favorite} isFavorite={favoris.includes(e.id)} />))}
            </div>
            {show && (<div>
                <AddEvent evenements={evenements} enregister={enregister} />
            </div>)}

        </div>
    );
}