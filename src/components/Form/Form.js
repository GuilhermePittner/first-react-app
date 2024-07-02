import Button from '../Button';
import Dropdown from '../Dropdown';
import TextField from '../TextField';
import './Form.css'

export const Form = () => {

    const savingTeam = (e) => { 
        e.preventDefault();
        alert('keep going');
    }

    const teams = ['Counter Strike', 'Rocket League', 'Fortnite']

    return (
        <section className='form-section'>

            <form onSubmit={savingTeam}>

                <h2>Fill the form below to create a card</h2>

                <TextField label="Name" placeholder="Insert name here..." />
                <TextField label="Role" placeholder="Insert role here..." />
                <TextField label="Image" placeholder="Insert image url here..." />
                <Dropdown label="Team" teams={teams}/>
                <Button>
                    Insert Team
                </Button>

            </form>

        </section>
    )
}
