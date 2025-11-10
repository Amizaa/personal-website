import type { Experience } from "@/types/experiences.types";

export const experiences: Experience[] = [
    {
        title: "Junior Engineer & Digital Marketing",
        company: 'Afzar Sanat Saba (Saba Pack)',
        companyIcon: "/images/experiences/sabalogo.jpg",
        location: 'Urmia, Iran',
        startDate: "Jul 2023",
        endDate: "Sep 2023",
        descriptions: [
        "Learned Arduino programming to control industrial devices",
        "Designed advertising banners for marketing campaigns",
        "Managed and updated the company’s Instagram account"
        ],
        technologies: ["devicon:arduino", "devicon:photoshop", "devicon:c"],
        type: "fulltime",

    },
    {
        title: "Web Security Trainee",
        company: "UUCERT (Urmia University Computer Emergency Response Team)",
        companyIcon: "/images/experiences/APA_logo.png",
        location: "Urmia, Iran",
        startDate: "Jul 2024",  
        endDate: "Sep 2024",
        type: "internship",
        descriptions: [
            "Studied and practiced web security concepts through hands-on labs and training programs",
            "Installed and worked with Kali Linux for penetration testing exercises",
            "Learned and applied tools such as Burp Suite for vulnerability analysis",
            "Completed OverTheWire (Bandit, Natas) and PortSwigger labs on SQL Injection, XSS, File Upload, and Authentication vulnerabilities",
            "Reviewed and summarized OWASP Web Security Testing Guide (WSTG) and ASVS standards in Persian for peer learning",
            "Collaborated with mentors and fellow interns to strengthen knowledge in penetration testing and secure coding practices"
        ],
        technologies: ["devicon:kalilinux","devicon:linux"]
    }, 
    {
        title: "Frontend Developer",
        location: "Remote",
        companyIcon: "/images/experiences/freelancering.png",
        startDate: "June 2025",
        endDate: "Present",
        type: "freelance",
        descriptions: [
        "Developed responsive and production-ready web applications using Vue.js and Nuxt.js",
        "Implemented modern frontend features with focus on performance, accessibility, and user experience",
        "Collaborated with clients to deliver tailored solutions and maintain long-term relationships",
        "Integrated animations and transitions with GSAP for engaging interfaces"
        ],
        technologies: ["devicon:vuejs", "devicon:nuxt", "devicon:typescript", "devicon:tailwindcss"]
    }


]