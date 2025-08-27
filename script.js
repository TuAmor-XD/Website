document.addEventListener("DOMContentLoaded", () => {
    const skills = [
        { selector: ".computer", values: [70, 80, 95, 98] }, // 2022, 2023, 2024, 2025
        { selector: ".html", values: [20, 66, 86, 92] },
        { selector: ".css", values: [10, 43, 60, 75] },
        { selector: ".cpp", values: [15, 60, 89, 95] },
        { selector: ".office", values: [85, 95, 98, 99] },
        { selector: ".bilingual", values: [89, 90, 95, 97] },
        { selector: ".typing", values: [80, 95, 98, 99] }
    ];

    let yearIndex = 0;
    const years = [2022, 2023, 2024, 2025];
    let currentYearElement = null;

    function createYearIndicator() {
        const yearIndicator = document.createElement('div');
        yearIndicator.className = 'year-indicator';
        yearIndicator.style.cssText = `
            position: absolute;
            top: -30px;
            right: 0;
            background: maroon;
            color: white;
            padding: 5px 10px;
            border-radius: 3px;
            font-size: 14px;
            font-weight: bold;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        `;
        
        const skillsSection = document.querySelector('.skills');
        if (skillsSection) {
            skillsSection.style.position = 'relative';
            skillsSection.appendChild(yearIndicator);
        }
        
        return yearIndicator;
    }

    function updateSkills() {
        // Fade out current year indicator
        if (currentYearElement) {
            currentYearElement.style.opacity = '0';
        }

        // Update all skill bars with fade effect
        skills.forEach(skill => {
            const bar = document.querySelector(skill.selector);
            if (bar) {
                // Add fade-out effect
                bar.style.opacity = '0.3';
                bar.style.transition = 'width 2s ease-in-out, opacity 0.5s ease-in-out';
                
                setTimeout(() => {
                    bar.style.width = skill.values[yearIndex] + "%";
                    bar.style.opacity = '1';
                }, 500);
            }
        });

        // Update year indicator
        const yearIndicator = document.querySelector('.year-indicator') || createYearIndicator();
        yearIndicator.textContent = `My Skills ${years[yearIndex]}`;
        
        setTimeout(() => {
            yearIndicator.style.opacity = '1';
            currentYearElement = yearIndicator;
        }, 1000);

        // Move to next year
        yearIndex = (yearIndex + 1) % years.length;
    }

    // First run
    updateSkills();

    // Every 3 seconds switch year (increased for better fade effect)
    setInterval(updateSkills, 3000);
});
