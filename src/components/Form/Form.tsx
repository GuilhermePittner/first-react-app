import { useState } from 'react';
import { ITeam } from '../../shared/interfaces/ITeam';

import { Button } from '../Button/Button';
import { Dropdown } from '../Dropdown/Dropdown';
import { TextField } from '../TextField/TextField';

import './Form.css';

interface FormProps {
    teams: string[];
    savingUser: (team: { name: string; role: string; image: string; team: string }) => void;
}

export const Form = (props: FormProps) => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('Counter Strike');

    const savingTeam = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name) {
            alert('Name field cannot be empty!');
            return;
        }

        if (!role) {
            alert('Role field cannot be empty!');
            return;
        }

        if (!image) {
            alert('Image field cannot be empty!');
            return;
        }

        props.savingUser({
            name,
            role,
            image,
            team,
        });

        setName('');
        setRole('');
        setImage('');
    };

    return (
        <section className="form-section">
            <form onSubmit={savingTeam}>
                <h2>Fill the form below to create a card</h2>

                <TextField
                    label="Name"
                    placeholder="Insert name here..."
                    value={name}
                    onChange={(value: string) => setName(value)}
                />

                <TextField
                    label="Role"
                    placeholder="Insert role here..."
                    value={role}
                    onChange={(value: string) => setRole(value)}
                />

                <TextField
                    label="Image"
                    placeholder="Insert image url here..."
                    value={image}
                    onChange={(value: string) => setImage(value)}
                />

                <Dropdown
                    label="Team"
                    teams={props.teams}
                    value={team}
                    onChange={(value: string) => setTeam(value)}
                />

                <Button>
                    Insert Team
                </Button>
            </form>
        </section>
    );
};

export default Form