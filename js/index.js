//JavaScript
import { EVENT_LOAD } from "./utils/consts.js";

//Components
import { TableProgrammersRow } from "./components/TableProgrammersRow.js";

//Data
// Cambiamos la importación del JSON por fetch
let programmers = [];

const loadProgrammers = async () => {
    try {
        const response = await fetch('../data/programmers.json');
        programmers = await response.json();
        initialLoad();
    } catch (error) {
        console.error('Error loading programmers:', error);
    }
};


//Utils
import { generateUUID } from "./utils/content/random.js";

const initialLoad = () => {
    for (let programmer of programmers) {
        const languages = programmer.languages.toString().replaceAll(",", " | ");
        const score = (Math.random() * 5 + 5).toFixed(2);

        const tableProgrammersRow = new TableProgrammersRow({
            values: [generateUUID(), programmer.name, languages, score]
        });
        document.getElementById("tableProgrammers_Body").appendChild(tableProgrammersRow.render());
    }
};

window.addEventListener(EVENT_LOAD, () => {
    loadProgrammers();
    initialLoad();
});