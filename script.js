document.addEventListener("DOMContentLoaded", () => {
    const skills = [
        { selector: ".computer", values: [70, 80, 95] }, // 2022 = 30%, 2023 = 80%
        { selector: ".html", values: [20, 66, 86] },
        { selector: ".css", values: [10, 43, 60] },
        { selector: ".cpp", values: [15, 60, 89] },
        { selector: ".office", values: [85, 95, 98] },
        { selector: ".bilingual", values: [89, 90, 95] },
        { selector: ".typing", values: [80, 95, 98] }
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
