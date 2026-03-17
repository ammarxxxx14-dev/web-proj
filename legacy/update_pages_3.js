const fs = require('fs');

function updateFile(path, replacer) {
    if (fs.existsSync(path)) {
        let content = fs.readFileSync(path, 'utf-8');
        content = replacer(content);
        fs.writeFileSync(path, content, 'utf-8');
        console.log(`Updated ${path}`);
    }
}

// 1. Specific cleanup for Brands
updateFile('c:/Users/User/Desktop/Antigrav proj/proj2-brands.html', (content) => {
    content = content.replace(/Community Directory/g, 'Showcase');
    content = content.replace(/Member Spotlight/g, 'Brand Showcase');
    content = content.replace(/Brandship Perks/g, 'Ownership Perks');
    content = content.replace(/What Brands Get/g, 'What Owners Get');
    content = content.replace(/Become a <span class="gradient-text">Member<\/span>/g, 'Join the <span class="gradient-text">Family</span>');
    content = content.replace(/Applications are open for the Spring 2026 cohort\. Limited spots — apply now and join the movement\./g, 'Explore our collection and discover the thrill of uncompromising performance.');
    content = content.replace(/✦ Apply Now/g, '✦ View Inventory');
    content = content.replace(/Co-Working Access/g, 'Concierge Service');
    content = content.replace(/Free access to co-working spaces in all 12 chapter cities\./g, '24/7 priority support and personalized assistance.');
    content = content.replace(/1-on-1 Mentorship/g, 'Track Days');
    content = content.replace(/Get paired with experienced mentors in your field\./g, 'Exclusive invitations to private track events.');
    content = content.replace(/Priority Event Access/g, 'VIP Events');
    content = content.replace(/First access and discounts for all workshops, summits, and socials\./g, 'First access to unveilings and luxury rallies.');
    content = content.replace(/Startup Funding/g, 'Flexible Financing');
    content = content.replace(/Apply for micro-grants and connect with investor networks\./g, 'Tailored purchasing and leasing options.');
    content = content.replace(/Learning Library/g, 'Driving Clinics');
    content = content.replace(/Exclusive access to courses, recordings, and resource packs\./g, 'Advanced performance driving instruction.');
    content = content.replace(/Global Network/g, 'Global Delivery');
    content = content.replace(/Connect with members worldwide through our private platform\./g, 'Secure worldwide delivery to any location.');
    
    // Member profiles fixes
    content = content.replace(/member-avatar/g, 'brand-avatar');
    content = content.replace(/member-card/g, 'brand-card');
    content = content.replace(/members-grid/g, 'brands-grid');
    
    content = content.replace(/CEO, NeuralStack/g, 'Legendary Sports Cars');
    content = content.replace(/Lead Maranello, Italy, Glint/g, 'Italian Mastery');
    content = content.replace(/Sant'Agata Bolognese, Italy, Horizon/g, 'Raging Bull');
    content = content.replace(/Founder, Studio Bloom/g, 'Aston Martin');
    content = content.replace(/CTO, PayLocal/g, 'McLaren');
    content = content.replace(/Staff Engineer, CloudNova/g, 'Mercedes-AMG');
    
    content = content.replace(/Dana Okafor/g, 'Aston Martin');
    content = content.replace(/Tomás Reyes/g, 'McLaren');
    content = content.replace(/Nadia Volkov/g, 'Mercedes-AMG');
    
    // Clear out old tags
    content = content.replace(/<span class="skill-tag">.*?<\/span>\s*/g, '');
    
    return content;
});

// 2. Cleanup for Inventory
updateFile('c:/Users/User/Desktop/Antigrav proj/proj2-inventory.html', (content) => {
    content = content.replace(/RSVP/g, 'Inquire');
    content = content.replace(/Register Now/g, 'Order Now');
    content = content.replace(/Join us at/g, 'Available at');
    content = content.replace(/Speaker/g, 'Model');
    return content;
});

