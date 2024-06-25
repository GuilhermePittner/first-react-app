import './TextField.css'

export const TextField = (props) => {
  return (
    <div className='textfield-div'>
      <label>{props.label}</label>
      <input type='name' placeholder={props.placeholder}></input>
    </div>
  );
}
