const fs = require('fs');

const path = 'c:/Users/User/Desktop/Antigrav proj/proj2-inventory.html';
if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf-8');
    
    // Filters and categories
    content = content.replace(/data-filter="summit"/g, 'data-filter="sports"');
    content = content.replace(/>Summits<\/button>/g, '>Sports Cars</button>');
    content = content.replace(/data-filter="workshop"/g, 'data-filter="luxury"');
    content = content.replace(/>Workshops<\/button>/g, '>Luxury Sedans</button>');
    content = content.replace(/data-filter="social"/g, 'data-filter="suv"');
    content = content.replace(/>Socials<\/button>/g, '>SUVs</button>');
    content = content.replace(/data-filter="pitch"/g, 'data-filter="supercar"');
    content = content.replace(/>Pitch Nights<\/button>/g, '>Supercars</button>');

    content = content.replace(/data-category="summit"/g, 'data-category="sports"');
    content = content.replace(/data-category="workshop"/g, 'data-category="luxury"');
    content = content.replace(/data-category="social"/g, 'data-category="suv"');
    content = content.replace(/data-category="pitch"/g, 'data-category="supercar"');

    // Hero description
    content = content.replace(/From flagship summits to intimate workshops — find your next experience and connect with the community\./g, 'Explore our collection of meticulously curated sports cars, luxury sedans, and high-performance SUVs.');

    // Buttons and Actions
    content = content.replace(/Add to Calendar/g, 'Schedule Test Drive');
    content = content.replace(/Apply to Pitch/g, 'Inquire Now');
    content = content.replace(/Attend as Audience/g, 'View Details');
    content = content.replace(/Reserve Spot/g, 'Build Your Own');

    // Content fixes for Event 3
    content = content.replace(/Workshop: Brand Identity Masterclass/g, '2024 Mercedes-Benz S-Class');
    content = content.replace(/A hands-on session with award-winning brand strategist who will walk you\s*through building a memorable brand from scratch\. Bring your laptop and leave with a complete brand\s*kit\./g, 'The pinnacle of luxury sedans. Experience unparalleled comfort, advanced driver-assistance systems, and an executive rear-seat package.');
    content = content.replace(/📍 Creative Studio, 5th Floor/g, '📍 Showroom Floor');
    content = content.replace(/🕐 2:00 PM — 5:00 PM/g, 'V8 Biturbo');
    content = content.replace(/👥 30 spots/g, 'AWD');

    // Content fixes for Event 4
    content = content.replace(/Brands Mixer & Rooftop Social/g, '2025 Aston Martin DBX707');
    content = content.replace(/An informal evening to connect with fellow members over drinks, music, and\s*great conversation\. Bring a friend who might be a great fit for the community!/g, 'The world\'s most powerful luxury SUV. Uncompromising performance meets British craftsmanship inside a breathtaking silhouette.');
    content = content.replace(/📍 Skyline Rooftop Bar/g, '📍 Arriving Soon');
    content = content.replace(/🕐 7:00 PM — 10:00 PM/g, '707 hp V8');
    content = content.replace(/👥 Brands only/g, 'AWD');

    // Content fixes for Event 5
    content = content.replace(/Workshop: AI for Creators/g, '2024 McLaren 750S');
    content = content.replace(/Explore how AI tools can supercharge your creative workflow\. From\s*generative design to automated content — learn practical techniques you can use tomorrow\./g, 'Pure driver engagement. The lightest and most powerful series-production McLaren ever built.');
    
    // Bottom CTA
    content = content.replace(/Want to Host an <span class="gradient-text">Event<\/span>\?/g, 'Looking for Something <span class="gradient-text">Specific</span>?');
    content = content.replace(/We're always looking for speakers, sponsors, and collaborators\. Let's create something unforgettable\s*together\./g, 'Our sourcing team has access to private collections worldwide. Let us find your exact dream configuration.');
    
    // Some stragglers
    content = content.replace(/📍 Grand Convention Center/g, '📍 Showroom Floor');
    content = content.replace(/🕐 9:00 AM — 6:00 PM/g, 'Rear Engine');
    content = content.replace(/👥 500 spots/g, 'RWD');
    content = content.replace(/📍 Apex Auto HQ, Downtown/g, '📍 Showroom Floor');
    content = content.replace(/🕐 6:30 PM — 9:00 PM/g, 'Front Mid-Engine');
    content = content.replace(/👥 80 spots/g, 'RWD');
    content = content.replace(/📍 Tech Hub, Room 3A/g, '📍 Showroom Floor');
    content = content.replace(/🕐 10:00 AM — 1:00 PM/g, 'Mid-Engine');
    content = content.replace(/👥 40 spots/g, 'RWD');
    
    fs.writeFileSync(path, content, 'utf-8');
    console.log(`Updated inventory deep clean`);
}
