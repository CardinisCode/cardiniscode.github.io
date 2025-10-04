# Accessibility Optimisation Plan

## Vision Overview

My plan is to optimise my portfolio site to be accessibility friendly, as accessibility is really important to me. To do this. 

## Accessibility Report - Lighthouse 

I've carried out my first accessibility assessment, using Lighthouse, as of today (04 Oct '25) and there were some wins and some things to work on
- 📋 Performance: 60%
- 📋 Accessibility: 74%
- ✅ Best Practices: 100% 
- ✅ SEO: 100%

See full report: 
planning/Personal Portfolio - Accessibility Report.md

## 📋 **TODO - Site-Wide Contrast Optimization**

### **Task**: Update all remaining orange elements from #EA715E to #D45A47
**Priority**: High | **Status**: 🔄 **IN PROGRESS** | **Target**: This week

**Objective**: Ensure WCAG AA accessibility compliance across all orange elements on the site

### **✅ COMPLETED Updates:**
- ✅ **Button styles** (`btn btn-xl`) - Updated in `css/agency.css` line 235
- ✅ **H1 headings** - Updated in `css/custom-typography.css` line 12
- ✅ **Button hover states** - Updated in `css/agency.css` (lines 245-248)

### **📋 REMAINING Updates Needed:**

#### **CSS Files to Check/Update:**
- [ ] **`css/custom-typography.css`** - Check for any remaining `#EA715E` references
- [ ] **`css/agency.css`** - Check for any remaining `#EA715E` references  
- [ ] **`css/main.css`** - Check for any remaining `#EA715E` references
- [ ] **`css/custom-bootstrap.css`** - Check for any remaining `#EA715E` references

#### **Specific Elements to Verify:**
- [ ] **404 page heading** - Currently uses `#EA715E` (line 145 in 404.html)
- [ ] **Any inline styles** - Search for `#EA715E` in HTML files
- [ ] **CSS variables** - Check if any CSS custom properties use the old color
- [ ] **Hover states** - Ensure all hover states use `#D45A47`
- [ ] **Focus states** - Ensure all focus states use `#D45A47`
- [ ] **Active states** - Ensure all active states use `#D45A47`

#### **Files to Search:**
- [ ] All `.html` files for inline `#EA715E` styles
- [ ] All `.css` files for `#EA715E` references
- [ ] Check for any hardcoded color values in JavaScript files

### **Search Commands to Run:**
```bash
# Search for old orange color in all files
grep -r "#EA715E" . --include="*.html" --include="*.css" --include="*.js"

# Search for any remaining orange variations
grep -r "#EA715" . --include="*.html" --include="*.css" --include="*.js"
```

### **Accessibility Benefits:**
- ✅ **WCAG AA compliance** - 4.5:1 contrast ratio achieved
- ✅ **Better readability** - Improved text visibility
- ✅ **Consistent branding** - Unified color scheme
- ✅ **Professional appearance** - Enhanced visual design

### **Next Steps:**
1. Run search commands to identify all remaining `#EA715E` references
2. Update each reference to `#D45A47`
3. Test accessibility with Chrome DevTools
4. Verify visual consistency across all pages
5. Update any CSS variables or custom properties if found

**Dependencies**: Accessibility audit completion, color consistency review

## 📋 **TODO - Performance Optimization for Accessibility**

### **Task**: Optimize site performance to improve accessibility experience
**Priority**: Medium | **Status**: 📋 **PLANNED** | **Target**: Next week

**Objective**: Improve performance metrics that affect accessibility (especially for users with slower connections)

### **Issues Identified:**
- **Performance Score**: 60% (needs improvement)
- **Large image files**: `capetown2.jpg` (3.5MB) causing slow loading
- **Multiple font loading**: 6 different Google Fonts causing render blocking
- **Unused CSS**: 19KB of unused Bootstrap CSS
- **Large DOM size**: 175 elements (acceptable but could be optimized)

### **Tasks:**
- [ ] **Optimize images** - Compress `capetown2.jpg` and other large images
- [ ] **Reduce font loading** - Minimize Google Fonts to essential ones only
- [ ] **Remove unused CSS** - Clean up unused Bootstrap styles
- [ ] **Add font-display: swap** - Improve font loading performance
- [ ] **Optimize critical rendering path** - Defer non-critical resources

## 📋 **TODO - Manual Accessibility Testing**

### **Task**: Complete manual accessibility testing checklist
**Priority**: High | **Status**: 📋 **PLANNED** | **Target**: This week

**Objective**: Address the 10 manual accessibility checks identified by Lighthouse

### **Manual Checks Required:**
- [ ] **Keyboard navigation** - Test all interactive elements with keyboard only
- [ ] **Screen reader testing** - Test with actual screen reader software
- [ ] **Focus management** - Ensure proper focus indicators and order
- [ ] **Color contrast verification** - Manual verification of all text/background combinations
- [ ] **Alternative text review** - Verify all images have meaningful alt text
- [ ] **Form accessibility** - Test contact form with assistive technologies
- [ ] **Modal accessibility** - Test portfolio modals with keyboard and screen reader
- [ ] **Responsive accessibility** - Test accessibility on mobile devices
- [ ] **Error handling** - Test form validation and error messages
- [ ] **Content structure** - Verify logical reading order and heading hierarchy

## 📋 **TODO - Structured Data Validation**

### **Task**: Validate and optimize structured data for SEO and accessibility
**Priority**: Medium | **Status**: 📋 **PLANNED** | **Target**: Next week

**Objective**: Ensure structured data is valid and enhances accessibility

### **Tasks:**
- [ ] **Run Structured Data Testing Tool** - Validate current schema markup
- [ ] **Run Structured Data Linter** - Check for additional issues
- [ ] **Review Person schema** - Ensure all required fields are present
- [ ] **Add missing properties** - Enhance schema with additional accessibility-friendly data
- [ ] **Test with Google Rich Results** - Verify structured data displays correctly

## 📋 **TODO - Advanced Accessibility Features**

### **Task**: Implement advanced accessibility features
**Priority**: Low | **Status**: 📋 **PLANNED** | **Target**: Future

**Objective**: Go beyond basic compliance to create exceptional accessibility experience

### **Features to Consider:**
- [ ] **Skip links** - Add skip navigation links for keyboard users
- [ ] **ARIA landmarks** - Enhance page structure with ARIA landmarks
- [ ] **Live regions** - Add ARIA live regions for dynamic content
- [ ] **High contrast mode** - Consider adding high contrast theme option
- [ ] **Font size controls** - Add user-controllable font size options
- [ ] **Reduced motion** - Respect prefers-reduced-motion media query
- [ ] **Focus management** - Implement proper focus management for modals
- [ ] **Error announcements** - Ensure form errors are announced to screen readers

## 🎯 **New Accessibility Ticket Items to Add:**

### **1. Performance Optimization for Accessibility**
```markdown
## 📋 **TODO - Performance Optimization for Accessibility**

### **Task**: Optimize site performance to improve accessibility experience
**Priority**: Medium | **Status**: 📋 **PLANNED** | **Target**: Next week

**Objective**: Improve performance metrics that affect accessibility (especially for users with slower connections)

### **Issues Identified:**
- **Performance Score**: 60% (needs improvement)
- **Large image files**: `capetown2.jpg` (3.5MB) causing slow loading
- **Multiple font loading**: 6 different Google Fonts causing render blocking
- **Unused CSS**: 19KB of unused Bootstrap CSS
- **Large DOM size**: 175 elements (acceptable but could be optimized)

### **Tasks:**
- [ ] **Optimize images** - Compress `capetown2.jpg` and other large images
- [ ] **Reduce font loading** - Minimize Google Fonts to essential ones only
- [ ] **Remove unused CSS** - Clean up unused Bootstrap styles
- [ ] **Add font-display: swap** - Improve font loading performance
- [ ] **Optimize critical rendering path** - Defer non-critical resources
```

### **2. Manual Accessibility Testing**
```markdown
## 📋 **TODO - Manual Accessibility Testing**

### **Task**: Complete manual accessibility testing checklist
**Priority**: High | **Status**: 📋 **PLANNED** | **Target**: This week

**Objective**: Address the 10 manual accessibility checks identified by Lighthouse

### **Manual Checks Required:**
- [ ] **Keyboard navigation** - Test all interactive elements with keyboard only
- [ ] **Screen reader testing** - Test with actual screen reader software
- [ ] **Focus management** - Ensure proper focus indicators and order
- [ ] **Color contrast verification** - Manual verification of all text/background combinations
- [ ] **Alternative text review** - Verify all images have meaningful alt text
- [ ] **Form accessibility** - Test contact form with assistive technologies
- [ ] **Modal accessibility** - Test portfolio modals with keyboard and screen reader
- [ ] **Responsive accessibility** - Test accessibility on mobile devices
- [ ] **Error handling** - Test form validation and error messages
- [ ] **Content structure** - Verify logical reading order and heading hierarchy
```

### **3. Structured Data Validation**
```markdown
## 📋 **TODO - Structured Data Validation**

### **Task**: Validate and optimize structured data for SEO and accessibility
**Priority**: Medium | **Status**: 📋 **PLANNED** | **Target**: Next week

**Objective**: Ensure structured data is valid and enhances accessibility

### **Tasks:**
- [ ] **Run Structured Data Testing Tool** - Validate current schema markup
- [ ] **Run Structured Data Linter** - Check for additional issues
- [ ] **Review Person schema** - Ensure all required fields are present
- [ ] **Add missing properties** - Enhance schema with additional accessibility-friendly data
- [ ] **Test with Google Rich Results** - Verify structured data displays correctly
```

### **4. Advanced Accessibility Features**
```markdown
## 📋 **TODO - Advanced Accessibility Features**

### **Task**: Implement advanced accessibility features
**Priority**: Low | **Status**: 📋 **PLANNED** | **Target**: Future

**Objective**: Go beyond basic compliance to create exceptional accessibility experience

### **Features to Consider:**
- [ ] **Skip links** - Add skip navigation links for keyboard users
- [ ] **ARIA landmarks** - Enhance page structure with ARIA landmarks
- [ ] **Live regions** - Add ARIA live regions for dynamic content
- [ ] **High contrast mode** - Consider adding high contrast theme option
- [ ] **Font size controls** - Add user-controllable font size options
- [ ] **Reduced motion** - Respect prefers-reduced-motion media query
- [ ] **Focus management** - Implement proper focus management for modals
- [ ] **Error announcements** - Ensure form errors are announced to screen readers
```

## **Summary:**
You should add **4 new ticket items** to your accessibility plan:
1. **Performance Optimization** (affects accessibility experience)
2. **Manual Accessibility Testing** (addresses the 10 manual checks)
3. **Structured Data Validation** (SEO + accessibility)
4. **Advanced Accessibility Features** (future enhancements)

These will help you move from 74% to 90%+ accessibility score! 🎯