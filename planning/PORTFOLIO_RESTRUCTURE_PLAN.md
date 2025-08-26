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
7. 🚨 **CRITICAL**: Fix Portfolio Grid Display Issues (text overflow, modal close button)
8. 📋 **MAJOR**: Portfolio Project Pages Transformation
   - Update project photos for all portfolio tiles
   - Create dedicated project pages (Job Hunt Manager, Gas Safety Assessment, Client Onboarding)
   - Update project content and enhance descriptions
   - Change portfolio grid navigation from modals to page links
9. 📋 Update "Blog" page design and content
10. 📋 Re-enable "Blog" navigation CTA to point to updated blog page
11. 📋 Create dedicated portfolio page
12. 📋 Update "Portfolio" navigation CTA to point to new portfolio page
13. 📋 SEO optimization for Home, Resume, and Portfolio pages
14. ✅ Update navigation bar design (white on black → black on white background)
15. ✅ Improve navigation CTA styling (font size, hover effects, performance)
16. ✅ **COMPLETED**: Client Onboarding Project Implementation
    - ✅ Create dedicated page for "Client Onboarding" project (`client-onboarding.html`)
    - ✅ Move content from `planning/wix_portfolio/WixPortfolio_ClientOnboarding.md`
    - ✅ Include photos from `img/portfolio/ClientOnboarding/` directory
    - ✅ Add "Return to Home" CTA with preferred styling
    - ✅ Update portfolio tile on landing page (replace one of the "Gas Safety Assessment" tiles)
    - ✅ Remove hover screen functionality from portfolio tiles
    - ✅ Add custom typography and styling (Caudex font, custom colors)
    - ✅ Implement responsive deliverable features grid
    - ✅ Add modal functionality for images and deliverable details
    - ✅ Fix navigation overlap issues and modal positioning
    - ✅ Update portfolio grid to support direct page links vs modals

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
- 📋 `job-hunt-manager.html` - Dedicated Job Hunt Manager project page
- 📋 `gas-safety-assessment.html` - Dedicated Gas Safety Assessment project page
- ✅ `client-onboarding.html` - Dedicated Client Onboarding project page (fully implemented)
- ✅ `_posts/2025-08-22-project3.markdown` - Client Onboarding project post (updated)

## Files to Update
- ✅ `_includes/navigation.html` - Updated navigation links (changed "About" to "Resume", removed Blog)
- ✅ `_includes/about.html` - Simplified intro with image
- ✅ `_includes/portfolio_grid.html` - Fixed text overflow and display issues + Added conditional logic for page links vs modals
- 🚨 `_includes/modals.html` - Fix modal close button visibility (may be deprecated after page transformation)
- ✅ `css/agency.css` - Fixed portfolio styling and modal close button
- ✅ `css/custom-typography.css` - Added custom typography and portfolio image sizing
- ✅ `_includes/head.html` - Added Caudex font import and custom CSS link
- 📋 `_posts/2021-06-07-jobhuntmanager.markdown` - Update to link to dedicated project page
- ✅ `_posts/2024-01-15-gas-safety-assessment.markdown` - Removed demo-link to fix modal functionality
- ✅ `_posts/2025-08-22-project3.markdown` - Updated with Client Onboarding content and demo-link
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

## Portfolio Grid Display Issues ✅ RESOLVED
**Files Affected**: `_includes/portfolio_grid.html`, `_includes/modals.html`, `css/agency.css`
**Status**: ✅ **RESOLVED** - All critical issues fixed
**Priority**: High - Was affecting user experience and readability

**Issues Fixed:**
1. ✅ **Portfolio Tile Text Overflow**: Fixed with proper CSS sizing and spacing
2. ✅ **Modal Close Button Visibility**: Improved with better positioning and styling
3. ✅ **Text Readability**: Resolved with proper layout and spacing
4. ✅ **Image Sizing**: Standardized all portfolio images with consistent dimensions
5. ✅ **Portfolio Spacing**: Reduced gaps between tiles for better visual cohesion

**Files Updated:**
- ✅ `_includes/portfolio_grid.html` - Enhanced with conditional page links vs modals
- ✅ `css/agency.css` - Fixed modal close button and portfolio styling
- ✅ `css/custom-typography.css` - Added portfolio image sizing and spacing rules

## Portfolio Project Pages Transformation
**Status**: 📋 Major Restructure Planned - Convert from modals to dedicated pages
**Priority**: High - Fundamental change to portfolio architecture
**Impact**: Transforms portfolio from modal-based to page-based navigation

### **1. Project Photos Update**
**Action**: Update photos used for each project in portfolio tiles
**Projects Affected**:
- Job Hunt Manager (`_posts/2021-06-07-jobhuntmanager.markdown`)
- Gas Safety Assessment (`_posts/2024-01-15-gas-safety-assessment.markdown`)
- Client Onboarding (`_posts/YYYY-MM-DD-client-onboarding.markdown`)

**Requirements**:
- Ensure all project thumbnail images are properly sized (400x289px)
- Update image quality and relevance for each project
- Maintain visual consistency across all portfolio tiles

### **2. Create Dedicated Project Pages**
**Action**: Create individual HTML pages for each major project
**Pages to Create**:
- `job-hunt-manager.html` - Dedicated Job Hunt Manager project page
- `gas-safety-assessment.html` - Dedicated Gas Safety Assessment project page  
- ✅ `client-onboarding.html` - Dedicated Client Onboarding project page (COMPLETED)

**Page Structure Requirements**:
- Professional project showcase layout
- Detailed project information and screenshots
- Links to GitHub repositories and live demos
- Responsive design for all devices
- SEO-optimized content and meta tags

### **3. Update Project Content**
**Action**: Enhance and update content for each project page
**Projects to Update**:

#### **Job Hunt Manager**
- **File**: `_posts/2021-06-07-jobhuntmanager.markdown` → `job-hunt-manager.html`
- **Content**: Expand with detailed project description, features, technologies used
- **Images**: Update with better quality screenshots and diagrams
- **Links**: Ensure GitHub and demo links are current

#### **Gas Safety Assessment**
- **File**: `_posts/2024-01-15-gas-safety-assessment.markdown` → `gas-safety-assessment.html`
- **Content**: Enhance with comprehensive project overview, technical details
- **Images**: Add more project screenshots and workflow diagrams
- **Links**: Update GitHub repository and demo links

#### **Client Onboarding** ✅ COMPLETED
- ✅ **File**: `planning/wix_portfolio/WixPortfolio_ClientOnboarding.md` → `client-onboarding.html`
- ✅ **Content**: Transfer and enhance content from Wix portfolio document
- ✅ **Images**: Use all 10 images from `img/portfolio/ClientOnboarding/` directory
- ✅ **Details**: Include role, goals, business value, user value, and deliverables

### **4. Update Portfolio Grid Navigation**
**Action**: Change portfolio tiles from modal triggers to page links
**Current Behavior**: Clicking tile opens modal with project details
**New Behavior**: Clicking tile navigates to dedicated project page

**Files to Update**:
- `_includes/portfolio_grid.html` - Change modal links to page links
- `_posts/2021-06-07-jobhuntmanager.markdown` - Update to link to `job-hunt-manager.html`
- `_posts/2024-01-15-gas-safety-assessment.markdown` - Update to link to `gas-safety-assessment.html`
- `_posts/YYYY-MM-DD-client-onboarding.markdown` - Update to link to `client-onboarding.html`

**Navigation Changes**:
```html
<!-- Current (Modal) -->
<a href="#portfolioModal{{ post.modal-id }}" class="portfolio-link" data-toggle="modal">

<!-- New (Page Navigation) -->
<a href="{{ post.project-page-url }}" class="portfolio-link">
```



## Client Onboarding Project Implementation ✅ COMPLETED
**Status**: ✅ **COMPLETED** - Fully implemented and functional
**Priority**: High - Major portfolio enhancement completed
**Files Created/Updated**: Multiple files successfully updated for comprehensive project addition

### **Project Overview**
**Source Content**: `planning/wix_portfolio/WixPortfolio_ClientOnboarding.md`
**Images Available**: `img/portfolio/ClientOnboarding/` directory (10 images)
**Project Type**: Digital Product Design / UX/UI / Salesforce Integration
**Role**: Digital Product Designer

### **Implementation Tasks**

#### **1. Create Dedicated Project Page** ✅ COMPLETED
**File**: `client-onboarding.html` ✅ Created and fully implemented
**Content**: ✅ Transfer and enhance content from Wix portfolio document
**Layout**: ✅ Professional project showcase with detailed sections
**Features**:
- ✅ Project overview and goals
- ✅ Business and user value propositions
- ✅ Deliverable features with screenshots (responsive grid layout)
- ✅ Background and approach methodology
- ✅ Development process and testing
- ✅ Lessons learned and next steps
- ✅ "Return to Home" CTA with preferred styling
- ✅ Custom typography (Caudex font, custom colors)
- ✅ Modal functionality for images and deliverable details
- ✅ Responsive design for all devices

#### **2. Update Portfolio Grid (Landing Page)** ✅ COMPLETED
**File**: `_includes/portfolio_grid.html` ✅ Updated
**Action**: ✅ Replace one of the duplicate "Gas Safety Assessment" tiles
**Changes Required**:
- ✅ **Title**: "Client Onboarding"
- ✅ **Label**: "Digital Product Designer"
- ✅ **Image**: `CO_projectimage_Email.png` from ClientOnboarding directory
- ✅ **Link**: Navigate to `client-onboarding.html` instead of modal
- ✅ **Remove**: Hover screen functionality (not working well)
- ✅ **Portfolio Grid Enhancement**: Added conditional logic to support both modal and direct page links

#### **3. Image Integration** ✅ COMPLETED
**Images to Include** (from `img/portfolio/ClientOnboarding/`):
- ✅ `CO_LegacyUserflow.png` - Legacy user flow diagram (with modal functionality)
- ✅ `CO_Proposed_E2EUserflow.png` - Proposed end-to-end user flow (tile display)
- ✅ `CO_Proposed_E2EUserflow_edited.png` - Edited user flow diagram (modal display)
- ✅ `CaseBooked_ConfirmationEmail.png` - Confirmation email example
- ✅ `CO_projectimage_Email.png` - Main project image (with modal functionality)
- ✅ `Sending_WelcomeEmail_p1.png` - Welcome email interface
- ✅ `OnboardField_on_CaseRecord.png` - Salesforce field example
- ✅ `NewCaseRecordType.png` - New case type interface
- ✅ `CvE_Form_Prefilled.png` - Pre-filled form example
- ✅ `OLB_Form_Prefilled.png` - Online booking form example
- ✅ **Deliverable Features Grid**: All images integrated into responsive grid layout
- ✅ **Modal Functionality**: Images can be viewed in larger modal windows

#### **4. CTA Implementation** ✅ COMPLETED
**"Return to Home" CTA**:
- ✅ **Styling**: Based on preferred CTA styling from existing pages
- ✅ **Link**: Navigate to `index.html`
- ✅ **Position**: Bottom of project page
- ✅ **Design**: Consistent with other CTAs in the portfolio

#### **5. Portfolio Tile Updates** ✅ COMPLETED
**Current Issue**: ✅ Two "Gas Safety Assessment" tiles on landing page
**Solution**: ✅ Replace one tile with "Client Onboarding" project
**Tile Configuration**:
- ✅ **Title**: "Client Onboarding"
- ✅ **Subtitle**: "Digital Product Designer"
- ✅ **Image**: `CO_projectimage_Email.png` from ClientOnboarding directory
- ✅ **Link**: Direct navigation to project page (no modal)
- ✅ **Hover Effect**: Remove current hover screen functionality
- ✅ **Post File**: Updated `_posts/2025-08-22-project3.markdown` with Client Onboarding content



## Notes
- Keep all existing `_includes/` files intact until content migration is complete
- Maintain professional, clean styling for resume page
- Blog navigation will be temporarily hidden during redesign
- Portfolio navigation will be updated once dedicated page is ready
- SEO optimization will be applied to all main pages
- Contact section redesign can be done independently
- **PERMANENT SOLUTION**: Moved `education_journey.html` and `work_experience.html` out of `_includes` directory to prevent them from being automatically included by Jekyll layouts

---
**Last Updated**: August 26, 2025
**Status**: Implementation Phase - Major milestone achieved with Client Onboarding project completed
**Progress**: 15/16 main tasks completed (94% complete)

**Recently Completed:**
- ✅ Client Onboarding project fully implemented with dedicated page and portfolio integration
- ✅ Custom typography system implemented (Caudex font, custom colors)
- ✅ Responsive deliverable features grid with modal functionality
- ✅ Portfolio grid enhanced with conditional page links vs modals
- ✅ Portfolio image sizing and spacing optimized
- ✅ Modal functionality improved with proper positioning and accessibility
- ✅ Resume page fully implemented with all content from Resume Page Layout document
- ✅ Navigation updated ("About" → "Resume", Blog CTA removed)
- ✅ Resume PDF file moved to Resume folder and all references updated
- ✅ Navigation bar redesign (black text on white background)
- ✅ Navigation CTA improvements (font size, hover effects, performance)
- ✅ Contact section redesign (white background, simplified social media)
- ✅ Home page restructuring
- ✅ Blog CTA temporarily hidden
