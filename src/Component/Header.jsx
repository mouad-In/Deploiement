function Header(props) {
    const evenements = props.evenements;
    const favoris = props.favoris

    return (
        <div  className="header">
            <div><h1>Event Planner</h1></div>
            <div>
                <ul style={{listStyle:"none"}}>
                    <li>
                        {evenements.length} Evenements
                    </li>
                    <li>
                        {favoris.length} Favoris
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default Header