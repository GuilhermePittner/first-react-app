import './Dropdown.css';

interface DropdownProps {
    label: string;
    value: string;
    teams: string[];
    onChange: (value: string) => void;
}

export const Dropdown = (props: DropdownProps) => {
    return (
        <div className="dropdown-div">
            <label>{props.label}</label>
            <select 
                value={props.value} 
                onChange={(event) => props.onChange(event.target.value)} // Alterado para "onChange"
            >
                {props.teams.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
};
