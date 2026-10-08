# Changelog

## 2.0.0 — 2026-10-08

The template moves from Radix UI to [Base UI](https://base-ui.com) and every dependency is on its latest release. Both the Vite and the Next.js versions get the same changes.

### Changed

- **Base UI instead of Radix UI.** Every component in `components/ui` is regenerated from the shadcn/ui registry in the `base-nova` style. No `@radix-ui/*` packages are left, and `vaul` is gone too (the Drawer is Base UI's own).
- **Latest dependencies:** Next.js 16.4, React 19.3, Vite 8, TanStack Table 9, React Router 7.18, react-day-picker 10, react-resizable-panels 4, lucide-react 1.x, Recharts 3.10, Tailwind CSS 4.3, ESLint 10. TypeScript is pinned to 6.0, the newest version typescript-eslint supports.
- **Node.js 20.19+** is now required (Vite 8 and Next.js 16 both need it). The deploy workflow runs on Node 24 with pnpm 10.
- **Next.js:** `middleware.ts` is now `proxy.ts`, and `pnpm lint` runs the ESLint CLI (`next lint` was removed in Next.js 16).

### Fixed

- Both versions build again. The Vite build failed on Recharts 3 typings in `chart.tsx`, and both failed on the tasks toolbar.
- The `/login` and `/register` redirects pointed at routes that don't exist.
- Dialogs now get the width their code asks for. Radix's `sm:max-w-lg` default silently overrode unprefixed `max-w-*` classes, which made the event form overflow.
- The dashboard's tab tables were recreated, and their state remounted, on every render.

### Migrating a customized 1.x copy

If you changed the template's own code, these are the API differences you'll meet:

| Radix (1.x) | Base UI (2.0) |
| --- | --- |
| `<Trigger asChild><Button /></Trigger>` | `<Trigger render={<Button />}>…</Trigger>` |
| `<Button asChild><a href="…" /></Button>` | `<Button render={<a href="…" />} nativeButton={false}>…</Button>` |
| `<Accordion type="single" collapsible defaultValue="a">` | `<Accordion defaultValue={["a"]}>` (`multiple` for several open items) |
| `<ToggleGroup type="single" value={v}>` | `<ToggleGroup value={[v]} onValueChange={(next) => …next[0]}>` |
| `<Checkbox checked="indeterminate">` | `<Checkbox indeterminate>` |
| `<Select>` showing the item label | Pass `items` (`{ value: label }` or `[{ label, value }]`) to the root, or the trigger shows the raw value. `onValueChange` can receive `null`. |
| `<SelectContent position="popper">` | Remove it; use `alignItemWithTrigger={false}` if needed |
| `DropdownMenuLabel` anywhere | Wrap it in `DropdownMenuGroup` (Base UI throws otherwise) |
| `<TooltipProvider delayDuration={0}>` | `<TooltipProvider delay={0}>`; per-tooltip delays go on `TooltipTrigger` |
| `<HoverCard openDelay closeDelay>` | `delay` / `closeDelay` on `HoverCardTrigger` |
| `<SheetContent onInteractOutside>` | `onOpenChange={(open, details) => details.reason === "outside-press" && details.cancel()}` on `Sheet` |
| `data-[state=open]:` | `data-open:` (popups), `data-popup-open:` (menu triggers), `data-panel-open:` (accordion triggers) |
| `data-[state=active]:` / `data-[state=on]:` | `data-active:` (tabs) / `data-pressed:` (toggles) |
| `<Drawer direction="right">` | `<Drawer swipeDirection="right">` (`"down"` for a bottom sheet) |

Other library changes:

- **TanStack Table 9:** the tables share one feature set in `lib/data-table.ts` and use `useTable({ features, … })`. Column types take the features first: `ColumnDef<DataTableFeatures, Task>`.
- **react-resizable-panels 4:** `direction` is now `orientation`, and bare numbers are **pixels**, so use `"20%"` for percentages.
- **lucide-react 1.x** dropped brand icons. GitHub, Twitter, LinkedIn and the rest now live in `components/icons/brand-icons.tsx`.

## 1.0.0

Initial release.
