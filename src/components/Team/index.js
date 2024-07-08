import Person from '../Person';
import './Team.css'

const Team = (props) => {
    return (
        <section className='team_section' style={{ backgroundColor: props.secColor }}>
            <h3 style={{ borderColor: props.priColor }}> {props.title} </h3>

            <div className='team_users'>    
                { props.team.map(item => <Person name={item.name} description={item.role} image={item.image} key={item.name} /> ) }
            </div>

            {/* los mag
            <Person name='xUoT1' description='the boss.' image='https://github.com/GuilhermePittner.png' alt='-' />
            <Person name='thierrys' description='master of coding and best entry frag.' image='' alt='-' />
            <Person name='brosk012' description='the craziest dude from guarulhos.' image='' alt='-' />
            */}
        </section>
    );
}

export default Team;