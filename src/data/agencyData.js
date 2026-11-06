// Business Information & Agency Data for Praveen Digital Solutions

export const AGENCY_INFO = {
  name: "PRAVEEN DIGITAL SOLUTIONS",
  shortName: "Praveen Digital",
  tagline: "We Build Websites. We Grow Businesses.",
  founder: "Akula Praveen Yadav",
  role: "Website Developer & Digital Growth Service Provider",
  location: "Hyderabad, Telangana, India",
  serviceArea: "All Telangana and India",
  email: "akulapraveenkumar19@gmail.com",
  phone: "+91 9505164685",
  phoneFormatted: "+91 95051 64685",
  whatsappNumber: "919505164685",
  whatsappDefaultMsg: "Hello Praveen, I visited your website and I am interested in your services. Please share more details.",
  whatsappUrl: "https://wa.me/919505164685?text=Hello%20Praveen%2C%20I%20visited%20your%20website%20and%20I%20am%20interested%20in%20your%20services.%20Please%20share%20more%20details.",
  callUrl: "tel:+919505164685",
  linkedin: "https://www.linkedin.com/in/akula-praveen-yadav-524a54400",
  instagram: "https://www.instagram.com/praveen.digital.solution/",
  instagramHandle: "@praveen.digital.solution",
  instagramQr: "/images/instagram-qr.jpg",
  mission: "To help small businesses, startups, entrepreneurs and local companies establish their online presence and grow through professional websites, Google Business Profile, SEO and Google Ads.",
  copyright: `© ${new Date().getFullYear()} Praveen Digital Solutions. All Rights Reserved.`,
};

export const SERVICES_DATA = [
  {
    id: "website-development",
    slug: "website-development",
    title: "Website Development",
    shortDesc: "High-performance, modern, and mobile-responsive websites engineered to convert visitors into loyal clients.",
    longDesc: "We craft custom, lightning-fast, and search-optimized websites tailored specifically to your business goals. From single-page landing pages to comprehensive multi-page corporate portals and custom web applications, we focus on user experience, modern aesthetics, and lead conversion.",
    icon: "Globe",
    badge: "Core Service",
    startingPrice: "₹5,000",
    features: [
      "Custom Business & Corporate Websites",
      "Mobile-First Responsive Layouts (100% device compatible)",
      "Speed & Performance Optimization (<2s load time)",
      "Search Engine Friendly (SEO-ready architecture)",
      "Direct WhatsApp & One-Click Call Integration",
      "Interactive Contact & Lead Generation Forms",
      "Modern UI/UX with smooth transitions and animations",
      "E-commerce & Product Catalogs",
      "Website Redesign & Modernization"
    ],
    offerings: [
      { name: "Business & Company Websites", desc: "Build authority and showcase your enterprise with elegant multi-page websites." },
      { name: "Personal & Professional Portfolios", desc: "Position your personal brand, skills, and case studies to win high-value opportunities." },
      { name: "High-Converting Landing Pages", desc: "Focused single-page sales and lead-capture funnels for marketing campaigns." },
      { name: "E-Commerce & Digital Catalogs", desc: "Seamless product showcases with order enquiry, payment, and WhatsApp checkout." },
      { name: "Website Redesign & Modernization", desc: "Upgrade your outdated website into a sleek, mobile-optimized modern powerhouse." },
      { name: "Custom Web Applications", desc: "Dynamic web apps tailored with tailored workflows and responsive frontends." }
    ],
    industrySpecializations: [
      "Ambulance Services", "Hospitals & Clinics", "Salons & Beauty Parlours", 
      "Restaurants & Cafes", "Hotels & Stays", "Car Travels & Taxi Operators", 
      "Travel Agencies & Tour Operators", "Real Estate Agencies", "Coaching & Tuition Centres", 
      "Gyms & Fitness Centres", "Retail & Departmental Shops", "Interior Design Studios", 
      "Home Service Providers (Electrical, Plumbing, AC Repair)"
    ]
  },
  {
    id: "google-business-profile",
    slug: "google-business-profile",
    title: "Google Business Profile",
    shortDesc: "Dominate Google Maps and local search results when local customers search for your services in Hyderabad and Telangana.",
    longDesc: "Your Google Business Profile (formerly Google My Business) is your local storefront on Google Maps. We optimize your business listing according to Google's official policies to maximize your visibility, attract phone calls, and build local reputation. (We never promise fake verification or guaranteed #1 rankings, as those violate Google terms).",
    icon: "MapPin",
    badge: "Local Growth",
    startingPrice: "₹2,000",
    features: [
      "Complete Google Business Profile Setup & Verification Guidance",
      "Accurate Business Information Optimization (NAP Consistency)",
      "High-Impact Primary & Secondary Category Selection",
      "Product & Service Catalog Configuration with Pricing",
      "Geo-Tagged High-Resolution Business Photos & Logo Upload",
      "Service Area Definition (Hyderabad, Telangana & Target Regions)",
      "Website Link & Click-to-Call Link Integration",
      "Ongoing Profile Updates & Google Posts Publishing",
      "Professional Review Response Strategy Assistance"
    ],
    policyNotice: "We strictly adhere to Google's official guidelines. We believe in organic optimization and authentic customer reviews; we do not engage in misleading practices or false ranking guarantees."
  },
  {
    id: "google-ads",
    slug: "google-ads",
    title: "Google Ads (PPC)",
    shortDesc: "Drive instant, high-intent traffic and inbound phone calls through targeted Google Search Ads.",
    longDesc: "Get your business in front of customers at the exact moment they are searching for what you offer. We design, launch, and optimize high-ROI Google Search and Call-Only campaigns that eliminate wasted spend and maximize qualified leads.",
    icon: "Target",
    badge: "Instant Leads",
    startingPrice: "₹2,000 setup fee",
    features: [
      "Targeted Google Search & Call-Only Ad Campaigns",
      "In-Depth Keyword Research & Intent Mapping",
      "Negative Keyword Planning (Blocks unwanted click spend)",
      "Compelling Ad Copywriting with Clear Call-to-Actions",
      "Ad Assets Setup (Call, Sitelink, Location, Structured Snippets)",
      "Conversion Tracking & Call Tracking Setup",
      "Geo-Targeting (Hyderabad, specific pin codes, or all India)",
      "Continuous Campaign Bid & Budget Optimization",
      "Transparent Weekly & Monthly Performance Reports"
    ],
    budgetNotice: "Important: Advertising click budget paid directly to Google is separate from our agency management/setup fee. We guide you on setting an optimal budget based on your industry competition."
  },
  {
    id: "seo-services",
    slug: "seo-services",
    title: "SEO Services",
    shortDesc: "Improve your search engine rankings organically and secure sustainable, long-term business enquiries.",
    longDesc: "Search Engine Optimization (SEO) is an ongoing strategy that builds lasting authority for your website on Google search. We implement white-hat on-page, local, and technical SEO strategies so your business gets discovered ahead of your competitors.",
    icon: "TrendingUp",
    badge: "Organic Authority",
    startingPrice: "₹3,000 / month",
    features: [
      "Comprehensive Industry & Competitor Keyword Research",
      "On-Page SEO (Meta titles, descriptions, headers, content hierarchy)",
      "Technical SEO (Robots.txt, Sitemap.xml, Canonical tags, SSL)",
      "Local SEO Optimization for Hyderabad & Telangana Searches",
      "Core Web Vitals & Website Speed Optimization",
      "Google Search Console & Google Analytics 4 Setup",
      "Image Compression & Semantic Alt-Tag Structuring",
      "Search-Friendly Semantic Content Recommendations",
      "Monthly Ranking & Organic Impression Reports"
    ],
    timelineNotice: "SEO is a sustainable, compounding strategy. Noticeable organic ranking improvements typically mature within 3 to 6 months of continuous optimization."
  },
  {
    id: "additional-services",
    slug: "website-development",
    title: "Additional Digital Services",
    shortDesc: "End-to-end technical support, maintenance, and growth integrations to keep your website fast and secure.",
    longDesc: "A great website requires dependable technical backing. We assist you with domain registration, cloud hosting setup, speed upgrades, instant WhatsApp chat widgets, and regular security maintenance so you can focus entirely on running your business.",
    icon: "Wrench",
    badge: "Full Support",
    startingPrice: "On Demand",
    features: [
      "Monthly Website Maintenance & Security Checks",
      "Domain Name Registration & DNS Configuration Guidance",
      "High-Speed Cloud Hosting Setup Assistance",
      "Direct Floating WhatsApp Chat & Click-to-Call Integration",
      "Custom Lead Capture & Booking Enquiry Forms",
      "Website Speed Improvements & Script Minification",
      "High-Converting Landing Page Design for Special Offers",
      "SSL Certificate & Security Protocol Configuration"
    ]
  }
];

export const PORTFOLIO_PROJECTS = [
  {
    id: "ambulance-service",
    title: "Ambulance Emergency Service Website",
    category: "Healthcare & Emergency",
    type: "Client Project",
    isLiveProject: true,
    tag: "Real Client Website",
    description: "A fast, mission-critical ambulance service website designed for rapid emergency calling, instant WhatsApp assistance, and transparent hospital transfer details across Telangana.",
    features: [
      "Instant Emergency 1-Click Dialing Button",
      "Direct WhatsApp Dispatch Integration",
      "Comprehensive 24/7 Service Area Coverage Details",
      "Oxygen, ICU & Ventilator Ambulance Information",
      "Mobile-Optimized Fast Loading (<1.5s)"
    ],
    technologies: ["React", "Tailwind CSS", "Lucide Icons", "Mobile-First UX", "Call Schema"],
    previewImage: "/projects/ambulance.svg",
    gradient: "from-red-600/20 via-slate-900 to-slate-950",
    accentColor: "#ef4444",
    demoUrl: null,
    enquiryText: "Request a Healthcare/Ambulance Website"
  },
  {
    id: "glow-tone-salon",
    title: "Glow Tone Family Salon",
    category: "Beauty & Wellness",
    type: "Client Project",
    isLiveProject: true,
    tag: "Real Client Website",
    description: "An elegant, modern family salon website showcasing bridal makeovers, haircut packages, beauty treatments, and direct appointment booking enquiry via WhatsApp.",
    features: [
      "Visual Service & Styling Showcase Gallery",
      "Interactive Price & Package Breakdown",
      "Direct Appointment Booking Enquiry",
      "Salon Location & Google Maps Link",
      "Mobile-Responsive Elegant Typography"
    ],
    technologies: ["React", "Modern CSS", "Responsive Grid", "WhatsApp API", "Local SEO"],
    previewImage: "/projects/salon.svg",
    gradient: "from-pink-600/20 via-slate-900 to-slate-950",
    accentColor: "#ec4899",
    demoUrl: null,
    enquiryText: "Request a Salon/Beauty Website"
  },
  {
    id: "car-travels-demo",
    title: "Car Travels & Taxi Rental Web Platform",
    category: "Travel & Transport",
    type: "Demo Project",
    isLiveProject: false,
    tag: "Sample Demo Concept",
    description: "A high-conversion rental showcase demo built for car travels, self-drive rentals, airport transfers, and outstation trips with instant vehicle selection and fare enquiry.",
    features: [
      "Vehicle Fleet Showcase (Sedan, SUV, Luxury)",
      "Airport Pickup & Drop Tariff Calculator",
      "Local & Outstation Tour Package Details",
      "Direct Fare Enquiry & Booking Request Form",
      "Instant Call & WhatsApp Booking Triggers"
    ],
    technologies: ["React", "Tailwind CSS", "Interactive Filters", "Lead Forms"],
    previewImage: "/projects/car-travels.svg",
    gradient: "from-amber-600/20 via-slate-900 to-slate-950",
    accentColor: "#f59e0b",
    demoUrl: null,
    enquiryText: "Request a Car Travels Website"
  },
  {
    id: "travel-agency-demo",
    title: "Modern Travel Agency & Tour Operator Website",
    category: "Tours & Travel",
    type: "Demo Project",
    isLiveProject: false,
    tag: "Sample Demo Concept",
    description: "A visually rich tour platform demo presenting domestic holiday packages, international itineraries, day tours, and customizable booking inquiry forms.",
    features: [
      "Destination Showcase (Kerala, Goa, Dubai, Bali)",
      "Day-wise Itinerary Displays & Hotel Inclusions",
      "Curated Tour Package Visual Gallery",
      "Custom Trip Query & Group Booking Form",
      "Integrated WhatsApp Travel Consultant Connect"
    ],
    technologies: ["React", "Lucide Icons", "Card Carousels", "Responsive Layout"],
    previewImage: "/projects/travel.svg",
    gradient: "from-teal-600/20 via-slate-900 to-slate-950",
    accentColor: "#14b8a6",
    demoUrl: null,
    enquiryText: "Request a Travel Agency Website"
  },
  {
    id: "restaurant-demo",
    title: "Gourmet Restaurant & Cafe Website",
    category: "Hospitality & Food",
    type: "Demo Project",
    isLiveProject: false,
    tag: "Sample Demo Concept",
    description: "A mouth-watering restaurant website demo featuring digitized food menus, chef specials, high-resolution food galleries, and instant table reservation enquiries.",
    features: [
      "Categorized Digital Food & Beverage Menu",
      "Chef Specials & Daily Offers Highlight",
      "Interactive Table Reservation Enquiry Form",
      "Ambiance & Dining Area Photo Gallery",
      "Google Maps Location & Operating Hours"
    ],
    technologies: ["React", "Tailwind CSS", "Modal Menus", "Reservation Hooks"],
    previewImage: "/projects/restaurant.svg",
    gradient: "from-orange-600/20 via-slate-900 to-slate-950",
    accentColor: "#f97316",
    demoUrl: null,
    enquiryText: "Request a Restaurant Website"
  },
  {
    id: "coaching-institute-demo",
    title: "Educational Coaching Institute Platform",
    category: "Education & Academy",
    type: "Demo Project",
    isLiveProject: false,
    tag: "Sample Demo Concept",
    description: "A trustworthy academic website demo designed for coaching centres, competitive exam prep institutes, and private academies to generate student admissions.",
    features: [
      "Course Curriculum & Batch Schedule Display",
      "Faculty Credentials & Subject Specializations",
      "Student Admission Enquiry Form with Course Selection",
      "Downloadable Syllabus PDF trigger & WhatsApp Query",
      "Verified Student Success Milestones Layout"
    ],
    technologies: ["React", "Tailwind CSS", "Form Validation", "SEO Meta"],
    previewImage: "/projects/coaching.svg",
    gradient: "from-blue-600/20 via-slate-900 to-slate-950",
    accentColor: "#3b82f6",
    demoUrl: null,
    enquiryText: "Request a Coaching Institute Website"
  }
];

export const INDUSTRIES_SERVED = [
  {
    name: "Ambulance Services",
    icon: "HeartPulse",
    headline: "Fast, Emergency-Ready Websites That Save Lives",
    solution: "When emergencies occur, people need instant contact. We build ultra-fast ambulance websites featuring prominent one-click call buttons, GPS location coordinates, service coverage areas, and 24/7 WhatsApp dispatch links.",
    keyBenefits: ["Immediate click-to-call during golden hour", "Local service area transparency", "Trustworthy medical credential badges"]
  },
  {
    name: "Hospitals and Clinics",
    icon: "Stethoscope",
    headline: "Credibility & Patient Appointment Generation",
    solution: "Enable patients to explore medical specialties, doctor qualifications, clinic timings, and submit appointment requests seamlessly from any smartphone.",
    keyBenefits: ["Doctor profiles & department guides", "Online appointment booking enquiry", "Google Maps directions for patients"]
  },
  {
    name: "Salons and Beauty Parlours",
    icon: "Sparkles",
    headline: "Showcase Glamour & Book More Hair and Bridal Appointments",
    solution: "Display your bridal makeovers, haircut lookbooks, facial menus, and service packages with an attractive photo gallery and instant WhatsApp slot reservation.",
    keyBenefits: ["Visual transformation lookbooks", "Menu pricing transparency", "Direct WhatsApp slot booking"]
  },
  {
    name: "Restaurants and Hotels",
    icon: "UtensilsCrossed",
    headline: "Digitize Your Menu & Fill Tables Every Evening",
    solution: "Ditch outdated paper flyers. Let diners browse delicious food photos, view daily culinary specials, check prices, and reserve tables or order catering easily.",
    keyBenefits: ["Mobile-friendly digital food menu", "Table reservation enquiries", "High-res ambiance photography"]
  },
  {
    name: "Car Travels and Taxi Operators",
    icon: "Car",
    headline: "Generate Direct Fleet Bookings Without High Commission",
    solution: "Compete with aggregator apps by owning your direct booking website. Showcase your Sedans, Innovas, and Tempo Travellers with local and outstation pricing.",
    keyBenefits: ["Direct ride enquiries to your phone", "Airport transfer rate display", "No middleman platform commissions"]
  },
  {
    name: "Travel Agencies & Tour Operators",
    icon: "Palmtree",
    headline: "Inspire Wanderers & Convert Tour Enquiries",
    solution: "Present curated tour packages, itineraries, hotel details, and customer guarantees with immersive travel galleries and quick customized quote forms.",
    keyBenefits: ["Detailed itinerary cards", "Domestic & international package showcases", "Automated inquiry capture"]
  },
  {
    name: "Real Estate Agencies",
    icon: "Building2",
    headline: "Showcase Open Plots, Villas & Commercial Properties",
    solution: "Attract genuine property buyers and investors across Hyderabad and Telangana with verified plot layouts, floor plans, amenity highlights, and site visit booking.",
    keyBenefits: ["Property listings with high-res photos", "Brochure download captures", "Direct call connection for site visits"]
  },
  {
    name: "Coaching Centres & Academies",
    icon: "GraduationCap",
    headline: "Boost Student Admissions & Showcase Academic Excellence",
    solution: "Display upcoming batch timings, competitive exam courses (IIT, NEET, UPSC, SSC), faculty credentials, and facilitate seamless admission enquiries.",
    keyBenefits: ["Course syllabus overviews", "Batch timing announcements", "Parent & student inquiry collection"]
  },
  {
    name: "Gyms and Fitness Centres",
    icon: "Dumbbell",
    headline: "Turn Fitness Seekers Into Dedicated Members",
    solution: "Showcase your gym equipment, personal trainers, workout timings, membership fee tiers, and offer free trial workout passes through easy form submissions.",
    keyBenefits: ["Equipment & workout area gallery", "Membership plans & perks", "Free trial pass registration form"]
  },
  {
    name: "Retail Shops & Local Stores",
    icon: "ShoppingBag",
    headline: "Take Your Local Shop Online & Reach More Shoppers",
    solution: "Display your product inventory, seasonal discounts, customer reviews, and let local shoppers order or enquire through WhatsApp for doorstep delivery.",
    keyBenefits: ["Digital product catalog", "Local store discovery on Google", "Direct WhatsApp order placement"]
  },
  {
    name: "Interior Designers & Architects",
    icon: "Home",
    headline: "Stun Clients With Premium Design Portfolios",
    solution: "High-end clients judge interior designers by their aesthetic presentation. We craft bespoke portfolio layouts highlighting your residential and commercial projects.",
    keyBenefits: ["Luxury project gallery showcase", "Cost estimation calculator/form", "High-ticket client positioning"]
  },
  {
    name: "Electrical Services",
    icon: "Zap",
    headline: "Be The First Electrician Homeowners Call in Emergencies",
    solution: "When wiring shorts or urgent installations arise, customers search online. A swift local website establishes your emergency availability and certified skills.",
    keyBenefits: ["Instant emergency calling", "Transparent inspection charges", "Trust & safety certifications"]
  },
  {
    name: "Plumbing Services",
    icon: "Droplets",
    headline: "Win Local Home & Commercial Plumbing Contracts",
    solution: "Highlight your pipe repair, water heater installation, and drainage solutions with upfront service details and direct click-to-WhatsApp booking.",
    keyBenefits: ["Fast local service dispatch", "Customer trust indicators", "Click-to-call mobile buttons"]
  },
  {
    name: "Educational Institutions",
    icon: "BookOpen",
    headline: "Professional Portals for Schools & Colleges",
    solution: "Build institutional credibility with academic calendars, admission criteria, campus photo galleries, notices, and principal message sections.",
    keyBenefits: ["Official notice board system", "Online admission application forms", "Campus facility virtual tours"]
  },
  {
    name: "Small & Medium Businesses (SMBs)",
    icon: "Briefcase",
    headline: "Scale From a Local Shop to a Recognized Brand",
    solution: "Whatever your craft or business, a modern website elevates you from an informal provider to a credible, professional organization that customers trust.",
    keyBenefits: ["24/7 digital storefront", "Professional business email branding", "Greater competitive advantage"]
  }
];

export const PRICING_PACKAGES = [
  {
    id: "starter",
    name: "Starter Website",
    badge: "Budget-Friendly",
    price: "₹5,000",
    unit: "onwards",
    idealFor: "Small local businesses, individual professionals, and solo service providers seeking a clean online presence.",
    highlighted: false,
    features: [
      "Clean & Modern Single-Page Website",
      "100% Mobile & Tablet Responsive Layout",
      "Home, About, Services & Contact Sections",
      "Direct WhatsApp Chat Integration",
      "Instant One-Click Call Button",
      "Basic Contact Form with Email Forwarding",
      "Fast 2–3 Days Turnaround Time",
      "Social Media Profile Links"
    ],
    buttonText: "Choose Starter Plan"
  },
  {
    id: "business",
    name: "Business Website",
    badge: "Most Popular",
    price: "₹8,999",
    unit: "onwards",
    idealFor: "Growing businesses, clinics, salons, travel operators, and institutes wanting dedicated pages and lead capture.",
    highlighted: true,
    features: [
      "Up to 5 Dedicated Custom Pages",
      "Premium Agency UI/UX & Brand Styling",
      "Full Services & Portfolio Showcase",
      "Interactive Contact Form with Validation",
      "Integrated WhatsApp & Phone Call Triggers",
      "Basic On-Page SEO Setup (Titles & Meta)",
      "Google Maps Location Integration",
      "Speed Optimization & Clean Codebase",
      "5–7 Days Delivery Time"
    ],
    buttonText: "Choose Business Plan"
  },
  {
    id: "advanced",
    name: "Advanced Website",
    badge: "High Growth",
    price: "₹14,999",
    unit: "onwards",
    idealFor: "Enterprises, multi-service companies, e-commerce stores, and brands requiring custom features and high speed.",
    highlighted: false,
    features: [
      "Multi-Page Architecture (Unlimited Sections)",
      "Custom UI/UX with Advanced Animations",
      "Dynamic Product/Service Filtering",
      "Advanced Lead Capture & Quotation Forms",
      "Complete SEO-Friendly Architecture & Sitemaps",
      "E-Commerce / Catalog Inquiries Setup",
      "Performance Tuning for Core Web Vitals",
      "30 Days Post-Launch Maintenance Support",
      "Priority Development Support"
    ],
    buttonText: "Choose Advanced Plan"
  }
];

export const STANDALONE_SERVICES_PRICING = [
  {
    title: "Google Business Profile",
    price: "₹2,000",
    frequency: "one-time onwards",
    desc: "Complete setup, category tuning, business photos, geo-tagging, NAP optimization and verification guidance as per Google policies.",
    badge: "Local SEO"
  },
  {
    title: "Google Ads Setup (PPC)",
    price: "₹2,000",
    frequency: "setup fee onwards",
    desc: "Keyword research, negative keyword list, search & call-only ad copy, conversion tracking, and campaign launch. (Ad budget paid separately to Google).",
    badge: "Paid Leads"
  },
  {
    title: "Monthly SEO Services",
    price: "₹3,000",
    frequency: "/ month onwards",
    desc: "Continuous on-page optimization, local citation audit, technical fixes, search console management, and monthly ranking performance reports.",
    badge: "Organic Growth"
  }
];

export const DEVELOPMENT_STEPS = [
  {
    step: "01",
    title: "Understand Your Business",
    desc: "We discuss your business model, target audience, competitive advantages, and exact project goals over a direct call or WhatsApp consultation."
  },
  {
    step: "02",
    title: "Planning & Design",
    desc: "We plan your website structure, wireframes, color scheme, content hierarchy, and prepare modern UI layouts tailored to your brand identity."
  },
  {
    step: "03",
    title: "Development & Coding",
    desc: "We build your website using cutting-edge technologies (React, Vite, clean responsive CSS), ensuring lightning-fast speed, security, and mobile responsiveness."
  },
  {
    step: "04",
    title: "Review & Approval",
    desc: "We provide you with a live preview link. You review every section, provide feedback, and we implement all agreed adjustments before sign-off."
  },
  {
    step: "05",
    title: "Launch & Handover",
    desc: "We deploy the website to high-speed hosting, configure your custom domain, set up Google integrations, and deliver all credentials with instructions."
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Modern Website Designs",
    desc: "Every website is custom-crafted with modern layouts, high-converting typography, and engaging visuals that look like an enterprise agency.",
    icon: "Layout"
  },
  {
    title: "Mobile-Friendly Development",
    desc: "Over 80% of local visitors browse on smartphones. We ensure your website looks flawless on desktops, laptops, tablets, and phones.",
    icon: "Smartphone"
  },
  {
    title: "Affordable & Transparent Packages",
    desc: "Clear upfront pricing with no hidden charges. High-quality web development made accessible for small businesses and growing startups.",
    icon: "ShieldCheck"
  },
  {
    title: "Direct Founder Communication",
    desc: "Work directly with Akula Praveen Yadav. No dealing with junior account managers or endless email delays; quick decisions on WhatsApp.",
    icon: "PhoneCall"
  },
  {
    title: "Business-Focused Solutions",
    desc: "We do not just build pretty screens; we engineer sales funnels designed to generate phone inquiries, WhatsApp leads, and paying clients.",
    icon: "Briefcase"
  },
  {
    title: "Google Services Support",
    desc: "From Google Business Profile verification to Google Ads and Search Console, we set up all essential tools for local visibility.",
    icon: "Search"
  },
  {
    title: "SEO-Friendly Architecture",
    desc: "Clean semantic HTML, proper meta tags, optimized image sizing, and fast loading speeds to give you a head start on search engine rankings.",
    icon: "Rocket"
  },
  {
    title: "Ongoing Support & Maintenance",
    desc: "We stand by our work. Get prompt technical assistance, content updates, and maintenance support whenever your business grows.",
    icon: "Headphones"
  }
];
