


function createRow(){
    const date = document.querySelector("#ticketdate").value;
    console.log(date);
    const ticketid = document.querySelector("#ticketid").value;
    console.log(ticketid);
    const created = document.querySelector("#created").value;
    console.log(created);
    const form = document.querySelector("#form").value;
    console.log(form);
    const assigned = document.querySelector("#assigned").value;
    console.log(assigned);
    const desc = document.querySelector("#desc").value;
    console.log(desc);
    const security = document.querySelector("#security").value;
    console.log(security);
    const quality = document.querySelector("#quality").value;
    console.log(quality);
    const professional = document.querySelector("#professional").value;
    console.log(professional);
    const kb = document.querySelector("#kb").value;
    console.log(kb);
    const tech = document.querySelector("#tech").value;
    console.log(tech);


    let table = document.querySelector('#ticketTable');
    let row = table.insertRow(-1);
    row.insertCell(0).textContent = date;
    row.insertCell(1).textContent = ticketid;
    row.insertCell(2).textContent = 'N/A';
    row.insertCell(3).textContent = created;
    row.insertCell(4).textContent = form;
    row.insertCell(5).textContent = assigned;
    row.insertCell(6).textContent = desc;
    row.insertCell(7).textContent = security;
    row.insertCell(8).textContent = quality;
    row.insertCell(9).textContent = professional;
    row.insertCell(10).textContent = kb;
    row.insertCell(11).textContent = tech;
}