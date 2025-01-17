
// en este archivo como seria la creacion de un componente web nativo que podriamoscrear con js 

class TableProgrammersRow {
    constructor(props) {
        this.props = props;
    }

    render = function () {
        const tr = document.createElement("tr");
        tr.classList.add("centered");

        for (let value of this.props.values) {
            const td = document.createElement("td");
            td.innerText = value;
            tr.appendChild(td);
        }

        return tr;
    };
}

export { TableProgrammersRow };