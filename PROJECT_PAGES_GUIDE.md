# Project Pages Guide

## Structure Overview

Your portfolio now has individual project pages following the andreburnier.com/project/enjoei layout.

```
projects/
└── project-template.html    # Template for all projects
```

## Creating a New Project Page

### Step 1: Duplicate the Template
1. Copy `projects/project-template.html`
2. Rename it to match your project (e.g., `motion-system.html`, `brand-identity.html`)

### Step 2: Update the Content

#### Project Title & Description
```html
<h5 class="project-title">YOUR PROJECT NAME</h5>
<div class="project-description">
    <p>First paragraph about your project...</p>
    <p>Second paragraph with more details...</p>
    <p>Third paragraph about the outcome...</p>
</div>
```

**Tips:**
- Keep title short and uppercase
- Use 2-4 paragraphs for description
- Explain: concept → process → result

#### Adding Media Items

**Images:**
```html
<div class="media-item">
    <img src="../assets/images/project-name/image-01.jpg" alt="Description">
</div>
```

**Videos:**
```html
<div class="media-item">
    <video autoplay loop muted playsinline>
        <source src="../assets/videos/project-name.mp4" type="video/mp4">
    </video>
</div>
```

**YouTube/Vimeo:**
```html
<div class="media-item">
    <iframe src="https://www.youtube.com/embed/VIDEO_ID" allowfullscreen></iframe>
</div>
```

**GIFs:**
```html
<div class="media-item">
    <img src="../assets/images/project-name/animation.gif" alt="Animation">
</div>
```

### Step 3: Link from Home Page

In `index.html`, update the project card:

```html
<a href="projects/your-project-name.html" class="project-card">
    <div class="project-thumbnail">
        <img src="assets/images/thumbnails/your-project.jpg" alt="Project Name">
    </div>
    <div class="project-info">
        <h3>Your Project Name</h3>
        <p>Project Category</p>
    </div>
</a>
```

## Project Page Sections

### 1. Hero Section
- Small uppercase title
- 2-4 paragraph description
- Max width: 900px
- Tells the story of your project

### 2. Media Gallery
- Full-width images/videos
- 60px spacing between items
- All media gets rounded corners (8px)
- Supports: JPG, PNG, GIF, MP4, YouTube, Vimeo

### 3. Related Projects
- Grid of 4 projects (square thumbnails)
- Appears at bottom of page
- Links to other project pages
- Helps visitors explore more work

## Recommended Asset Organization

```
assets/
├── dido_white.png           # Your logo
├── fonts/                   # Commissioner fonts
├── images/
│   ├── thumbnails/          # For home page grid
│   │   ├── project-01.jpg
│   │   ├── project-02.gif
│   │   └── project-03.jpg
│   └── projects/            # For individual project pages
│       ├── project-01/
│       │   ├── hero.jpg
│       │   ├── detail-01.jpg
│       │   ├── detail-02.jpg
│       │   └── animation.gif
│       └── project-02/
│           ├── hero.jpg
│           └── video.mp4
└── videos/
    ├── project-01-demo.mp4
    └── project-02-process.mp4
```

## Image Specifications

### Home Page Thumbnails
- **Dimensions:** 800 x 500px (16:10 ratio)
- **Format:** JPG or GIF
- **File size:** Under 500KB
- **Usage:** Project grid on index.html

### Project Page Images
- **Dimensions:** 1400px+ width (full container width)
- **Format:** JPG or PNG
- **File size:** Under 2MB each
- **Usage:** Main project content

### Related Project Thumbnails
- **Dimensions:** 400 x 400px (square)
- **Format:** JPG or GIF
- **File size:** Under 300KB
- **Usage:** Bottom of project pages

## Video Specifications

### Autoplay Videos
```html
<video autoplay loop muted playsinline>
    <source src="path/to/video.mp4" type="video/mp4">
</video>
```
- **Format:** MP4 (H.264 codec)
- **Resolution:** 1920x1080 or 1280x720
- **File size:** Keep under 10MB
- **Duration:** 5-30 seconds recommended

### YouTube/Vimeo Embeds
- Use standard embed codes
- Automatically responsive (16:9)
- Good for longer videos (demos, case studies)

## Styling Tips

### Consistent Look
- All media has 8px border radius
- 60px spacing between media items
- White text on black background
- Clean, minimal aesthetic

### Text Formatting
- **Project title:** 14px, uppercase, light gray
- **Description:** 18px, line height 1.8
- **Max width:** 900px for readability

### Hover Effects
- Thumbnails scale 1.05x on hover
- Smooth 0.4s transition
- Maintains image quality

## Example Projects to Create

1. **Interactive Motion System**
   - Showcase generative design work
   - Include videos of interactions
   - Explain the technical approach

2. **Brand Identity**
   - Show logo variations
   - Color palette examples
   - Typography specimens
   - Application mockups

3. **Real-Time Visuals**
   - Live performance footage
   - Behind-the-scenes process
   - Technical diagrams

4. **Creative Coding**
   - Code snippets (as images)
   - Interactive demos (videos)
   - Different variations

## SEO & Meta Tags

Add to each project page `<head>`:

```html
<meta name="description" content="Brief project description for search engines">
<meta property="og:title" content="Project Name - dido.dsgn">
<meta property="og:description" content="Project description">
<meta property="og:image" content="assets/images/projects/project-name/hero.jpg">
<meta property="og:url" content="https://didodsgn.com.br/projects/project-name.html">
<meta name="twitter:card" content="summary_large_image">
```

## Performance Tips

1. **Optimize images before upload**
   - Use tools like TinyPNG or Squoosh
   - Target 70-80% quality for JPGs
   - Convert large PNGs to JPG if possible

2. **Lazy load images below fold**
   ```html
   <img loading="lazy" src="image.jpg" alt="Description">
   ```

3. **Use appropriate formats**
   - JPG for photos
   - PNG for graphics with transparency
   - GIF for short animations
   - MP4 for longer videos

4. **Compress videos**
   - Use HandBrake or similar
   - H.264 codec
   - 720p or 1080p max

## Troubleshooting

**Images not showing?**
- Check file paths are correct
- Verify images are in assets folder
- Check file extensions match (case-sensitive on some servers)

**Videos not playing?**
- Ensure MP4 format with H.264 codec
- Check file size (under 10MB recommended)
- Test on multiple browsers

**Related projects not linking?**
- Update href attributes to point to correct project pages
- Use relative paths: `project-name.html`

**Layout broken on mobile?**
- CSS is responsive by default
- Test on actual devices or browser dev tools
- Check for any custom CSS you added

---

Need help? Check the main README.md or reference the andreburnier.com projects for inspiration!
