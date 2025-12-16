export default function EventItem(props) {
    const evenements = props.evenements
     const isPast = new Date(evenements.date) < new Date();

    return (
        <div className={`event-item ${isPast ? "past" : ""}`}>
            <div className="event-info">
                <h2>{evenements.title}</h2>
                <p>{evenements.date}</p>
            </div>
            <div  className="event-actions">
                <button onClick={() => props.favorite(evenements.id)}>{props.isFavorite ? "★" : "☆"}</button>
                <button onClick={() => props.supprimer(evenements.id)}>supprimer</button>
                <button >Modifier</button>



            </div>
        </div>

    )
}