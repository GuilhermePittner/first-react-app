import './Person.css'

const Person = (props) => {
    return (<div className='card'>

            <div className='card_header'>
                <img src={props.image} alt={props.alt} />
            </div>
            
            <div className='card_footer'>
                <h4> {props.name} </h4>
                <h5> {props.description} </h5>
            </div>

        </div>)
}

export default Person
