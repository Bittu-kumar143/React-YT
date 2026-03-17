import { useState } from 'react'
import Cards from './components/Cards'

function App() {

const freelancers = [
  {
    name: "Maya Singh",
    availability: "available",
    fee: "$55/hr",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    skill: "UI/UX Designer",
    rating: "Excellent",
    services: ["UI Design", "UX Research", "Figma", "Adobe XD"],
    intro: "Maya is a 32-year-old UI/UX designer with an impressive portfolio in mobile and web design."
  },
  {
    name: "Arjun Mehta",
    availability: "not available",
    fee: "$70/hr",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    skill: "Frontend Developer",
    rating: "Epic Coder",
    services: ["React", "JavaScript", "CSS", "Responsive Design"],
    intro: "Arjun is a skilled frontend developer specializing in React and modern UI frameworks."
  },
  {
    name: "Sara Khan",
    availability: "available",
    fee: "$60/hr",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    skill: "Graphic Designer",
    rating: "Creative Pro",
    services: ["Photoshop", "Illustrator", "Branding", "Logo Design"],
    intro: "Sara is a creative graphic designer known for her unique branding and visual identity work."
  },
  {
    name: "Rohit Verma",
    availability: "available",
    fee: "$80/hr",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    skill: "Full Stack Developer",
    rating: "Top Rated",
    services: ["Node.js", "React", "MongoDB", "API Development"],
    intro: "Rohit is a full stack developer with 8+ years of experience building scalable web apps."
  },
  {
    name: "Emily Brown",
    availability: "not available",
    fee: "$65/hr",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    skill: "Content Writer",
    rating: "Expert Writer",
    services: ["SEO Writing", "Blog Writing", "Copywriting"],
    intro: "Emily is a professional content writer specializing in SEO-friendly articles and blogs."
  },
  {
    name: "Kabir Sharma",
    availability: "available",
    fee: "$50/hr",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    skill: "Video Editor",
    rating: "Creative Editor",
    services: ["Video Editing", "Premiere Pro", "After Effects"],
    intro: "Kabir is a video editor who creates engaging content for YouTube and social media."
  },
  {
    name: "Olivia Davis",
    availability: "available",
    fee: "$75/hr",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    skill: "Digital Marketer",
    rating: "Marketing Guru",
    services: ["SEO", "Social Media", "Google Ads", "Analytics"],
    intro: "Olivia is a digital marketer helping brands grow through data-driven strategies."
  },
  {
    name: "Aman Gupta",
    availability: "not available",
    fee: "$90/hr",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    skill: "Backend Developer",
    rating: "System Architect",
    services: ["Java", "Spring Boot", "Databases", "Microservices"],
    intro: "Aman is a backend developer specializing in scalable system design and APIs."
  },
  {
  name: "Liam Wilson",
  availability: "available",
  fee: "$65/hr",
  image: "https://randomuser.me/api/portraits/men/9.jpg",
  skill: "Mobile App Developer",
  rating: "App Specialist",
  services: ["React Native", "Flutter", "iOS", "Android"],
  intro: "Liam is a mobile app developer with expertise in building high-performance cross-platform applications."
},
{
  name: "Sophia Martinez",
  availability: "not available",
  fee: "$58/hr",
  image: "https://randomuser.me/api/portraits/women/10.jpg",
  skill: "UI Animator",
  rating: "Creative Animator",
  services: ["After Effects", "Lottie", "UI Animation", "Motion Design"],
  intro: "Sophia is a UI animator who creates mobile apps."
}
];

  return (
    <div className='parent'>
      { freelancers.map(function(elem,idx){
        return <div key={idx}>
          <Cards 
            name={elem.name}
            availability={elem.availability}
            fee={elem.fee}
            image={elem.image}
            skill={elem.skill}
            rating={elem.rating}
            services={elem.services}
            intro={elem.intro}
          />
        </div>
      })}
    </div>
  )
}

export default App
