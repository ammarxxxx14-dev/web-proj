const fs = require('fs');

function updateFile(path, replacer) {
    if (fs.existsSync(path)) {
        let content = fs.readFileSync(path, 'utf-8');
        content = replacer(content);
        fs.writeFileSync(path, content, 'utf-8');
        console.log(`Updated ${path}`);
    }
}

// 1. Update About Page
updateFile('c:/Users/User/Desktop/Antigrav proj/proj2-about.html', (content) => {
    content = content.replace(/Elevate Club/g, 'Apex Auto');
    content = content.replace(/ELEVATE/g, 'APEX AUTO');
    content = content.replace(/Elevate/g, 'Apex Auto');
    content = content.replace(/proj2-events.html/g, 'proj2-inventory.html');
    content = content.replace(/Events/g, 'Inventory');
    content = content.replace(/proj2-members.html/g, 'proj2-brands.html');
    content = content.replace(/Members/g, 'Brands');
    
    // Hero
    content = content.replace(/Our Story/g, 'Our Heritage');
    content = content.replace(/Redefining what it means to connect, create, and grow together\./g, 'Curating the world\'s finest automobiles for those who demand excellence.');
    
    // Mission
    content = content.replace(/The Mission/g, 'Our Commitment');
    content = content.replace(/We started Apex Auto to bridge the gap between ambition and opportunity./g, 'We founded Apex Auto to curate a collection of absolute automotive perfection.');
    content = content.replace(/We believe that the right environment, combined with the right people, can accelerate growth exponentially./g, 'We believe that the right vehicle, combined with white-glove service, creates an unparalleled ownership experience.');
    
    content = content.replace(/Our Values/g, 'The Apex Standard');
    content = content.replace(/Excellence/g, 'Exclusivity');
    content = content.replace(/Community/g, 'Performance');
    content = content.replace(/Innovation/g, 'Integrity');
    content = content.replace(/We lift each other up. Collaboration over competition always\./g, 'We source only the highest performing vehicles, meticulously inspected and perfected.');
    content = content.replace(/Constantly pushing boundaries and embracing new ways of thinking\./g, 'Absolute transparency in pricing, history, and the condition of every vehicle.');
    
    // Timeline
    content = content.replace(/The Journey So Far/g, 'Our History');
    content = content.replace(/Apex Auto Founded/g, 'Showroom Opened');
    content = content.replace(/Started as a small group of 10 founders meeting in a coffee shop\./g, 'Started as a boutique collection of exclusive sports cars in a small bespoke garage.');
    content = content.replace(/First Major Summit/g, 'First Supercar Delivery');
    content = content.replace(/Hosted our first 500\+ attendee event with industry leaders\./g, 'Delivered our first limited-run hypercar to a valued collector.');
    content = content.replace(/Global Expansion/g, 'National Expansion');
    content = content.replace(/Opened chapters in 12 major cities worldwide\./g, 'Expanded our delivery network nationwide to reach discerning enthusiasts.');
    
    // Team
    content = content.replace(/Leadership Team/g, 'Our Experts');
    content = content.replace(/Founder & CEO/g, 'Dealer Principal');
    content = content.replace(/Head of Operation/g, 'Head of Sales');
    content = content.replace(/Community Director/g, 'Service Director');
    
    content = content.replace(/Book Test Drive/g, 'Join Now'); // Fix a possible mistake from before if any
    
    return content;
});

// 2. Update Inventory Page
updateFile('c:/Users/User/Desktop/Antigrav proj/proj2-inventory.html', (content) => {
    content = content.replace(/Elevate Club/g, 'Apex Auto');
    content = content.replace(/ELEVATE/g, 'APEX AUTO');
    content = content.replace(/Elevate/g, 'Apex Auto');
    content = content.replace(/proj2-events.html/g, 'proj2-inventory.html');
    content = content.replace(/Events/g, 'Inventory');
    content = content.replace(/proj2-members.html/g, 'proj2-brands.html');
    content = content.replace(/Members/g, 'Brands');
    
    content = content.replace(/Upcoming Inventory/g, 'Current Inventory');
    content = content.replace(/Learn, connect, and grow with our curated calendar./g, 'Browse our exclusive collection of high-performance and luxury vehicles.');
    
    // Replace event cards with car inventory cards
    content = content.replace(/Mar 2026/g, 'New Arrival');
    content = content.replace(/Innovation Summit/g, '2026 Porsche 911 GT3');
    content = content.replace(/Our flagship annual conference featuring keynotes from industry veterans./g, '502 hp | 3.2s 0-60mph | $182,900');
    content = content.replace(/Register Now/g, 'Order Now');
    
    content = content.replace(/Apr 2026/g, 'Featured');
    content = content.replace(/Startup Pitch Night/g, '2025 Ferrari Roma');
    content = content.replace(/Watch 5 promising startups pitch to our panel of investors./g, '612 hp | 8-Speed Dual-Clutch | $243,360');
    
    content = content.replace(/May 2026/g, 'Just In');
    content = content.replace(/Design Systems Workshop/g, '2024 Mercedes-AMG G63');
    content = content.replace(/A deep dive into creating scalable design systems for modern apps./g, '577 hp | BiTurbo V8 | $179,000');
    
    return content;
});

