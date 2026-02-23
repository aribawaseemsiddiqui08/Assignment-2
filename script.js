const root = document.documentElement;

// Theme Logic
function setTheme(t) {
    if (t === 'dark') {
        root.style.setProperty('--bg', '#905e49');
        root.style.setProperty('--text', '#f5f6fa');
        root.style.setProperty('--card', '#744f41');
        root.style.setProperty('--primary', '#fab1a0');
        root.style.setProperty('--hero-overlay', 'rgba(0, 0, 0, 0.7)');
        root.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.4)');
    } else {
        root.style.setProperty('--bg', '#fff9f5');
        root.style.setProperty('--text', '#ffba9f');
        root.style.setProperty('--card', '#ffffff');
        root.style.setProperty('--primary', '#ffb79f');
        root.style.setProperty('--hero-overlay', 'rgba(45, 52, 54, 0.4)');
        root.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.08)');
    }
    localStorage.setItem('bakery_theme', t);
}

// Click Events for Theme
document.getElementById('light').onclick = () => setTheme('light');
document.getElementById('dark').onclick = () => setTheme('dark');
document.getElementById('system').onclick = () => {
    const dark = window.matchMedia('(prefers-color-scheme:dark)').matches;
    setTheme(dark ? 'dark' : 'light');
};

// Initial Load
window.onload = () => {
    setTheme(localStorage.getItem('bakery_theme') || 'light');
}

// Toggle Menu Section
const dest = document.getElementById('dest');
document.getElementById('toggle').onclick = () => {
    dest.style.display = (dest.style.display === 'none') ? 'grid' : 'none';
}

// Change Hero Text (Special Offer)
document.getElementById('change').onclick = () => {
    const t = document.getElementById('title');
    const d = document.getElementById('desc');
    const btn = document.getElementById('change');
    
    t.innerText = 'Warm Muffins are Out! 🧁';
    d.innerText = 'Get a free coffee with every box of 4 muffins.';
    btn.style.background = '#ef5576';
    btn.innerText = 'Offer Applied!';
}

// Navigation Active State
document.querySelectorAll('.nav').forEach(n => {
    n.onclick = function() {
        document.querySelectorAll('.nav').forEach(x => x.classList.remove('active'));
        this.classList.add('active');
    }
});