import {
    t2, rg, google, amazon, indeed
} from "../Assets/index"
const timeline = [
    {
        title: "Rails Girls Summer of Code",
        company_name: "Travis Foundation",
        icon: `${rg}`,
        date: "Jan-Feb",
        points: [
            "RGSoC is a global program run by the non-profit organization Travis Foundation, which aims to bring diversity to the Open Source community. Their main focus is on the applicants who want to pursue programming as a full-time career. Here students who get selected are paid a monthly stipend from July to September."
        ]
    },
    {
        title: "Hack@Home",
        company_name: "Atlassian",
        icon: `${ t2 }`,
        date: "~June",
        points: [
            "Hack@Home is a challenge that is held every year by the company Atlassian, it is a five-week-long coding challenge that aims to engage engineering students in coding who are currently in their second or third year of the degree."
        ]
    },
    {
        title: "SheCodes",
        company_name: "Indeed",
        icon: `${ indeed }`,
        date: "August",
        points: [
            "SheCodes, Indeed is an event organized by Indeed (job portal website) which aims to provide women the opportunity to showcase their talent by participating in the coding challenge and solving some open-ended problem statement on an individual basis."
        ]
    },
    {
        title: "Google STEP Intern",
        company_name: "Google",
        icon: `${ google }`,
        date: "December",
        points: [
            "Google STEP (Student Training in Engineering Program) internship is a 12 weeks long internship program by Google for the students of the first and second year of college who want to make their career in the field of software development."
        ]
    },

    {
        title: "AmazeWow",
        company_name: "Amazon",
        icon: `${ amazon }`,
        date: "~April",
        points: [
            "AmazeWow is a program managed by Amazon in which it provides internship and full-time engineering roles to women. Similar to other programs Amazon is also trying to work on gender inequality and uplifting women in technical fields."
        ]
    }
]

export { timeline }