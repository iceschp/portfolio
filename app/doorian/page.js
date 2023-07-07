import Image from 'next/image'
import Link from "next/link"

export default function Doorian() {    
    return (
        <div className="px-10 py-6 sm:px-14 sm:py-10">
        <div className="columns-1 sm:columns-2">

            <div className="project-detail">
            <p className="font-bold text-xl sm:text-3xl">Doorian - Durian Disease Detection (CoreML) 🍐</p>
            
            <div className="project-short-detail columns-2 py-6">
                <div className="project-column">
                    <div className="project-role py-6">
                    <div className="divider-short"></div>
                    <p className="text-lg sm:text-xl font-semibold">Role</p>
                    <p className="textColor">iOS Developer</p>
                    </div>
                    <div className="project-contribution">
                    <div className="divider-short"></div>
                    <p className="text-lg sm:text-xl font-semibold">Contribution</p>
                    <p className="textColor">CoreML</p>
                    </div>
                </div>

                <div className="project-column">
                    <div className="project-duration py-6">
                    <div className="divider-short"></div>
                    <p className="text-lg sm:text-xl font-semibold">Duration</p>
                    <p className="textColor">4 months</p>
                    </div>
                    <div className="project-platform">
                    <div className="divider-short"></div>
                    <p className="text-lg sm:text-xl font-semibold">Platform</p>
                    <p className="textColor">iOS application</p>
                    </div>
                </div>

            </div>

            <div className="project-full-detail py-10">
                <div className="project-overview pb-10 sm:pb-20">
                <p className="font-bold text-lg sm:text-xl pb-2">Project overview</p>
                <p className="text-xs sm:text-base">Doorian is a durian leaves disease detection application for durian gardening beginners who want to see what diseases are on the durian tree; there are fascinating features provided on this application such as detecting durian disease from leaves by taking pictures and then analyzing by machine learning to give you disease name and plant caring solution, as well as durian news.</p>
                </div>

                <div className="project-problem pb-10 sm:pb-20">
                <p className="font-bold text-lg sm:text-xl pb-2">Problem</p>
                <p className="text-xs sm:text-base">Durian is a market product that is mostly exported from Thailand to Asia and around the world. Monthong durians are the most well-known and delicious, but they are also the most difficult to grow and care for. Farmers must maintain and spend a lot of time and money to care for each durian tree. And if a durian tree becomes infected, it will affect other durian trees nearby, and farmers will be forced to take the trees down, whether they are saplings or mature plants with a life cycle of 10 years.</p>
                </div>

                <div className="project-solution pb-10 sm:pb-20">
                <p className="font-bold text-lg sm:text-xl pb-2">Solution</p>
                <p className="text-xs sm:text-base">During the research process, we discovered a brunch of insights among durian groups community on Facebook that share knowledge about durian and ask help about their durian tree infection by taking photo of leaves. We took this opportunity to use machine learning (CoreML) to classified disease in durian detecting what disease is on durian trees and test on real-user (durian farmers) with usability testing and A/B testing. So we decidede to choose two diseases to build a demo application for identifying and testing in beta version of application.</p>
                </div>

            </div>
            </div>

            <div className="project-img sm:px-20">
                <Image src="./doorian-1.png" alt="doorian-project" width={600} height={200} className="py-4 sm:py-7 drop-shadow-md"/>
                <Image src="./doorian-2.png" alt="doorian-project" width={600} height={200} className="py-4 sm:py-7 drop-shadow-md"/>
                <Image src="./doorian-3.png" alt="doorian-project" width={600} height={200} className="py-4 sm:py-7 drop-shadow-md"/>
            </div>

            <div className="py-4 sm:py-7 hover:underline">
                <Link href="https://iceschp.github.io/portfolio/">← Back</Link>
            </div>

        </div>
    </div>
    )
}