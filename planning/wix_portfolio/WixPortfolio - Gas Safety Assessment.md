# Gas Safety Assessment

Streamlined the end-to-end digital product experience.

(source directory for all images: img/portfolio/GasSafetyAssessment/{filename})

### Project Overview Images
**Layout Plan**: Two images side by side on desktop, vertically stacked on mobile
- **Left Image**: `GSR_Prototype_GSReport.png` - Gas Safety Report Prototype
- **Right Image**: `GSR_MainImage.png` - Main Project Overview

## At a Glance

### 🛠️ My Role
#### Digital Product Designer

Product Design and ownership, UX/UI, Workflow logic, Email template design and development

### 🎯 Project Goal

Digitise and streamline the gas safety assessment process for field engineers, improve data capture quality, and automate customer communication.

### 🏢 Business Value

- Fewer delays and errors in certificate distribution 
- Less time spent by engineers and office staff on manual entry 
- Centralised, auditable records stored in Salesforce

### 👤 User Value

- Field engineers: faster, clearer flow with fewer errors 
- Office team: easier access to certificate records 
- Customers: certificates automatically sent via email

## Deliverable Features

All products presented below were redesigned, built and integrated within Salesforce, entirely removing the need for any external third party tools or software.

[Tiles: 
[image: 
src: "GSR_Project_ProposedUserFlow.png", 
title: "Proposed User Flow (Engineers)"
description: "Mapped the engineer’s journey within Salesforce Field Service to ensure data capture was seamless, reliable, and aligned with the tools they already used daily."
]

[image: 
src: "GSR_Wireframe_EmailTemplate.png",
title: "Wireframe - Email Template"
description: "This wireframe represents the existing email template applied to all emails sent out to our customers, through Salesforce and WordPress. I made a few minor modifications to align this template with the needs for this project. "
]

[image:
src: "GSR_Wireframe_GSReport.jpeg"
title: "Wireframe - Gas Safety report"
description: "After reviewing the current, and prior templates, I broke down the template into a simple wireframe which I could then use when rebuilding this template within Salesforce's Visual Force Pages."
]

[image:
src: "GSR_Proposed_E2E_Userflow.jpg"
title: "User Flow - Proposed End2End Process Flow"
description: "While building the assessment flow in Salesforce, I needed to plan what would happen after an engineer submits their report—and how this would align with existing booking processes." 
]

[image:
src: "GSR_LegacyUserFlow.png"
title: "Legacy User Flow"
description: "This legacy user flow illustrates the steps taken by engineers using the former third-party form tool to complete a gas safety assessment."
]

[image: 
src: "GSR_MainImage.png"
title: "Gas Safety Assessment Flow"
description: "The flow simplifies data entry for our engineers, allowing them to focus on the assessment."
]

[image: 
src: "GSR_Prototype_GSReport.png"
title: "Gas Safety Certificate Template"
description: "Automatically generated upon the completion of an assessment."
]

[image: 
src: "GSR_Prototype_EmailTemplate.png"
title: "Email template (Mobile)"
description: "Automatically generated & sent to our customer, with their gas safety certificate attached."
]


[image: 
src: "GSR_SalesforceDesktopView.png"
title: "Desktop View"
description: "A desktop view to provide our internal teams with the tools they need to support our engineers and to offer fantastic service to our customers."
]
]

## Background:

[image: 
src: "GSR_LegacyReportDesign.png"
title: Legacy Gas Safety Report 
description: "This was the legacy report design, based on Aspect's paper based report, which is completed whilst the engineer is at the client's premises."
]

[image: 
src: "GSR_Legacy_GSR_Form.png"
title: "Legacy Gas Safety Form"
description: "This legacy version of the Gas Safety form was built within a third party form tool. Yet the form tool could not support the functionality we required and it was not intuitive for our users, often causing them endless issues."
]

### Key Pain Points

- 🧾 Old System - Engineers used a third-party form tool to collect data and generate certificates. 
    
- ⚠️ Frequent Disruptions - The tool often failed in the field, causing delays and frustration for engineers. 
    
- 🗃️ No Central Storage - Certificates were only emailed to customers — with no archive for internal teams. 
    
- ⏳ No Way to Backdate - Backdating required engineers to search through old emails manually. 
    
- 🔁 Costly Corrections - Even small errors meant sending another engineer to redo the full assessment.

## Approach 

As Product Owner, I led the Gas Safety Assessment Migration by aligning project goals with business objectives through close collaboration with the CTO. I engaged the Operations Manager to deeply understand existing process gaps and operational challenges, uncovering critical issues affecting service quality for customers.

### User Research

I spoke with engineering managers to hear what engineers really thought about the current form tool. They said it had too many extra steps and bugs, making it frustrating to use.  

Many engineers either needed constant help or gave up on the tool altogether, reverting back to paper certificates—which couldn’t be digitized—creating extra work for their manager and slowing down the process.

This flow shows the steps engineers take to complete an assessment. In the ideal scenario, the report is automatically generated and emailed to the client and key internal staff, allowing engineers to finish their visit quickly.

However, even in this “happy path,” operations and customer service teams often face frustration. Simple customer questions can become complicated cross-team efforts to locate certificates, send engineers back for repeat assessments, or process refunds.

#### Secondary Research

- Ensured legal compliance by researching gas safety report requirements. 
- Conducted a competitive analysis to identify industry standards. 
- Evaluated alternative form solutions for features, functionality, and cost.
    
**Outcome: **

This research guided discussions with the Systems Architect and CTO, leading to selecting a Salesforce-based solution as the best fit.

### Proposed solution

I presented the project requirements, user flows, research, and form tool options to our Systems Architect. After review, they recommended a Salesforce-based solution as the best fit for Aspect. We then shared all findings and the proposed solution with the CTO, who approved the project to move forward. 

This allowed me to begin planning and designing a comprehensive solution to improve the experience for engineers, internal teams, and clients, while delivering long-term value for Aspect.

## Design

### Proposed User Flows

I created user flow journeys to visualize the experiences of engineers, operations, customer service teams, and customers. These flows guided the design process. My main goal was to simplify the gas safety assessment, creating a smooth and positive experience for our engineers.

[image: 
src: "GSR_Project_ProposedUserFlow.png"
]

While building the assessment flow in Salesforce, I needed to plan what would happen after an engineer submits their report—and how this would align with existing booking processes. To ensure a smooth experience for engineers, internal teams, and customers, I created an end-to-end process flow that considered all stakeholders involved.

#### Benefits for the engineer

- Minimal training needed with a single mobile app for all Aspect tasks.
- Smooth, fast assessment submission with no lost progress.  
- No need for new accounts or separate applications.  
- Automatic report emailing, removing engineer responsibility.   
- Quick resolution of technical issues by our developer team.

## Build & Test

- Implemented the redesigned customer email. 
- Collaborated with developers to build the gas safety report template and Apex controller in Salesforce. 
- Oversaw the development of all products and flows to ensure alignment with business and user needs. 
- Conducted quality assurance and user acceptance testing across all products before deployment.

## Post-Deployment

- Created user manuals and tutorial videos for engineers explaining how to access, complete, and submit the Gas Safety Assessment form within the Salesforce Field Service app
    
- Wrote user manuals for internal teams covering available tools, key workflows, and how to manage and send gas safety reports in Salesforce
    
- Documented how to find all report versions and supporting files within a client’s Salesforce account
    
- Produced internal release notes for the engineering team outlining delivered features, technical details, and where to locate everything in Salesforce
    
- Compiled a handover document to help engineering and design teams manage the product and address future issues
    
- Wrote internal launch communication to announce the product release, highlight features, identify users and support contacts, and share training materials with the wider company

## Take aways

### Lessons Learnt

- **Start with User Research:** Conduct interviews and observe engineers during assessments to understand their needs and pain points firsthand. 
    
- **Leverage Salesforce Data:** Evaluate the value of the project by analysing data within Salesforce to gauge its potential impact on the business. 
    
- **Conduct Usability Testing:** Test prototypes with users before moving into development to ensure usability and identify any issues early on. 
    
- **Trust Developers with Development Work:** Delegate development tasks to developers, allowing them to focus on implementation while providing guidance and support as needed. 
    
- **Organise Brainstorming Meetings:** Bring together stakeholders to review current processes and brainstorm potential solutions to optimise the user journey. 
    
- **Structure the Project**: Define key milestones and break them down into actionable items with achievable deadlines, allowing for efficient adaptation along the way.

### Next Steps

- **Evaluate Business Impact:** Analyse data from Salesforce to assess whether the new product journey is contributing to the business's value proposition, identifying areas of improvement or potential growth. 
    
- **Conduct Usability Testing:** Engage with engineers and internal users to conduct usability testing, ensuring that the product meets their needs and facilitates efficient workflows. 
    
- **Monitor Customer Engagement:** Monitor customer engagement metrics after the product has been launched for at least a month, gauging customer satisfaction and identifying areas for improvement. 
    
- **Collect Stakeholder Feedback:** Gather feedback from key stakeholders such as engineering managers, the CTO, and the Marketing Director, to understand their perspectives on the product's performance and impact. 
    
- **Process and Present Feedback:** Analyse and synthesise the feedback received from stakeholders, identifying common themes or areas for improvement. Present findings and recommendations to stakeholders, highlighting any necessary optimisations to enhance the product journey. 
    
- Deprecate the legacy Gas Safety form, which would cut costs for the business.

[CTA
label: "Return to home"
Links to: "index.html"
]