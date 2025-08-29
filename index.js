
document.addEventListener('DOMContentLoaded', function() {
    const dataForm = document.getElementById('dataForm');
    const nameInput = document.getElementById('titleInput');
    const ageInput = document.getElementById('genreInput');
    const tableData = document.getElementById('tableData');

    dataForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = titleInput.value;
        const genre = genreInput.value;
        const newRow = document.createElement('tr');

        const titleCell = document.createElement('td');
        titleCell.textContent = title;

        const genreCell = document.createElement('td');
        genreCell.textContent = genre;

        const btnEdit = document.createElement("button");
        btnEdit.textContent = "Edit";
        btnEdit.classList.add("btnEdit");
        btnEdit.addEventListener("click", function () {
            titleInput.value = title;
            genreInput.value = genre;
            itemEdit = td;
        });

        const btnDelete = document.createElement("button");
        btnDelete.textContent = "Delete";
        btnDelete.classList.add("btnDelete");
        btnDelete.addEventListener("click", function () {
            newRow.remove();
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
    }
    )});
