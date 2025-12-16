export default function SearchEvent(props) {

    return (
        <div className="search-event">

            
                <select onChange={(e) => props.setType(e.target.value)}>
                    {props.evenements.map((e, index) => (<option key={index}>{e.type}</option>))}
                </select>
            
            <button onClick={props.triage} className="btn-triage">Trier par Date</button>

        </div>
    )
}