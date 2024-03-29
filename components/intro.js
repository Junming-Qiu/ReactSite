import s from "../styles/intro.module.css"
import Image from "next/dist/client/image"
import Link from "next/link"

export default function Intro(props){
    return (


        <div id="intro">
            <div className={s.card}>
                <div className="card-header">
                    <div className={s.profile}>
                        <span className={s.letter}>Ju</span>
                    </div>
                    <div className={s["card-title-group"]}>
                        <h5 className={[s["card-title"], "card-title"]}>Junming Qiu&apos;s Portfolio</h5>
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
                            <Link passHref href="/resume">
                                <a className={s.socialitem} target="_blank" rel="noreferrer noopener">
                                    <Image src="/documentlogo.png" width={50} height={50} alt=""/>
                                    <p>Download Resume</p>
                                </a>
                                
                            </Link>
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