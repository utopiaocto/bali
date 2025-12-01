const appData = {
    brand: {
        name: "Bali Harvest",
        slogan: "Pure Essence of the Island",
        description: "From the volcanic soils of Kintamani to your table. We curate the finest organic produce from independent Balinese farmers.",
        socials: {
            instagram: "@baliharvest",
            tiktok: "@baliharvest_official"
        }
    },
    hero: {
        title: "Pure Essence of the Island",
        subtitle: "Premium agricultural produce directly from Bali's volcanic heartlands.",
        cta: "Shop Harvest",
        video: "https://cdn.pixabay.com/video/2024/01/27/198288-907094612_large.mp4"
    },
    products: [
        {
            id: "p1",
            name: "Kintamani Arabica",
            category: "Coffee",
            price: "$18.00",
            image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80",
            badge: "Best Seller",
            rating: 4.9
        },
        {
            id: "p2",
            name: "Ubud Raw Cacao",
            category: "Superfood",
            price: "$12.50",
            image: "https://images.unsplash.com/photo-1548623060-f37d052e1570?auto=format&fit=crop&w=800&q=80",
            badge: "Organic",
            rating: 4.8
        },
        {
            id: "p3",
            name: "Royal Vanilla Beans",
            category: "Spices",
            price: "$24.00",
            image: "https://images.unsplash.com/photo-1606707561381-106c768cb794?auto=format&fit=crop&w=800&q=80",
            badge: "Limited",
            rating: 5.0
        },
        {
            id: "p4",
            name: "Volcanic Sea Salt",
            category: "Pantry",
            price: "$9.00",
            image: "https://images.unsplash.com/photo-1626139576127-45211d0d2120?auto=format&fit=crop&w=800&q=80",
            rating: 4.7
        }
    ],
    shorts: [
        {
            id: "s1",
            title: "Harvest Morning",
            views: "1.2M",
            thumbnail: "https://cdn.pixabay.com/video/2020/08/12/46989-449623829_large.mp4"
        },
        {
            id: "s2",
            title: "Roasting Process",
            views: "850K",
            thumbnail: "https://cdn.pixabay.com/video/2024/04/25/209424_large.mp4"
        },
        {
            id: "s3",
            title: "Meet Farmer Wayan",
            views: "2.1M",
            thumbnail: "https://cdn.pixabay.com/video/2020/07/23/45358-443057031_large.mp4"
        },
        {
            id: "s4",
            title: "Vanilla Pollination",
            views: "500K",
            thumbnail: "https://cdn.pixabay.com/video/2020/08/12/46989-449623829_large.mp4"
        }
    ],
    stories: [
        {
            id: "st1",
            title: "The Volcanic Advantage",
            excerpt: "Why Kintamani soil creates the perfect acidity for Arabica coffee.",
            image: "https://images.unsplash.com/photo-1511300636408-a63a89df3482?auto=format&fit=crop&w=800&q=80",
            date: "Oct 12, 2024"
        },
        {
            id: "st2",
            title: "Sustainable Future",
            excerpt: "How we are helping 500+ farmers transition to organic methods.",
            image: "https://images.unsplash.com/photo-1621961458348-f013d182b6a2?auto=format&fit=crop&w=800&q=80",
            date: "Nov 05, 2024"
        }
    ],
    process: [
        {
            step: "01",
            title: "Hand-Picked",
            desc: "Only the ripest cherries are selected by our master pickers.",
            icon: "fas fa-hand-holding-heart"
        },
        {
            step: "02",
            title: "Sun Dried",
            desc: "Natural drying on raised beds under the Balinese sun.",
            icon: "fas fa-sun"
        },
        {
            step: "03",
            title: "Artisan Roast",
            desc: "Small-batch roasting to bring out the unique volcanic notes.",
            icon: "fas fa-fire"
        },
        {
            step: "04",
            title: "Fresh Packed",
            desc: "Sealed immediately to lock in the aroma and flavor.",
            icon: "fas fa-box-open"
        }
    ],
    impact: {
        stats: [
            { value: "500+", label: "Partner Farmers" },
            { value: "100%", label: "Organic Certified" },
            { value: "10k", label: "Trees Planted" },
            { value: "$2M", label: "Community Invested" }
        ]
    },
    bmc: {
        partners: ["Local Farmers Co-ops", "Organic Certifiers", "Eco-Logistics Partners", "Artisan Roasters"],
        activities: ["Sustainable Farming", "Quality Control", "Global Distribution", "Community Education"],
        resources: ["Volcanic Farmland", "Processing Facilities", "Farmer Network", "Brand IP"],
        valueProps: ["Premium Single-Origin", "100% Traceable", "Fair Trade Verified", "Eco-Friendly Packaging"],
        relationships: ["Direct-to-Consumer", "Subscription Model", "Community Events", "Farmer Stories"],
        channels: ["E-commerce Site", "Social Media", "Specialty Cafes", "Organic Markets"],
        segments: ["Specialty Coffee Lovers", "Eco-Conscious Consumers", "Health Enthusiasts", "Gift Shoppers"],
        costs: ["Fair Wages", "Sustainable Packaging", "Global Shipping", "Marketing"],
        revenue: ["Product Sales", "Subscriptions", "B2B Wholesale", "Workshops"]
    },
    recipes: [
        {
            title: "Golden Turmeric Latte",
            image: "https://images.unsplash.com/photo-1605618825438-602d462f906b?auto=format&fit=crop&w=800&q=80",
            chef: "Chef Agung",
            time: "10 min"
        },
        {
            title: "Raw Cacao Smoothie",
            image: "https://images.unsplash.com/photo-1543652437-15ae836b33e3?auto=format&fit=crop&w=800&q=80",
            chef: "Chef Sarah",
            time: "5 min"
        },
        {
            title: "Vanilla Bean Panna Cotta",
            image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
            chef: "Chef Mario",
            time: "4 hrs"
        }
    ],
    testimonials: [
        {
            name: "Elena R.",
            role: "Coffee Connoisseur",
            text: "The Kintamani Arabica is unlike anything I've tasted. You can really feel the volcanic soil profile.",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: "David K.",
            role: "Cafe Owner, Sydney",
            text: "My customers love the story behind Bali Harvest. It's not just coffee; it's a movement.",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            name: "Sarah J.",
            role: "Home Baker",
            text: "The vanilla beans are so plump and oily. Perfect for my pastries.",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg"
        }
    ],
    locations: [
        {
            name: "Ubud Flagship Store",
            address: "Jl. Raya Ubud No. 88, Bali",
            hours: "09:00 - 21:00"
        },
        {
            name: "Canggu Pop-up",
            address: "Jl. Batu Bolong No. 42, Bali",
            hours: "08:00 - 20:00"
        }
    ]
};
