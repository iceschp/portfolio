import Image from 'next/image'
import Link from "next/link"

export default function Note() {    
    return (
        <div className="px-10 py-6 sm:px-14 sm:py-10">
        <div className="columns-1 sm:columns-2">

            <div className="project-detail">
            <p className="font-bold text-xl sm:text-3xl">To-Do list - Easy to note 🖍️</p>
            
            <div className="project-short-detail columns-2 py-6">
                <div className="project-column">
                    <div className="project-role py-6">
                    <div className="divider-short"></div>
                    <p className="text-lg sm:text-xl font-semibold">Role</p>
                    <p className="textColor">Front-End Developer</p>
                    </div>
                    <div className="project-contribution">
                    <div className="divider-short"></div>
                    <p className="text-lg sm:text-xl font-semibold">Contribution</p>
                    <p className="textColor">React JS and Firebase</p>
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
                <p className="text-xs sm:text-base">A to-do list is a note made to manage tasks in each project. This website provides a check-box note, a group by category, and a remark date of today, tomorrow, and next week. If you like to listen to some loft-beats, there is an amazing functionality add-on called Spotify playlist.</p>
                </div>

                <div className="project-problem pb-10 sm:pb-20">
                <p className="font-bold text-lg sm:text-xl pb-2">Problem</p>
                <p className="text-xs sm:text-base">This is my college projects for the web programming course. At the time, I had a lot of courses to enroll in and assignments to complete. So I came up with the idea of organizing my tasks so that they are completed on time and that I can be a second-brain to myself.</p>
                </div>

                <div className="project-solution pb-10 sm:pb-20">
                <p className="font-bold text-lg sm:text-xl pb-2">Solution</p>
                <p className="text-xs sm:text-base">In the summer of 2021, I interned as a full stack developer for two months, during which time I studied Javascript and a new library/framework called React JS. So I decided to add React JS to this project. This project was built mostly from scratch, with some help from other people's projects on GitHub. This project's major learning is that I would like to learn how the functionality of React JS works and get experience.</p>
                </div>

            </div>
            </div>

            <div className="project-img sm:px-20">
                <Image src="/note-1.png" alt="note-project" width={600} height={200} className="py-4 sm:py-7 drop-shadow-md"/>
                <Image src="/note-2.png" alt="note-project" width={600} height={200} className="py-4 sm:py-7 drop-shadow-md"/>
                <Image src="/note-3.png" alt="note-project" width={600} height={200} className="py-4 sm:py-7 drop-shadow-md"/>
            </div>

            <div className="py-4 sm:py-7 hover:underline">
                <Link href="/">← Back</Link>
            </div>

        </div>
    </div>
    )
}