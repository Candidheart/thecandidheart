# Background Images Instructions

## 1. Hero Background Image

### Torn Paper Hero Background

To complete the hero background setup, you need to add your torn paper image:

1. **Save your torn paper image** as `torn-paper-hero.png` in the `frontend/public/` directory
2. **Image specifications:**
   - Format: PNG (preferred) or JPG
   - Dimensions: 1920x800px (or similar 16:9 ratio)
   - Content: Cream/tan torn paper effect with sky blue edges
   - File size: Optimize to under 500KB for web performance

## 2. Stationary Background Image

### Nature-Inspired Stationary Background

For the mid-section stationary background, add your nature-inspired image:

1. **Save your stationary image** as `stationary-background.png` in the `frontend/public/` directory
2. **Image specifications:**
   - Format: PNG (preferred) or JPG
   - Dimensions: 1920x1200px (or similar 16:10 ratio)
   - Content: Cream background with bee, honeycomb patterns, and sage sunflower
   - File size: Optimize to under 800KB for web performance

## 3. Footer Background Image

### Wildflower and Butterfly Footer

For the footer background, add your wildflower and butterfly illustration:

1. **Save your footer image** as `footer-wildflowers.png` in the `frontend/public/` directory
2. **Image specifications:**
   - Format: PNG (preferred) or JPG
   - Dimensions: 1920x800px (or similar 16:9 ratio)
   - Content: Soft blue-grey background with wildflowers along bottom and butterflies scattered above
   - File size: Optimize to under 600KB for web performance

## Current Implementation

- **Hero section**: Configured to use `/torn-paper-hero.png`
- **Introduction section**: Uses `/stationary-background.png` with StationaryBackground component
- **Footer section**: Uses `/footer-wildflowers.png` with wildflower and butterfly decorative elements

## Fallback Options

If images aren't available, the components will fall back to:
- **Hero**: Default gradient background
- **Stationary**: CSS-based decorative elements (bee, honeycomb, sunflower)
- **Footer**: SVG wildflowers and animated butterflies with soft blue-grey background

## CSS Alternatives

I've added CSS classes and SVG elements for decorative effects:
- `.torn-paper-bg` - Basic torn paper background
- `.hero-torn-paper` - Hero-specific torn paper effect
- `.decorative-heart` - Golden heart decoration
- **StationaryBackground component**: Includes SVG bee, honeycomb patterns, and sunflower
- **Footer component**: Includes animated SVG wildflowers and butterflies with floating animations

## Usage

The StationaryBackground component can be used across your site for:
- Testimonials sections
- Mission statements
- Service offerings
- Gentle calls to action
- Any section that needs a "resting place" feeling 