import Image from 'next/image'
import Link from "next/link"

export default function Cosci() {    
    return (
        <div className="px-10 py-6 sm:px-14 sm:py-10">
        <div className="columns-1 sm:columns-2">

            <div className="project-detail">
            <p className="font-bold text-xl sm:text-3xl">Document Administration platform 🗂️</p>
            
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
                    <p className="textColor">User journey, Wireframing, Prototyping and Usability testing</p>
                    </div>
                </div>

                <div className="project-column">
                    <div className="project-duration py-6">
                    <div className="divider-short"></div>
                    <p className="text-lg sm:text-xl font-semibold">Duration</p>
                    <p className="textColor">5 months</p>
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
                <p className="text-xs sm:text-base">The Document Administration platform is for COSCI (College of Social Communication Innovation) students who submit internship documents and time-tracking work hours during internship periods rather than sending paper documents to departments.</p>
                </div>

                <div className="project-problem pb-10 sm:pb-20">
                <p className="font-bold text-lg sm:text-xl pb-2">Problem</p>
                <p className="text-xs sm:text-base">The challenge is that I have to transition from the previous design to a new user interface that is compatible with COSCI's corporate branding within three months. In addition, this is my first project in which I use Figma to create the interface and learn about user interface design.</p>
                </div>

                <div className="project-solution pb-10 sm:pb-20">
                <p className="font-bold text-lg sm:text-xl pb-2">Solution</p>
                <p className="text-xs sm:text-base">My college friends, who are also project members, have been extremely helpful with this effort. We allocate each component and aspect in each design to project members that specialize in that particular design. We researched the previous version and thoroughly analyzed the visual and user journeys before redesigning the new one.</p>
                </div>

                <p>🔗 Website : <Link className="linkedInHover" href="http://internship.cosci.swu.ac.th/" target="_blank" rel="noopener noreferrer">http://internship.cosci.swu.ac.th/</Link></p>

            </div>
            </div>

            <div className="project-img sm:px-20">
                <Image src="./cosci-1.png" alt="cosci-project" width={600} height={200} className="py-4 sm:py-7 drop-shadow-md"/>
                <Image src="./cosci-2.png" alt="cosci-project" width={600} height={200} className="py-4 sm:py-7 drop-shadow-md"/>
                <Image src="./cosci-3.png" alt="cosci-project" width={600} height={200} className="py-4 sm:py-7 drop-shadow-md"/>
            </div>

            <div className="py-4 sm:py-7 hover:underline">
                <Link href="/">← Back</Link>
            </div>

        </div>
    </div>
    )
}