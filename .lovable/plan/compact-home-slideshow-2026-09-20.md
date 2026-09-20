# Compact home slideshow

## What will change

- Replace the oversized workbook display on the home page with a compact two-slide carousel.
- Keep the available workbook as the first slide, with a smaller cover, and status.
- Use the second slide for the next workbook's 20% planning progress without showing a placeholder cover.
- Add swipe support, previous/next controls, and slide indicators that work on mobile and desktop.
- Preserve the existing dark, gold-accented Tube Audiobooks style and leave the full Workbooks page unchanged.

## Technical details

- Build the carousel directly in the home route using React state and touch gestures.
- Keep the carousel height stable so switching slides does not shift the page.
- Use accessible labels, disabled navigation states where appropriate, and reduced-motion-friendly transitions.
- Verify both slides and navigation at mobile and desktop sizes.