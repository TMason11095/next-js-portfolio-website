
import Icon from "@/components/Icon";
import Image from "next/image";

import linkedInIcon from '@/assets/icons/LI-In-Bug-trademarkless-white.png';
import gitHubIcon from '@/assets/icons/github-mark-white.png';
import headshot from '@/assets/images/tyler-mason-headshot.jpg'
import BoldDetailText from "../BoldDetailText";

export default function MainHeader() {
    return (
        <header className='flex dark-blue-background fully-center flex-0'>
            <div className="flex row section-margins section-width space-between flex-1 reverse-wrap">
                <div className="flex column white-text">
                    <div className="flex column">
                        <div className="socials flex row baseline social-gap">
                            <div className="header-text-size bold">
                                Tyler Mason
                            </div>
                            <div className="flex row flex-1 justify-content-right">
                                <Icon image={linkedInIcon} href="https://www.linkedin.com/in/tyler-mason-286a2a1b3/" altText="LinkedIn Icon." />
                                <Icon image={gitHubIcon} href="https://github.com/TMason11095" altText="GitHub Icon." />
                            </div>
                        </div>
                        <div className="sub-header-text-size bold">
                            Full-Stack Developer
                        </div>
                    </div>
                    <div className="flex column">
                        <BoldDetailText boldText="Programming Languages:" detailText="C#, JS, T-SQL, CSS, HTML, PowerBuilder, Elixir" />
                        <BoldDetailText boldText="C# Frameworks:" detailText=".NET, LINQ, ASP.NET, EF, xUnit" />
                        <BoldDetailText boldText="JS Frameworks:" detailText="React, NextJS, Puppeteer, Playwright, jQuery, Jest" />
                        <BoldDetailText boldText="Architectural Patterns:" detailText="OOP, REST API, MVC, TDD, SOLID" />
                        <BoldDetailText boldText="Tools & Technologies:" detailText="AWS, Azure, VS Code, VS, MS SQL Server, GitHub, Jira" />
                        <BoldDetailText boldText="Foreign Languages:" detailText="Intermediate Japanese" />
                    </div>
                </div>
                <div className="flex">
                    <Image className="headshot" src={headshot} alt="A headshot photo of Tyler Mason." priority />
                </div>
            </div>
        </header>
    );
}