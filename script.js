const url = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
async function Load() {
    try {
        let res = await fetch(url);
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        let stuff = await res.json();
        fill(stuff.data);
    } catch (prob) {
        console.error('whoops:', prob);
    }
}



function fill(datA) {
    let tblBdy = document.getElementById('data-body');
    tblBdy.innerHTML = '';
    datA.sort((x, y) => y["ID Year"] - x["ID Year"]);
    datA.forEach(itm => {
        let r = document.createElement('tr');
        r.innerHTML = `
            <td>${itm.Year}</td>
            <td>${itm.Population.toLocaleString()}</td>
        `;
        tblBdy.appendChild(r);
    });
}

Load();
