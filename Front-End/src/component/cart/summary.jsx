

const Summary = ({summary})=>{

    return(
        <div className="summary">
            <h3>Podsumowanie</h3>
            <p><span className="summary__text">Wartość produktów</span> <span className="summary__value">{summary}</span></p>
        </div>
    )
}

export default Summary