
document.addEventListener('DOMContentLoaded', function() {
    const dataForm = document.getElementById('dataForm');
    const nameInput = document.getElementById('titleInput');
    const ageInput = document.getElementById('genreInput');
    const tableData = document.getElementById('tableData');

    let editingRow = null;

    dataForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = titleInput.value;
        const genre = genreInput.value;
        const newRow = document.createElement('tr');

        if (editingRow) {
            // Update baris yang sedang diedit
            editingRow.children[0].textContent = title;
            editingRow.children[1].textContent = genre;

            // Reset editing state dan form
            editingRow = null;}
            else {

            

        const titleCell = document.createElement('td');
        titleCell.textContent = title;

        const genreCell = document.createElement('td');
        genreCell.textContent = genre;

        const btnEdit = document.createElement("button");
        btnEdit.classList.add("Edit")
        btnEdit.textContent = "Edit";
        btnEdit.classList.add("btnEdit");
        btnEdit.addEventListener("click", function () {
            add.value = "Update List";
            add.style.color = "black";
            add.style.backgroundColor = "yellow";
            add.textContent = "Update list"
            titleInput.value = titleCell.textContent;
            genreInput.value = genreCell.textContent;
            editingRow = newRow;
        });

        const btnDelete = document.createElement("button");
        btnDelete.classList.add("Delete")
        btnDelete.textContent = "Delete";
        btnDelete.classList.add("btnDelete");
        btnDelete.addEventListener("click", function () {

            newRow.remove()
        });

        const optionCell = document.createElement('td');
        optionCell.appendChild(btnEdit);
        optionCell.appendChild(btnDelete);

        newRow.appendChild(titleCell);
        newRow.appendChild(genreCell);
        newRow.appendChild(optionCell);

        tableData.appendChild(newRow);

        titleInput.value = '';
        genreInput.value = '';
    }}
    )});
