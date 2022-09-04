import DefaultCard from './defaultcard.js';
import ProjectInfo from '../public/projects.json';

function Projects(props){
    return (
        <div id="projects">
            <DefaultCard content={[]} desc={"Personal and Collaborative Work"} title="Projects" profile="P" info={ProjectInfo}/>
        
        </div>
    );
}

export default Projects;