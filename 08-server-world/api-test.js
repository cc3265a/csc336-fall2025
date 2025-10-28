
const SHEET_URL = `https://docs.google.com/spreadsheets/d/1Agr5DA3TzcbqHK5W8HCWzdwRkjZbT9KxzFgbqE_ZoPQ/export?format=csv`;

async function fetchAndParseSheet(){
    try {
        const res = await fetch(SHEET_URL);
        const text = await res.text();

        let lines = text.split("\n");
        let headers = lines[0].split(",");
        let studentInfo[];

        for (let i = 0; i < lines.length; i++){
            let line = lines[i].trim();
            let entries = line.split(",");
            let student = {};
            for (let j = 0; j < entries.length; j++){
                student[headers[j]] = entries[j];
            }
            studentInfo.push(student);
        }


        console.log(studentInfo);
    } catch {

    }
}

fetchAndParseSheet();