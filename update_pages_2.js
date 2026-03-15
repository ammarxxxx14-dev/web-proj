const fs = require('fs');

function updateFile(path, replacer) {
    if (fs.existsSync(path)) {
        let content = fs.readFileSync(path, 'utf-8');
        content = replacer(content);
        fs.writeFileSync(path, content, 'utf-8');
        console.log(`Updated ${path}`);
    }
}

// Global replacements
const globalReplace = (content) => {
    content = content.replace(/Elevate Club/g, 'Apex Auto');
    content = content.replace(/ELEVATE/g, 'APEX AUTO');
    content = content.replace(/Elevate/g, 'Apex Auto');
    content = content.replace(/proj2-events.html/g, 'proj2-inventory.html');
    content = content.replace(/Events/g, 'Inventory');
    content = content.replace(/proj2-members.html/g, 'proj2-brands.html');
    content = content.replace(/Members/g, 'Brands');
    return content;
};

// 3. Update Brands Page (formerly Members)
updateFile('c:/Users/User/Desktop/Antigrav proj/proj2-brands.html', (content) => {
    content = globalReplace(content);
    content = content.replace(/Member Directory/g, 'Available Brands');
    content = content.replace(/Connect with our diverse community of 480\+ creators and leaders/g, 'Explore our curated selection of ultra-premium automotive brands');
    
    // Member profiles to Car Brand profiles
    content = content.replace(/Amira Chen/g, 'Porsche');
    content = content.replace(/Tech Entrepreneur/g, 'Stuttgart, Germany');
    content = content.replace(/Building the next generation of AI tools\./g, 'Precision engineering and iconic driving dynamics.');
    content = content.replace(/View Profile/g, 'View Models');
    
    content = content.replace(/Jordan Parker/g, 'Ferrari');
    content = content.replace(/UX Designer/g, 'Maranello, Italy');
    content = content.replace(/Crafting seamless digital experiences\./g, 'Passion, speed, and uncompromising performance.');
    
    content = content.replace(/Riley Nakamura/g, 'Lamborghini');
    content = content.replace(/Product Manager/g, 'Sant\'Agata Bolognese, Italy');
    content = content.replace(/Scaling consumer products \@ tech startup\./g, 'Audacious design and naturally aspirated power.');
    
    content = content.replace(/Marcus Johnson/g, 'Aston Martin');
    content = content.replace(/Venture Capitalist/g, 'Gaydon, UK');
    content = content.replace(/Investing in early-stage SaaS\./g, 'Unparalleled luxury and grand touring excellence.');
    
    return content;
});

// 4. Update Contact Page
updateFile('c:/Users/User/Desktop/Antigrav proj/proj2-contact.html', (content) => {
    content = globalReplace(content);
    content = content.replace(/Get in Touch/g, 'Contact Showroom');
    content = content.replace(/Have questions about membership, events, or partnerships\?/g, 'Have questions about our inventory, custom orders, or want to book a test drive?');
    
    content = content.replace(/Headquarters/g, 'Showroom');
    content = content.replace(/100 Innovation Drive/g, '100 Apex Boulevard');
    content = content.replace(/hello\@elevateclub\.com/g, 'sales@apexauto.com');
    
    content = content.replace(/Reason for Contact/g, 'Inquiry Type');
    content = content.replace(/<option value="membership">Membership Application<\/option>/g, '<option value="sales">Vehicle Purchase</option>');
    content = content.replace(/<option value="event">Event Inquiry<\/option>/g, '<option value="testdrive">Test Drive Booking</option>');
    content = content.replace(/<option value="partnership">Partnership<\/option>/g, '<option value="service">Service & Customization</option>');
    
    content = content.replace(/Send Message/g, 'Send Inquiry');
    
    return content;
});

// 5. Update Login Page
updateFile('c:/Users/User/Desktop/Antigrav proj/proj2-login.html', (content) => {
    content = globalReplace(content);
    content = content.replace(/Member Portal/g, 'Client Portal');
    content = content.replace(/Sign in to access your dashboard/g, 'Sign in to track your custom orders and service history');
    
    return content;
});

// 6. Update Account Page
updateFile('c:/Users/User/Desktop/Antigrav proj/proj2-account.html', (content) => {
    content = globalReplace(content);
    content = content.replace(/Member Dashboard/g, 'Client Dashboard');
    
    // Stats
    content = content.replace(/Events Attended/g, 'Vehicles Purchased');
    content = content.replace(/12<\/div>/g, '2</div>');
    content = content.replace(/Connections/g, 'Service Appointments');
    content = content.replace(/145<\/div>/g, '3</div>');
    content = content.replace(/Active Since/g, 'Client Since');
    content = content.replace(/Jan 2024<\/div>/g, 'Jan 2024</div>');
    
    // Quick Actions
    content = content.replace(/Browse Events/g, 'Browse Inventory');
    content = content.replace(/Update Profile/g, 'Manage Configurations');
    
    return content;
});

