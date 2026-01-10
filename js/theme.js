/**
 * Theme Management Script
 * Handles Dark/Light mode toggle, persistence, and initial load.
 */

const ThemeManager = {
    init: function() {
        this.applyStoredTheme();
        this.setupListeners();
    },

    applyStoredTheme: function() {
        // Check localStorage or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    },

    setTheme: function(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    },

    setupListeners: function() {
        const lightBtn = document.getElementById('themeLightBtn');
        const darkBtn = document.getElementById('themeDarkBtn');

        if (lightBtn) {
            lightBtn.addEventListener('click', () => this.setTheme('light'));
        }
        if (darkBtn) {
            darkBtn.addEventListener('click', () => this.setTheme('dark'));
        }
    }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => ThemeManager.init());

// Immediate apply to prevent flash (can be placed in head for better results)
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}
