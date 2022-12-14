let count = 0;
document.getElementById("input-btn").addEventListener("click", function () {
    count++;
    const inputValue = document.getElementById("input-value").value;

    const bodyContainer = document.getElementById("content-container");
    const createTable = document.createElement("tr");
    createTable.innerHTML = `
    <th scope="row">${count}</th>
    <td>${inputValue}</td>
    <td>
    <button class="btn btn-primary delete-btn">Delete</button>
    <button class="btn btn-success">Done</button>
    </td>
    `;
    bodyContainer.appendChild(createTable);
    document.getElementById("input-value").value = "";

    const deleteBtn = document.getElementsByClassName("delete-btn");
    for(let button of deleteBtn){
        button.addEventListener("click", function(event){
            event.target.parentNode.parentNode.style.display = "none";
        })
    }
})