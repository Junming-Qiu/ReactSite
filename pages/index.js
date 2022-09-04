import NavbarMine from '../components/navbar.js';
import BioCard from '../components/biocard.js';
import Skills from '../components/skills.js';
import Experience from '../components/experience.js';
import Projects from '../components/projects.js';
import Intro from '../components/intro.js';
import { Title } from 'chart.js';
import { SSRProvider } from 'react-bootstrap';

export default function Home() {
  
  return (
    <div>
        <SSRProvider>
          <title>Junming&apos;s Portfolio</title>
          <NavbarMine name="Junming Qiu"/>
          <br/><br/><br/>
          <Intro/>
          <Projects/>
          <Skills/>
          <Experience/>
          <BioCard/>
        </SSRProvider>
        
        
        <br/>
    </div>
 
  )
}
