# Accessibility in HTML

## Introduction to Accessibility

### Web Content Accessibility Guidelines (WCAG)

* a set of guidelines for making web content more accessible to people with disabilities. 
* The four principles of WCAG are POUR - which stands for: 
	* Perceivable
	* Operable
	* Understandable
	* Robust.

### Assistive Technology for Accessibility

#### Screen readers

* Software programs
* read the content of a computer screen out loud
*  used by people who are blind or visually impaired to access the web.

#### Large text or braille keyboards

* Used by people with visual impairments to access the web

#### Screen magnifiers

* Software programs
* enlarge the content of a computer screen
* used by people with low vision to access the web.

#### Alternative pointing devices

* Used by people with mobility impairments to access the web
* This includes devices such as joysticks, trackballs, and touchpads.

####  Voice recognition

* Used by people with mobility impairments to access the web
* allows users to control a computer using their voice

### Accessibility Auditing Tools

#### Common Accessibility Tools

* Used to audit the accessibility of a website
* Examples:
	* Google Lighthouse
	* Wave
	* IBM Equal Accessibility Checker
	* axe DevTools

### Accessibility Best Practices

#### Proper heading level structure

* You should use proper heading levels to create a logical structure for your content
* BENEFIT: This helps assistive technologies understand the content of your website

#### Accessibility and Tables

* When using tables, you should use:
	* the `th` element to define header cells
	* the `td` element to define data cells. 
* VALUE: This helps assistive technologies understand the structure of the table.
#### Importance for inputs to have an associated label

* You should use the `label` element to associate labels with form inputs
* VALUE: This helps assistive technologies understand the purpose of the input.
#### Importance of good `alt` text

* You should use the `alt` attribute to provide a text alternative for images. 
* VALUE: This helps assistive technologies understand the content of the image.
####  Importance of good link text

* You should use descriptive link text to help users understand the purpose of the link
* VALUE: This helps assistive technologies understand the purpose of the link
####  Best practices for making audio and video content accessible

* You should provide captions and transcripts for audio and video content to make it accessible to people with hearing impairments.
* You should also provide audio descriptions for video content to make it accessible to people with visual impairments.
* VALUE: This makes it accessible to people with hearing / visual impairments

####  `tabindex` attribute

* * It is important to never use the `tabindex` attribute with a value greater than 0.
	* Instead, you should either use a value of 0 or -1.
* VALUE: Used to make elements focusable and define the relative order in which they should be navigated using the keyboard.
####  `accesskey` attribute

* Used to define a keyboard shortcut for an element. 
* VALUE: This can help users with mobility impairments navigate the website more easily.
