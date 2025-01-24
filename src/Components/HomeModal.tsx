import React from "react";
import {useNavigate} from "react-router-dom";
import '../CSS/HomeModal.css';

function HomeModal(props:any) {


    function handleTrait() {
        switch (props.trait) {
            case 1:
                return `I actively seek opportunities to enhance existing systems, using each initiative as a chance to acquire new skills and expand my technical expertise. This is largely driven by my passion towards technology and problem solving.`
            case 2:
                return `I thrive on exploring and developing new product ideas, combining creativity and a diverse technical background to bring visionary concepts to life.`
            case 3:
                return `I excel at working with teams to tackle challenges, leveraging diverse perspectives and fostering a solution-oriented environment to achieve impactful results.`
            case 4:
                return `I build strong partnerships across teams and departments, driving alignment and synergy to achieve shared goals and deliver impactful outcomes.`
            case 5:
                return `I seamlessly incorporate new tools and technology into existing infrastructures, optimizing workflows and enhancing operational efficiency across the organization.`
            case 6:
                return `I inspire and guide teams towards achieving goals, fostering a culture of collaboration, accountability, and continuous growth while driving strategic initiatives to success.`
            default:
                return
        }
    }

    function handleAttr() {
        switch (props.attr) {
            case 1:
                return `JaxGMC, KismetAtakCompanion, JaxWebsite, 75th RR Website`
            case 2:
                return `JaxWebsite, 75th RR Website, HallOfHeroes/HallOfValor (WebApp Kiosk)`
            case 3:
                return `JaxGMC, KismetAtakCompanion, JaxWebsite, 75th RR Website, Skyview-RPi`
            case 4:
                return `DACO (Android/ATAK Plugin), Demo (Android/ATAK Plugin), Manifest (WebApp)`
            case 5:
                return `JaxGMC, KismetAtakCompanion`
            case 6:
                return `Misc task automation`
            default:
                return
        }
    }

    function handleHobby() {
        switch (props.hobby) {
            case 1:
                return `I take great pleasure in designing and managing self-hosted services within my home lab. This hands-on experience allows me to explore new technologies, automate workflows, and refine my technical skills, all while maintaining complete control over my personal infrastructure.`
            case 2:
                return `I have a deep interest in working with electronics and microcontrollers, which enables me to blend creativity with technical skills, building innovative solutions while continuously learning new concepts in hardware and software integration.`
            case 3:
                return `I have a strong enthusiasm for automation, using technology to optimize and streamline everyday living. By connecting and automating various IOT systems, I create solutions that improve convenience, security, and energy efficiency, while constantly exploring new advancements in the field.`
            case 4:
                return `I have an interest in fabrication, where I combine creativity and technical skills to design and create functional, custom-built projects. Whether working with metal, wood, or other materials, I enjoy the process of transforming concepts into tangible, precise creations, constantly learning and improving my craftsmanship.`
            case 5:
                return `I am interested in surveillance systems, focusing on designing and implementing solutions that enhance security and monitoring. By integrating cameras, sensors, and other technologies, creating systems that provide real-time insights.`
            case 6:
                return `I have received specialized training in relation to red teaming, with a focus on physical penetration testing. This training has equipped me with the skills to assess and challenge physical security systems, including access controls, surveillance, and response protocols.`
            case 7:
                return `I have experience in integrating Mobile Ad-hoc Networks (MANETs) and radio mesh systems into practical applications. By leveraging these decentralized networks, I enhance communication capabilities in environments where traditional infrastructure is impractical. `
            case 8:
                return `hobby Red Teaming:`
            case 9:
                return `hobby MANET:`
            default:
                return
        }
    }



    return (
        <>
        <div className={"modal-text-container"}>
            <div className={"modal-text"}>
                {handleAttr()}
                {handleTrait()}
                {handleHobby()}
            </div>

        </div>
            <div className={"modal-button-container"}>
                {props.attr > 0 && <div className={"modal-button"} onClick={() => props.setModalAttr(0)}>X</div>}
                {props.trait > 0 && <div className={"modal-button"} onClick={() => props.setModalTrait(0)}>X</div>}
                {props.hobby > 0 && <div className={"modal-button"} onClick={() => props.setModalHobby(0)}>X</div>}
            </div>
            </>
    )
}
export default HomeModal;