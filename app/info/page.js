import Image from "next/image";

export default function Info() {
    return (
        <div>
            <div className="px-10 sm:px-14 py-6 sm:py-10">
                <div className="columns-2 flex justify-between items-center">
                <div>
                <p className="text-xs sm:text-2xl font-medium">Passionate about using my design and programming skills <br />for to tackle real-world issues through the power of emerging technologies. <br/>And truly drives me to create innovative solutions <br />that can make a positive impact on <br/>for <span className="italic underline">everyone</span></p>
                </div>
                <div>
                <Image src="/profile-image.jpg" width={300} height={300} className="border border-solid border-black"/>
                </div>
                </div>
            </div>

            <div className="border-y border-solid border-black">
                <p className="exp">Experience</p>

                <div className="columns-2 flex items-center border-y border-solid border-black">
                <div className="items-center text-center w-52 sm:w-80"><p>Jan - May 2023</p></div>
                <div className="border-l border-solid border-black p-10 w-full">
                <p className="font-bold text-base sm:text-lg">UX/ UI Design Intern</p>
                <p className="text-xs sm:text-sm opacity-60">at Boonmeelab (Bangkok, Thailand)</p>
                <div className="text-xs sm:text-sm py-2">
                <p>☆ Contributed and designed wireframe to share project vision aligned with customer's company branding.</p>
                <p>☆ Redefined and illustrated user interface design using graphic data visualization to summarize information.</p>
                </div>
                </div>
                </div>

                <div className="columns-2 flex items-center">
                <div className="items-center text-center w-52 sm:w-80"><p>May - August 2022</p></div>
                <div className="border-l border-solid border-black p-10 w-full">
                <p className="font-bold text-base sm:text-lg">UX/ UI Design Intern</p>
                <p className="text-xs sm:text-sm opacity-60">at MAQE (Bangkok, Thailand)</p>
                <div className="text-xs sm:text-sm py-2">
                <p>☆ Used understanding and empathy for our target customer by <span className="highlight-text">interviewing and observing 13 users finding insight</span> and drive to create an impact in social enterprise company(SE) about education in Thailand.</p>
                <p>☆ Collaborate with customer doing workshops which are product alignment, finding summary, prioritization and ideation.</p>
                <p>☆ Collaborated with UX researcher, experience design and intern to create <span className="highlight-text">personas, customer journey, and empathy map</span> to define users.</p>
                </div>
                </div>
                </div>

                <div className="columns-2 flex items-center border-t border-solid border-black">
                <div className="items-center text-center w-52 sm:w-80"><p>June - July 2021</p></div>
                <div className="border-l border-solid border-black p-10 w-full">
                <p className="font-bold text-base sm:text-lg">Full Stack Developer Intern</p>
                <p className="text-xs sm:text-sm opacity-60">at Tencent (Bangkok, Thailand)</p>
                <div className="text-xs sm:text-sm py-2">
                <p>☆ Developed and Implemented web applications for information technology department at <a href="https://sanook.com" target="_blank" rel="noopener noreferrer" className="highlightText">Sanook.com</a></p>
                <p>☆ Analyzed and tracked game marketing campaign data to measure effectiveness in service usage.</p>
                <p>☆ Devised Application Programming Interface (API) to create covid-19 visualization website and generated into graph using <span className="highlight-text">React.js and Next.js</span></p>
                </div>
                </div>
                </div>
            </div>

            <div className="footer-info pt-20 px-10 sm:px-14">
                <a href="mailto:warunya.ks@gmail.com" className="py-6 font-bold text-xl sm:text-5xl">warunya.ks@gmail.com</a>

                <div className="columns-2 flex justify-between pt-4 sm:pt-6 pb-10">
                <div className="flex gap-4 text-base sm:text-xl">
                <a href="https://www.linkedin.com/in/warunya-sangchompoo/" target="_blank" rel="noopener noreferrer" className="contactLink"><span>LinkedIn</span></a>
                <a href="https://github.com/iceschp" target="_blank" rel="noopener noreferrer" className="contactLink"><span>GitHub</span></a>
                <a href="https://contra.com/warunya_ice" target="_blank" rel="noopener noreferrer" className="contactLink"><span>Contra</span></a>
                </div>
                <p className="text-base sm:text-xl">©️ 2023 - from scratch, Next.js & Tailwind</p>
                </div>
            </div>
            
            </div>
    );
}