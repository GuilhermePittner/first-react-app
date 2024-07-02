import './Dropdown.css'

export const Dropdown = (props) => {
    return (
        <div className='dropdown-div'>
            <label> {props.label} </label>
            <select>
                { props.teams.map(item => <option key={item}>{item}</option> ) }
            </select>
        </div>
    )
}
