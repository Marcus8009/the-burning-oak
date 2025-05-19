# The Burning Oak - Restaurant Website

This repository contains the complete codebase for The Burning Oak restaurant website. The website is built with HTML, CSS, and JavaScript to showcase the restaurant's Japanese-Western fusion cuisine with a warm, rustic, yet modern aesthetic that complements the "Burning Oak" theme.

## Project Structure

```
the-burning-oak/
├── index.html           # Homepage
├── menu.html            # Menu page
├── about.html           # About Us page
├── contact.html         # Contact page
├── css/
│   └── style.css        # Main stylesheet
├── js/
│   └── main.js          # JavaScript functionality
└── img/                 # Image directory (you'll need to add your own images)
    ├── hero-image.jpg
    ├── restaurant-interior.jpg
    ├── restaurant-exterior.jpg
    ├── dish1.jpg
    ├── dish2.jpg
    ├── dish3.jpg
    ├── chef1.jpg
    ├── chef2.jpg
    ├── chef3.jpg
    ├── chef4.jpg
    ├── values-image.jpg
    ├── cta-background.jpg
    ├── page-banner.jpg
    └── map.jpg
```

## Features

- **Responsive Design**: The website is fully responsive and works on all device sizes.
- **Modern Aesthetic**: The design uses a warm color palette with oak browns, charcoal grays, deep red accents, and subtle gold touches.
- **Interactive Elements**: 
  - Mobile navigation menu
  - Testimonial slider
  - Menu category tabs
  - FAQ accordion
  - Contact form validation
  - Scroll animations
- **Performance Optimized**: Minimized HTTP requests with efficient CSS and JavaScript.

## Pages

1. **Homepage**: Showcases the restaurant's identity, featured dishes, and testimonials.
2. **Menu**: Interactive menu with categories (Starters, Main Courses, Sides, Desserts, Drinks).
3. **About Us**: Tells the restaurant's story, introduces the team, and shares its philosophy.
4. **Contact**: Contact information, form, map, and FAQs.

## Usage

1. Clone or download this repository
2. Add your own images to the `img` directory (or replace with your actual restaurant photos)
3. Customize the content in the HTML files to match your restaurant's information
4. Modify the CSS variables in `style.css` if you want to change the color scheme or typography

## Customization Guide

### Changing Colors

You can modify the color scheme by editing the CSS variables at the top of `style.css`:

```css
:root {
    /* Color Variables */
    --color-oak-dark: #5D4037;    /* Deep oak brown */
    --color-oak: #8D6E63;         /* Medium oak brown */
    --color-oak-light: #A1887F;   /* Light oak brown */
    --color-charcoal: #37474F;    /* Dark charcoal/ash */
    --color-ash: #607D8B;         /* Medium gray/ash */
    --color-ash-light: #B0BEC5;   /* Light gray/ash */
    --color-ember: #BF360C;       /* Deep red/ember */
    --color-ember-light: #E64A19; /* Brighter ember/fire */
    --color-gold: #D4AF37;        /* Accent gold */
    /* ... */
}
```

### Changing Fonts

The website uses Google Fonts. To change the typography, modify the font imports in the HTML files and update the font variables in `style.css`:

```css
:root {
    /* ... */
    /* Typography */
    --font-primary: 'Cinzel', serif;           /* Display, headers */
    --font-secondary: 'Noto Sans JP', sans-serif; /* Japanese-inspired for accents */
    --font-body: 'Open Sans', sans-serif;      /* Body copy */
    /* ... */
}
```

### Adding New Pages

1. Copy the structure of an existing HTML file
2. Update the `<title>` tag and content
3. Make sure to update the navigation links in all files to include your new page

## Image Placeholders

The current code includes placeholders for images. You should replace these with actual photos of your restaurant, dishes, staff, etc. The recommended image sizes are:

- Hero Image: 1920x1080px
- Dish Images: 600x400px
- Team Photos: 600x800px
- Restaurant Interior/Exterior: 800x600px

## Browser Compatibility

This website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This code is available for your personal or commercial use. You are free to modify and adapt it to your needs.

---

For any questions or support, please contact [your contact information].