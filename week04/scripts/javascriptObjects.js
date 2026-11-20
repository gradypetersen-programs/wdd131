let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        {section: "001", enrolled: 78, instructor: 'Billiam Butler'},
        {section: "003", enrolled: 98, instructor: 'Tom Houseworthy'}
    ],

    setCourseInformation() {
        document.querySelector("#courseName").textContent = `${this.code} – ${this.title}`;
    },

    renderSections() {
        const tbody = document.querySelector("#sections tbody");
        let rows = '';
        for (const section of this.sections) {
            rows += `<tr>
                <td>${section.section}</td>
                <td>${section.enrolled}</td>
                <td>${section.instructor}</td>
            </tr>`;
        }
        tbody.innerHTML = rows;
    }
};

aCourse.setCourseInformation();
aCourse.renderSections();