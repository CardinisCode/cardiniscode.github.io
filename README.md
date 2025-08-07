# Andrea Folgado - Portfolio Website

This is my personal portfolio website built with Jekyll and hosted on GitHub Pages. The site showcases my projects, skills, and professional experience.

## 🚀 Features

- **Responsive Design**: Built with Bootstrap for mobile-first design
- **Portfolio Showcase**: Clean project cards with detailed descriptions
- **Skills Section**: Highlighting design, UX, software engineering, and problem-solving skills
- **Contact Form**: Easy way for visitors to get in touch
- **Blog Section**: Share thoughts on technology and development
- **Social Media Integration**: Links to GitHub, LinkedIn, and other profiles

## 📁 Project Structure

```
cardiniscode.github.io/
├── _config.yml              # Site configuration
├── _includes/               # Reusable HTML components
│   ├── about.html          # About section
│   ├── contact.html        # Contact form and social links
│   ├── header.html         # Navigation and hero section
│   ├── portfolio_grid.html # Portfolio projects display
│   ├── skills.html         # Skills and expertise
│   └── ...
├── _layouts/               # Page templates
│   └── default.html        # Main layout template
├── _posts/                 # Blog posts and portfolio items
│   ├── 2021-06-07-jobhuntmanager.markdown
│   └── 2024-01-15-gas-safety-assessment.markdown
├── img/                    # Images and assets
│   └── portfolio/          # Project thumbnails
├── css/                    # Stylesheets
├── js/                     # JavaScript files
└── index.html              # Homepage
```

## 🛠️ How to Update Content

### Adding New Portfolio Projects

1. Create a new markdown file in `_posts/` with the format: `YYYY-MM-DD-project-name.markdown`
2. Use this template:

```markdown
---
title: Project Name
subtitle: Brief description
layout: default
modal-id: [next-number]
date: YYYY-MM-DD
img: project-image.jpg
thumbnail: project-thumbnail.jpg
alt: Alt text for image
project-date: Month Year
client: Client or Organization
category: Web Development
description: Detailed project description
github-link: "https://github.com/username/repo"
demo-link: "https://demo-url.com" (optional)
demo-video: "https://youtu.be/video-id" (optional)
closing-message: "Check out this project on: "
---
```

3. Add project images to `img/portfolio/`
4. The project will automatically appear in the portfolio grid

### Adding Blog Posts

1. Create a new markdown file in `_posts/` with the format: `YYYY-MM-DD-post-title.markdown`
2. Use this template:

```markdown
---
layout: default
title: "Your Post Title"
date: YYYY-MM-DD
---

Your blog content here in Markdown format.

## Subheadings

More content...

- Bullet points
- Lists
- Code examples
```

### Updating Personal Information

- **About section**: Edit `_includes/about.html`
- **Skills**: Edit `_includes/skills.html`
- **Contact info**: Edit `_includes/contact.html`
- **Site title/description**: Edit `_config.yml`

### Adding New Sections

1. Create a new HTML file in `_includes/` (e.g., `_includes/new-section.html`)
2. Add the include to `_layouts/default.html`
3. Add navigation link in `_includes/header.html`

## 🎨 Customization

### Colors and Styling
- Main styles are in `styles.css`
- Bootstrap theme: Flatly (from Bootswatch)
- Custom fonts: Montserrat, Kaushan Script, Lato, Droid Serif, Roboto Slab

### Icons
- Font Awesome icons are used throughout
- Icons can be changed by updating the `fa-*` classes

## 📝 Blog Management

### Writing New Posts
1. Create markdown files in `_posts/`
2. Use standard Markdown syntax
3. Posts automatically appear on `/blog.html`

### Post Categories
- Use the `category` field in post front matter
- Categories can be used for filtering (if implemented)

## 🚀 Deployment

This site is automatically deployed via GitHub Pages:

1. Push changes to the `main` branch
2. GitHub Pages will automatically rebuild and deploy
3. Site is available at `https://cardiniscode.github.io`

### Local Development

To run the site locally:

```bash
# Install Jekyll (if not already installed)
gem install jekyll bundler

# Install dependencies
bundle install

# Start local server
bundle exec jekyll serve --host 0.0.0.0 --port 4000

# Visit http://localhost:4000
```

## 📱 Responsive Design

The site is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## ♿ Accessibility

The site includes:
- Semantic HTML structure
- Alt text for images
- Proper heading hierarchy
- Keyboard navigation support
- Screen reader compatibility

## 🔧 Maintenance

### Regular Updates
- Keep project portfolio current
- Update skills as you learn new technologies
- Add new blog posts regularly
- Update contact information as needed

### Performance
- Optimize images before uploading
- Keep dependencies updated
- Monitor site performance

## 📞 Support

For questions about this site or collaboration opportunities, contact:
- Email: ac.folgado@gmail.com
- GitHub: [@CardinisCode](https://github.com/CardinisCode)
- LinkedIn: [@acfolgado](https://linkedin.com/in/acfolgado)

---

*Built with ❤️ using Jekyll, Bootstrap, and GitHub Pages*
