import { ITeam } from '../../shared/interfaces/ITeam';
import Person from '../Person';
import './Team.css'

interface TeamProps {
    priColor: string,
    secColor: string,
    title: string,
    team: ITeam[]
}

const Team = (props: TeamProps) => {
    return (

        (props.team.length > 0) && 
        <section className='team_section' style={{ backgroundColor: props.secColor }}>
            <h3 style={{ borderColor: props.priColor }}> {props.title} </h3>

            <div className='team_users'>    
                { props.team.map(item => <Person key={item.name} name={item.name} description={item.role} image={item.image} priColor={props.priColor} /> ) }
            </div>

            {/* image='https://github.com/GuilhermePittner.png' alt='-' /> */}
        </section>
    );
}

export default Team;