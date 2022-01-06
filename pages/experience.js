import NavbarMine from '../components/navbar.js';
import DefaultCard from '../components/defaultcard.js';
import ExperienceInfo from '../public/experiences.json';
import NextButton from '../components/nextButton.js';

function Experience(props){
    return (
        <div>
            <NavbarMine name="Junming"/>
          
            <DefaultCard imgs={[]} title="Experiences" info={ExperienceInfo}/>
            <NextButton prev="/" next="/projects"/>
        </div>
    );
}

export default Experience;