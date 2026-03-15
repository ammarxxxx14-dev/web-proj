const fs = require('fs');

const path = 'c:/Users/User/Desktop/Antigrav proj/proj2-brands.html';
let content = fs.readFileSync(path, 'utf-8');

const newBrandsSection = `
    <!-- 3D Brand Models -->
    <section>
        <div class="section-heading reveal">
            <div class="tag">Showcase</div>
            <h2>Iconic Vehicles</h2>
            <p>Experience our most famous models in interactive 3D.</p>
        </div>
        
        <div class="brand-models-list" style="max-width: 1000px; margin: 0 auto;">
            
            <div class="brand-model-card reveal">
                <div class="brand-info">
                    <h3>Porsche</h3>
                    <div class="model-name">911 GT3</div>
                    <p>The definitive sports car. Rear-engine layout, iconic silhouette, and uncompromising track performance designed for the purist.</p>
                </div>
                <div class="brand-model-container">
                    <canvas class="car-canvas" data-brand="porsche"></canvas>
                </div>
            </div>

            <div class="brand-model-card reveal">
                <div class="brand-info">
                    <h3>Ferrari</h3>
                    <div class="model-name">F40</div>
                    <p>The ultimate expression of Ferrari's racing heritage. Raw, visceral, and powered by a legendary twin-turbo V8.</p>
                </div>
                <div class="brand-model-container">
                    <canvas class="car-canvas" data-brand="ferrari"></canvas>
                </div>
            </div>

            <div class="brand-model-card reveal">
                <div class="brand-info">
                    <h3>Lamborghini</h3>
                    <div class="model-name">Countach</div>
                    <p>The poster car of a generation. Wedge-shaped, audacious, and featuring the iconic scissor doors and screaming V12.</p>
                </div>
                <div class="brand-model-container">
                    <canvas class="car-canvas" data-brand="lamborghini"></canvas>
                </div>
            </div>

            <div class="brand-model-card reveal">
                <div class="brand-info">
                    <h3>Aston Martin</h3>
                    <div class="model-name">DB5</div>
                    <p>The essence of British grand touring and espionage elegance. Timeless design paired with a refined inline-six.</p>
                </div>
                <div class="brand-model-container">
                    <canvas class="car-canvas" data-brand="aston"></canvas>
                </div>
            </div>

            <div class="brand-model-card reveal">
                <div class="brand-info">
                    <h3>McLaren</h3>
                    <div class="model-name">F1</div>
                    <p>The gold standard of hypercars. Central driving position, gold-lined engine bay, and naturally aspirated V12 purity.</p>
                </div>
                <div class="brand-model-container">
                    <canvas class="car-canvas" data-brand="mclaren"></canvas>
                </div>
            </div>

            <div class="brand-model-card reveal">
                <div class="brand-info">
                    <h3>Mercedes-AMG</h3>
                    <div class="model-name">GT Black Series</div>
                    <p>Affalterbach's masterpiece. A front-mid engine track weapon with aggressive aerodynamics and a flat-plane crank V8.</p>
                </div>
                <div class="brand-model-container">
                    <canvas class="car-canvas" data-brand="mercedes"></canvas>
                </div>
            </div>

        </div>
    </section>
`;

const startIdx1 = content.indexOf('<!-- Testimonials (expanded) -->');
const startIdx2 = content.indexOf('<!-- Ownership Perks -->');

if (startIdx1 !== -1 && startIdx2 !== -1) {
    const before = content.substring(0, startIdx1);
    const after = content.substring(startIdx2);
    content = before + newBrandsSection + after;
} else {
    console.log("Could not find sections to replace.");
}

// Inject Three.js script before closing body
if (!content.includes('three.min.js')) {
    content = content.replace('</body>', '    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>\n    <script src="cars3d.js"></script>\n</body>');
}

// Inject CSS styles into the <style> block
const extraCSS = `
        .brand-model-card {
            background: var(--clr-surface);
            border: 1px solid var(--clr-border);
            border-radius: 24px;
            padding: 2rem;
            margin-bottom: 2rem;
            display: flex;
            align-items: center;
            gap: 2rem;
            transition: var(--transition);
            overflow: hidden;
        }

        .brand-model-card:hover {
            border-color: rgba(230, 57, 70, 0.3);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
        }

        .brand-info {
            flex: 1;
            text-align: left;
        }

        .brand-info h3 {
            font-family: var(--font-heading);
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 0.25rem;
        }

        .brand-info .model-name {
            font-size: 1.15rem;
            color: var(--clr-accent-glow);
            margin-bottom: 1.25rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        .brand-info p {
            font-size: 0.95rem;
            color: var(--clr-text-muted);
            line-height: 1.7;
        }

        .brand-model-container {
            flex: 1.4;
            height: 380px;
            border-radius: 16px;
            background: linear-gradient(135deg, rgba(20,20,30,0.8), rgba(10,10,15,0.9));
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.05);
            box-shadow: inset 0 0 40px rgba(0,0,0,0.5);
        }

        .car-canvas {
            width: 100%;
            height: 100%;
            display: block;
            outline: none;
            cursor: grab;
        }

        .car-canvas:active {
            cursor: grabbing;
        }

        @media (max-width: 768px) {
            .brand-model-card {
                flex-direction: column;
                text-align: center;
                gap: 1.5rem;
            }
            .brand-model-container {
                width: 100%;
            }
        }
`;

content = content.replace('</style>', extraCSS + '\n    </style>');

fs.writeFileSync(path, content, 'utf-8');
console.log("Updated proj2-brands.html successfully.");
