import NavbarMine from '../components/navbar.js';
import DefaultCard from '../components/defaultcard.js';
import SkillsInfo from '../public/skills.json';
import NextButton from '../components/nextButton.js';

var data = {
        labels: ['Python', 'HTML/CSS', 'JavaScript', 'SQL', 'C++/Arduino'],
        datasets: [{
            label: 'Years of Experience',
            data: [5, 4, 4, 3, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 80, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',

            ],
            borderWidth: 2

        }
    ]
}


function Skills(props){
    return (
        <div>
            <NavbarMine name="Junming"/>
            <DefaultCard imgs={[data]} title="Skills" info={SkillsInfo} />
            <NextButton prev="/" next="/experience"/>
            <br/>
        </div>
    )
}

export default Skills;