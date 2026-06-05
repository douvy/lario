import type { TierId } from './tiers';

export type SpotKind = 'food' | 'activity';

export type Spot = {
  id: string;
  kind: SpotKind;
  name: string;
  tierId: TierId;
  categoryIcon: string;
  categoryLabel: string;
  teaser: string;
  driveBadge: string;
  driveDetails: string;
  address: string;
  lat: number;
  lng: number;
  hours?: string;
  notes: string;
  source?: string;
};

export const SPOTS: Spot[] = [
  {
    id: 'konohiki-seafoods',
    kind: 'food',
    name: 'Konohiki Seafoods',
    tierId: 'right-here',
    categoryIcon: 'fish',
    categoryLabel: 'Poke',
    teaser: 'Incredible poke + takeout staples (go early).',
    driveBadge: '~5 min',
    driveDetails: '~5 min',
    address: '3-4301 Kuhio Hwy Ste 102, Lihue, HI 96766',
    lat: 21.9778,
    lng: -159.3617,
    hours: 'Mon–Sat 6:30am–5pm, Closed Sun',
    notes:
      'Incredible poke — maybe 20 varieties. Also fried chicken, sushi, desserts. TAKEOUT ONLY. Go early, popular stuff sells out by afternoon. Close to airport — great first or last stop.',
    source: "Heather's list"
  },
  {
    id: 'smileys-local-grinds',
    kind: 'food',
    name: "Smiley's Local Grinds",
    tierId: 'right-here',
    categoryIcon: 'utensils',
    categoryLabel: 'Plate Lunch',
    teaser: 'Possibly the best plate lunch on the island.',
    driveBadge: '~3 min',
    driveDetails: '~3 min',
    address: '4100 Rice St, Lihue, HI 96766',
    lat: 21.9748,
    lng: -159.3649,
    hours: 'Mon–Sat 11am–8pm',
    notes:
      "A window in a strip mall parking lot. No seating. But possibly the best plate lunch on the island. Get the Smiley's chicken (top-tier fried chicken) and the hamburger steak. Call ahead to avoid the wait. Take your food to Nawiliwili park by the beach.",
    source: "Heather's list"
  },
  {
    id: 'musubi-truck-kalapaki',
    kind: 'food',
    name: 'The Musubi Truck',
    tierId: 'right-here',
    categoryIcon: 'truck',
    categoryLabel: 'Food Truck',
    teaser: 'Elevated spam musubi — cheap, quick, beach-perfect.',
    driveBadge: '~3 min',
    driveDetails: '~3 min (walkable from hotel)',
    address: 'Kalapaki, Lihue (near hotel)',
    lat: 21.965,
    lng: -159.355,
    notes:
      'Elevated spam musubi — the OG, plus poke bowls and truffle tots. Multiple locations on island (also Kapaa and Koloa). Cheap, quick, perfect beach food. $3 musubi is a steal.',
    source: "Heather's list"
  },
  {
    id: 'garden-island-barbecue',
    kind: 'food',
    name: 'Garden Island Barbecue',
    tierId: 'right-here',
    categoryIcon: 'utensils',
    categoryLabel: 'BBQ',
    teaser: 'Casual local Chinese/Hawaiian BBQ in Lihue.',
    driveBadge: '~5 min',
    driveDetails: '~5 min',
    address: '4252 Rice St, Lihue, HI 96766',
    lat: 21.9753,
    lng: -159.366,
    notes: 'Local Chinese/Hawaiian BBQ joint. Good for a casual, affordable meal without leaving Lihue.',
    source: `Heather's list (listed as "Island Garden Barbecue")`
  },
  {
    id: 'pono-market',
    kind: 'food',
    name: 'Pono Market',
    tierId: 'quick-drive',
    categoryIcon: 'fish',
    categoryLabel: 'Poke',
    teaser: 'Local institution — fresh daily poke selection.',
    driveBadge: '~15 min',
    driveDetails: '~15 min',
    address: '4-1300 Kuhio Hwy, Kapaa, HI 96746',
    lat: 22.0755,
    lng: -159.319,
    notes: 'Local institution for poke and plate lunch. Very popular with locals. Fresh daily poke selection.',
    source: "Heather's list"
  },
  {
    id: 'tiki-tacos-kapaa',
    kind: 'food',
    name: 'Tiki Tacos',
    tierId: 'quick-drive',
    categoryIcon: 'fish',
    categoryLabel: 'Tacos',
    teaser: 'Handmade tortillas + legendary fish taco.',
    driveBadge: '~15 min',
    driveDetails: '~15 min',
    address: '4-971 Kuhio Hwy, Kapaa, HI 96746',
    lat: 22.0834,
    lng: -159.3278,
    hours: 'Daily 10am–7pm (Sat til 3pm)',
    notes:
      'Handmade tortillas, huge tacos, fresh fish. The fish taco is legendary. Kalua pig taco is also incredible. Small indoor/outdoor seating. Multiple sauces — try them all. Two locations (also Waimea).',
    source: "Heather's list"
  },
  {
    id: 'fish-bar-deli-kapaa',
    kind: 'food',
    name: 'Fish Bar Deli',
    tierId: 'quick-drive',
    categoryIcon: 'fish',
    categoryLabel: 'Seafood Bar',
    teaser: 'Farm-to-table seafood bar + market (worth the wait).',
    driveBadge: '~15 min',
    driveDetails: '~15 min',
    address: '4-1380 Kuhio Hwy, Kapaʻa, HI 96746',
    lat: 22.076,
    lng: -159.3195,
    hours: 'Wed–Sun 12–9pm, Closed Mon/Tue. Happy hour 5–6pm daily.',
    notes:
      'Farm-to-table seafood bar + deli + market in Old Kapaʻa Town. Fresh-catch sandwiches, poke, ceviche, great craft cocktails. Can be a 20-25 min wait at dinner — worth it. Also has a small market with local goods and artisanal snacks.',
    source: "Heather's list"
  },
  {
    id: 'lava-lava-beach-club',
    kind: 'food',
    name: 'Lava Lava Beach Club',
    tierId: 'quick-drive',
    categoryIcon: 'utensils',
    categoryLabel: 'Restaurant',
    teaser: 'Toes-in-the-sand dining + live music nightly.',
    driveBadge: '~15 min',
    driveDetails: '~15 min',
    address: '420 Papaloa Rd, Kapaa, HI 96746',
    lat: 22.0548,
    lng: -159.327,
    hours: 'Breakfast 7:30–10:30am, Dinner 5–9pm. Closed midday.',
    notes:
      'TOES IN THE SAND dining — literally on the beach. Live music every night 3-9pm. Only does breakfast and dinner (closed for lunch). Reservations smart for dinner. The vibe alone is worth it even if the food is just "good." Great for a sunset dinner.',
    source: "Heather's list"
  },
  {
    id: 'holey-grail-donuts-kapaa',
    kind: 'food',
    name: 'Holey Grail Donuts',
    tierId: 'quick-drive',
    categoryIcon: 'cookie',
    categoryLabel: 'Donuts',
    teaser: 'Taro-based donuts made to order (Kapaʻa is the safe bet).',
    driveBadge: '~15 min',
    driveDetails: '~15 min',
    address: '4-1543 Kuhio Hwy, Kapaa, HI 96746',
    lat: 22.088,
    lng: -159.337,
    notes:
      "⚠️ The Hanalei location may be CLOSED — this Kapaʻa truck is the safe bet. Taro-based donuts made to order. Unique, not-too-sweet, kind of life-changing. Try the original glazed. Can have a line but it moves fast.",
    source: "Heather's list"
  },
  {
    id: 'wailua-drive-in',
    kind: 'food',
    name: 'Wailua Drive In',
    tierId: 'quick-drive',
    categoryIcon: 'utensils',
    categoryLabel: 'Local Grinds',
    teaser: 'Ahi katsu, loco moco, plate lunches — big portions.',
    driveBadge: '~12 min',
    driveDetails: '~12 min',
    address: '4-733 Kuhio Hwy Ste 103, Kapaʻa, HI 96746',
    lat: 22.057,
    lng: -159.3405,
    hours: 'Mon/Thu–Sun 10am–8pm (hours may vary, closed some midweek days)',
    notes:
      'Local comfort food — ahi katsu, chili pepper chicken, loco moco, plate lunches. Counter service, casual dine-in or takeout. Great portions, very affordable. Good stop on the way to/from Kapaa.',
    source: "Heather's list"
  },
  {
    id: 'kalalea-juice-hale',
    kind: 'food',
    name: 'Kalalea Juice Hale',
    tierId: 'quick-drive',
    categoryIcon: 'cup-soda',
    categoryLabel: 'Açaí',
    teaser: 'The açaí bowls everyone raves about (check closed days).',
    driveBadge: '~20 min',
    driveDetails: '~20 min',
    address: '4390 Puʻu Hale Loop, Anahola, HI 96703',
    lat: 22.142,
    lng: -159.31,
    hours: 'Closed Tue & Sat',
    notes:
      "The BEST açaí bowls on the island — everyone says this. Also fresh juices and smoothies. Small roadside spot, easy to miss. Worth the drive. Check the day — closed Tuesdays and Saturdays.",
    source: "Heather's list"
  },
  {
    id: 'da-crack-mexican-grinds',
    kind: 'food',
    name: 'Da Crack Mexican Grinds',
    tierId: 'south-shore',
    categoryIcon: 'utensils',
    categoryLabel: 'Mexican',
    teaser: 'Huge portions — order ahead and picnic at Poipu Beach.',
    driveBadge: '~25 min',
    driveDetails: '~25 min',
    address: '2827 Poipu Rd, Koloa, HI 96756',
    lat: 21.883,
    lng: -159.444,
    hours: 'Mon–Sat 11am–8pm, Sun 11am–4pm',
    notes:
      'Hole-in-the-wall Mexican takeout window. Massive portions, fresh fish tacos with wasabi cream, everything made from scratch. Brown rice, no MSG. Can order online to skip the line. Take your burrito to Poipu Beach for a picnic.',
    source: "Heather's list"
  },
  {
    id: 'puka-dogs',
    kind: 'food',
    name: 'Puka Dogs',
    tierId: 'south-shore',
    categoryIcon: 'hot-dog',
    categoryLabel: 'Hot Dogs',
    teaser: 'Poipu institution — tropical relish + garlic lemon sauce.',
    driveBadge: '~25 min',
    driveDetails: '~25 min',
    address: '2100 Hoone Rd, Koloa, HI 96756 (Poipu Shopping Village)',
    lat: 21.876,
    lng: -159.427,
    hours: 'Daily 10am–7:30pm',
    notes:
      "Hawaiian-style hot dogs — the bun is toasted with a hole poked through it, filled with tropical relish and garlic lemon sauce. A Poipu institution. Fun, unique, casual. Expect a line but it moves fast. Grab your dog and walk across the street to the beach.",
    source: "Heather's list"
  },
  {
    id: 'keokis-paradise',
    kind: 'food',
    name: "Keoki's Paradise",
    tierId: 'south-shore',
    categoryIcon: 'utensils',
    categoryLabel: 'Restaurant',
    teaser: 'Tiki-bar vibes + outdoor seating for a nicer dinner.',
    driveBadge: '~25 min',
    driveDetails: '~25 min',
    address: "Poipu Shopping Village, 2360 Kiahuna Plantation Dr, Koloa",
    lat: 21.881,
    lng: -159.444,
    notes:
      'Full-service restaurant in Poipu. Tiki-bar vibes, outdoor seating, seafood and steaks. Good for a nicer dinner out on the South Shore.',
    source: "Heather's list"
  },
  {
    id: 'beach-house-restaurant',
    kind: 'food',
    name: 'Beach House Restaurant',
    tierId: 'south-shore',
    categoryIcon: 'utensils',
    categoryLabel: 'Fine Dining',
    teaser: 'The splurge sunset dinner — reservations are a must.',
    driveBadge: '~25 min',
    driveDetails: '~25 min',
    address: '5022 Lawai Rd, Koloa, HI 96756',
    lat: 21.875,
    lng: -159.463,
    notes:
      'THE fancy dinner spot. Right on the ocean, incredible sunset views. Upscale Pacific Rim cuisine. Make a reservation. This is the splurge meal.',
    source: "Heather's list"
  },
  {
    id: 'fresh-shave',
    kind: 'food',
    name: 'Fresh Shave',
    tierId: 'south-shore',
    categoryIcon: 'ice-cream-cone',
    categoryLabel: 'Shave Ice',
    teaser: 'All-natural syrups + fresh fruit toppings in Old Koloa.',
    driveBadge: '~25 min',
    driveDetails: '~25 min',
    address: '5356 Koloa Rd, Ste C, Koloa, HI 96756',
    lat: 21.907,
    lng: -159.471,
    hours: 'Mon–Sat 11am–6pm (may vary)',
    notes:
      'Handcrafted shave ice with all-natural syrups — no corn syrup, no artificial colors. Fresh fruit toppings, chia seed cream. The "Handlebar" (pineapple + coconut) is a go-to. Located in Old Koloa Town — cute shops nearby to browse while you eat.',
    source: "Heather's list"
  },
  {
    id: 'kilauea-fish-market',
    kind: 'food',
    name: 'Kilauea Fish Market',
    tierId: 'north-shore',
    categoryIcon: 'fish',
    categoryLabel: 'Seafood',
    teaser: 'The legendary ahi wrap stop on the way north.',
    driveBadge: '~35 min',
    driveDetails: '~35 min',
    address: '4270 Kilauea Rd, Ste C, Kilauea, HI 96754',
    lat: 22.209,
    lng: -159.401,
    hours: 'Mon–Sat 11am–8pm, Closed Sun',
    notes:
      'The ahi wrap is legendary — possibly the most recommended single menu item on Kauai. Fresh fish plates, poke, tacos. Outdoor picnic table seating. BYOB (grab a beer from the shop next door). Order at counter, get a pager. Can be a 10-15 min wait at peak times. Great stop between Lihue and the North Shore.',
    source: "Heather's list"
  },
  {
    id: 'hanalei-poke',
    kind: 'food',
    name: 'Hanalei Poke',
    tierId: 'north-shore',
    categoryIcon: 'fish',
    categoryLabel: 'Poke',
    teaser: 'Big line, locally caught fish — the North Shore poke pick.',
    driveBadge: '~45 min',
    driveDetails: '~45 min',
    address: 'Ching Young Village, Hanalei, HI 96714',
    lat: 22.203,
    lng: -159.503,
    notes:
      "Little poke restaurant with a big line. All fish is Hawaiian and locally caught. Prices vary by market (can get pricey). If you're doing one poke spot on the North Shore, this is it.",
    source: "Heather's list"
  },
  {
    id: 'nourish-hanalei',
    kind: 'food',
    name: 'Nourish Hanalei',
    tierId: 'north-shore',
    categoryIcon: 'leaf',
    categoryLabel: 'Farm Stand',
    teaser: 'Farm-stand bowls + incredible Hanalei Valley views.',
    driveBadge: '~40 min',
    driveDetails:
      '~40 min (near Princeville — turn right on Hanalei Plantation Rd past Princeville Shopping Center, drive to the end)',
    address: '5225 Hanalei Plantation Rd, Hanalei, HI 96722',
    lat: 22.217,
    lng: -159.487,
    hours: 'Mon–Sat 8am–3pm (breakfast 8–10:45am, lunch 11am–3pm). Closed Sun.',
    notes:
      'Family-run farm stand overlooking Hanalei Valley — the view alone is worth the stop. Açaí bowls, salads, smoothies, bowls. All locally sourced, vegan/GF options throughout the menu. Casual outdoor seating under mango trees. Can sell out of items later in the day — go earlier.',
    source: "Heather's list"
  },
  {
    id: 'wake-up-delicious-hanalei',
    kind: 'food',
    name: 'Wake Up Delicious',
    tierId: 'north-shore',
    categoryIcon: 'coffee',
    categoryLabel: 'Café',
    teaser: 'Same chef Chloe — now brick-and-mortar in Hanalei.',
    driveBadge: '~45 min',
    driveDetails: '~45 min',
    address: '5-5144 Kuhio Hwy, Hanalei, HI 96714',
    lat: 22.2035,
    lng: -159.505,
    notes:
      '⚠️ NAME CHANGED — now called "Wake Up Delicious." Same chef Chloe. Was a food truck, now a brick-and-mortar cafe. Garlic shrimp, kalua pork burritos, plate lunches, espresso. Great for breakfast/brunch on the North Shore. Between Kalypso and Tahiti Nui in Hanalei.',
    source: "Heather's list"
  },
  {
    id: 'island-taco-waimea',
    kind: 'food',
    name: 'Island Taco',
    tierId: 'west-side',
    categoryIcon: 'fish',
    categoryLabel: 'Tacos',
    teaser: 'Wasabi ahi tuna tacos — perfect Waimea Canyon stop.',
    driveBadge: '~50 min',
    driveDetails: '~50 min',
    address: '9643 Kaumualii Hwy, Waimea, HI 96796',
    lat: 21.954,
    lng: -159.667,
    hours: 'Daily 10am–4pm',
    notes:
      'The wasabi ahi tuna tacos are a religious experience. Homemade tortillas, huge portions. Located right before the turn to go up into Waimea Canyon — perfect stop on a canyon day trip. Also has kalua pork, mahi mahi, shrimp, and tofu options.',
    source: "Heather's list"
  },
  {
    id: 'mama-bears-kitchen',
    kind: 'food',
    name: "Mama Bear's Kitchen",
    tierId: 'west-side',
    categoryIcon: 'truck',
    categoryLabel: 'Food Truck',
    teaser: 'Beloved Waimea truck — go early before it sells out.',
    driveBadge: '~50 min',
    driveDetails: '~50 min',
    address: '9935 Kaumualii Hwy, Waimea, HI 96796',
    lat: 21.956,
    lng: -159.668,
    hours: 'Mon–Fri 7am–2pm (or sold out). Closed Sat/Sun.',
    notes:
      'Beloved Waimea food truck. Smash burgers, breakfast burritos (the "Bear-rito"), Monte Bear Cristo, plate lunches. Fresh fish from local fishermen, veggies from local growers. Excellent breakfast stop before Waimea Canyon. Can sell out — go early.',
    source: "Heather's list"
  },
  {
    id: 'coconut-corner',
    kind: 'food',
    name: 'Coconut Corner',
    tierId: 'west-side',
    categoryIcon: 'cup-soda',
    categoryLabel: 'Fruit Stand',
    teaser: 'Roadside fruit stand + Thai + smoothies (pick 3 fruits).',
    driveBadge: '~50 min',
    driveDetails: '~50 min',
    address: '9640 Kaumualii Hwy, Waimea, HI 96796',
    lat: 21.954,
    lng: -159.6665,
    hours: 'Daily ~9am–4pm',
    notes:
      'Roadside fruit stand + Thai food. Fresh coconuts, smoothies (pick up to 3 fruits), mango sticky rice. Great stop before/after Waimea Canyon. Right next to Island Taco and Shrimp Station.',
    source: "Heather's list"
  },
  {
    id: 'sleeping-giant-hike',
    kind: 'activity',
    name: 'Sleeping Giant',
    tierId: 'quick-drive',
    categoryIcon: 'mountain',
    categoryLabel: 'Hike',
    teaser: 'Moderate east trail (~4 miles RT) with coastal views.',
    driveBadge: '~15 min',
    driveDetails: '~15 min',
    address: 'Wailua/Kapaa area',
    lat: 22.063,
    lng: -159.354,
    notes:
      'Three trail options of varying difficulty. The east trail is most popular (moderate, ~4 miles RT). Ridge trail is shorter but steeper. Great views of the coast from the top. Bring water.',
    source: "Heather's list"
  },
  {
    id: 'kauai-plantation-railway',
    kind: 'activity',
    name: 'Kauai Plantation Railway',
    tierId: 'right-here',
    categoryIcon: 'train-front',
    categoryLabel: 'Attraction',
    teaser: 'Scenic train ride — relaxed half-day close to Lihue.',
    driveBadge: '~10 min',
    driveDetails: '~10 min',
    address: 'Lihue area (near Kilohana Plantation)',
    lat: 21.958,
    lng: -159.389,
    notes:
      'Scenic train ride through a working plantation. Fun, relaxed activity. Good for a half-day thing without committing to a big drive.',
    source: "Heather's list"
  },
  {
    id: 'haena-state-park-kalalau',
    kind: 'activity',
    name: 'Kalalau Trail',
    tierId: 'north-shore',
    categoryIcon: 'mountain',
    categoryLabel: 'Hike',
    teaser: 'Big adventure day — shuttle required (Waipā Park & Ride).',
    driveBadge: 'Shuttle',
    driveDetails: 'N/A (shuttle required)',
    address: 'End of the road, North Shore (via shuttle from Waipā)',
    lat: 22.219,
    lng: -159.587,
    notes:
      '🚌 SHUTTLE BOOKED — Waipā Park & Ride (NOT Princeville). $40/person 16+. Includes entry to Hāʻena State Park + access to Kēʻē Beach + hiking to Hanakāpīʻai Valley (beach and waterfall). Last shuttle pickup at park: 5:40pm winter schedule. Expect longer waits 2–4pm leaving. Cannot park outside the park — $200+ ticket and tow risk. More info: gohaena.com. This is the big adventure day.',
    source: "Heather's list"
  },
  // === NEW ENTRIES ===
  // RIGHT HERE
  {
    id: 'hamura-saimin',
    kind: 'food',
    name: 'Hamura Saimin',
    tierId: 'right-here',
    categoryIcon: 'utensils',
    categoryLabel: 'Noodles',
    teaser: 'James Beard Award winner — Kauai institution since 1952.',
    driveBadge: '~5 min',
    driveDetails: '~5 min',
    address: '2956 Kress St, Lihue, HI 96766',
    lat: 21.9716,
    lng: -159.3659,
    hours: 'Mon-Thu 10am-10:30pm, Fri-Sat 10am-12am, Sun 10am-9:30pm',
    notes:
      "James Beard Award winner (2006). Kauai institution since 1952 — converted Army barracks with U-shaped counter seating. Saimin (Hawaii's answer to ramen): housemade noodles in clean shrimp/chicken/pork/scallop broth. Order the \"Special\" for the works. Do NOT skip the lilikoi chiffon pie — as famous as the noodles. CASH ONLY. Expect a line but it moves fast. Close to the airport — great first or last stop."
  },
  {
    id: 'jammin-banana-bakery',
    kind: 'food',
    name: "The Jammin' Banana",
    tierId: 'right-here',
    categoryIcon: 'coffee',
    categoryLabel: 'Bakery',
    teaser: 'Walkable from hotel — legendary garlic bagels + malasadas.',
    driveBadge: '~3 min',
    driveDetails: '~3 min (walkable from hotel)',
    address: 'Anchor Cove Shopping Center, 3416 Rice St, Lihue, HI 96766',
    lat: 21.9563,
    lng: -159.3560,
    hours: 'Check locally (morning hours)',
    notes:
      "Walking distance from the Royal Sonesta — multiple reviewers staying at the hotel call this their daily morning spot. Family-owned bakery doing homemade bagels (the garlic bagel is legendary), banana pudding, malasadas (Portuguese donuts with cream/pumpkin/chocolate fillings), and solid coffee. The banana-flavored latte is the signature. Small spot in an outdoor shopping center near Kalapaki Beach. Stuff sells out early."
  },
  {
    id: 'tip-top-cafe',
    kind: 'food',
    name: 'Tip Top Cafe',
    tierId: 'right-here',
    categoryIcon: 'coffee',
    categoryLabel: 'Diner',
    teaser: 'Lihue institution since 1916 — mac nut pancakes + oxtail soup.',
    driveBadge: '~5 min',
    driveDetails: '~5 min',
    address: '3173 Akahi St, Lihue, HI 96766',
    lat: 21.9744,
    lng: -159.3650,
    hours: 'Tue-Sun 7am-1:30pm, Closed Mon',
    notes:
      'Lihue institution since 1916, 4th generation of the founding Ota family. Famous for macadamia nut pancakes, oxtail soup, and loco moco. Where Kauai locals have been eating breakfast for over a century. Packed dining room — every table full by 8am. The Yokozuna Bento is a monster plate. Old-school diner vibes, zero pretense. Closed Mondays.'
  },
  // QUICK DRIVE
  {
    id: 'java-kai-kapaa',
    kind: 'food',
    name: 'Java Kai',
    tierId: 'quick-drive',
    categoryIcon: 'coffee',
    categoryLabel: 'Coffee',
    teaser: "Kapaʻa's go-to coffee — roasts on-site, killer pastries.",
    driveBadge: '~15 min',
    driveDetails: '~15 min',
    address: '4-1384 Kuhio Hwy, Kapaʻa, HI 96746',
    lat: 22.0755,
    lng: -159.3190,
    hours: 'Mon-Sat 6am-6pm, Sun 6am-5pm',
    notes:
      "Kapaʻa's go-to coffee shop — roasts their own beans on-site. Big breakfast/lunch menu: bagel sandwiches, acai bowls, Belgian waffles, killer pastries (get there early, pastry case empties fast). The mac nut latte with pistachio milk is the move. Always a line but it moves quick. Sister shop (Kai Bar) in Kilauea and new Koloa location. Order online to skip the wait."
  },
  {
    id: 'tonys-catch',
    kind: 'food',
    name: "Tony's Catch",
    tierId: 'quick-drive',
    categoryIcon: 'truck',
    categoryLabel: 'Food Truck',
    teaser: '4.9 rating — best fish tacos on the island.',
    driveBadge: '~15 min',
    driveDetails: '~15 min',
    address: '4-1602 Kuhio Hwy, Kapaʻa, HI 96746',
    lat: 22.0835,
    lng: -159.3275,
    hours: 'Mon-Fri 10:30am-4pm, Sun 10:30am-3pm, Closed Sat',
    notes:
      '4.9 rating for a reason. Fresh mahi mahi fish tacos, poke bowls, ahi tostadas — all outstanding. Fish tacos might be the best on the island. Tony often comes out to check on diners. Picnic tables with ocean views by the coastal bike path. Limited hours and closed Saturdays — plan accordingly. Can have long waits when busy.'
  },
  {
    id: 'little-fatties-tacos',
    kind: 'food',
    name: 'Little Fatties Tacos',
    tierId: 'quick-drive',
    categoryIcon: 'utensils',
    categoryLabel: 'Tacos',
    teaser: 'Sustainably sourced — the Spam taco is the sleeper hit.',
    driveBadge: '~15 min',
    driveDetails: '~15 min',
    address: '4-1161 Kuhio Hwy, Kapaʻa, HI 96746',
    lat: 22.0680,
    lng: -159.3180,
    hours: 'Thu-Sat 12-8pm, Sun 12-7pm, Closed Mon-Wed',
    notes:
      "Sustainably sourced taco truck with an island twist. The kabocha squash taco is addictive and the Spam taco is the sleeper hit — don't skip it. Great seared ahi tostada special. Sources from local fishermen, ranchers, farmers. Outdoor seating with garden vibes. Very limited hours (only 4 days/week). Often has live music during First Saturday Art Walk."
  },
  // SOUTH SHORE
  {
    id: 'little-fish-coffee',
    kind: 'food',
    name: 'Little Fish Coffee',
    tierId: 'south-shore',
    categoryIcon: 'coffee',
    categoryLabel: 'Coffee',
    teaser: "South Shore's best açaí — order online to skip 30-40 min lines.",
    driveBadge: '~25 min',
    driveDetails: '~25 min',
    address: '2294 Poipu Rd, Koloa, HI 96756',
    lat: 21.8810,
    lng: -159.4530,
    hours: 'Daily 7am-1pm',
    notes:
      "South Shore's best coffee and açaí bowl spot. Locally roasted organic coffee, loaded açaí bowls with fresh Kauai fruit, bagel sandwiches with housemade schmear, smoothies. Open-air seating. Lines are LONG — 30-40 min common by 7:30am. Order online to skip the wait. Watch out for the chickens — they WILL try to steal your bagel. Next to Poipu Beach Athletic Club."
  },
  {
    id: 'taco-libre',
    kind: 'food',
    name: 'Taco Libre',
    tierId: 'south-shore',
    categoryIcon: 'utensils',
    categoryLabel: 'Tacos',
    teaser: 'The Cali Burrito with fries inside — reviewers call it life-changing.',
    driveBadge: '~25 min',
    driveDetails: '~25 min',
    address: '5371 Koloa Rd, Koloa, HI 96756',
    lat: 21.9070,
    lng: -159.4680,
    hours: 'Tue-Fri 11am-3pm (hours change seasonally)',
    notes:
      'Tiny food truck across from Sueoka Market in Old Koloa Town. The Cali Burrito (with fries inside!) is a cult favorite — reviewers call it life-changing. Also great fish tacos and al pastor. Text ahead for pickup: saves the wait and you get free guac. Husband-and-wife team fusing Mexican recipes with local Hawaiian ingredients. Very limited hours.'
  },
  // NORTH SHORE
  {
    id: 'wishing-well-coffee',
    kind: 'food',
    name: 'Wishing Well',
    tierId: 'north-shore',
    categoryIcon: 'coffee',
    categoryLabel: 'Coffee',
    teaser: 'Hanalei institution since 1983 — mason jar drinks you keep.',
    driveBadge: '~40 min',
    driveDetails: '~40 min',
    address: '5-5080 Kuhio Hwy, Hanalei, HI 96714',
    lat: 22.2034,
    lng: -159.5020,
    hours: 'Daily 6:30am-6pm (may shrink seasonally)',
    notes:
      'Hanalei institution since 1983 (started as a shave ice truck, now a full café). Locally roasted coffee, açaí bowls, smoothies, organic shave ice. The "Good Times Bowl" is the move — huge acai with haupia (coconut cream) on top. Every iced drink comes in a branded mason jar you keep — instant souvenir. Attached to "Slow Yourself Down" clothing shop. Great outdoor picnic table seating. Right as you enter Hanalei on the right.'
  },
  {
    id: 'hanalei-bread-company',
    kind: 'food',
    name: 'Hanalei Bread Company',
    tierId: 'north-shore',
    categoryIcon: 'coffee',
    categoryLabel: 'Bakery',
    teaser: 'From the Bar Acuda family — go early or wait.',
    driveBadge: '~40 min',
    driveDetails: '~40 min',
    address: '5-5161 Kuhio Hwy #4, Hanalei, HI 96714',
    lat: 22.2040,
    lng: -159.5050,
    hours: 'Daily 7am-12:30pm (kitchen closes at noon)',
    notes:
      'Organic bakery from the same family behind Bar Acuda. All breads baked fresh daily, most produce from their sister organic farm (harvested that morning). Avocado toast and ham/cheese croissant sandwich are outstanding. Open-air lanai seating — grab a front-row seat for prime Hanalei people-watching. PACKED after 9am, go early or wait. No WiFi. Kitchen closes at noon sharp, coffee/pastries until 12:30. Park across at Ching Young Village.'
  },
  // QUICK DRIVE - Activities
  {
    id: 'lydgate-beach-park',
    kind: 'activity',
    name: 'Lydgate Beach Park',
    tierId: 'quick-drive',
    categoryIcon: 'waves',
    categoryLabel: 'Beach',
    teaser: 'Best family beach on Kauai — protected pools + massive playground.',
    driveBadge: '~10 min',
    driveDetails: '~10 min',
    address: '4470 Nalu Rd, Kapaʻa, HI 96746',
    lat: 22.0415,
    lng: -159.3385,
    hours: 'Daily, sunrise to sunset (lifeguards on duty during daytime)',
    notes:
      "The single best family beach on Kauai. Two rock-walled ocean pools built in 1964 provide protected swimming year-round — inner pool is shallow and calm enough for toddlers, outer pool is deeper and great for snorkeling (tons of fish, frequent turtle sightings). Lifeguard tower right there. Adjacent to the pools is Kamalani Playground — a massive 16,000 sq ft wooden play structure built by 7,000 community volunteers in 1994. Dark wood towers, bridges, slides, swings, hidden nooks. A second playground (Kamalani Kai Bridge) is connected by a 2.5-mile paved coastal bike/walking path. Tons of grass, picnic tables, BBQ grills, pavilions, restrooms, and showers. Pack a cooler and plan to spend a full morning or afternoon. Go on a weekday morning for less crowds. Even on high-surf days when other beaches are dangerous, the protected pools here stay calm. Parking: multiple lots along Nalu Rd — drive all the way to the north end for the pools and playground. Free."
  },
  {
    id: 'secret-falls-kayak-hike',
    kind: 'activity',
    name: 'Secret Falls Kayak & Hike',
    tierId: 'quick-drive',
    categoryIcon: 'ship',
    categoryLabel: 'Adventure',
    teaser: 'Marquee Kauai adventure — kayak + jungle hike to 120ft waterfall.',
    driveBadge: '~10 min',
    driveDetails: '~10 min (to Wailua Marina)',
    address: 'Wailua Marina, Wailua River State Park',
    lat: 22.0500,
    lng: -159.3540,
    hours: 'Tours Mon-Fri, morning departures (typically 7:45am, 9am, 11:30am, 12:45pm). ~5 hours total.',
    notes:
      "The marquee Kauai adventure — kayak 2 miles up the Wailua River (Hawaii's only navigable river) then hike ~1 mile through the rainforest to Uluwehi Falls (aka Secret Falls), a 120-foot waterfall hidden in the jungle. Swim at the base when you arrive. Guided tours include tandem kayaks, paddles, life jackets, dry bags, walking sticks, and a deli lunch. Multiple companies operate from Wailua Marina — Kayak Kauaʻi, Aliʻi Kayaks, and Kayak Adventures are the main ones. No kayak experience needed — guides give full instruction. The river is flat and calm. The hike is the real workout: muddy trails, stream crossings (sometimes waist-deep), slippery rocks and roots. Wear shoes with good traction that you don't mind getting soaked and muddy (old sneakers or water shoes). Bring: reef-safe sunscreen, bug spray, change of clothes for after, waterproof phone case. BOOKS OUT WEEKS IN ADVANCE during peak season — confirm your reservation. Kids 5-6+ depending on the outfitter. Moderate fitness required."
  },
  // SOUTH SHORE - Activities
  {
    id: 'baby-beach-keiki-cove',
    kind: 'activity',
    name: 'Baby Beach & Keiki Cove',
    tierId: 'south-shore',
    categoryIcon: 'waves',
    categoryLabel: 'Beach',
    teaser: 'Hidden coves — ankle-deep water, calm as a bathtub.',
    driveBadge: '~25 min',
    driveDetails: '~25 min',
    address: 'Hoʻona Rd (between #5142 and #5152), Poipu, HI 96756',
    lat: 21.8730,
    lng: -159.4600,
    hours: 'Open daily (no lifeguard, no facilities)',
    notes:
      "Two tiny hidden beaches that are absolute gold for young kids. Baby Beach is a crescent-shaped cove in a residential neighborhood protected by an outer reef — the water is ankle-to-knee deep, calm as a bathtub, warm, and clear. Basically a natural wading pool. Perfect for babies and toddlers to splash without parents worrying about waves or currents. Look for the yellow pipe between the houses — that's the public beach access down the stairs. Keiki Cove is 2 minutes further down Lawai Road — even smaller, a near-perfect circle of protected water just deep enough to dunk a kid. Amazing family photo spot. Watch for sea turtles and monk seals (common visitors — stay 10+ feet back, it's the law). No restrooms, no lifeguard, no shade — bring an umbrella, water, and sunscreen. Parking is very tight (residential street, park along the lava rock wall). The trade-off for no amenities is almost no crowds. Nearby: Poipu Beach Park has lifeguards, restrooms, and a playground if you want a more built-out option."
  },
  // NORTH SHORE - Activities
  {
    id: 'anaina-hou-community-park',
    kind: 'activity',
    name: 'Anaina Hou Community Park',
    tierId: 'north-shore',
    categoryIcon: 'trees',
    categoryLabel: 'Family Park',
    teaser: 'Perfect rainy-day stop — 17K sq ft playground + botanical mini golf.',
    driveBadge: '~35 min',
    driveDetails: '~35 min',
    address: '5-2723 Kuhio Hwy, Kilauea, HI 96754',
    lat: 22.2110,
    lng: -159.4020,
    hours: 'Daily 9am-7pm',
    notes:
      "A 30-acre nonprofit community park on the North Shore that's a perfect rainy-day (or any-day) stop with kids. The star attraction is a 17,000 sq ft playground built in 2018 using recycled milk jugs — separate areas for little kids and big kids, with Hawaiian history and culture woven into the play structures. Also on campus: an 18-hole mini golf course set in a botanical garden (each hole represents a different era of Kauai's history — fun for adults too), a skate ramp, the Wai Koa Loop Trail (gentle 3-mile hike into lush backcountry), a café with solid shave ice, and a gift shop. Saturday morning farmers market is the best on the North Shore — arrive right at 9am or the good stuff is gone. Founded as a gift to Kauai's community by the late founder of E-Trade. All proceeds support community programs. Tons of parking, restrooms, covered seating areas. Combine with a stop at Kilauea Lighthouse (nearby) and lunch in Hanalei."
  },
  // WEST SIDE - Activities
  {
    id: 'hanapepe-town',
    kind: 'activity',
    name: 'Hanapepe Town',
    tierId: 'west-side',
    categoryIcon: 'palette',
    categoryLabel: 'Historic Town',
    teaser: 'Real-life Lilo & Stitch town — swinging bridge + Friday Art Walk.',
    driveBadge: '~40 min',
    driveDetails: '~40 min',
    address: 'Hanapepe Rd, Hanapepe, HI 96716',
    lat: 21.9080,
    lng: -159.5900,
    hours: 'Shops generally open daytime; Friday Art Walk 5-9pm',
    notes:
      '"Kauai\'s Biggest Little Town" — and the real-life inspiration for Disney\'s Lilo & Stitch. The animators spent time here and modeled Lilo\'s hometown after Hanapepe\'s plantation-era buildings, small-town feel, and surrounding landscape. Find the Lilo & Stitch mural on the main road for the obligatory photo op. The Hanapepe Swinging Bridge is the main attraction — a cable-and-plank suspension bridge over the Hanapepe River originally built for plantation workers and rebuilt after Hurricane Iniki (1992). It still sways and bounces underfoot — thrilling for kids, mildly terrifying for adults afraid of heights, but completely safe. Walk across and back, takes 5 minutes. The town itself is a single charming street of art galleries, gift shops, and local eateries. Thursday farmers market starts at 3pm. Friday Art Walk (5-9pm) is the big event — galleries open late, food trucks, live music, the whole town comes alive. Great stop on the way to or from Waimea Canyon. Nearby: Taro Ko Factory for fresh taro chips, Talk Story Bookstore (westernmost bookstore in the US).'
  },
  {
    id: 'waimea-canyon-state-park',
    kind: 'activity',
    name: 'Waimea Canyon State Park',
    tierId: 'west-side',
    categoryIcon: 'mountain',
    categoryLabel: 'Scenic Drive',
    teaser: 'Grand Canyon of the Pacific — go early before clouds roll in.',
    driveBadge: '~50 min',
    driveDetails: '~50 min to first lookout',
    address: 'Waimea Canyon Dr (Hwy 550), Waimea, HI 96796',
    lat: 22.0710,
    lng: -159.6600,
    hours: 'Open daily during daylight hours. Fee: $10/vehicle parking + $5/person entrance (non-residents).',
    notes:
      "The \"Grand Canyon of the Pacific\" — 14 miles long, 1 mile wide, 3,600 feet deep. Nothing else in Hawaii looks like this. Layers of red, rust, and green canyon walls carved by the Waimea River over millions of years. The scenic drive up Waimea Canyon Drive (Hwy 550) takes you past multiple lookouts — the main Waimea Canyon Lookout at mile marker 10 has the most dramatic panoramic views (NOTE: this lookout was closed for safety construction through early January 2026 — check current status at dlnr.hawaii.gov before your visit, it may have recently reopened). Puʻu Hinahina Lookout (mile marker 13-14) is excellent too and on clear days you can see Niʻihau island. Keep driving into Kōkeʻe State Park for the Kalalau Lookout — jaw-dropping views down into the Nā Pali Coast valley. PRO TIPS: Go early (before 9am) — clouds roll in fast and can completely obscure the canyon by midday. Fill your gas tank before you start (no gas stations up there). The round trip is ~36 miles with 4,000 feet of elevation change. It's noticeably cooler up top — bring a light layer. Budget 3-4 hours for a drive-and-lookouts visit, a full day if you want to hike. Combine with a Hanapepe stop on the way. No cell service for much of the drive."
  }
];

