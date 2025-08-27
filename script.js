document.addEventListener("DOMContentLoaded", () => {
    const skills = [
        { selector: ".computer", values: [30, 80] }, // 2022 = 30%, 2023 = 80%
        { selector: ".html", values: [20, 70] },
        { selector: ".css", values: [10, 60] },
        { selector: ".cpp", values: [15, 65] },
        { selector: ".office", values: [25, 75] },
        { selector: ".bilingual", values: [40, 90] },
        { selector: ".typing", values: [20, 85] }
    ];

    let yearIndex = 0;

    function updateSkills() {
        skills.forEach(skill => {
            const bar = document.querySelector(skill.selector);
            if (bar) {
                bar.style.width = skill.values[yearIndex] + "%";
            }
        });
        yearIndex = (yearIndex + 1) % 2; // toggle between 2022 and 2023
    }

    // First run
    updateSkills();

    // Every 2 seconds switch year
    setInterval(updateSkills, 2000);
});
