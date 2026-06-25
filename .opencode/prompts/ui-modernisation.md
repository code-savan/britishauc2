# UI Modernisation Prompt

Copy and paste into a new conversation with opencode. Works on any website regardless of existing theme.

---

/goal
Modernise the entire UI of this website. Improve layout, spacing, responsiveness, interactivity, component structure, and visual hierarchy. Do NOT change the existing brand colours, fonts, or theme — the site already has its own identity. Focus purely on structure, polish, and user experience.

/constraints
- Do NOT change brand colours, accent colours, or colour palettes
- Do NOT change fonts or typography families (sizes/spacing/weights are fine)
- Do NOT change logos, icons, or brand assets
- Keep all existing content, copy, and page structure intact
- All changes must be purely UI/UX improvements — layout, spacing, responsiveness, animations, component polish, visual hierarchy
- Work within the existing tech stack (React, Next.js, Tailwind CSS, etc.)
- Do NOT add new pages unless specifically requested
- All new components must match the existing code conventions of the project

/tasks

## 1. Load Skills
Run the skill setup for both UI UX Pro Max and Impeccable if available in the project's `.opencode/skills/` directory.

## 2. Research & Audit
- Read the project's `package.json` to understand the tech stack (Next.js, React version, Tailwind, Framer Motion, etc.)
- Read `tailwind.config.*` to understand existing design tokens
- Read `globals.css` or root CSS for custom utility classes
- Read the root layout file (`layout.tsx` or `layout.jsx`) to understand the app shell
- Read the homepage and 1-2 subpages to understand component patterns and code conventions
- Identify all pages/routes in the project

## 3. Global Styles Audit
- Check that spacing is consistent across sections (use consistent gap/padding values)
- Ensure responsive padding is applied everywhere (`py-16 md:py-20`, `px-6 section-container`, etc.)
- Verify all sections use proper responsive grid patterns (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- Check that `overflow-x-hidden` is on the root wrapper to prevent horizontal scroll
- Ensure smooth scroll behaviour is set (`scroll-smooth` on html or via CSS)
- Add/verify proper section spacing utilities (e.g., `section-spacing`, `section-container`, `section-title` classes)

## 4. Navigation Audit
- Desktop: horizontal nav bar with links, optional CTA buttons
- Mobile/tablet: hamburger → slide-in sheet from right (full width on mobile, 280-320px on tablet)
- Sheet must have: logo + brand text in header, all nav links, Contact and Apply Now as proper pill buttons
- Sheet must lock body scroll when open
- Overlay behind sheet must block all interaction (dark + blur backdrop)
- Nav bar should transition from transparent to solid on scroll
- All scroll-to-section buttons must close the mobile menu after scrolling

## 5. Hero Section
- Background: full-bleed image or video with dark gradient overlay
- Heading + subtitle + 1-2 CTA buttons
- Buttons should be pill-shaped, one primary (solid) and one secondary (outlined)
- Add scroll-down indicator at bottom (animated chevron)
- Ensure heading text does not overflow on mobile (use flex-wrap or responsive sizing)
- Section should be `min-h-[100dvh]` or `min-h-screen` for full-viewport impact

## 6. Section Patterns (apply to ALL sections)
Each content section (Programmes, Services, About, Contact, FAQ, CTA) should follow this pattern:
1. **Section spacing**: `section-spacing` or `py-20 md:py-28` or similar consistent value
2. **Section label**: small uppercase label at top of section (e.g., `section-label`)
3. **Section title**: large heading (e.g., `section-title`)
4. **Section subtitle**: smaller supporting text (e.g., `section-subtitle`)
5. **Content grid**: responsive grid with appropriate column counts per breakpoint
6. **Cards/panels**: use glass-panel or card wrapper components with consistent padding

## 7. Card/Component Patterns
- All cards should use a consistent glass/panel wrapper class (e.g., `glass-panel-premium`)
- Cards need: consistent padding (`p-6 md:p-8`), rounded corners, subtle border
- Image containers must maintain aspect ratio (`aspect-video` or `aspect-[4/3]`)
- Images should have hover zoom effect (`group-hover:scale-105 transition-transform`)
- Overlay gradients on images (dark gradient from bottom for text readability)
- Content inside cards: title, description, tags/chips, CTA link/button
- Tags/chips should use consistent styling (`px-3 py-1.5 bg-white/5 rounded-full text-xs`)

## 8. Animations & Interactivity
- Use `framer-motion` for scroll-triggered fade-in animations (`whileInView`)
- Consistent animation variants: fade up from `y: 24` with `duration: 0.5-0.6`
- Stagger children with `transition={{ delay: i * 0.08 }}`
- Hover effects on all interactive elements (cards, buttons, links)
- Accordion FAQ with animated open/close (AnimatePresence height animation)
- Image gallery/carousel with auto-rotation (if applicable)

## 9. Performance & Responsiveness
- Lazy load below-fold images (`loading="lazy"`)
- Use `sizes` attribute on all `next/image` instances
- Passive scroll listeners
- Defer non-critical content with a hydration pattern (e.g., `allowHeavy` state with setTimeout)
- Video background should use `poster` image and `preload="metadata"`
- Responsive text sizes: `text-5xl sm:text-6xl md:text-7xl lg:text-8xl`

## 10. Buttons & CTAs
- Consistent pill-button shapes (`rounded-pill` or `rounded-full`)
- Two variants: primary (filled accent) and secondary (outlined/subtle)
- Add arrow icon (`ArrowUpRight`) on primary CTAs
- Hover effect: slight scale-up (`hover:scale-[1.02]`)

## 11. FAQ Section
- Accordion pattern with Plus/Minus icon toggle
- Animate height transition with AnimatePresence
- Consistent border separators between items
- First item should have top border

## 12. Contact Section
- Grid layout for multiple office locations (2 columns on desktop)
- Embedded Google Maps iframe for each location
- Maps should have subtle desaturated styling on load, color on hover
- Contact detail cards below maps with address, phone, email
- Phone links should use `tel:` protocol, email `mailto:`

## 13. Footer
- Multi-column grid (2 cols mobile, 4 cols desktop)
- Brand column with description + contact details (phone, email)
- Link columns: Programmes, Company, Legal
- Address section at bottom (both physical addresses)
- All external links open in same tab or new tab as appropriate
- Hash links (`/#faq`, `/#contact`) for same-site navigation from subpages

## 14. Final Polish
- Verify no horizontal scroll at any breakpoint (320px to 1920px)
- Verify consistent spacing between all sections
- Check that all hover states, transitions, and animations work
- Ensure all links, buttons, and CTAs are functional
- Run the build command to confirm zero errors

/output
Summarise every file changed and what was modified in each. List any new components created and their purpose.
