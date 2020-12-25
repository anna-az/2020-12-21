function createTable(columns, rows, ids) {
    let idCreator = 1;
    let table = document.getElementById('game_table');

    for(let j = 1; j <= rows; j++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
       
        for (let i = 1; i <= columns; i++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            td.setAttribute("id", idCreator);
            td.addEventListener('click', event => {
                event.stopPropagation(); 
                
                if(checkBlack(tdIds)) tdIds.length = 0;
                
                let color = (event.target.style.backgroundColor === 'black' ? 'white' : 'black'); 
                event.target.style.backgroundColor = color;
                
                let id = event.target.id;
    
                if (!(tdIds.includes(id)) && color === 'black') {
                    tdIds.push(id);
                } else {
                    tdIds.splice(tdIds.indexOf(id), 1);
                }
            });

            idCreator++;
        }
    }

    if(ids) {
        ids.forEach(element => {
            document.getElementById(element).style.backgroundColor = 'black';
        });
    }
}

function checkBlack(ids) {
    let result = ids.filter(items => document.getElementById(items).style.backgroundColor === 'black');
    
    if (result.length === 0) return true;
    else return false;
}

let width = prompt('Enter table width', '10');
let height = prompt('Enter table height', '10');
let tdIds = [];


createTable(width, height, tdIds, tdIds);

document.querySelector('#clear').addEventListener('click', event => {
    event.stopPropagation();
    document.getElementById('game_table').innerHTML = "";
    createTable(width, height);
});

document.querySelector('#restore').addEventListener('click', event => {
    event.stopPropagation(); 
    document.getElementById('game_table').innerHTML = "";
    createTable(width, height, tdIds);
});