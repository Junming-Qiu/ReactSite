import DefaultCard from './defaultcard.js';
import ProjectInfo from '../public/projects.json';

function Projects(props){
    return (
        <div>
            <DefaultCard content={[]} desc={"Personal and Collaborative Work"} title="Projects" info={ProjectInfo}/>
        
        </div>
    );
}

export default Projects;