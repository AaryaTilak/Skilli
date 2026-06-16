export const tours = [
  {
    id: '1',
    title: 'Romantic Overwater Maldives Getaway',
    destinationId: 'maldives',
    location: 'Male, Maldives',
    price: 399,
    duration: '5 Days / 4 Nights',
    rating: 4.9,
    reviewsCount: 148,
    image: '/assets/images/tour/pic1.jpg',
    featured: true,
    category: 'Adventure',
    description: 'Experience pure paradise with a luxury stay in a private overwater villa. Dive into crystal clear waters, enjoy romantic candlelight dinners on the beach, and unwind with premium spa sessions.',
    schedule: [
      { day: 1, title: 'Arrival & Speedboat Transfer', desc: 'Arrive at Male International Airport and transfer to your luxury resort via speedboat. Welcome drinks and check-in to your Overwater Villa.' },
      { day: 2, title: 'Snorkeling & Coral Reef Exploration', desc: 'Embark on a guided snorkeling safari to witness vibrant marine life and stunning coral reefs. Free afternoon for beach relaxation.' },
      { day: 3, title: 'Private Sandbank Picnic & Sunset Cruise', desc: 'Enjoy a secluded picnic on a private sandbank. In the evening, board a luxury dhoni for a sunset dolphin cruise.' },
      { day: 4, title: 'Luxury Couples Spa & Candellight Dinner', desc: 'Relax with a 90-minute Balinese couples massage. Top off your getaway with a private beachfront candlelight dinner.' },
      { day: 5, title: 'Leisurely Morning & Departure', desc: 'Enjoy breakfast with infinite lagoon views. Check out and speedboat transfer back to Male airport for your departure flight.' }
    ],
    inclusions: [
      '5-Star Overwater Villa Accommodation',
      'Daily Buffet Breakfast and Beachfront Dinner',
      'Roundtrip Speedboat Airport Transfers',
      'Guided Snorkeling Equipment & Tour',
      'Sunset Dolphin Cruise',
      'Complimentary Wine Bottle upon check-in'
    ],
    exclusions: [
      'International Flight Tickets',
      'Travel Insurance',
      'Personal Expenses & Souvenirs',
      'Optional Water Sports (Scuba Diving, Jet Skiing)'
    ]
  },
  {
    id: '2',
    title: 'Ultimate Bali Adventure & Hiking Tour',
    destinationId: 'bali',
    location: 'Ubud, Bali',
    price: 199,
    duration: '6 Days / 5 Nights',
    rating: 4.8,
    reviewsCount: 204,
    image: '/assets/images/tour/pic2.jpg',
    featured: true,
    category: 'Hiking',
    description: 'Immerse yourself in Balinese culture, hike active volcanoes at sunrise, explore lush rice fields, and swim in hidden jungle waterfalls. Perfect for thrill-seekers and nature lovers.',
    schedule: [
      { day: 1, title: 'Welcome to Ubud', desc: 'Arrive in Denpasar and transfer to your jungle resort in Ubud. Enjoy a traditional Balinese dinner.' },
      { day: 2, title: 'Sacred Monkey Forest & Rice Terraces', desc: 'Visit the Sacred Monkey Forest Sanctuary and hike through the iconic Tegallalang Rice Terraces. Try the famous jungle swing.' },
      { day: 3, title: 'Mount Batur Sunrise Trekking', desc: 'Begin your hike at 3:00 AM to reach Mount Batur summit for a breathtaking sunrise over the volcanic lake. Return to natural hot springs.' },
      { day: 4, title: 'Jungle Waterfall Chase', desc: 'Explore Bali’s most spectacular waterfalls: Tibumana, Tukad Cepung, and Kanto Lampo. Lunch overlooking a canyon.' },
      { day: 5, title: 'Nusa Penida Island Day Trip', desc: 'Board a speedboat to Nusa Penida. Visit Kelingking Beach (T-Rex Cliff), Broken Beach, and snorkel with Manta Rays.' },
      { day: 6, title: 'Spa & Departure', desc: 'Enjoy a classic flower bath spa treatment before transferring to the airport for your onward journey.' }
    ],
    inclusions: [
      'Boutique Jungle Resort Accommodation',
      'All Land & Sea Transportation (with private driver)',
      'Sunrise Hike Professional Trekking Guides & Safety Gear',
      'Entrance Tickets to Waterfalls, Temples, & Parks',
      'Manta Ray Snorkeling Safari & Boat Rental',
      'Daily Healthy Breakfast & Organic Lunches'
    ],
    exclusions: [
      'International Airfare',
      'Gratuities & Tips for Drivers/Guides',
      'Dinner Meals'
    ]
  },
  {
    id: '3',
    title: 'Paris Art & Romance Heritage Tour',
    destinationId: 'paris',
    location: 'Paris, France',
    price: 299,
    duration: '4 Days / 3 Nights',
    rating: 4.7,
    reviewsCount: 95,
    image: '/assets/images/tour/pic3.jpg',
    featured: false,
    category: 'Cultural',
    description: 'Stroll along the Seine, explore world-renowned art museums, enjoy fine French dining, and stand under the sparkling lights of the Eiffel Tower on this unforgettable Parisian journey.',
    schedule: [
      { day: 1, title: 'Arrive in Paris & Seine Cruise', desc: 'Check in to your chic hotel in the Latin Quarter. In the evening, take a glass-canopied cruise down the River Seine with live music.' },
      { day: 2, title: 'Eiffel Tower Access & Louvre Museum', desc: 'Skip the long lines at the Eiffel Tower summit. After lunch, take a guided tour of the Louvre to marvel at the Mona Lisa and Venus de Milo.' },
      { day: 3, title: 'Palace of Versailles & Montmartre Walk', desc: 'Take a morning trip to the magnificent Palace of Versailles and its golden gardens. Spend your afternoon wandering the artistic streets of Montmartre.' },
      { day: 4, title: 'Pastry Making & Departure', desc: 'Participate in a private French macaron making class. Say au revoir to Paris and head to CDG Airport.' }
    ],
    inclusions: [
      'Boutique Hotel Accommodation in Central Paris',
      'Seine River Cruise Ticket with Champagne',
      'Skip-the-Line Eiffel Tower & Louvre Guided Tickets',
      'Palace of Versailles Half-Day Excursion',
      'Macaron Baking Masterclass with French Pastry Chef',
      'Daily French Continental Breakfast'
    ],
    exclusions: [
      'Airport Transfers (trains/cabs)',
      'Lunch and Dinner (except cruise dinner)',
      'City Tour Taxes'
    ]
  },
  {
    id: '4',
    title: 'Safari Expedition & Wildlife Adventure',
    destinationId: 'kenya',
    location: 'Masai Mara, Kenya',
    price: 349,
    duration: '5 Days / 4 Nights',
    rating: 4.9,
    reviewsCount: 112,
    image: '/assets/images/tour/pic4.jpg',
    featured: true,
    category: 'Wildlife',
    description: 'Track the Big Five on game drives, stay in luxury tented camps, and witness the spectacular wildlife migrations across the golden grasslands of the Masai Mara.',
    schedule: [
      { day: 1, title: 'Nairobi to Masai Mara Drive', desc: 'Drive through the Great Rift Valley to the Masai Mara National Reserve. Check in to your luxury tented lodge and go on an evening game drive.' },
      { day: 2, title: 'Full Day Game Drive & Big Five Tracking', desc: 'Embark on a full day game drive with picnic lunch. Spot lions, leopards, elephants, buffalos, and rhinos roaming the plains.' },
      { day: 3, title: 'Masai Village Visit & Hot Air Balloon', desc: 'Experience a sunrise hot air balloon flight over the reserve (optional). In the afternoon, visit an authentic Masai village to learn their traditions.' },
      { day: 4, title: 'Mara River Safari & Bush Dinner', desc: 'Drive near the Mara River to spot hippos and crocodiles. In the evening, experience a magical bush dinner under the starry African sky.' },
      { day: 5, title: 'Sunrise Drive & Return to Nairobi', desc: 'Final early morning game drive before breakfast. Drive back to Nairobi for your return flight.' }
    ],
    inclusions: [
      'Luxury Safari Tented Lodge Stay',
      'All Park Entrance Fees to Masai Mara',
      '4x4 Land Cruiser Game Drives with Professional Spotter',
      'Traditional Masai Tribe Cultural Visit',
      'All Meals (Full Board - Breakfast, Lunch, Dinner)',
      'Complimentary Soft Drinks and Water'
    ],
    exclusions: [
      'Hot Air Balloon Ride (Add $400)',
      'Tips for Safari Drivers',
      'Alcoholic Beverages'
    ]
  },
  {
    id: '5',
    title: 'Dubai Desert Oasis & Modern Luxury',
    destinationId: 'dubai',
    location: 'Dubai, UAE',
    price: 279,
    duration: '4 Days / 3 Nights',
    rating: 4.6,
    reviewsCount: 180,
    image: '/assets/images/tour/pic5.jpg',
    featured: false,
    category: 'Adventure',
    description: 'Marvel at futuristic skyscrapers, conquer red sand dunes on a desert safari, visit the top of the Burj Khalifa, and shop at the world’s grandest malls.',
    schedule: [
      { day: 1, title: 'Arrive in Dubai & Marina Yacht Cruise', desc: 'Arrive in Dubai, check in to your downtown hotel. Spend the evening cruising the Dubai Marina on a luxury yacht with dinner buffet.' },
      { day: 2, title: 'Burj Khalifa, Dubai Mall & Fountain Show', desc: 'Visit the 124th floor of the Burj Khalifa. Shop at Dubai Mall and watch the spectacular Dubai Fountain musical show.' },
      { day: 3, title: 'Red Dune Desert Safari & BBQ Camp', desc: 'Spend the afternoon dune bashing in a 4x4, try sandboarding, ride camels, and enjoy a traditional Arabic BBQ dinner with belly dancers.' },
      { day: 4, title: 'Old Dubai Gold Souk & Departure', desc: 'Cross Dubai Creek on a traditional Abra boat. Shop for gold and spices at the Souks before your airport transfer.' }
    ],
    inclusions: [
      '4-Star Downtown Hotel Accommodation',
      'Yacht Dinner Cruise & Desert Safari BBQ Dinner',
      'Burj Khalifa "At the Top" Observation Deck Ticket',
      '4x4 Desert Dune Bashing & Sandboarding tour',
      'Traditional Abra Boat Ride',
      'Daily Breakfast Buffet'
    ],
    exclusions: [
      'UAE Tourist Visa Fees',
      'Tourism Dirham Tax (approx. $5/night)',
      'Lunches'
    ]
  },
  {
    id: '6',
    title: 'Vietnam Halong Bay Luxury Cruise',
    destinationId: 'vietnam',
    location: 'Halong Bay, Vietnam',
    price: 229,
    duration: '5 Days / 4 Nights',
    rating: 4.8,
    reviewsCount: 165,
    image: '/assets/images/tour/pic6.jpg',
    featured: true,
    category: 'Cruise',
    description: 'Cruise through thousands of towering limestone islands in Halong Bay. Explore ancient caves, kayak through emerald lagoons, and learn to make Vietnamese cuisine on deck.',
    schedule: [
      { day: 1, title: 'Hanoi Arrival & Old Quarter Walk', desc: 'Arrive in Hanoi, check in to your boutique hotel. Enjoy a rickshaw tour around the 36 guilds of the Old Quarter.' },
      { day: 2, title: 'Hanoi to Halong Bay & Cruise Boarding', desc: 'Transfer to Halong Bay and board a luxury 5-star cruise junk. Cruise by limestone islets and kayak around floating villages.' },
      { day: 3, title: 'Sung Sot Cave & Cooking Class', desc: 'Hike up to Sung Sot (Surprise) Cave to admire majestic stalactites. In the evening, join a Vietnamese spring roll making class on the sundeck.' },
      { day: 4, title: 'Tai Chi & Return to Hanoi', desc: 'Start your day with Tai Chi on the deck. Cruise back to port and transfer back to Hanoi. Catch a traditional Water Puppet Show.' },
      { day: 5, title: 'Train Street Cafe & Departure', desc: 'Visit Hanoi’s famous Train Street for a cup of Vietnamese egg coffee before transferring to the airport.' }
    ],
    inclusions: [
      '1 Night Boutique Hanoi Hotel + 2 Nights Luxury Cruise Cabin',
      'All Kayaking & Cave Entry Excursion Tickets',
      'All Meals on Board the Cruise (Fresh Seafood Options)',
      'Traditional Water Puppet Show Ticket',
      'Egg Coffee Tasting & Cooking Class Lesson',
      'Daily Continental & Vietnamese Breakfast'
    ],
    exclusions: [
      'Vietnam Entry Visa',
      'Personal Drinks & Spa services on board',
      'Tips for Cruise Crew'
    ]
  }
];
