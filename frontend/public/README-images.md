# Background Images for The Candid Heart

This document describes the background images needed for the website and their specifications.

## Required Images

### 1. Torn Paper Hero Background
- **File**: `torn-paper-hero.png`
- **Location**: `frontend/public/`
- **Description**: A softly torn paper effect stretches horizontally across the screen, evoking the feeling of a handwritten letter or a tender page from a journal. The center is a warm, textured cream—an open canvas for your message—surrounded by muted sky blue edges above and below, like the horizon holding space for hope. In the lower right corner, a delicate golden heart sketch loops softly, offering a quiet signature of love and authenticity.
- **Recommended Dimensions**: 1920x1080px or larger
- **Format**: PNG with transparency
- **File Size**: Under 500KB for web performance

### 2. Stationary Background (Mid-Section)
- **File**: `stationary-background.png`
- **Location**: `frontend/public/`
- **Description**: Set against a soft, cream-toned background, this design weaves together the soul of The Candid Heart—nature-inspired, delicate, and intentional. A fine line-drawing of a bee dances in from the top left corner, suggesting movement, curiosity, and gentle productivity. Light honeycomb patterns float throughout the center, semi-transparent and softly geometric, representing both structure and community. Anchoring the bottom right is a hand-drawn sunflower in muted sage tones, its petals bowing in quiet elegance—a symbol of resilience, warmth, and growth.
- **Recommended Dimensions**: 1920x1080px or larger
- **Format**: PNG with transparency
- **File Size**: Under 500KB for web performance

### 3. Footer Wildflowers Background
- **File**: `footer-wildflowers.png`
- **Location**: `frontend/public/`
- **Description**: Set against a soft, powdery blue backdrop, delicate hand-drawn wildflowers rise gently from the bottom, their stems swaying in quiet unity. Scattered among them are soft watercolor butterflies—blues, pinks, and neutrals—bringing a sense of movement, lightness, and possibility. The overall aesthetic feels like a soft exhale at the end of a heartfelt conversation.
- **Recommended Dimensions**: 1920x600px or larger
- **Format**: PNG with transparency
- **File Size**: Under 300KB for web performance

### 4. Healing Sanctuary Background
- **File**: `healing-sanctuary-background.png`
- **Location**: `frontend/public/`
- **Description**: A tall, vertically oriented background design with a soft, nature-inspired theme, predominantly in muted cream, light grey, and pale blue tones. The image is divided into three main visual sections: a bright white top with a delicate bee and honeycomb patterns, a soft cream middle section with scattered honeycomb clusters and bowed sunflowers, and a pale blue bottom section with delicate wildflowers and subtle butterflies. The overall aesthetic is gentle, airy, and natural, perfect for a healing sanctuary feel.
- **Recommended Dimensions**: 1920x3000px or larger (tall vertical format)
- **Format**: PNG with transparency
- **File Size**: Under 800KB for web performance

## Installation Instructions

1. Place all PNG files in the `frontend/public/` directory
2. Ensure file names match exactly (case-sensitive)
3. Optimize images for web performance
4. Test that images display correctly in the browser

## Fallback Options

If any of these images are not available, the site will gracefully fall back to:
- Solid color backgrounds
- CSS gradients
- SVG decorative elements

## Performance Notes

- All images should be optimized for web delivery
- Consider using WebP format for modern browsers (with PNG fallbacks)
- Implement lazy loading for better performance
- Monitor Core Web Vitals scores after implementation 