
# Job Hunt Manager 

A web app for organising your job hunt in one place

[Video demo
	src="https://www.youtube.com/embed/bX6YD33VKIw"
	title="Job Hunt Manager web app demo video." 
	frameborder="0" 
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen
	description="This video is a demo of "Job Hunt Manager," a web-based application, designed to streamline the job search process by allowing users to manage applications, interviews, and job offers all in one place."

CTA: {
	Label: "Watch on YouTube"
	href="https://youtu.be/bX6YD33VKIw?si=xFaUoYbLCajtxAa8"
	target="_blank"
	rel="noopener noreferrer" 
}]

## Overview 

Job Hunt Manager is a full-stack web application that helps users track job applications, interviews, and offers in one place. I designed and developed the project independently, handling everything from front-end design and styling to back-end logic and database integration. 

The app was built with Python, Flask, HTML, CSS, and SQLite. It was deployed on Heroku and demonstrates my ability to take a product from concept through to launch.

## At a glance

* My role: Full stack developer
* Key Skills: Full-Stack Development, Flask, Python, HTML, CSS, SQLite, Git, Version Control, Heroku Deployment
* Tools: VS Code, Git, GitHub, Heroku
* Timeframe: 2021

## Deliverable Features 

Key features developed for Job Hunt Manager that help users stay organised, motivated, and in control of their job hunt.

### Add a new job application

Allows users to quickly log new job applications, capturing key info like role, company, and notes in a single form.

[image:
src="i/Users/andi/workspace/cardiniscode.github.io/img/portfolio/job_hunt_manager/add_job_application.jpg"
alt="image reflect web form used to log each job application"
title="Add a new job application"
description="Allows users to quickly log new job applications, capturing key info like role, company, and notes in a single form."
]
### Dashboard overview

Gives users a clear summary of all job applications and progress, helping them feel more in control and focused.

[image:
src="/Users/andi/workspace/cardiniscode.github.io/img/portfolio/job_hunt_manager/dashboard.jpg"
alt="image of dashboard within web app"
title="Dashboard Overview"
description="Gives users a clear summary of all job applications and progress, helping them feel more in control and focused."
]

### Individual Contacts Directory

Gives users a dedicated place to save professional contact details, so everything they need for job hunting lives in one place. Makes it easy to find and reach out to contacts quickly when needed.

[image:
src="/Users/andi/workspace/cardiniscode.github.io/img/portfolio/job_hunt_manager/address-book-indiv-contacts.jpg"
alt="image of individual contacts directory within webapp"
title="Individual Contacts Directory"
description="Gives users a dedicated place to save professional contact details, so everything they need for job hunting lives in one place. Makes it easy to find and reach out to contacts quickly when needed."
]

### Company Contact Directory

All your business contacts stored within 1 view.

[image:
src="/Users/andi/workspace/cardiniscode.github.io/img/portfolio/job_hunt_manager/company_directory.jpg"
alt="Image of company contacts directory within webapp"
title="Company Contact Directory"
description="All your business contacts stored within 1 view."
]

### Application Notes

Add notes for a specific Job application you've submitted.

[image:
src="/Users/andi/workspace/cardiniscode.github.io/img/portfolio/job_hunt_manager/add_application_notes.jpg"
alt="Image of web form, used to capture notes related to a specific job application"
title="Add Application Notes"
description="Add notes for a specific Job application you've submitted."
]

### Interview Details

Got a scheduled Interview lined up? Save it on your dashboard.

[image:
src="/Users/andi/workspace/cardiniscode.github.io/img/portfolio/job_hunt_manager/add_interview_form.jpg"
alt="Image of web form used to capture upcoming interview details"
title="Add Interview Details"
description="Got a scheduled Interview lined up? Save it on your dashboard."
]

### Dashboard Notifications

See details of all the job applications you've submitted, all job offers you've received and all upcoming interviews.

[image:
src="/Users/andi/workspace/cardiniscode.github.io/img/portfolio/job_hunt_manager/dashboard_notifications.jpg"
alt="image of notifications on the dashboard, within the webapp"
title="Dashboard Notifications"
description="See details of all the job applications you've submitted, all job offers you've received and all upcoming interviews."
]

### Job Application Details

See all the details you've provided for a job application. You'll have the option to update the details and to see the company details.

[image:
src="/Users/andi/workspace/cardiniscode.github.io/img/portfolio/job_hunt_manager/job_application_details.png"
alt="Image taken of the confirmation page presented to users after they've submit a job application."
title="Job Application Details"
description="See all the details you've provided for a job application. You'll have the option to update the details and to see the company details."
]

### Change Account Password

Changing your account password is quick and easy.

[image:
src="/Users/andi/workspace/cardiniscode.github.io/img/portfolio/job_hunt_manager/change_password.jpg"
alt="Image of the change password user form"
title="Change Account Password"
description="Changing your account password is quick and easy."
]


## Problem

Job hunting can be overwhelming when information is scattered across different tools. Applications may be logged in spreadsheets, interview dates kept in calendars, and notes stored elsewhere. Without a single place to bring everything together, it becomes difficult to stay organised and maintain a clear picture of progress.

**Key Pain Points**

- Information spread across multiple tools (spreadsheets, calendars, notes apps)
- No central place to manage the full journey of each application
- Difficulty keeping track of application progress and interview details
- Frustration in maintaining an organised, consistent process

## Solution

I started by validating the idea with LinkedIn polls. From there, I built the backend, created forms with WTForms, styled the frontend, and deployed the app to Heroku. The project was managed entirely by myself, with occasional technical guidance.

### User Research & Discovery

I began by asking my LinkedIn network if they would find an app like this useful. The response was very positive, with many people saying they saw real value in the idea and would personally use it to manage their own job hunt.

Based on this feedback, I moved forward with building a simple, centralised system that users could log into and use regularly throughout their job search. It needed to store all the relevant data and be flexible enough for future updates.

### Proposed Solution

A web-based application written in Python Flask and backed by a SQL database. The app would allow users to:

- Add, view, update, and delete job applications, interviews, offers, general notes, and company-specific notes
- See a tally of total job applications submitted, interviews scheduled, and offers received
- Sign in and resume job tracking anytime, from any device
- Feel in control and motivated by focusing on progress rather than outcomes

### Technical Implementation

- **Backend:** Developed with **Python (Flask)** to manage application logic and routing, and to provide the API for data handling.
    
- **Frontend:** The user interface was built using standard **HTML** and styled with **CSS** for a clear and intuitive user experience.
    
- **Database:** A **SQLite** relational database was implemented to persistently store user data, including applications, notes, and interview details. The database schema was designed to support **CRUD (Create, Read, Update, Delete)** operations, enabling users to fully manage their job hunt information.
    
- **Version Control:** **Git** was used for version control, with all project commits and updates regularly pushed to a **GitHub** repository.
    
- **Deployment:** The application was deployed and hosted on **Heroku**, making it accessible for live testing and use.

### Key Learnings

- Design requires more upfront planning than I realised
- I didn’t create wireframes, prototypes, or a site map before building
- Accessibility wasn’t part of my process yet, and I didn’t design mobile-first
- I learned the importance of testing across devices and planning for real user needs
- Building something for myself helped me stay focused and motivated

## Impact 

The Job Hunt Manager provides users with a centralised, intuitive tool to streamline and organize their job search. By offering a single place to track applications, interviews, and notes, the application helps users feel more in control of their job hunt, reduce feelings of being overwhelmed, and clearly visualize their progress. This ultimately allows them to be more efficient and focused throughout the process.

### Project Delivery

- **Solo Development:** Built this project from the ground up as the sole full-stack developer.
- **End-to-End Ownership:** Managed the entire development lifecycle, from initial concept and user research to final deployment.
- **Live Demonstration:** Produced a walkthrough video to demonstrate the core functionality and user experience of the deployed application.
- **Practical Experience:** Gained hands-on experience in delivering a fully functional web application designed to solve a real-world problem.

### Planned Next Steps

- Rebuild the app using JavaScript frameworks for both frontend and backend
- Redesign the UI with a mobile-first approach
- Incorporate accessibility features
- Deploy both a new web and mobile version
- Improve security, by adding authentication features like 2FA and allowing applications like Google Authenticator

CTA: 1 {
	Label: "Return to Dashboard"
	Links to: "Index.html"
	Orientation: Left
}

CTA: 2 {
	Label: "View presentation"
	Links to: "JHM_ProjectPresentation.pdf" (file)
	Orientation: Right
}












