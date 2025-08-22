# Portfolio Restructure Plan

## Vision Overview
Restructuring the portfolio to have dedicated pages instead of a single-page layout with sections.

## Current Structure (Before Changes)
- Single page with sections: Home, About, Portfolio, Skills, Experience, Education, Contact
- All content in `_includes/` files
- Navigation links to page sections

## New Structure (After Changes)

### 1. Home Page
- **File**: `index.html` (updated existing file)
- **Content**: Landing page with multiple sections
- **Navigation CTA**: "Home" 
- **Status**: ✅ Completed
- **Action**: Updated `index.html` with home page content

**Sections to Include:**
- ✅ Intro section (from `header.html`)
- ✅ About me (from `about.html`)
- ✅ Portfolio (from `portfolio_grid.html`)
- ✅ Skills & Expertise (from `skills.html`)

**Sections to Exclude:**
- ✅ Education journey (from `education_journey.html`) - **PERMANENTLY MOVED** out of `_includes` directory
- ✅ Work experience (from `work_experience.html`) - **PERMANENTLY MOVED** out of `_includes` directory

### 2. Portfolio Page  
- **Current**: Links to `_includes/portfolio_grid.html`
- **Future**: Separate dedicated page for projects
- **Navigation CTA**: "Portfolio" (unchanged for now)
- **Status**: 🔄 Future enhancement
- **Action**: No action required at this time

### 3. About Section Update
- **File**: `_includes/about.html` (updated)
- **Content**: Simplified intro with image and "Resume PDF" CTA
- **Status**: ✅ Completed
- **Action**: ✅ Updated about section with professional content and image

### 4. About Page → Resume Page
- **New File**: `resume.html` (created and fully implemented)
- **Content**: Professional resume layout with updated content from Resume Page Layout document
- **Navigation CTA**: "Resume" (updated from "About")
- **Status**: ✅ Completed
- **Action**: ✅ Created `resume.html` with professional styling and complete content

#### Resume Page Enhancements (All Completed ✅)
- ✅ **Added "Resume PDF" CTA** - Positioned under "Software Engineer & UX Designer" heading
- ✅ **Updated Skills section** - Changed to "Key Skills" with bullet-point format
- ✅ **Added "Projects" section** - Includes Gas Safety Record, Job Hunt Manager, and Dynamic Invoice Template
- ✅ **Updated "Work Experience" section** - Changed to "Career History" with updated content and bullet points
- ✅ **Updated Education section** - Changed to "Professional Training and Education" with updated content
- ✅ **Updated Personal Profile section** - Converted to bullet-point format with current content
- ✅ **Moved resume.pdf file** - From `assets/` to `Resume/` folder and updated all references

### 5. Blog Page Enhancement
- **File**: `blog.html` (to be updated)
- **Content**: Redesigned blog page with improved layout
- **Navigation CTA**: "Blog" (temporarily hidden, then re-enabled)
- **Status**: 📋 Planned
- **Action**: Update blog page design and content

### 6. Portfolio Page Enhancement
- **File**: `portfolio.html` (to be created)
- **Content**: Dedicated portfolio page for projects
- **Navigation CTA**: "Portfolio" (will be updated to point to new page)
- **Status**: 📋 Planned
- **Action**: Create dedicated portfolio page

### 7. Content Migration
**Moving content from these `_includes/` files to `resume.html`:**
- `_includes/skills.html` → Resume page
- `_includes/work_experience.html` → Resume page  
- `_includes/education_journey.html` → Resume page

**Styling Requirements:**
- Simple black text on white background
- Professional layout
- No fancy styling from original sections

## Implementation Order
1. ✅ Create home page (`index.html`)
2. ✅ Hide "Blog" navigation CTA temporarily
3. ✅ Redesign Contact section
4. ✅ Resume Page Enhancements (fully completed)
5. ✅ Update `_includes/about.html` (simplified intro with image)
6. ✅ Update "About" navigation CTA to "Resume" and point to resume page
7. 📋 Update "Blog" page design and content
8. 📋 Re-enable "Blog" navigation CTA to point to updated blog page
9. 📋 Create dedicated portfolio page
10. 📋 Update "Portfolio" navigation CTA to point to new portfolio page
11. 📋 SEO optimization for Home, Resume, and Portfolio pages
12. ✅ Update navigation bar design (white on black → black on white background)
13. ✅ Improve navigation CTA styling (font size, hover effects, performance)
14. 📋 Add Client Onboarding project to portfolio (future session)

## Resume Page Enhancement Tasks (Priority #4) ✅ COMPLETED
**Current Status**: ✅ Resume page fully implemented with all content from Resume Page Layout document
**Completed Tasks**:
- ✅ Add "Resume PDF" CTA (positioned under main heading)
- ✅ Work on Skills section (converted to "Key Skills" with bullet points)
- ✅ Add "Projects" section (includes all 3 projects with links and descriptions)
- ✅ Update "Work Experience" section (converted to "Career History" with updated content)
- ✅ Update Education section (converted to "Professional Training and Education" with updated content)
- ✅ Update Personal Profile section (converted to bullet-point format)
- ✅ Move resume.pdf file to Resume folder and update all references

## Home Page Updates
17. ✅ Update "About me" content/text on the landing page
18. ✅ Update "About me" CTA from "Resume PDF" to "Resume" (completed - now links to resume page)

## Files to Create
- ✅ `resume.html` - Professional resume page (fully implemented)
- 📋 `portfolio.html` - Dedicated portfolio page
- 📋 `_posts/YYYY-MM-DD-client-onboarding.markdown` - Client Onboarding project post

## Files to Update
- ✅ `_includes/navigation.html` - Updated navigation links (changed "About" to "Resume", removed Blog)
- ✅ `_includes/about.html` - Simplified intro with image
- 📋 `blog.html` - Redesigned blog page
- ✅ `_layouts/` - Created `resume.html` layout for dedicated resume page

## SEO Optimization
**Pages to be SEO-optimized:**
- ✅ Home page
- ✅ Resume page  
- ✅ Portfolio page (once created)

**SEO Requirements:**
- Meta titles and descriptions
- Proper heading structure
- Alt text for images
- Schema markup where appropriate
- Page load optimization

## Contact Section Redesign
**Current Issues:**
- Background image needs to be removed
- "Get in touch" text color needs to be black
- Social media icons need size reduction
- Remove labels for social media icons (Email, Github, LinkedIn)
- Remove email address, github account, and linkedin user display
- Form fields need light grey borders

**Changes Required:**
- ✅ Simple white background (remove background image)
- ✅ Black font color for "Get in touch" heading
- ✅ Smaller social media icons
- ✅ Remove text labels from social media icons
- ✅ Remove contact details display (email, github, linkedin)
- ✅ Light grey borders for form fields
- ✅ Keep "Send message" CTA unchanged
- ✅ Optimized spacing between subtitle and social media icons
- ✅ Increased social media icon size for better visibility
- ✅ Tighter spacing between social media icons

## Navigation Bar Redesign
**Current Design:**
- White text on dark/black background
- Semi-transparent dark overlay

**Desired Changes:**
- ✅ Change to black text on white background
- ✅ Update hover states for navigation links
- ✅ Update branding/logo colors if needed
- ✅ Ensure proper contrast and readability
- ✅ Maintain mobile responsiveness
- ✅ Increase font size for desktop navigation CTAs (16px)
- ✅ Improve hover visibility with background color change (#EA715E background, white text)
- ✅ Remove lag-inducing hover effects (transforms, shadows)
- ✅ Keep mobile navigation at perfect size (16px)

**Files to Update:**
- ✅ `css/agency.css` - Navigation styling (completed)
- ✅ `_includes/navigation.html` - Structural changes (completed)

**Navigation CTA Improvements:**
- ✅ Desktop font size increased to 16px for better readability
- ✅ Mobile font size maintained at 16px (perfect size)
- ✅ Hover effect: Black text on white background → White text on #EA715E background
- ✅ Removed performance-heavy hover effects (transforms, shadows)
- ✅ Consistent styling across desktop and mobile
- ✅ Brand color (#EA715E) used for hover states

## Portfolio Grid Updates (Landing Page)
**File**: `_includes/portfolio_grid.html` (updated)
**Content**: Portfolio section on the landing page
**Status**: ✅ Completed
**Action**: Updated portfolio grid display and image sizing

**Changes Required:**
- [x] **Mobile**: Only display 2 project tiles
- [x] **Desktop**: Only display 3 project tiles  
- [x] **Tile "Job hunt manager"**: Resize image to match other project tiles

**Image Sizing Issue:**
- The "Job hunt manager" tile image is not the same size as other images in the portfolio section
- This creates visual inconsistency and stands out in a negative way
- Need to resize the image to match the dimensions of other project tiles

## Client Onboarding Project Addition
**File**: `_posts/YYYY-MM-DD-client-onboarding.markdown` (to be created)
**Content**: New portfolio project based on Wix portfolio content
**Status**: 📋 Planned for future session
**Action**: Create new post document and update portfolio grid

**Source Materials:**
- **Planning Document**: `planning/wix_portfolio/WixPortfolio_ClientOnboarding.md`
- **Images**: `img/portfolio/ClientOnboarding/` directory (10 images available)
- **Project Type**: Digital Product Design / UX/UI / Salesforce Integration

**Project Details:**
- **Role**: Digital Product Designer
- **Goal**: Streamline and automate B2B onboarding process through Salesforce integration
- **Key Features**: Personalized welcome emails, pre-filled forms, automated case creation
- **Business Value**: Improved client conversion, scalable onboarding solution
- **User Value**: One-click welcome emails, instant alerts, personalized customer experience

**Implementation Plan:**
1. **Create new post file** in `_posts/` directory with proper front matter
2. **Copy content** from `planning/wix_portfolio/WixPortfolio_ClientOnboarding.md`
3. **Reference images** from `img/portfolio/ClientOnboarding/` directory
4. **Update portfolio grid** to include this new project
5. **Ensure proper image sizing** for portfolio grid display
6. **Add to modals** for detailed project view

**Images Available:**
- `CO_LegacyUserflow.png` - Legacy user flow diagram
- `CO_Proposed_E2EUserflow.png` - Proposed end-to-end user flow
- `CO_Proposed_E2EUserflow_edited.png` - Edited user flow diagram
- `CaseBooked_ConfirmationEmail.png` - Confirmation email example
- `CO_projectimage_Email.png` - Main project image
- `Sending_WelcomeEmail_p1.png` - Welcome email interface
- `OnboardField_on_CaseRecord.png` - Salesforce field example
- `NewCaseRecordType.png` - New case type interface
- `CvE_Form_Prefilled.png` - Pre-filled form example
- `OLB_Form_Prefilled.png` - Online booking form example

## Notes
- Keep all existing `_includes/` files intact until content migration is complete
- Maintain professional, clean styling for resume page
- Blog navigation will be temporarily hidden during redesign
- Portfolio navigation will be updated once dedicated page is ready
- SEO optimization will be applied to all main pages
- Contact section redesign can be done independently
- **PERMANENT SOLUTION**: Moved `education_journey.html` and `work_experience.html` out of `_includes` directory to prevent them from being automatically included by Jekyll layouts

---
**Last Updated**: August 17, 2025
**Status**: Implementation Phase - Major milestone achieved with Resume page MVP completed
**Progress**: 11/14 main tasks completed (79% complete)

**Recently Completed:**
- ✅ Resume page fully implemented with all content from Resume Page Layout document
- ✅ Navigation updated ("About" → "Resume", Blog CTA removed)
- ✅ Resume PDF file moved to Resume folder and all references updated
- ✅ Navigation bar redesign (black text on white background)
- ✅ Navigation CTA improvements (font size, hover effects, performance)
- ✅ Contact section redesign (white background, simplified social media)
- ✅ Home page restructuring
- ✅ Blog CTA temporarily hidden
