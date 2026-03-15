const fs = require('fs');

const htmlPath = 'c:/Users/User/Desktop/Antigrav proj/proj2.html';
let content = fs.readFileSync(htmlPath, 'utf-8');

// General Branding
content = content.replace(/Elevate Club — Join the Movement/g, 'Apex Auto — Premium Dealership');
content = content.replace(/Elevate Club/g, 'Apex Auto');
content = content.replace(/ELEVATE/g, 'APEX AUTO');
content = content.replace(/Elevate/g, 'Apex Auto');

// Nav Links
content = content.replace(/proj2-events.html/g, 'proj2-inventory.html');
content = content.replace(/Events/g, 'Inventory');
content = content.replace(/proj2-members.html/g, 'proj2-brands.html');
content = content.replace(/Members/g, 'Brands');
content = content.replace(/"btn btn-primary">Join Now</g, '"btn btn-primary">Book Test Drive<');

// Hero Section
content = content.replace(/Now accepting new members for 2026/g, 'Explore our 2026 Premium Vehicle Lineup');
content = content.replace(/Where Ambition<br>Meets <span class="gradient-text">Community<\/span>/g, 'Drive Your<br><span class="gradient-text">Dream Car<\/span>');
content = content.replace(/Join an exclusive network of creators, innovators, and leaders\.\s*Build meaningful connections, grow your skills, and unlock\s*opportunities that matter\./g, 'Discover an exclusive collection of high-performance and luxury vehicles. Book a test drive, customize your build, and elevate your driving experience.');
content = content.replace(/✦ Become a Member/g, '✦ View Inventory');
content = content.replace(/proj2-login\.html/g, 'proj2-inventory.html'); // The Hero btn goes to inventory
// Only the hero button, we should fix other links manually if needed. Wait, let me be careful.
// Revert hero button link to what it actually is in the original string:
content = content.replace(/<a href="proj2-inventory\.html" class="btn btn-primary btn-lg">✦ View Inventory<\/a>/g, '<a href="proj2-inventory.html" class="btn btn-primary btn-lg">✦ View Inventory</a>');

// Stats
content = content.replace(/<div class="label">Members<\/div>/g, '<div class="label">Happy Clients</div>');
content = content.replace(/<div class="label">Events \/ Year<\/div>/g, '<div class="label">Vehicles in Stock</div>');
content = content.replace(/<div class="number" data-target="52" data-suffix=""><\/div>/g, '<div class="number" data-target="150" data-suffix="+"></div>');
content = content.replace(/<div class="label">Chapters<\/div>/g, '<div class="label">Partner Brands</div>');

// Features
content = content.replace(/Everything you need to level up/g, 'Everything you need to hit the road');
content = content.replace(/Powerful Networking/g, 'Premium Selection');
content = content.replace(/Connect with driven individuals across industries. Our curated mixers and mentorship programs create\s*lasting professional relationships\./g, 'Access an exclusive inventory of supercars, luxury sedans, and high-performance SUVs curated for driving enthusiasts.');
content = content.replace(/Skill Workshops/g, 'Bespoke Customization');
content = content.replace(/Weekly workshops led by industry experts covering leadership, technology, design, entrepreneurship,\s*and creative disciplines\./g, 'Tailor your dream car with factory-direct customization options. Expert advisors will guide you through every choice.');
content = content.replace(/Launch Support/g, 'White-Glove Delivery');
content = content.replace(/From idea to execution — access funding resources, co-working spaces, and a community of supporters\s*to bring your vision to life\./g, 'Experience seamless purchasing and white-glove home delivery, ensuring your new vehicle arrives in pristine condition.');

// Events -> Inventory preview
content = content.replace(/What's Coming/g, 'Featured Vehicles');
content = content.replace(/Upcoming Events<\/h2>/g, 'Latest Arrivals</h2>');
content = content.replace(/Don't miss out on our next gatherings — <a href="proj2-inventory\.html"\s*style="color:var\(--clr-accent\); text-decoration:none;">see all events →<\/a>/g, 'Don\'t miss out on our latest stock — <a href="proj2-inventory.html" style="color:var(--clr-accent); text-decoration:none;">View all vehicles →</a>');

content = content.replace(/<div class="day">22<\/div>\s*<div class="month">MAR<\/div>/g, '<div class="day">V8</div><div class="month">Engine</div>');
content = content.replace(/Innovation Summit 2026/g, '2026 Porsche 911 GT3');
content = content.replace(/Keynotes, panels & networking — a full-day experience/g, '502 hp | 0-60 in 3.2s | PDK Transmission');

content = content.replace(/<div class="day">05<\/div>\s*<div class="month">APR<\/div>/g, '<div class="day">V12</div><div class="month">Engine</div>');
content = content.replace(/Startup Pitch Night/g, '2025 Ferrari Roma');
content = content.replace(/Present your idea to investors and fellow founders/g, '612 hp | 0-60 in 3.4s | 8-Speed Dual-Clutch');

content = content.replace(/(<span class="event-tag) open(">Open<\/span>)/g, '$1 open">Available</span>');

// Testimonials
content = content.replace(/Member Stories/g, 'Client Stories');
content = content.replace(/What our members say/g, 'What our drivers say');
content = content.replace(/meet all members/g, 'view all brands');
content = content.replace(/completely changed my trajectory\. I found my co-founder at a mixer and we've been\s*building together ever since\./g, 'delivered absolute perfection. The buying process was incredibly smooth, and my new GT3 was delivered right to my driveway.');
content = content.replace(/Tech Entrepreneur/g, 'Porsche Enthusiast');
content = content.replace(/The workshops are incredible — practical, engaging, and always relevant\. It's the best\s*investment I've made in my growth\./g, 'The detailing and post-sale support are unmatched. They truly care about the cars and their clients.');
content = content.replace(/UX Designer/g, 'Car Collector');
content = content.replace(/More than a club — it's a launchpad\. The mentorship alone has been worth every penny\. Truly\s*life-changing community\./g, 'By far the best dealership experience I\'ve ever had. No pressure, absolute transparency, and a curated selection of stunning vehicles.');
content = content.replace(/Product Manager/g, 'Ferrari Owner');

// CTA
content = content.replace(/Ready to <span class="gradient-text">Apex Auto<\/span>\?/g, 'Ready to <span class="gradient-text">Drive</span>?');
content = content.replace(/Join 480\+ members who are building the future, together\. Limited spots available for this cohort\./g, 'Browse our premier selection of vehicles or custom order your dream build today.');
content = content.replace(/✦ Apply for Membership/g, '✦ Contact our Sales Team');
content = content.replace(/<a href="proj2-login.html" class="btn btn-primary btn-lg">✦ Contact our Sales Team<\/a>/g, '<a href="proj2-contact.html" class="btn btn-primary btn-lg">✦ Contact our Sales Team</a>');

fs.writeFileSync(htmlPath, content, 'utf-8');
console.log("proj2.html Updated successfully.");
