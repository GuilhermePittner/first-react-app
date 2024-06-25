import TextField from '../TextField';
import './Form.css'

export const Form = () => {
    return (
        <section className='form-section'>
            <form>
                <h2>Fill the form below to create a card</h2>
                <TextField label="Name" placeholder="Insert name here..." />
                <TextField label="Role" placeholder="Insert role here..." />
                <TextField label="Image" placeholder="Insert image url here..." />
            </form>
        </section>
    )
}
