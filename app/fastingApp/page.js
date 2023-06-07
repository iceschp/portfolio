import Image from 'next/image'
import Link from "next/link"

export default function FastingApp() {    
    return (
        <div className="px-10 py-6 sm:px-14 sm:py-10">
        <div className="columns-1 sm:columns-2">

            <div className="project-detail">
            <p className="font-bold text-xl sm:text-3xl">Kin Num Gun Der - Thai Food Meals & intermittent fasting timer 🕑🏃🏼‍♀️🥘</p>
            
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
                    <p className="textColor">Swift and Research</p>
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
                    <p className="textColor">iOS application</p>
                    </div>
                </div>

            </div>

            <div className="project-full-detail py-10">
                <div className="project-overview pb-10 sm:pb-20">
                <p className="font-bold text-lg sm:text-xl pb-2">Project overview</p>
                <p className="text-xs sm:text-base">Kin Num Gun Der is a Thai meal plan and intermittent fasting timer application that represents healthy Thai meals for users who prefer eating a variety of low calorie Thai dishes. We also provide an intermittent fasting timer to calculate your fasting time as beginner, intermediate, or advanced.</p>
                </div>

                <div className="project-problem pb-10 sm:pb-20">
                <p className="font-bold text-lg sm:text-xl pb-2">Problem</p>
                <p className="text-xs sm:text-base">This is my college partner's project in the mobile application development course that we are interested in Thai meals since at the time we go to the supermarket a lot for making our own foods but we love eating fries and oily foods so much. So we were interested in researching Thai foods and find more better meal prep that is also delicious, and there are an a variety of types of cooking in Thai foods that have a lot of nutrients and are easy to prepare, so we came up with intermittent fasting to help us stay on track with eating on time.</p>
                </div>

                <div className="project-solution pb-10 sm:pb-20">
                <p className="font-bold text-lg sm:text-xl pb-2">Solution</p>
                <p className="text-xs sm:text-base">Thai food is divided into four categories: boiling, stir-fried, soup, and fried dishes. To be more specific, we would like to point out that Thai cuisine include not just "original Thai" but also modified Thai foods that have been mixed with some European or Asian food styles. We provided a recipe, protein increase, carb gain, and calories for each meal. Also, the intermittent fasting timer will continue to run after the user taps the start button and will alert you whether it is completed day by day.</p>
                </div>

            </div>
            </div>

            <div className="project-img sm:px-20">
                <Image src="/fasting-1.png" alt="fasting-project" width={600} height={200} className="py-4 sm:py-7 drop-shadow-md"/>
                <Image src="/fasting-2.png" alt="fasting-project" width={600} height={200} className="py-4 sm:py-7 drop-shadow-md"/>
                <Image src="/fasting-3.png" alt="fasting-project" width={600} height={200} className="py-4 sm:py-7 drop-shadow-md"/>
            </div>

            <div className="py-4 sm:py-7 hover:underline">
                <Link href="/">← Back</Link>
            </div>

        </div>
    </div>
    )
}