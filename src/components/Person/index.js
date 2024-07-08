import './Person.css'

const Person = ({name, description, image}) => {
    return (<div className='card'>

            <div className='card_header'>
                <img src={image} alt={name} />
            </div>
            
            <div className='card_footer'>
                <h4> {name} </h4>
                <h5> {description} </h5>
            </div>

        </div>)
}

export default Person
