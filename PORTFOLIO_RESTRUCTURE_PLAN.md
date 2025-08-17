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
- ❌ Education journey (from `education_journey.html`)
- ❌ Work experience (from `work_experience.html`)

### 2. Portfolio Page  
- **Current**: Links to `_includes/portfolio_grid.html`
- **Future**: Separate dedicated page for projects
- **Navigation CTA**: "Portfolio" (unchanged for now)
- **Status**: 🔄 Future enhancement
- **Action**: No action required at this time

### 3. About Section Update
- **File**: `_includes/about.html` (to be updated)
- **Content**: Simplified intro with single sentence, image, and "read more" invitation
- **Status**: 📋 Planned
- **Action**: Update about section content and layout

### 4. About Page → Resume Page
- **New File**: `resume.html` (to be created)
- **Content**: Professional resume layout
- **Navigation CTA**: "About" (will be updated later)
- **Status**: ✅ Completed
- **Action**: Create `resume.html` with professional styling

#### Resume Page Enhancements (Future Tasks)
- **Add "Resume PDF" CTA** - Location to be determined
- **Work on Skills section** - Improve content and presentation
- **Add "Projects" section** - Content to be taken from CV
- **Update "Work Experience" section** - Improve content and formatting
- **Update Education section** - Rename to "Education and Certifications" and update content

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
4. 📋 Resume Page Enhancements (prioritized)
5. 📋 Update `_includes/about.html` (simplified intro with image)
6. 📋 Update "About" navigation CTA to point to resume page
7. 📋 Update "Blog" page design and content
8. 📋 Re-enable "Blog" navigation CTA to point to updated blog page
9. 📋 Create dedicated portfolio page
10. 📋 Update "Portfolio" navigation CTA to point to new portfolio page
11. 📋 SEO optimization for Home, Resume, and Portfolio pages
12. ✅ Update navigation bar design (white on black → black on white background)
13. ✅ Improve navigation CTA styling (font size, hover effects, performance)

## Resume Page Enhancement Tasks (Priority #4)
**Current Status**: Basic resume page created with professional styling
**Next Steps**:
- 📋 Add "Resume PDF" CTA (location to be determined)
- 📋 Work on Skills section (improve content and presentation)
- 📋 Add "Projects" section (content from CV)
- 📋 Update "Work Experience" section (improve content and formatting)
- 📋 Update Education section (rename to "Education and Certifications" and update content)

## Home Page Updates
17. 📋 Update "About me" content/text on the landing page
18. 📋 Update "About me" CTA from "Resume PDF" to "Resume" (after Resume page is complete)

## Files to Create
- `resume.html` - Professional resume page ✅
- `portfolio.html` - Dedicated portfolio page

## Files to Update
- `_includes/header.html` - Update navigation links (hide/show Blog, update Portfolio)
- `_includes/about.html` - Simplified intro with image
- `blog.html` - Redesigned blog page
- `_layouts/` - May need new layouts for dedicated pages

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

## Notes
- Keep all existing `_includes/` files intact until content migration is complete
- Maintain professional, clean styling for resume page
- Blog navigation will be temporarily hidden during redesign
- Portfolio navigation will be updated once dedicated page is ready
- SEO optimization will be applied to all main pages
- Contact section redesign can be done independently

---
**Last Updated**: August 17, 2025
**Status**: Implementation Phase - Multiple major components completed
**Progress**: 6/13 main tasks completed (46% complete)

**Recently Completed:**
- ✅ Navigation bar redesign (black text on white background)
- ✅ Navigation CTA improvements (font size, hover effects, performance)
- ✅ Contact section redesign (white background, simplified social media)
- ✅ Resume page creation with professional styling
- ✅ Home page restructuring
- ✅ Blog CTA temporarily hidden
