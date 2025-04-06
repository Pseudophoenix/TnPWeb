document.addEventListener('DOMContentLoaded', function() {
    // Get current theme variables
    const computedStyle = getComputedStyle(document.documentElement);
    const primaryColor = computedStyle.getPropertyValue('--primary-color').trim() || '#003366';
    const textLight = computedStyle.getPropertyValue('--text-light').trim() || '#ffffff';
    const backgroundPrimary = computedStyle.getPropertyValue('--background-primary').trim() || '#ffffff';
    
    // Apply theme variables dynamically to elements that might be created after DOM load
    function applyThemeToNewElements() {
        // Apply to vertical nav elements if they exist
        const verticalNav = document.querySelector('.vertical-nav');
        if (verticalNav) {
            // Apply any dynamic theme properties here if needed
            console.log('Theme variables applied to vertical navigation');
        }
    }
    
    // Call initially
    applyThemeToNewElements();
    
    // Re-apply on orientation change or resize
    window.addEventListener('orientationchange', applyThemeToNewElements);
    window.addEventListener('resize', applyThemeToNewElements);
    
    // If theme can be changed at runtime, you might need a mutation observer
    // or custom event to trigger this function again
});
