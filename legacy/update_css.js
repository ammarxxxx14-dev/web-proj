const fs = require('fs');

const cssPath = 'c:/Users/User/Desktop/Antigrav proj/proj2.css';
let content = fs.readFileSync(cssPath, 'utf-8');

// Dark Theme replacements
content = content.replace(/123,\s*92,\s*255/g, "230, 57, 70");
content = content.replace(/#7b5cff/g, "#e63946");
content = content.replace(/#a78bfa/g, "#ef233c");
content = content.replace(/#00d4aa/g, "#457b9d");
content = content.replace(/0,\s*212,\s*170/g, "69, 123, 157");
content = content.replace(/#ff6b9d/g, "#fca311");
content = content.replace(/255,\s*107,\s*157/g, "252, 163, 17");
content = content.replace(/#9b7bff/g, "#ff4d6d");

// Light Theme replacements
content = content.replace(/100,\s*68,\s*229/g, "217, 4, 41");
content = content.replace(/#6344e5/g, "#d90429");
content = content.replace(/#00a887/g, "#1d3557");
content = content.replace(/#e0447a/g, "#fb8500");

// Also let's update border radius for buttons and cards to be more angular (automotive feel)
// We'll replace `border-radius: 50px;` with `border-radius: 4px;` for buttons, etc.
content = content.replace(/border-radius:\s*50px;/g, "border-radius: 2px;");
content = content.replace(/border-radius:\s*20px;/g, "border-radius: 4px;");
content = content.replace(/border-radius:\s*16px;/g, "border-radius: 4px;");
content = content.replace(/border-radius:\s*24px;/g, "border-radius: 6px;");

fs.writeFileSync(cssPath, content, 'utf-8');
console.log("CSS Updated successfully.");
