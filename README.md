# dido.dsgn - Portfolio Website

A clean, modern portfolio website for André Ostheimer (dido.dsgn).

## 📁 Structure

```
andre-portfolio/
├── index.html              # Home page with projects grid
├── experiments.html        # P5.js sketches & Instagram embeds
├── about.html             # About page
├── contact.html           # Contact page
├── projects/              # Project pages folder
│   └── project-template.html  # Template for individual projects
└── assets/
    ├── dido_white.png     # Logo (PLACE YOUR LOGO HERE)
    └── fonts/             # Commissioner font files
```

## 🎨 Features

- **Clean, minimalist design** with black background
- **Logo in header** (place your dido_white.png in assets folder)
- **Project detail pages** with enjoei-style layout
- **Responsive layout** that works on all devices
- **Sticky header** with smooth navigation
- **Mobile-friendly** hamburger menu
- **P5.js integration** for creative experiments
- **Instagram embeds** ready to use
- **Smooth transitions** and hover effects

## 🚀 Getting Started

### 1. Add Your Logo
Place your `dido_white.png` logo file in the `assets/` folder. The logo should be:
- White/light colored (for dark background)
- Square or horizontal format
- PNG with transparent background
- Recommended size: 28x28px or larger (will be scaled)

### 2. Create Your Projects
The project template (`projects/project-template.html`) follows the andreburnier.com/project/enjoei structure:

**To create a new project:**
1. Duplicate `project-template.html`
2. Rename it (e.g., `my-awesome-project.html`)
3. Update the project title and description
4. Add your images, videos, or embeds
5. Link to it from `index.html`

**Project page structure:**
- Small uppercase title at top
- Multi-paragraph description
- Full-width media items (images, videos, iframes)
- Related projects grid at bottom (4 columns)
   - Replace the placeholder images in `index.html`
   - Use GIFs or videos for more dynamic thumbnails
   - Recommended size: 800x500px (16:10 aspect ratio)

2. **Customize project information:**
   - Edit project titles and descriptions in `index.html`
   - Update project links to point to your case studies

3. **Add your photo:**
   - Replace the placeholder in `about.html` with your photo
   - Recommended size: 600x800px (3:4 aspect ratio)

4. **Update Instagram embeds:**
   - Go to an Instagram post you want to embed
   - Click the three dots menu → "Embed"
   - Copy the embed code
   - Replace the placeholder divs in `experiments.html`

## 🎭 Customizing P5.js Sketches

The experiments page includes 4 example p5.js sketches:

1. **Generative Particles** - Interactive particle system
2. **Geometric Patterns** - Rotating geometric shapes
3. **Wave Motion** - Perlin noise wave animation
4. **Color Field** - HSB color gradients

To add your own sketches:

```javascript
const mySketch = (p) => {
    p.setup = () => {
        let canvas = p.createCanvas(600, 600);
        canvas.parent('sketch-id'); // Match with HTML container id
    };
    
    p.draw = () => {
        // Your animation code here
    };
};

new p5(mySketch);
```

## 📝 Customization Guide

### Colors
All colors are defined in the CSS. Key colors:
- Background: `#000` (black)
- Text: `#fff` (white)
- Borders: `#333` (dark gray)
- Muted text: `#888` or `#aaa`

### Typography
The site uses the Commissioner font family:
- Regular (400) - Body text
- Medium (500) - Subheadings
- Bold (700) - Main headings

### Layout
- Max container width: 1400px
- Standard padding: 60px (desktop), 20px (mobile)
- Grid gap: 60-80px between items

### Responsive Breakpoints
- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px

## 📷 Adding Project Content

### Images
Place your images in an `assets/images/` folder and reference them:
```html
<img src="assets/images/project-name.jpg" alt="Project Name">
```

### Videos
For autoplay video thumbnails:
```html
<video autoplay loop muted playsinline>
    <source src="assets/videos/project-name.mp4" type="video/mp4">
</video>
```

### GIFs
For animated thumbnails (like andreburnier.com):
```html
<img src="assets/images/project-name.gif" alt="Project Name">
```

## 🔧 Technical Details

### Browser Compatibility
- Chrome/Edge: ✓
- Firefox: ✓
- Safari: ✓
- Mobile browsers: ✓

### Performance Tips
1. Optimize images (use WebP format when possible)
2. Keep GIFs under 1MB each
3. Use lazy loading for images below the fold
4. Minify CSS for production

### P5.js Best Practices
1. Always call `canvas.parent()` to place sketch in correct container
2. Use `windowResized()` to make sketches responsive
3. Limit particle counts for better performance
4. Use `noLoop()` and `loop()` for interactive control

## 📧 Contact Information

Update your contact information in all pages:
- Email: `hey@didodesign.com.br`
- Instagram: `@dido.dsgn`
- Behance: `andre_ostheimer`
- Location: São Paulo, Brasil

## 🎯 Next Steps

1. **Add your logo** - Create a simple logo SVG for the header
2. **Create project pages** - Build individual case study pages
3. **Add analytics** - Integrate Google Analytics or similar
4. **SEO optimization** - Add meta descriptions and OG tags
5. **Domain setup** - Connect to didodsgn.com.br
6. **Add more experiments** - Create more p5.js sketches or Processing work

## 💡 Tips

- Keep the design minimal and let your work speak
- Use high-quality images and videos
- Update regularly with new projects
- Test on multiple devices before publishing
- Consider adding a dark/light mode toggle in the future

## 🐛 Troubleshooting

**P5.js sketches not showing?**
- Check browser console for errors
- Verify canvas parent IDs match HTML container IDs
- Ensure p5.js CDN is loading correctly

**Mobile menu not working?**
- Check that JavaScript is enabled
- Verify all class names match between HTML and JS

**Fonts not loading?**
- Verify font file paths are correct
- Check that font files are in `/assets/fonts/` directory

---

Built with ❤️ for the creative community
