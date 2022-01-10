import NavbarMine from '../components/navbar.js';
import BioCard from '../components/biocard.js';
import NextButton from '../components/nextButton.js';


export default function Home() {
  
  return (
    <div>
        <NavbarMine name="Junming"/>
        <BioCard/>
        <NextButton prev="/projects" next="/skills"/>
        <br/><br/>
    </div>
 
  )
}
