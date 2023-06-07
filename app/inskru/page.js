import Image from 'next/image'
import Link from "next/link"

export default function Inskru() {    
    return (
        <div className="px-10 py-6 sm:px-14 sm:py-10">
        <div className="columns-1 sm:columns-2">

            <div className="project-detail">
            <p className="font-bold text-xl sm:text-3xl">Building impact of sharing culture 👩🏻‍🏫</p>
            
            <div className="project-short-detail columns-2 py-6">
                <div className="project-column">
                    <div className="project-role py-6">
                    <div className="divider-short"></div>
                    <p className="text-lg sm:text-xl font-semibold">Role</p>
                    <p className="textColor">UX/UI Designer and Researcher (Intern)</p>
                    </div>
                    <div className="project-contribution">
                    <div className="divider-short"></div>
                    <p className="text-lg sm:text-xl font-semibold">Contribution</p>
                    <p className="textColor">Customer journey, Persona, In-depth Interview and Wireframing</p>
                    </div>
                </div>

                <div className="project-column">
                    <div className="project-duration py-6">
                    <div className="divider-short"></div>
                    <p className="text-lg sm:text-xl font-semibold">Duration</p>
                    <p className="textColor">2 months</p>
                    </div>
                    <div className="project-platform">
                    <div className="divider-short"></div>
                    <p className="text-lg sm:text-xl font-semibold">Platform</p>
                    <p className="textColor">Website</p>
                    </div>
                </div>

            </div>

            <div className="project-full-detail py-10">
                <div className="project-overview pb-10 sm:pb-20">
                <p className="font-bold text-lg sm:text-xl pb-2">Project overview</p>
                <p className="text-xs sm:text-base">This is an intern project in which interns collaborate with senior designers to gain design skills, including design and user experience research. As part of this, there is a customer insKru who is an educational social enterprise with a platform for sharing learning planners from Thai teachers at all levels of Thailand's education system.</p>
                </div>

                <div className="project-problem pb-10 sm:pb-20">
                <p className="font-bold text-lg sm:text-xl pb-2">Problem</p>
                <p className="text-xs sm:text-base">There has been a long-standing issue with the sharing culture in this platform because insKru would like to engage teachers to post and share their learning planners and there are a lot of contents posted on the platform but it is unsure what impact it has on other teachers contributing learning planners to adapt their own ways and some minor inconvenience that may not drive teachers to share theirs.</p>
                </div>

                <div className="project-solution pb-10 sm:pb-20">
                <p className="font-bold text-lg sm:text-xl pb-2">Solution</p>
                <p className="text-xs sm:text-base">We began to learn about the insKru company goal and value proposition, therefore we held many workshops throughout the design and research process. And we re-defined the customer journey and personas that currently suit this business appropriately, as well as conducting in-depth interviews with 13 Thai teachers, with the possibility to be the lead interviewer in some sessions. Following that, we take in, discover insight, and summarize all information. We develop a problem statement and brainstorm a number of ideas with insKru (crazy 8's) before summarizing the solution that resulted in the final outcome.</p>
                </div>

                <p>💛 Special thanks to MAQE for this opportunity <Link className="linkedInHover" href="https://www.maqe.com/success_story/creating-a-sharing-culture-inskru/" target="_blank" rel="noopener noreferrer">👉🏻 Click here for more detail 👈🏻</Link></p>

            </div>
            </div>

            <div className="project-img sm:px-20">
                <Image src="/inskru-1.png" alt="inskru-project" width={600} height={200} className="py-4 sm:py-7 drop-shadow-md"/>
                <Image src="/inskru-2.png" alt="inskru-project" width={600} height={200} className="py-4 sm:py-7 drop-shadow-md"/>
                <Image src="/inskru-3.png" alt="inskru-project" width={600} height={200} className="py-4 sm:py-7 drop-shadow-md"/>
            </div>

            <div className="py-4 sm:py-7 hover:underline">
                <Link href="/">← Back</Link>
            </div>

        </div>
    </div>
    )
}