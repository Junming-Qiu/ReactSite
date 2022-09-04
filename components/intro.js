import s from "../styles/intro.module.css"
import Image from "next/dist/client/image"

export default function Intro(props){
    return (


        <div>
            <div className={s.card}>
                <div className="card-header">
                    <div className={s.profile}>
                        <span className={s.letter}>Ju</span>
                    </div>
                    <div className={s["card-title-group"]}>
                        <h5 className={[s["card-title"], "card-title"]}>Junming Qiu's Portfolio</h5>
                        <div className={s["card-date"]}>Computer Science Student at NYU Tandon School of Engineering | Class of 2023</div>
                    </div>
                </div>

                <div>
                    <div className={s.cardbody}>
                        <div className={s["card-text"]}>
                            Senior at NYU studying CS interested in software engineering, UI/UX, business logic. Learning cloud computing, containerization, and observability.
                        </div>
                        <div className={s.socials}>
                            <a className={s.socialitem} href="https://www.linkedin.com/in/junming-qiu-32b343191/" target="_blank" rel="noreferrer">
                                <Image src="/linkedinlogo.png" width={50} height={50} alt=""/>
                                <p>LinkedIn</p>
                            </a>
                            <a className={s.socialitem} href="/resume" target="blank" rel="noreferrer">
                                <Image src="/documentlogo.png" width={50} height={50} alt=""/>
                                <p>Download Resume</p>
                            </a>
                            <a className={s.socialitem} href="mailto:jq741@nyu.edu">
                                <Image src="/emaillogo.png" width={50} height={50} alt=""/>
                                <p>jq741@nyu.edu</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
            

    )
}