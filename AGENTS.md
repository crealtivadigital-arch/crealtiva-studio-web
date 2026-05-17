<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Crealtiva Studio — Project Rules

## Design System
**ALWAYS read `DESIGN_SYSTEM.md` before making any visual or UI changes.**
Every decision about typography, spacing, colors, buttons, animations, and layout patterns is documented there.
Do not guess design decisions — consult the document first.

## Key constraints
- Tailwind CSS v4: uses `@import "tailwindcss"` + `@theme` directive. No `tailwind.config.js`.
- Brand colors are defined as CSS tokens in `app/globals.css` under `@theme`.
- All photography comes from `crealtivastudio.com/wp-content/uploads/` (WordPress media library).
- The `next/image` component must be used for all images. No `<img>` tags.
- Buttons: use `components/ui/Button.tsx` only. Never inline button styles.
- Dark CTA sections (bg-ink): always use `variant="ghost-light"` for secondary buttons, never `variant="ghost"`.

## Pending design decisions (check DESIGN_SYSTEM.md section 11)
1. Buttons need `rounded-full` (pill shape) — not yet implemented
2. Google Reviews section — not yet implemented
3. Masonry portfolio grid — not yet implemented
