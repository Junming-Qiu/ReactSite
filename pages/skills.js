import NavbarMine from '../components/navbar.js';
import DefaultCard from '../components/defaultcard.js';
import NextButton from '../components/nextButton.js';
import { Chart } from 'chart.js/auto'
import { Radar } from "react-chartjs-2";

import SkillsInfo from '../public/skills.json';

var data = {
        labels: ['Python', 'HTML/CSS', 'JavaScript', 'SQL', 'C++/C/Arduino'],
        datasets: [{
            label: 'Years of Experience',
            data: [5, 4, 4, 2, 4],
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
    var graph = 
    <Radar 
        className="mt-4"
        data={data}
        width={500}
        height={500}
        options={{
            responsive: true,
            maintainAspectRatio: false,
            scale: {
                angleLines: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 6,
                ticks : {
                    precision : 0
                }
            }
    
        }}
    />


    return (
        <div>
            <NavbarMine name="Junming"/>
            <DefaultCard content={[graph]} title="Skills" info={SkillsInfo} />
            <NextButton prev="/" next="/experience"/>
            <br/><br/>
        </div>
    )
}

export default Skills;