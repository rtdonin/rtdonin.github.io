// ============================================
// SITE DATA
// ============================================

const siteData = {
    // Personal Info
    personal: {
        name: "Margaret Knee",
        title: "Full Stack Developer",
        email: "rtdonin@gmail.com",
        github: "https://github.com/rtdonin",
        linkedin: "https://www.linkedin.com/in/margaret-donin/",
        resume: "https://drive.google.com/file/d/1VUDU0w-eZ2Z2h297WSG7OlAXtHfbLI2l/view?usp=sharing"
    },

    // Navigation Links
    navLinks: [
        { text: "About", href: "#about" },
        { text: "Experience", href: "#experience" },
        { text: "Education", href: "#education" },
        { text: "Skills", href: "#skills" },
        { text: "Projects", href: "#projects" }
    ],

    // About Me
    about: `I'm a Java engineer with 2+ years of hands-on experience building and maintaining enterprise government systems. I specialize in backend development: Java, Spring Boot, Oracle SQL, and related technologies. I'm comfortable diving into front-end work (JSP, HTML/CSS) when needed.

What I enjoy most is solving real problems under pressure. I've debugged critical production issues, rewritten complex logic, and stabilized integrations that support government operations across multiple counties. I care about getting things right—technically sound, compliant, and reliable.

I'm experienced with legacy system modernization, which means I can navigate large codebases and implement improvements that actually matter. I work best in collaborative Agile teams and value clear communication with both technical and non-technical stakeholders.

If you're looking for a developer who's reliable, thoughtful about code quality, and genuinely interested in solving problems well, I'd be happy to talk.`,

    // Experience
    experience: [
        {
            company: "Tyler Technologies",
            title: "Software Developer",
            dates: "Jun 2023 - Sep 2025",
            bullets: [
                "Restored document-filing capability for multiple counties by resolving TIFF/metadata and processing issues, ensuring regulatory compliance",
                "Diagnosed and fixed unstable HTTP integrations with external systems (without a test environment), restoring reliable communication",
                "Implemented legislatively driven system updates and corrected high-impact defects affecting statewide client groups",
                "Modernized and maintained Java/Spring backend systems and legacy JSP/Swing components to improve maintainability and reduce defects",
                "Built automated data-remediation tools with audit-ready logging to support compliance and streamline operations",
                "Collaborated in Agile teams with product, QA, and engineers to deliver incremental features; authored onboarding documentation to speed team ramp-up"
            ]
        },
        {
            company: "Wilco",
            title: "Software Developer Intern",
            dates: "Jan 2023 - Feb 2023",
            bullets: [
                "Completed development and debugging tasks within a simulated production environment to improve SDK functionality",
                "Performed QA testing and reported defects to support product stability and reliability",
                "Wrote technical blog posts providing developer-focused tips and insights"
            ]
        }
    ],

    // Education
    education: [
        {
            school: "New York University",
            department: "Tandon School of Engineering",
            degree: "Bachelor of Science",
            field: "Biomolecular Sciences",
            logo: "icon/NYU_Stacked_CMYK_Color.jpg",
            credentialUrl: "https://www.nyu.edu/registrar/forms-procedures/electronic-diploma-validation.html",
            credentialNote: "Use Credential ID 22P3-9BYS-MSNQ"
        },
        {
            school: "LaGuardia Community College",
            department: "Software Guild",
            degree: "Certificate",
            field: "Web Development Bootcamp - Java",
            logo: "icon/software-guild.png",
            credentialUrl: "https://www.credly.com/badges/7b52281a-e064-490b-9368-cad8f7a5f608/public_url"
        },
        {
            school: "University of California, Irvine",
            department: "Coursera",
            degree: "Certificate",
            field: "Getting Started with Go",
            logo: "icon/UCI_MB_PI_WM_300x300_YellowonBlue.png",
            credentialUrl: "https://coursera.org/share/8799b285994d76499065d7c7c61ff141"
        },
        {
            school: "University of Michigan",
            department: "Coursera",
            degree: "Certificate",
            field: "Building Web Applications in Django",
            logo: "icon/UM.jpg",
            credentialUrl: "https://coursera.org/share/e6327aae486f76ab9a653a9b2e606e87"
        },
        {
            school: "University of Michigan",
            department: "Coursera",
            degree: "Certificate",
            field: "Web Application Technologies and Django",
            logo: "icon/UM.jpg",
            credentialUrl: "https://coursera.org/share/fcba8bdd1fe31704f93fa30800f1c14b"
        }
    ],

    // Skills (text-based, grouped by type)
    skills: [
        { category: "Languages", items: ["Java", "Groovy", "SQL", "JavaScript", "Python", "Go"] },
        { category: "Frameworks", items: ["Spring Boot", "Spring Framework", "JPA", "Django"] },
        { category: "Front-End", items: ["HTML/CSS", "Bootstrap", "Thymeleaf", "JSP", "jQuery"] },
        { category: "Databases", items: ["Oracle", "PostgreSQL", "MySQL", "MS SQL"] },
        { category: "Build & Deploy", items: ["Maven", "Gradle", "Tomcat"] },
        { category: "Tools", items: ["Git", "REST/SOAP APIs", "Postman", "Jira", "Confluence", "JUnit"] },
        { category: "Cloud", items: ["AWS (basic)"] }
    ],

    // Projects
    projects: [
        {
            title: "Full Stack Coding Project: My Very Awesome Blog",
            description: "A blog with different levels of authentication available for various users to comment and post. Built in Java, MySQL, SpringBoot, Thymeleaf, and Bootstrap.",
            image: "Project_Images/MyBlog.png",
            url: "https://blogging-project.herokuapp.com/"
        }
        // Add more projects:
        // {
        //     title: "Project Name",
        //     description: "Description here.",
        //     image: "Project_Images/screenshot.png",
        //     url: "https://link.com"
        // }
    ]
};