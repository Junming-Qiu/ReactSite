import NavbarMine from '../components/navbar.js';
import DefaultCard from '../components/defaultcard.js';
import ProjectInfo from '../public/projects.json';
import NextButton from '../components/nextButton.js';

function Projects(props){
    return (
        <div>
            <NavbarMine name="Junming"/>
            <DefaultCard content={[]} title="Projects" info={ProjectInfo}/>
            <NextButton prev="/experience" next="/"/>
        <br/><br/>
        </div>
    );
}

export default Projects;