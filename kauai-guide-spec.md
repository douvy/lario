# Kauai Trip Guide — Technical Spec

## For: Claude Code implementation → Vite + React → deploy to Vercel as a PWA

---

## 1. THE PRODUCT

A mobile-first, restaurant-heavy curated trip companion for a group staying at the **Royal Sonesta Kauaʻi Resort Lihue** (Kalapaki Beach, Lihue). The primary use case is pulling up your phone 2-3x/day and answering: **"where should we eat?"** Secondary use case: **"what should we do today?"**

All data is baked into the app. **No API calls.** Cell service is unreliable on large parts of the island (especially North Shore past Hanalei). Everything must work offline once the page loads.

---

## 2. INFORMATION ARCHITECTURE

### Two tabs:
1. **"Where to Eat"** (default, ~80% of usage)
2. **"Things to Do"** (~20%)

### Within each tab, content is organized into distance tiers (scroll sections, NOT nested navigation):

| Tier | Label | Drive from hotel | Emoji/Icon |
|------|-------|-----------------|------------|
| 1 | **Right Here** | 0-10 min | 📍 |
| 2 | **Quick Drive** | 10-25 min | 🚗 |
| 3 | **South Shore** | 20-30 min (Poipu/Koloa) | 🏖️ |
| 4 | **North Shore** | 30-50 min (Kilauea → Hanalei) | 🌿 |
| 5 | **West Side** | 45-60 min (Waimea) | 🏜️ |

Each tier is a labeled scroll section. "Right Here" is at the top because it's the most common need.

**Design rationale for tier naming:** The first two tiers use effort-based labels ("Right Here," "Quick Drive") because that's what matters when you're hungry and deciding how far to go. The last three shift to geographic names because once you're driving 20+ minutes, you're making a destination decision — "are we going to the South Shore or the North Shore today?" This is intentional and matches how people actually talk about Kauai. Do not "normalize" the naming.

**⚠️ Kapaʻa traffic note:** The drive times for the "Quick Drive" tier assume normal traffic. The stretch of Kuhio Hwy through Kapaʻa is a notorious single-lane bottleneck. During peak hours (roughly 7-9am southbound, 3-6pm northbound), add 15-30 min. The app should include a small note on the Quick Drive tier header: "Traffic through Kapaʻa can add 15-30 min at rush hour."

### "Things to Do" tab structure:
Activities appear within the same distance tier system as food. Currently there are only 3 activities, so tiers with no activities simply don't render in this tab. As more get added, they'll slot into the correct tier naturally.

---

## 3. CARD DESIGN

Each spot is a **compact card** that expands on tap.

### Collapsed state:
- Category icon (see below)
- Spot name
- One-line teaser (a short description or tip)
- Drive time badge (e.g., "~15 min")

### Expanded state (on tap):
- Full notes/tips (this is the gold)
- Cuisine type or activity type
- Address
- Hours (if known)
- **"Navigate" button** — fires a `geo:` URI or Google Maps deep link:
  ```
  https://www.google.com/maps/dir/?api=1&destination={lat},{lng}
  ```
  This hands off to native maps gracefully (works even with spotty signal if Google Maps has cached the area).
- **"Visited" checkbox** — persists via `window.storage` API

### Visited card visual treatment:
When a card is marked "Visited," the collapsed state should show a subtle visual change: reduce opacity to ~0.6, add a small ✓ badge next to the name, and shift the card background to a slightly warm gray (e.g., `#f0ede8`). The card should NOT be hidden or removed — you want to see what you've already hit. Expanded state stays full opacity so you can still read the notes.

### Category icons (use emoji, keep it simple):
- 🐟 Seafood/Poke
- 🌮 Tacos/Mexican
- 🌭 Hot Dogs
- 🍩 Sweets/Desserts
- 🥤 Drinks/Juice/Smoothies
- 🍽️ Full Restaurant
- 🚐 Food Truck
- 🥗 Health Food
- 🍧 Shave Ice
- 🥾 Hike
- 🏖️ Beach/Activity
- 🚂 Attraction
- 🍳 Breakfast spot

---

## 4. SVG MAP

A simple, hand-drawn-style SVG outline of Kauai at the top of the page. NOT Google Maps. Just a vector outline with:

- The hotel location marked with a ⭐ or 📍 pin (Lihue/Kalapaki, east side)
- Color-coded region zones that match the distance tiers
- Tapping a region scrolls to that section

**Complexity constraint:** This should be a simple polygon outline — think ~30-50 path points max, smooth curves, not a geographically precise coastline. The vibe is "illustrated map you'd see on a hotel brochure," not a cartographic dataset. If it looks like it was traced from a satellite image, it's too detailed. A few labeled landmarks (Waimea Canyon, Hanalei Bay, Poipu, Lihue) are fine. Keep the SVG under 5KB.

---

## 5. DESIGN DIRECTION

**Aesthetic: "Luxury surf shack"** — warm, relaxed, slightly upscale. Think a nice boutique hotel's printed guide, not a tech dashboard.

- **Color palette**: Warm sand/cream background (`#FAF6F1`), deep ocean teal (`#1A6B6A`) for accents, coral/sunset orange (`#E8734A`) for CTAs, soft greens (`#5B8C5A`) for the North Shore tier
- **Typography**: Use a distinctive display font (something warm/organic like a nice serif or slab — load from Google Fonts) for headings. Clean sans-serif for body.
- **Cards**: Subtle rounded corners, light shadow, cream/white background. No harsh borders.
- **Spacing**: Generous. This is vacation mode. Don't cram.
- **Touch targets**: Big. Min 44px. People are squinting in the sun.
- **Dark mode**: Not needed. This is a daytime, outdoor app.

---

## 6. PERSISTENT STATE

Use `localStorage` — simple, synchronous, works offline, persists across sessions:

```javascript
// On mount — load visited state
const visited = JSON.parse(localStorage.getItem('kauai-visited') || '{}');

// When toggling a spot's visited state
visited[spotId] = !visited[spotId];
localStorage.setItem('kauai-visited', JSON.stringify(visited));
```

That's it. Single key, JSON object of `{ spotId: true }`. Loads on mount, updates on toggle. `localStorage.getItem` returns `null` for missing keys, which the `|| '{}'` fallback handles cleanly.

---

## 7. SPECIAL NOTES & WARNINGS

Include these as a small info banner or section:

- **⚠️ Holey Grail Donuts Hanalei location may be CLOSED** — the Yelp listing shows "CLOSED." The Kapaʻa food truck location (4-1543 Kuhio Hwy) appears to still be open. Flag this in the app so they check before driving 45 min to Hanalei for donuts.
- **⚠️ Trucking Delicious is now "Wake Up Delicious"** — same chef, moved to a brick-and-mortar cafe at 5-5144 Kuhio Hwy, Hanalei.
- **🚌 Hāʻena State Park requires the shuttle** — Booked via Waipā Park & Ride (NOT Princeville). Shuttle is roundtrip, $40/person 16+. Last pickup at park is 5:40pm. Park open 7am-6:45pm. More info: gohaena.com
- **📱 Cell service is bad** past Hanalei going north, and spotty in parts of the West Side. Plan ahead before heading to those areas.

---

## 8. COMPLETE SPOT DATA

Below is every spot with all known information. Use this as the JSON data constant in the app.

### FOOD — RIGHT HERE (0-10 min from hotel)

**1. Konohiki Seafoods**
- Type: 🐟 Seafood/Poke
- Address: 3-4301 Kuhio Hwy Ste 102, Lihue, HI 96766
- Coords: 21.9778, -159.3617
- Drive: ~5 min
- Hours: Mon-Sat 6:30am-5pm, Closed Sun
- Notes: Incredible poke — maybe 20 varieties. Also fried chicken, sushi, desserts. TAKEOUT ONLY. Go early, popular stuff sells out by afternoon. Close to airport — great first or last stop.
- Source: Heather's list

**2. Smiley's Local Grinds**
- Type: 🍽️ Hawaiian Plate Lunch
- Address: 4100 Rice St, Lihue, HI 96766
- Coords: 21.9748, -159.3649
- Drive: ~3 min
- Hours: Mon-Sat 11am-8pm
- Notes: A window in a strip mall parking lot. No seating. But possibly the best plate lunch on the island. Get the Smiley's chicken (top-tier fried chicken) and the hamburger steak. Call ahead to avoid the wait. Take your food to Nawiliwili park by the beach.
- Source: Heather's list

**3. The Musubi Truck (Kalapaki)**
- Type: 🚐 Food Truck
- Address: Kalapaki, Lihue (near hotel)
- Coords: 21.9650, -159.3550
- Drive: ~3 min (walkable from hotel)
- Notes: Elevated spam musubi — the OG, plus poke bowls and truffle tots. Multiple locations on island (also Kapaa and Koloa). Cheap, quick, perfect beach food. $3 musubi is a steal.
- Source: Heather's list

**4. Garden Island Barbecue**
- Type: 🍽️ Chinese/BBQ
- Address: 4252 Rice St, Lihue, HI 96766
- Coords: 21.9753, -159.3660
- Drive: ~5 min
- Notes: Local Chinese/Hawaiian BBQ joint. Good for a casual, affordable meal without leaving Lihue.
- Source: Heather's list (listed as "Island Garden Barbecue")

### FOOD — QUICK DRIVE (10-25 min, East Side / Kapaa corridor)

**5. Pono Market**
- Type: 🐟 Poke / Plate Lunch
- Address: 4-1300 Kuhio Hwy, Kapaa, HI 96746
- Coords: 22.0755, -159.3190
- Drive: ~15 min
- Notes: Local institution for poke and plate lunch. Very popular with locals. Fresh daily poke selection.
- Source: Heather's list

**6. Tiki Tacos (Kapaa)**
- Type: 🌮 Tacos
- Address: 4-971 Kuhio Hwy, Kapaa, HI 96746
- Coords: 22.0834, -159.3278
- Drive: ~15 min
- Hours: Daily 10am-7pm (Sat til 3pm)
- Notes: Handmade tortillas, huge tacos, fresh fish. The fish taco is legendary. Kalua pig taco is also incredible. Small indoor/outdoor seating. Multiple sauces — try them all. Two locations (also Waimea).
- Source: Heather's list

**7. Fish Bar Deli (Kapaa)**
- Type: 🐟 Seafood Deli / Bar
- Address: 4-1380 Kuhio Hwy, Kapaʻa, HI 96746
- Coords: 22.0760, -159.3195
- Drive: ~15 min
- Hours: Wed-Sun 12-9pm, Closed Mon/Tue. Happy hour 5-6pm daily.
- Notes: Farm-to-table seafood bar + deli + market in Old Kapaʻa Town. Fresh-catch sandwiches, poke, ceviche, great craft cocktails. Can be a 20-25 min wait at dinner — worth it. Also has a small market with local goods and artisanal snacks.
- Source: Heather's list

**8. Lava Lava Beach Club**
- Type: 🍽️ Full Restaurant (Breakfast + Dinner)
- Address: 420 Papaloa Rd, Kapaa, HI 96746
- Coords: 22.0548, -159.3270
- Drive: ~15 min
- Hours: Breakfast 7:30-10:30am, Dinner 5-9pm. Closed midday.
- Notes: TOES IN THE SAND dining — literally on the beach. Live music every night 3-9pm. Only does breakfast and dinner (closed for lunch). Reservations smart for dinner. The vibe alone is worth it even if the food is just "good." Great for a sunset dinner.
- Source: Heather's list

**9. Holey Grail Donuts (Kapaa)**
- Type: 🍩 Donuts
- Address: 4-1543 Kuhio Hwy, Kapaa, HI 96746
- Coords: 22.0880, -159.3370
- Drive: ~15 min
- Notes: ⚠️ The Hanalei location may be CLOSED — this Kapaʻa truck is the safe bet. Taro-based donuts made to order. Unique, not-too-sweet, kind of life-changing. Try the original glazed. Can have a line but it moves fast.
- Source: Heather's list

**10. Wailua Drive In**
- Type: 🍽️ Hawaiian Comfort Food
- Address: 4-733 Kuhio Hwy Ste 103, Kapaʻa, HI 96746
- Coords: 22.0570, -159.3405
- Drive: ~12 min
- Hours: Mon/Thu-Sun 10am-8pm (hours may vary, closed some midweek days)
- Notes: Local comfort food — ahi katsu, chili pepper chicken, loco moco, plate lunches. Counter service, casual dine-in or takeout. Great portions, very affordable. Good stop on the way to/from Kapaa.
- Source: Heather's list

**11. Kalalea Juice Hale**
- Type: 🥤 Juice / Açaí Bowls
- Address: 4390 Puʻu Hale Loop, Anahola, HI 96703
- Coords: 22.1420, -159.3100
- Drive: ~20 min
- Hours: Closed Tue & Sat
- Notes: The BEST açaí bowls on the island — everyone says this. Also fresh juices and smoothies. Small roadside spot, easy to miss. Worth the drive. Check the day — closed Tuesdays and Saturdays.
- Source: Heather's list

### FOOD — SOUTH SHORE (20-30 min, Poipu / Koloa)

**12. Da Crack Mexican Grinds**
- Type: 🌮 Mexican (Takeout)
- Address: 2827 Poipu Rd, Koloa, HI 96756
- Coords: 21.8830, -159.4440
- Drive: ~25 min
- Hours: Mon-Sat 11am-8pm, Sun 11am-4pm
- Notes: Hole-in-the-wall Mexican takeout window. Massive portions, fresh fish tacos with wasabi cream, everything made from scratch. Brown rice, no MSG. Can order online to skip the line. Take your burrito to Poipu Beach for a picnic.
- Source: Heather's list

**13. Puka Dogs**
- Type: 🌭 Hot Dogs
- Address: 2100 Hoone Rd, Koloa, HI 96756 (Poipu Shopping Village)
- Coords: 21.8760, -159.4270
- Drive: ~25 min
- Hours: Daily 10am-7:30pm
- Notes: Hawaiian-style hot dogs — the bun is toasted with a hole poked through it, filled with tropical relish and garlic lemon sauce. A Poipu institution. Fun, unique, casual. Expect a line but it moves fast. Grab your dog and walk across the street to the beach.
- Source: Heather's list

**14. Keoki's Paradise**
- Type: 🍽️ Full Restaurant
- Address: Poipu Shopping Village, 2360 Kiahuna Plantation Dr, Koloa
- Coords: 21.8810, -159.4440
- Drive: ~25 min
- Notes: Full-service restaurant in Poipu. Tiki-bar vibes, outdoor seating, seafood and steaks. Good for a nicer dinner out on the South Shore.
- Source: Heather's list

**15. Beach House Restaurant**
- Type: 🍽️ Fine Dining
- Address: 5022 Lawai Rd, Koloa, HI 96756
- Coords: 21.8750, -159.4630
- Drive: ~25 min
- Notes: THE fancy dinner spot. Right on the ocean, incredible sunset views. Upscale Pacific Rim cuisine. **Make a reservation.** This is the splurge meal.
- Source: Heather's list

**16. Fresh Shave**
- Type: 🍧 Shave Ice
- Address: 5356 Koloa Rd, Ste C, Koloa, HI 96756
- Coords: 21.9070, -159.4710
- Drive: ~25 min
- Hours: Mon-Sat 11am-6pm (may vary)
- Notes: Handcrafted shave ice with all-natural syrups — no corn syrup, no artificial colors. Fresh fruit toppings, chia seed cream. The "Handlebar" (pineapple + coconut) is a go-to. Located in Old Koloa Town — cute shops nearby to browse while you eat.
- Source: Heather's list

### FOOD — NORTH SHORE (30-50 min)

**17. Kilauea Fish Market**
- Type: 🐟 Seafood
- Address: 4270 Kilauea Rd, Ste C, Kilauea, HI 96754
- Coords: 22.2090, -159.4010
- Drive: ~35 min
- Hours: Mon-Sat 11am-8pm, Closed Sun
- Notes: The ahi wrap is legendary — possibly the most recommended single menu item on Kauai. Fresh fish plates, poke, tacos. Outdoor picnic table seating. BYOB (grab a beer from the shop next door). Order at counter, get a pager. Can be a 10-15 min wait at peak times. Great stop between Lihue and the North Shore.
- Source: Heather's list

**18. Hanalei Poke**
- Type: 🐟 Poke
- Address: Ching Young Village, Hanalei, HI 96714
- Coords: 22.2030, -159.5030
- Drive: ~45 min
- Notes: Little poke restaurant with a big line. All fish is Hawaiian and locally caught. Prices vary by market (can get pricey). If you're doing one poke spot on the North Shore, this is it.
- Source: Heather's list

**19. Nourish Hanalei**
- Type: 🥗 Health Food / Farm Stand
- Address: 5225 Hanalei Plantation Rd, Hanalei, HI 96722
- Coords: 22.2170, -159.4870
- Drive: ~40 min (technically near Princeville — turn right on Hanalei Plantation Rd past Princeville Shopping Center, drive to the end)
- Hours: Mon-Sat 8am-3pm (breakfast 8-10:45am, lunch 11am-3pm). Closed Sun.
- Notes: Family-run farm stand overlooking Hanalei Valley — the view alone is worth the stop. Açaí bowls, salads, smoothies, bowls. All locally sourced, vegan/GF options throughout the menu. Casual outdoor seating under mango trees. Can sell out of items later in the day — go earlier.
- Source: Heather's list

**20. Trucking Delicious / Wake Up Delicious**
- Type: 🍳 Cafe (was food truck)
- Address: 5-5144 Kuhio Hwy, Hanalei, HI 96714
- Coords: 22.2035, -159.5050
- Drive: ~45 min
- Notes: ⚠️ NAME CHANGED — now called "Wake Up Delicious." Same chef Chloe. Was a food truck, now a brick-and-mortar cafe. Garlic shrimp, kalua pork burritos, plate lunches, espresso. Great for breakfast/brunch on the North Shore. Between Kalypso and Tahiti Nui in Hanalei.
- Source: Heather's list

### FOOD — WEST SIDE (45-60 min, Waimea)

**21. Island Taco**
- Type: 🌮 Tacos
- Address: 9643 Kaumualii Hwy, Waimea, HI 96796
- Coords: 21.9540, -159.6670
- Drive: ~50 min
- Hours: Daily 10am-4pm
- Notes: The wasabi ahi tuna tacos are a religious experience. Homemade tortillas, huge portions. Located right before the turn to go up into Waimea Canyon — perfect stop on a canyon day trip. Also has kalua pork, mahi mahi, shrimp, and tofu options.
- Source: Heather's list

**22. Mama Bear's Kitchen**
- Type: 🚐 Food Truck
- Address: 9935 Kaumualii Hwy, Waimea, HI 96796
- Coords: 21.9560, -159.6680
- Drive: ~50 min
- Hours: Mon-Fri 7am-2pm (or sold out). Closed Sat/Sun.
- Notes: Beloved Waimea food truck. Smash burgers, breakfast burritos (the "Bear-rito"), Monte Bear Cristo, plate lunches. Fresh fish from local fishermen, veggies from local growers. Excellent breakfast stop before Waimea Canyon. Can sell out — go early.
- Source: Heather's list

**23. Coconut Corner**
- Type: 🥤 Smoothies / Thai / Fruit
- Address: 9640 Kaumualii Hwy, Waimea, HI 96796
- Coords: 21.9540, -159.6665
- Drive: ~50 min
- Hours: Daily ~9am-4pm
- Notes: Roadside fruit stand + Thai food. Fresh coconuts, smoothies (pick up to 3 fruits), mango sticky rice. Great stop before/after Waimea Canyon. Right next to Island Taco and Shrimp Station.
- Source: Heather's list

### ACTIVITIES / THINGS TO DO

**24. Sleeping Giant Hike (Nounou Mountain)**
- Type: 🥾 Hike
- Tier: Quick Drive
- Address: Wailua/Kapaa area
- Coords: 22.0630, -159.3540
- Drive: ~15 min
- Notes: Three trail options of varying difficulty. The east trail is most popular (moderate, ~4 miles RT). Ridge trail is shorter but steeper. Great views of the coast from the top. Bring water.
- Source: Heather's list

**25. Kauai Plantation Railway**
- Type: 🚂 Attraction
- Tier: Right Here
- Address: Lihue area (near Kilohana Plantation)
- Coords: 21.9580, -159.3890
- Drive: ~10 min
- Notes: Scenic train ride through a working plantation. Fun, relaxed activity. Good for a half-day thing without committing to a big drive.
- Source: Heather's list

**26. Hāʻena State Park / Kalalau Trail**
- Type: 🥾 Day Trip Hike
- Tier: North Shore
- Address: End of the road, North Shore (via shuttle from Waipā)
- Coords: 22.2190, -159.5870
- Drive: N/A (shuttle required)
- Notes: 🚌 **SHUTTLE BOOKED — Waipā Park & Ride (NOT Princeville).** $40/person 16+. Includes entry to Hāʻena State Park + access to Kēʻē Beach + hiking to Hanakāpīʻai Valley (beach and waterfall). Last shuttle pickup at park: 5:40pm winter schedule. Expect longer waits 2-4pm leaving. **Cannot park outside the park** — $200+ ticket and tow risk. More info: gohaena.com. This is the big adventure day.
- Source: Heather's list

---

## 9. WEST SIDE DAY TRIP CLUSTER

When they go to Waimea Canyon (and they should), these spots are all within a few hundred yards of each other in Waimea town, right before the canyon road turn:

- **Island Taco** (lunch — get the wasabi ahi)
- **Coconut Corner** (smoothie/snack)
- **Mama Bear's Kitchen** (breakfast/early lunch — get there before they sell out)
- **Tiki Tacos** (second location in Waimea/Pakala Village)

Design note: Consider visually grouping these in the app so users can see "these are all right next to each other."

---

## 10. TECH IMPLEMENTATION NOTES

### Stack:
- **Vite + React** project (scaffold with `npm create vite@latest`)
- **Tailwind CSS** (full compiler available — not limited to pre-defined classes)
- Google Fonts loaded via `<link>` in `index.html`
- All data as a `const SPOTS = [...]` in a `data.js` file
- `localStorage` for visited state persistence (see Section 6)
- Zero external API calls
- **Deploy target: Vercel** (connect GitHub repo, zero-config deploy)

### Offline support (service worker):
Cell service dies past Hanalei and is spotty on the West Side. The app MUST work offline once loaded. Use **vite-plugin-pwa** to generate a service worker that precaches all assets:

```bash
npm install -D vite-plugin-pwa
```

In `vite.config.js`:
```javascript
import { VitePWA } from 'vite-plugin-pwa';

export default {
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,woff2,svg}']
      },
      manifest: {
        name: 'Kauai Guide',
        short_name: 'Kauai',
        theme_color: '#1A6B6A',
        background_color: '#FAF6F1',
        display: 'standalone'
      }
    })
  ]
};
```

This gives you: offline support, "Add to Home Screen" on iOS/Android (feels like a native app), and a standalone PWA wrapper that hides the browser chrome. The group can tap "Add to Home Screen" once and use it like an app icon the rest of the trip.

### Key behaviors:
- Default to "Where to Eat" tab
- Cards are collapsed by default, expand on tap
- "Navigate" button uses Google Maps deep link (works with any map app)
- "Visited" toggle persists across sessions via `localStorage`
- SVG map at top is a simple illustrated outline, not interactive tiles (see Section 4 for complexity constraint)
- Smooth scroll when tapping a region on the map or a tier header
- Mobile-first — test at 375px width. Desktop is fine but not the priority.

### What NOT to build:
- No itinerary planner / day scheduler
- No Google Maps embed or tile-based map
- No weather widget
- No search bar (list is small enough to scan)
- No user accounts or sharing
- No dark mode

---

## 11. SUGGESTED FLOW FOR CLAUDE CODE

1. Scaffold Vite + React project (`npm create vite@latest kauai-guide -- --template react`)
2. Install Tailwind + vite-plugin-pwa (`npm install -D tailwindcss @tailwindcss/vite vite-plugin-pwa`)
3. Configure `vite.config.js` with PWA plugin (see Section 10)
4. Define the SPOTS data array in `src/data.js` with all 26 spots
5. Build the card component (collapsed/expanded states + visited visual treatment)
6. Implement distance tier sections with scroll anchoring
7. Create the SVG map of Kauai (simple polygon outline, <5KB, see Section 4)
8. Add the "Navigate" deep link buttons
9. Wire up `localStorage` for visited state (see Section 6)
10. Style everything per the design direction (Section 5)
11. Add the warning banners (Holey Grail closed, Trucking Delicious renamed, shuttle info, Kapaʻa traffic)
12. Test on mobile viewport (375px)
13. Push to GitHub → connect to Vercel → deploy

---

*Built with 100+ hours of Heather's research. Respect the curation.*
