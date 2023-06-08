import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
<div>
<div className="banner">
<div className="py-20 sm:py-32">
<div className="text-3xl sm:text-5xl">
<p className="py-0.5">Hi <span className="handMotion">👋🏼</span></p>
<Link href="https://www.linkedin.com/in/warunya-sangchompoo/" target="_blank" rel="noopener noreferrer">I'm <span className="linkedInHover">Warunya Sangchompoo</span>,</Link>
<p className="py-0.5">As a Thailand-based UX/UI designer,</p>
<p className="py-0.5">Developer,</p>
<p className="py-0.5">and <span className="italic font-semibold underline">Recent Graduate</span>. 👩🏼‍🎓</p>
</div>
</div>
</div>

<div className="marqueeContainer">
<div className="marqueeText">
<p className="text-lg">CURRENTLY OPEN FOR HIRING IN BANGKOK AND RELOCATION 🌎</p>
<p className="text-lg">★ UX/UI DESIGNER or SOFTWARE ENGINEER ROLE ★</p>
<Link className="text-lg" href="https://www.linkedin.com/in/warunya-sangchompoo/" target="_blank" rel="noopener noreferrer">CONTACT ME VIA LINKEDIN !</Link>
</div>
<div className="marqueeText">
<p className="text-lg">CURRENTLY OPEN FOR HIRING IN BANGKOK AND RELOCATION 🌎</p>
<p className="text-lg">★ UX/UI DESIGNER or SOFTWARE ENGINEER ROLE ★</p>
<Link className="text-lg" href="https://www.linkedin.com/in/warunya-sangchompoo/" target="_blank" rel="noopener noreferrer">CONTACT ME VIA LINKEDIN !</Link>
</div>
</div>

<div className="px-10 py-6 sm:px-14 sm:py-10">
<div className="past-projects-container">
<p className="text-lg sm:text-2xl pb-10">Past projects</p>

<div className="design-container pb-10">
<p className="font-bold text-2xl sm:text-3xl pb-10">Design <span className="spinMotion">🎨</span></p>
<div className="project-box-container columns-1 sm:columns-3">

<Link href="/inskru">
<div className="relative py-4">
<div className="yearTag">
<p className="text-md sm:text-lg bold">2023</p>
</div>
<Image src="./inskru-thumbnail.png" alt="project-thumbnail" width="400" height="200" className="thumbnailProject"/>
<p className="font-bold text-lg py-4">Building impact of sharing culture 👩🏻‍🏫</p>
<p className="text-sm sm:text-md">Building cultural awareness among Thai teachers</p>
</div>
</Link>

<Link href="/doctor">
<div className="relative py-4">
<div className="yearTag">
<p className="text-md sm:text-lg bold">2021</p>
</div>
<Image src="./doctor-thumbnail.png" alt="project-thumbnail" width="400" height="200" className="thumbnailProject"/>
<p className="font-bold text-lg py-4">Doctor Appointment Application 🏥</p>
<p className="text-sm sm:text-md">Mobile High-fidelity prototype</p>
</div>
</Link>

<Link href="/cosci">
<div className="relative py-4">
<div className="yearTag">
<p className="text-md sm:text-lg bold">2020</p>
</div>
<Image src="./cosci-thumbnail.png" alt="project-thumbnail" width="400" height="200" className="thumbnailProject"/>
<p className="font-bold text-lg py-4">Document Administration platform 🗂️</p>
<p className="text-sm sm:text-md">High-fidelity prototype</p>
</div>
</Link>

</div>
</div>


<div className="dev-container">
<p className="font-bold text-2xl sm:text-3xl pb-10">Development <span className="spinMotion">💻</span></p>
<div className="project-box-container columns-1 sm:columns-3">

<Link href="/doorian">
<div className="relative py-4">
<div className="devTag">
<p className="text-md sm:text-lg text-white bold">iOS</p>
</div>
<div className="yearTag">
<p className="text-md sm:text-lg bold">2023</p>
</div>
<Image src="./doorian-thumbnail.png" alt="doorian-thumbnail" width="400" height="200" className="thumbnailProject"/>
<p className="font-bold text-lg py-4">Doorian - Detect Diseases (CoreML) 🍐</p>
<p className="text-sm sm:text-md">Durian Disease Detection Application (Thesis project)</p>
</div>
</Link>

<Link href="/fastingApp">
<div className="relative py-4">
<div className="devTag">
<p className="text-md sm:text-lg text-white bold">iOS</p>
</div>
<div className="yearTag">
<p className="text-md sm:text-lg bold">2022</p>
</div>
<Image src="./fasting-thumbnail.png" alt="fasting-thumbnail" width="400" height="200" className="thumbnailProject"/>
<p className="font-bold text-lg py-4">Kin Num Gun Der (กินนำกันเด้อ) 🕑🏃🏼‍♀️🥘</p>
<p className="text-sm sm:text-md">Thai meals plan and intermittent fasting timer!</p>
</div>
</Link>

<Link href="/note">
<div className="relative py-4">
<div className="devTag">
<p className="text-md sm:text-lg text-white bold">Web</p>
</div>
<div className="yearTag">
<p className="text-md sm:text-lg bold">2021</p>
</div>
<Image src="./note-thumbnail.png" alt="note-thumbnail" width="400" height="200" className="thumbnailProject"/>
<p className="font-bold text-lg py-4">To-Do list - Easy to note 🖍️</p>
<p className="text-sm sm:text-md">Make a quick short to-do list</p>
</div>
</Link>

</div>
</div>

</div>
</div>

<div className="footerHome">
<p className="text-sm sm:text-base">✿ <a href="mailto:warunya.ks@gmail.com">Get In Touch!</a> ✿</p>
</div>



</div>
  )
}
