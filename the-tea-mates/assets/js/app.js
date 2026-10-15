/**
 * THE TEA MATES - Core JavaScript Application
 * Franchise Platform, Store Locator, ROI Calculator & Menu Showcase
 */

// 1. STORE OUTLETS DATA
let OUTLETS_DATA = [
    {
        id: "rs-puram",
        name: "R S Puram Flagship Café",
        area: "R S Puram",
        address: "No. 42, D.B. Road (Near Light House Junction), R.S. Puram, Coimbatore - 641002",
        timing: "6:00 AM – 11:30 PM",
        phone: "+91 98432 10101",
        rating: "4.9",
        reviews: "680+",
        status: "Open Now",
        statusColor: "text-emerald-400 bg-emerald-950/60 border-emerald-800",
        type: "Café & Dine-in Lounge",
        features: ["Outdoor Seating", "AC Dine-in", "Bun Maska Special", "Late Night Hangout"],
        mapQuery: "DB+Road+RS+Puram+Coimbatore",
        badge: "⭐ Flagship Outlet"
    },
    {
        id: "sidhapuddur",
        name: "Sidhapuddur Express",
        area: "Sidhapuddur",
        address: "Avarampalayam Main Road, Near Sree Krishna Temple, Sidhapuddur, Coimbatore - 641044",
        timing: "6:00 AM – 11:00 PM",
        phone: "+91 98432 10102",
        rating: "4.8",
        reviews: "450+",
        status: "Open Now",
        statusColor: "text-emerald-400 bg-emerald-950/60 border-emerald-800",
        type: "Express Hub & Street Kiosk",
        features: ["Fast Takeaway", "Kulhad Dum Chai", "Samosa Counter", "Drive-by Chai"],
        mapQuery: "Sidhapuddur+Avarampalayam+Road+Coimbatore",
        badge: "🔥 High Footfall Hub"
    },
    {
        id: "vadacovai",
        name: "Vadacovai Campus Corner",
        area: "Vadacovai",
        address: "Near Vadakovai Flyover, Behind Govt Arts College Road, Vadacovai, Coimbatore - 641018",
        timing: "6:30 AM – 11:30 PM",
        phone: "+91 98432 10103",
        rating: "4.8",
        reviews: "520+",
        status: "Open Now",
        statusColor: "text-emerald-400 bg-emerald-950/60 border-emerald-800",
        type: "Youth Hangout & Bites",
        features: ["Student Hangout", "Iced Tea Specials", "Fast Snacks", "Spacious Patio"],
        mapQuery: "Vadakovai+Flyover+Coimbatore",
        badge: "🎓 Youth Favorite"
    },
    {
        id: "kanuvai",
        name: "Kanuvai Junction Point",
        area: "Kanuvai",
        address: "Thadagam Main Road, Near Kanuvai Bus Stop & Junction, Kanuvai, Coimbatore - 641108",
        timing: "5:45 AM – 11:00 PM",
        phone: "+91 98432 10104",
        rating: "4.8",
        reviews: "380+",
        status: "Open Now",
        statusColor: "text-emerald-400 bg-emerald-950/60 border-emerald-800",
        type: "Highway Chai & Snack Stop",
        features: ["Highway Pitstop", "Fresh Ginger Chai", "Hot Vadas & Puffs", "Easy Bike Parking"],
        mapQuery: "Kanuvai+Thadagam+Main+Road+Coimbatore",
        badge: "☕ Early Morning Brew"
    },
    {
        id: "gounder-mills",
        name: "Gounder Mills Hub",
        area: "Gounder Mills",
        address: "Mettupalayam Highway (Opp. Gounder Mills Petrol Station), Goundampalayam, Coimbatore - 641030",
        timing: "6:00 AM – 11:30 PM",
        phone: "+91 98432 10105",
        rating: "4.7",
        reviews: "410+",
        status: "Open Now",
        statusColor: "text-emerald-400 bg-emerald-950/60 border-emerald-800",
        type: "Express Café & Takeaway",
        features: ["Spacious Counter", "Osmania Biscuits", "Masala Chai", "Fast Service"],
        mapQuery: "Gounder+Mills+Mettupalayam+Road+Coimbatore",
        badge: "🛣️ Highway Transit"
    },
    {
        id: "peelamedu",
        name: "Peelamedu Tech Park",
        area: "Peelamedu",
        address: "Avinashi Road, Near PSG Tech & Hopes College Hub, Peelamedu, Coimbatore - 641004",
        timing: "Opening Q4 2026",
        phone: "+91 98432 10100",
        rating: "5.0",
        reviews: "New Launch",
        status: "Opening Soon",
        statusColor: "text-amber-400 bg-amber-950/60 border-amber-800",
        type: "Tech Corridor Café",
        features: ["Franchise Awarded", "AC Work-Café", "Cold Brew Bar", "Snacks Buffet"],
        mapQuery: "Peelamedu+Avinashi+Road+Coimbatore",
        badge: "🚀 Launching Next Month"
    },
    {
        id: "saravanampatti",
        name: "Saravanampatti IT Corridor",
        area: "Saravanampatti",
        address: "Sathy Road, Near CHIL SEZ IT Park Junction, Saravanampatti, Coimbatore - 641035",
        timing: "Opening Q4 2026",
        phone: "+91 98432 10100",
        rating: "5.0",
        reviews: "Upcoming",
        status: "Site Finalized",
        statusColor: "text-amber-400 bg-amber-950/60 border-amber-800",
        type: "24/7 IT Zone Model",
        features: ["24x7 Operations", "Midnight Sips", "Quick Bites", "Delivery Partner Hub"],
        mapQuery: "Saravanampatti+Sathy+Road+Coimbatore",
        badge: "💼 IT Park Expansion"
    }
];

// 2. SIGNATURE MENU DATA
let MENU_DATA = [
    {
        id: 1,
        category: "kadak-chai",
        name: "Special Dum Chai (Kulhad)",
        price: "₹20",
        tag: "Bestseller",
        desc: "Slow-brewed Assam tea simmered with fresh farm milk in traditional earthen clay pots.",
        calories: "95 kcal",
        veg: true,
        icon: "fa-mug-hot"
    },
    {
        id: 2,
        category: "kadak-chai",
        name: "Kadak Masala Chai",
        price: "₹25",
        tag: "Signature",
        desc: "Crushed cinnamon, cloves, black pepper, and green cardamom brewed to fiery perfection.",
        calories: "105 kcal",
        veg: true,
        icon: "fa-fire-flame-curved"
    },
    {
        id: 3,
        category: "kadak-chai",
        name: "Royal Elaichi Zafrani Chai",
        price: "₹30",
        tag: "Premium",
        desc: "Infused with Kashmiri saffron strands and fragrant Idukki cardamoms.",
        calories: "110 kcal",
        veg: true,
        icon: "fa-crown"
    },
    {
        id: 4,
        category: "kadak-chai",
        name: "Ginger Lemon Sulemani",
        price: "₹20",
        tag: "Healthy & Digest",
        desc: "Pure golden black tea infused with freshly grated ginger, mint leaves, and a lemon splash.",
        calories: "45 kcal",
        veg: true,
        icon: "fa-leaf"
    },
    {
        id: 5,
        category: "coolers",
        name: "Smoked Peach Iced Tea",
        price: "₹65",
        tag: "Trending",
        desc: "Slow-steeped Earl Grey tea shaken over ice with fresh peach pulp and mint leaves.",
        calories: "85 kcal",
        veg: true,
        icon: "fa-glass-water"
    },
    {
        id: 6,
        category: "coolers",
        name: "Chai Frappe with Coffee Crunch",
        price: "₹75",
        tag: "Youth Favorite",
        desc: "Creamy iced tea whipped with spiced milk foam, crushed cookies, and caramel drizzle.",
        calories: "180 kcal",
        veg: true,
        icon: "fa-snowflake"
    },
    {
        id: 7,
        category: "street-bites",
        name: "Irani Bun Maska & Jam",
        price: "₹45",
        tag: "Tea Mate Classic",
        desc: "Pillow-soft brioche bun smeared with dollops of salted Amul butter & mixed fruit jam.",
        calories: "220 kcal",
        veg: true,
        icon: "fa-bread-slice"
    },
    {
        id: 8,
        category: "street-bites",
        name: "Crispy Paneer Pocket Samosa (2 pcs)",
        price: "₹40",
        tag: "Crunchy",
        desc: "Golden crispy phyllo pastry triangles stuffed with spiced cottage cheese and green peas.",
        calories: "190 kcal",
        veg: true,
        icon: "fa-cookie-bite"
    },
    {
        id: 9,
        category: "street-bites",
        name: "Cheesy Corn Chilli Toast",
        price: "₹65",
        tag: "Café Special",
        desc: "Toasted garlic bread loaded with sweet corn, jalapeños, and gooey melted mozzarella.",
        calories: "240 kcal",
        veg: true,
        icon: "fa-pizza-slice"
    },
    {
        id: 10,
        category: "bakery",
        name: "Hyderabad Osmania Biscuits (4 pcs)",
        price: "₹25",
        tag: "Dip & Sip",
        desc: "Authentic melt-in-mouth sweet & salty shortbread biscuits made specifically for chai dipping.",
        calories: "140 kcal",
        veg: true,
        icon: "fa-cookie"
    },
    {
        id: 11,
        category: "bakery",
        name: "Spiced Masala Rusk Platter",
        price: "₹25",
        tag: "Crunchy Snack",
        desc: "Double-baked buttery rusks dusted with cumin and rock salt.",
        calories: "120 kcal",
        veg: true,
        icon: "fa-stroopwafel"
    },
    {
        id: 12,
        category: "bakery",
        name: "Warm Chocolate Walnut Brownie",
        price: "₹70",
        tag: "Sweet Bite",
        desc: "Decadent dark chocolate fudge brownie warmed with chocolate syrup.",
        calories: "260 kcal",
        veg: true,
        icon: "fa-cake-candles"
    }
];

// Initialize DOM elements when ready
document.addEventListener("DOMContentLoaded", async () => {
    initNavigation();
    await syncWebsiteData();
    renderOutlets("all");
    renderMenu("all");
    initRoiCalculator();
    initFranchiseForm();
    initFaqAccordion();
});

// Real-time synchronization with Admin Console & data.json
async function syncWebsiteData() {
    let synced = false;
    try {
        const res = await fetch("/api/data");
        if (res.ok) {
            const data = await res.json();
            if (data.outlets && data.outlets.length > 0) OUTLETS_DATA = data.outlets;
            if (data.menu && data.menu.length > 0) MENU_DATA = data.menu;
            if (data.settings) applySiteSettings(data.settings);
            localStorage.setItem("ttm_data", JSON.stringify(data));
            synced = true;
        }
    } catch (err) {}

    if (!synced) {
        const cached = localStorage.getItem("ttm_data");
        if (cached) {
            try {
                const data = JSON.parse(cached);
                if (data.outlets && data.outlets.length > 0) OUTLETS_DATA = data.outlets;
                if (data.menu && data.menu.length > 0) MENU_DATA = data.menu;
                if (data.settings) applySiteSettings(data.settings);
            } catch (err) {}
        }
    }
}

function applySiteSettings(s) {
    if (!s) return;
    const announceTxt = document.getElementById("announcement-text");
    if (announceTxt && s.announcementText) {
        announceTxt.innerHTML = `<strong class="font-black">Now Brewing:</strong> ${s.announcementText}`;
    }
    const announceBadge = document.getElementById("announcement-badge");
    if (announceBadge && s.announcementBadge) {
        announceBadge.textContent = s.announcementBadge;
    }
    if (s.contactPhone) {
        document.querySelectorAll(".site-phone-link").forEach(a => a.href = `tel:${s.contactPhone.replace(/\s+/g, '')}`);
        document.querySelectorAll(".site-phone-text").forEach(span => span.textContent = s.contactPhone);
    }
}

// Listen for live updates from Admin Console in another tab
window.addEventListener("storage", () => {
    syncWebsiteData().then(() => {
        renderOutlets("all");
        renderMenu("all");
    });
});

// 3. NAVIGATION & MOBILE MENU
function initNavigation() {
    const mobileBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileIcon = document.getElementById("mobile-menu-icon");
    const navLinks = document.querySelectorAll(".nav-link-item");

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const isHidden = mobileMenu.classList.toggle("hidden");
            if (mobileIcon) {
                if (isHidden) {
                    mobileIcon.classList.remove("fa-xmark");
                    mobileIcon.classList.add("fa-bars");
                } else {
                    mobileIcon.classList.remove("fa-bars");
                    mobileIcon.classList.add("fa-xmark");
                }
            }
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
                if (mobileIcon) {
                    mobileIcon.classList.remove("fa-xmark");
                    mobileIcon.classList.add("fa-bars");
                }
            });
        });

        // Close when clicking outside
        document.addEventListener("click", (e) => {
            if (!mobileMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
                if (!mobileMenu.classList.contains("hidden")) {
                    mobileMenu.classList.add("hidden");
                    if (mobileIcon) {
                        mobileIcon.classList.remove("fa-xmark");
                        mobileIcon.classList.add("fa-bars");
                    }
                }
            }
        });
    }

    // Sticky Navbar Background Effect on scroll
    window.addEventListener("scroll", () => {
        const header = document.getElementById("main-header");
        if (window.scrollY > 40) {
            header.classList.add("bg-[#09090b]/95", "backdrop-blur-md", "shadow-lg", "shadow-black/50");
        } else {
            header.classList.remove("bg-[#09090b]/95", "backdrop-blur-md", "shadow-lg", "shadow-black/50");
        }
    });
}

// 4. RENDER OUTLETS WITH FILTERS
function renderOutlets(filter = "all") {
    const container = document.getElementById("outlets-grid");
    if (!container) return;

    let filtered = OUTLETS_DATA;
    if (filter === "open") {
        filtered = OUTLETS_DATA.filter(o => o.status === "Open Now");
    } else if (filter === "upcoming") {
        filtered = OUTLETS_DATA.filter(o => o.status !== "Open Now");
    }

    container.innerHTML = filtered.map(outlet => `
        <div class="gradient-card-border rounded-2xl p-6 flex flex-col justify-between group hover:border-[#FFC107] transition-all duration-300">
            <div>
                <!-- Card Header -->
                <div class="flex items-start justify-between gap-3 mb-4">
                    <div>
                        <span class="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2 bg-[#FFC107]/10 text-[#FFC107] border border-[#FFC107]/20">
                            ${outlet.badge}
                        </span>
                        <h3 class="text-xl font-bold text-white group-hover:text-[#FFC107] transition-colors">
                            ${outlet.name}
                        </h3>
                        <p class="text-xs text-zinc-400 mt-1 flex items-center gap-1.5">
                            <i class="fa-solid fa-store text-[#FFC107]"></i>
                            ${outlet.type}
                        </p>
                    </div>
                    <span class="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${outlet.statusColor}">
                        <span class="w-2 h-2 rounded-full ${outlet.status === 'Open Now' ? 'bg-emerald-400 live-pulse' : 'bg-amber-400'}"></span>
                        ${outlet.status}
                    </span>
                </div>

                <!-- Address & Info -->
                <div class="space-y-2.5 text-sm text-zinc-300 my-4 border-y border-zinc-800/80 py-4">
                    <div class="flex items-start gap-2.5">
                        <i class="fa-solid fa-location-dot text-[#FFC107] mt-1 shrink-0"></i>
                        <p class="text-zinc-300 text-xs leading-relaxed">${outlet.address}</p>
                    </div>
                    <div class="flex items-center gap-2.5">
                        <i class="fa-regular fa-clock text-[#FFC107] shrink-0"></i>
                        <span class="text-xs text-zinc-400">Timings: <strong class="text-zinc-200">${outlet.timing}</strong></span>
                    </div>
                    <div class="flex items-center gap-2.5">
                        <i class="fa-solid fa-phone text-[#FFC107] shrink-0"></i>
                        <a href="tel:${outlet.phone}" class="text-xs text-zinc-300 hover:text-[#FFC107] transition-colors">${outlet.phone}</a>
                    </div>
                </div>

                <!-- Feature tags -->
                <div class="flex flex-wrap gap-1.5 mb-5">
                    ${outlet.features.map(f => `
                        <span class="text-[11px] bg-zinc-900/90 text-zinc-300 px-2.5 py-0.5 rounded-md border border-zinc-800">
                            ${f}
                        </span>
                    `).join('')}
                </div>
            </div>

            <!-- Action buttons -->
            <div class="pt-2 flex items-center gap-2">
                <a href="https://www.google.com/maps/search/?api=1&query=${outlet.mapQuery}" target="_blank" rel="noopener noreferrer" 
                   class="flex-1 py-2.5 px-3 rounded-xl bg-zinc-900 border border-zinc-700/80 hover:border-[#FFC107] text-white hover:text-[#FFC107] text-xs font-semibold flex items-center justify-center gap-2 transition-all">
                    <i class="fa-solid fa-diamond-turn-right text-[#FFC107]"></i>
                    Get Directions
                </a>
                <button onclick="openFranchiseModalWithLocation('${outlet.area}')" 
                        class="py-2.5 px-3 rounded-xl bg-[#FFC107]/10 hover:bg-[#FFC107] border border-[#FFC107]/30 text-[#FFC107] hover:text-black text-xs font-bold transition-all">
                    Franchise Nearby
                </button>
            </div>
        </div>
    `).join('');
}

window.filterOutlets = function(filterType, element) {
    document.querySelectorAll(".outlet-filter-btn").forEach(btn => {
        btn.classList.remove("bg-[#FFC107]", "text-black");
        btn.classList.add("bg-zinc-900", "text-zinc-400");
    });
    if (element) {
        element.classList.remove("bg-zinc-900", "text-zinc-400");
        element.classList.add("bg-[#FFC107]", "text-black");
    }
    renderOutlets(filterType);
};

// 5. RENDER MENU WITH TABS
function renderMenu(category = "all") {
    const container = document.getElementById("menu-grid");
    if (!container) return;

    let filtered = MENU_DATA;
    if (category !== "all") {
        filtered = MENU_DATA.filter(item => item.category === category);
    }

    container.innerHTML = filtered.map(item => `
        <div class="gradient-card-border rounded-2xl p-5 group flex flex-col justify-between hover:border-[#FFC107] transition-all">
            <div>
                <div class="flex items-start justify-between gap-3 mb-3">
                    <div class="w-10 h-10 rounded-xl bg-[#FFC107]/10 border border-[#FFC107]/30 flex items-center justify-center text-[#FFC107]">
                        <i class="fa-solid ${item.icon} text-lg"></i>
                    </div>
                    <div class="text-right">
                        <span class="text-2xl font-black text-[#FFC107] font-display">${item.price}</span>
                        <div class="text-[10px] text-zinc-500 font-medium">Incl. all taxes</div>
                    </div>
                </div>

                <div class="mb-2">
                    <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-amber-400 border border-amber-400/20">
                        ${item.tag}
                    </span>
                </div>

                <h4 class="text-lg font-bold text-white group-hover:text-[#FFC107] transition-colors mb-1">
                    ${item.name}
                </h4>
                <p class="text-xs text-zinc-400 leading-relaxed mb-4">
                    ${item.desc}
                </p>
            </div>

            <div class="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                <span class="flex items-center gap-1.5 text-emerald-400">
                    <span class="w-2 h-2 rounded-full bg-emerald-400"></span> 100% Pure Veg
                </span>
                <span class="text-zinc-500">${item.calories}</span>
            </div>
        </div>
    `).join('');
}

window.filterMenu = function(cat, element) {
    document.querySelectorAll(".menu-tab-btn").forEach(btn => {
        btn.classList.remove("bg-[#FFC107]", "text-black");
        btn.classList.add("bg-zinc-900", "text-zinc-400");
    });
    if (element) {
        element.classList.remove("bg-zinc-900", "text-zinc-400");
        element.classList.add("bg-[#FFC107]", "text-black");
    }
    renderMenu(cat);
};

// 6. INTERACTIVE ROI CALCULATOR
function initRoiCalculator() {
    const cupsInput = document.getElementById("roi-cups");
    const cupPriceInput = document.getElementById("roi-cup-price");
    const snacksInput = document.getElementById("roi-snacks");
    const snackPriceInput = document.getElementById("roi-snack-price");

    if (!cupsInput) return;

    function recalculate() {
        const cups = parseInt(cupsInput.value, 10);
        const cupPrice = parseInt(cupPriceInput.value, 10);
        const snacks = parseInt(snacksInput.value, 10);
        const snackPrice = parseInt(snackPriceInput.value, 10);

        // Update Labels
        document.getElementById("roi-cups-val").textContent = `${cups} cups`;
        document.getElementById("roi-cup-price-val").textContent = `₹${cupPrice}`;
        document.getElementById("roi-snacks-val").textContent = `${snacks} orders`;
        document.getElementById("roi-snack-price-val").textContent = `₹${snackPrice}`;

        // Math
        const dailyTeaRev = cups * cupPrice;
        const dailySnackRev = snacks * snackPrice;
        const totalDailyRev = dailyTeaRev + dailySnackRev;
        const monthlyTurnover = totalDailyRev * 30;

        // Estimated Costs (Raw ingredients ~32% for tea & 38% for snacks, approx 35% overall)
        const grossMargin = 0.65; // 65% gross margin
        const grossProfit = monthlyTurnover * grossMargin;

        // Approximate OPEX (Rent ₹18k-25k, 2-3 Staff ₹26k-34k, Power/Gas/Packaging ₹12k)
        // Adjust opex lightly with scale
        const estimatedRent = 20000;
        const estimatedStaff = cups > 600 ? 36000 : 25000;
        const estimatedUtilities = Math.round(monthlyTurnover * 0.05);
        const totalOpex = estimatedRent + estimatedStaff + estimatedUtilities;

        const netMonthlyProfit = Math.max(0, Math.round(grossProfit - totalOpex));
        const estimatedAnnualProfit = netMonthlyProfit * 12;

        // Based on typical Kiosk investment of ~₹5,50,000
        const kioskInvestment = 550000;
        const paybackMonths = netMonthlyProfit > 0 ? (kioskInvestment / netMonthlyProfit).toFixed(1) : "N/A";

        // Display results with animation
        document.getElementById("res-daily-rev").textContent = `₹${totalDailyRev.toLocaleString('en-IN')}`;
        document.getElementById("res-monthly-rev").textContent = `₹${monthlyTurnover.toLocaleString('en-IN')}`;
        document.getElementById("res-monthly-profit").textContent = `₹${netMonthlyProfit.toLocaleString('en-IN')}`;
        document.getElementById("res-annual-profit").textContent = `₹${estimatedAnnualProfit.toLocaleString('en-IN')}`;
        document.getElementById("res-payback-months").textContent = `${paybackMonths} Months`;
        
        const marginPct = monthlyTurnover > 0 ? Math.round((netMonthlyProfit / monthlyTurnover) * 100) : 0;
        document.getElementById("res-profit-margin").textContent = `${marginPct}% Net Margin`;
    }

    [cupsInput, cupPriceInput, snacksInput, snackPriceInput].forEach(slider => {
        slider.addEventListener("input", recalculate);
    });

    recalculate();
}

// 7. FRANCHISE APPLICATION SUBMISSION & LEAD DISPATCH
function initFranchiseForm() {
    const form = document.getElementById("franchise-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("fran-name").value.trim();
        const phone = document.getElementById("fran-phone").value.trim();
        const email = document.getElementById("fran-email").value.trim();
        const location = document.getElementById("fran-location").value;
        const model = document.getElementById("fran-model").value;
        const budget = document.getElementById("fran-budget").value;
        const space = document.getElementById("fran-space").value;
        const remarks = document.getElementById("fran-remarks").value.trim();

        if (!name || !phone || !location) {
            alert("Please complete required fields (Name, Phone, and Preferred Location).");
            return;
        }

        // Generate Lead ID
        const leadId = "TTM-CB-" + Math.floor(1000 + Math.random() * 9000);

        const newLead = {
            id: leadId,
            name,
            phone,
            email: email || "N/A",
            location,
            model,
            budget,
            space,
            remarks,
            status: "New",
            date: new Date().toLocaleString()
        };

        // Persist to localStorage and backend
        try {
            const cached = JSON.parse(localStorage.getItem("ttm_data") || "{}");
            if (!cached.leads) cached.leads = [];
            cached.leads.unshift(newLead);
            localStorage.setItem("ttm_data", JSON.stringify(cached));

            fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newLead)
            }).catch(() => {});
        } catch (err) {}

        // Show Modal with Data
        showLeadSuccessModal(newLead);

        // Trigger confetti celebration if library is available
        if (typeof confetti === "function") {
            confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.6 }
            });
        }

        form.reset();
    });
}

// Modal helper
function showLeadSuccessModal(leadData) {
    const modal = document.getElementById("success-modal");
    if (!modal) return;

    document.getElementById("modal-lead-id").textContent = leadData.leadId;
    document.getElementById("modal-lead-name").textContent = leadData.name;
    document.getElementById("modal-lead-location").textContent = leadData.location;
    document.getElementById("modal-lead-model").textContent = leadData.model;

    // Build WhatsApp URL
    const message = `Hello TEA MATES Team! 👋%0A%0AI have submitted a franchise application online.%0A%0A*Lead ID:* ${leadData.leadId}%0A*Name:* ${encodeURIComponent(leadData.name)}%0A*Phone:* ${leadData.phone}%0A*Preferred Location:* ${encodeURIComponent(leadData.location)}%0A*Format:* ${encodeURIComponent(leadData.model)}%0A*Budget:* ${encodeURIComponent(leadData.budget)}%0A*Commercial Space:* ${encodeURIComponent(leadData.space)}%0A%0APlease connect with me for the franchise prospectus and site evaluation!`;
    const whatsappLink = `https://wa.me/919843210100?text=${message}`;

    const waBtn = document.getElementById("modal-whatsapp-btn");
    if (waBtn) {
        waBtn.href = whatsappLink;
    }

    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

window.closeSuccessModal = function() {
    const modal = document.getElementById("success-modal");
    if (modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    }
};

window.openFranchiseModalWithLocation = function(locationName) {
    const formSection = document.getElementById("franchise");
    if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth" });
        const locationDropdown = document.getElementById("fran-location");
        if (locationDropdown) {
            // Find option matching or select custom
            let matched = false;
            for (let i = 0; i < locationDropdown.options.length; i++) {
                if (locationDropdown.options[i].text.toLowerCase().includes(locationName.toLowerCase())) {
                    locationDropdown.selectedIndex = i;
                    matched = true;
                    break;
                }
            }
            if (!matched) {
                locationDropdown.value = "Other Location";
            }
            // highlight the form
            const formBox = document.getElementById("franchise-form-container");
            if (formBox) {
                formBox.classList.add("glow-yellow-md");
                setTimeout(() => formBox.classList.remove("glow-yellow-md"), 2500);
            }
        }
    }
};

// 8. FAQ ACCORDION
function initFaqAccordion() {
    const faqButtons = document.querySelectorAll(".faq-trigger");
    faqButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector(".faq-icon");
            const isOpen = !content.classList.contains("hidden");

            // Close all
            document.querySelectorAll(".faq-body").forEach(el => el.classList.add("hidden"));
            document.querySelectorAll(".faq-icon").forEach(ic => ic.style.transform = "rotate(0deg)");

            if (!isOpen) {
                content.classList.remove("hidden");
                if (icon) icon.style.transform = "rotate(180deg)";
            }
        });
    });
}

// 9. CLIENT-SIDE BROCHURE GENERATION & DOWNLOAD
window.downloadBrochure = function() {
    // Generate a sleek printable summary or prompt user
    const printWindow = window.open('', '_blank');
    const content = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>TEA MATES - Franchise Information Dossier 2026</title>
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #0c0c0e; color: #fff; padding: 40px; }
            .header { border-bottom: 3px solid #FFC107; padding-bottom: 20px; display: flex; justify-content: space-between; align-items: center; }
            h1 { color: #FFC107; margin: 0; font-size: 28px; letter-spacing: 1px; }
            .tagline { color: #aaa; font-size: 14px; margin-top: 5px; }
            .section { margin-top: 30px; background: #16161c; padding: 25px; border-radius: 12px; border: 1px solid #282834; }
            h2 { color: #FFC107; font-size: 20px; margin-top: 0; }
            table { width: 100%; border-collapse: collapse; margin-top: 15px; }
            th, td { padding: 12px; text-align: left; border-bottom: 1px solid #2d2d3d; font-size: 14px; }
            th { color: #FFC107; }
            .highlight { color: #FFC107; font-weight: bold; }
            .badge { display: inline-block; background: #FFC107; color: #000; padding: 4px 10px; border-radius: 4px; font-weight: bold; font-size: 12px; }
            .footer { margin-top: 40px; text-align: center; color: #888; font-size: 12px; }
            @media print {
                body { background: white; color: black; }
                .section { background: #f9f9f9; border-color: #ddd; }
                h1, h2, th, .highlight { color: #b8860b; }
            }
        </style>
    </head>
    <body>
        <div class="header">
            <div>
                <h1>TEA MATES</h1>
                <div class="tagline">YOUR TEA • YOUR MATE • YOUR MOMENT • Coimbatore Born & Growing</div>
            </div>
            <div class="badge">OFFICIAL FRANCHISE DOSSIER 2026</div>
        </div>

        <div class="section">
            <h2>1. Franchise Footprint in Coimbatore</h2>
            <p>Our thriving operational locations:</p>
            <ul>
                <li><strong>R S Puram:</strong> D.B. Road (Flagship Lounge & Café)</li>
                <li><strong>Sidhapuddur:</strong> Avarampalayam Main Road (High-Density Transit Hub)</li>
                <li><strong>Vadacovai:</strong> Behind Govt Arts College (Youth & Campus Favorite)</li>
                <li><strong>Kanuvai:</strong> Thadagam Main Road (Highway Pitstop & Morning Brew)</li>
                <li><strong>Gounder Mills:</strong> Mettupalayam Highway (Commercial Hub)</li>
                <li><strong>Expansion Pipeline:</strong> Peelamedu, Saravanampatti, Gandhipuram</li>
            </ul>
        </div>

        <div class="section">
            <h2>2. Franchise Formats & Investment Structure</h2>
            <table>
                <tr>
                    <th>Format</th>
                    <th>Area Required</th>
                    <th>Estimated Setup Cost</th>
                    <th>Gross Margin</th>
                    <th>Typical Payback</th>
                </tr>
                <tr>
                    <td><strong>Kiosk Express</strong></td>
                    <td>80 - 150 Sq. Ft.</td>
                    <td>₹4.5 - ₹6 Lakhs</td>
                    <td>65% - 70%</td>
                    <td>5 - 8 Months</td>
                </tr>
                <tr>
                    <td><strong>Café Classic</strong></td>
                    <td>200 - 450 Sq. Ft.</td>
                    <td>₹8 - ₹11 Lakhs</td>
                    <td>65% - 70%</td>
                    <td>7 - 10 Months</td>
                </tr>
                <tr>
                    <td><strong>Lounge & Bites</strong></td>
                    <td>500+ Sq. Ft.</td>
                    <td>₹14 - ₹18 Lakhs</td>
                    <td>65% - 72%</td>
                    <td>9 - 14 Months</td>
                </tr>
            </table>
        </div>

        <div class="section">
            <h2>3. Complete Brand Support Provided</h2>
            <ul>
                <li><strong>Zero Royalty Model:</strong> Keep 100% of your operating profits!</li>
                <li><strong>Site Selection & 3D Interior Architecture:</strong> Turnkey setup blueprint.</li>
                <li><strong>Proprietary Tea Powder & Spice Blend:</strong> Direct from master tea estates.</li>
                <li><strong>14-Day Barista & Staff Training:</strong> Master tea brewing, buns, & snacks.</li>
                <li><strong>Cloud Billing POS & Inventory App:</strong> Real-time sales tracking on mobile.</li>
                <li><strong>Hyperlocal Grand Opening Marketing:</strong> Social media ad boost & influencer visits.</li>
            </ul>
        </div>

        <div class="section">
            <h2>4. Next Steps & Franchise Onboarding</h2>
            <p>Ready to bring <strong>THE TEA MATES</strong> to your prime location? Contact our Expansion Team:</p>
            <p>📞 Phone / WhatsApp: <span class="highlight">+91 98432 10100 / +91 98432 10101</span></p>
            <p>✉️ Email: <span class="highlight">franchise@theteamates.in</span></p>
            <p>🏢 Head Office: D.B. Road, RS Puram, Coimbatore - 641002</p>
        </div>

        <div class="footer">
            <p>© 2026 THE TEA MATES. All Rights Reserved. Confidential Business Proposal.</p>
            <p>Press Ctrl+P to Print or Save as PDF.</p>
        </div>

        <script>
            window.onload = function() {
                window.print();
            }
        </script>
    </body>
    </html>
    `;
    printWindow.document.write(content);
    printWindow.document.close();
};
