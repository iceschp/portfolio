import Image from 'next/image'
import Link from "next/link"

export default function Doctor() {    
    return (
        <div className="px-10 py-6 sm:px-14 sm:py-10">
        <div className="columns-1 sm:columns-2">

            <div className="project-detail">
            <p className="font-bold text-xl sm:text-3xl">Doctor Appointment Application 🏥</p>
            
            <div className="project-short-detail columns-2 py-6">
                <div className="project-column">
                    <div className="project-role py-6">
                    <div className="divider-short"></div>
                    <p className="text-lg sm:text-xl font-semibold">Role</p>
                    <p className="textColor">UX/UI Designer</p>
                    </div>
                    <div className="project-contribution">
                    <div className="divider-short"></div>
                    <p className="text-lg sm:text-xl font-semibold">Contribution</p>
                    <p className="textColor">Competitor analysis, Wireframing and Prototyping</p>
                    </div>
                </div>

                <div className="project-column">
                    <div className="project-duration py-6">
                    <div className="divider-short"></div>
                    <p className="text-lg sm:text-xl font-semibold">Duration</p>
                    <p className="textColor">3 days</p>
                    </div>
                    <div className="project-platform">
                    <div className="divider-short"></div>
                    <p className="text-lg sm:text-xl font-semibold">Platform</p>
                    <p className="textColor">iOS Application</p>
                    </div>
                </div>

            </div>

            <div className="project-full-detail py-10">
                <div className="project-overview pb-10 sm:pb-20">
                <p className="font-bold text-lg sm:text-xl pb-2">Project overview</p>
                <p className="text-xs sm:text-base">Doctor appointment application was my first freelance project that I did in 2021. There are interesting features which are making online appointments with mobile queuing, online counseling with doctors and e-payment.</p>
                </div>

                <div className="project-problem pb-10 sm:pb-20">
                <p className="font-bold text-lg sm:text-xl pb-2">Problem</p>
                <p className="text-xs sm:text-base">This project requires brief amounts of time to complete, and the customer requests that I do the mock-up as soon as possible. The customer's needs are blue-based colors and a clean user interface with an inclusive design that is color accessible.</p>
                </div>

                <div className="project-solution pb-10 sm:pb-20">
                <p className="font-bold text-lg sm:text-xl pb-2">Solution</p>
                <p className="text-xs sm:text-base">With limited time, I decided to plan my time to do competitor analysis about appointment platforms in mobile and explore some user interface design about hospital application services in Thailand, such as Raksa, Sririraj Connect, and หมอรู้จักคุณ (ประชาชน). Then I develop a user interface matched with the color and elements from the customer's needs that may be used in a hospital or health care application to increase credibility and confidence.</p>
                </div>

            </div>
            </div>

            <div className="project-img sm:px-20">
                <Image src="./doctor-1.png" alt="doctor-project" width={600} height={200} className="py-4 sm:py-7 drop-shadow-md"/>
                <Image src="./doctor-2.png" alt="doctor-project" width={600} height={200} className="py-4 sm:py-7 drop-shadow-md"/>
                <Image src="./doctor-3.png" alt="doctor-project" width={600} height={200} className="py-4 sm:py-7 drop-shadow-md"/>
            </div>

            <div className="py-4 sm:py-7 hover:underline">
                <Link href="/">← Back</Link>
            </div>

        </div>
    </div>
    )
}