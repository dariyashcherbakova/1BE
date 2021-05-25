document.addEventListener('DOMContentLoaded', () => {

    const getSort = ({ target }) => {
        const order = (target.dataset.order = -(target.dataset.order || -1));
        const index = [...target.parentNode.cells].indexOf(target);
        const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
        const comparator = (index, order) => (a, b) => order * collator.compare(
            a.children[index].innerHTML,
            b.children[index].innerHTML
        );
        
        for(const tBody of target.closest('table').tBodies)
            tBody.append(...[...tBody.rows].sort(comparator(index, order)));

        for(const cell of target.parentNode.cells)
            cell.classList.toggle('sorted', cell === target);
    };
    
    document.querySelectorAll('.table_sort').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));
    
});







// function tableSearch() {
//     let phrase1 = document.getElementById('myInput1');
//     let phrase2 = document.getElementById('myInput2');
//     let phrase3 = document.getElementById('myInput3');
//     let table = document.getElementById('myTable');
//     let flag = false;
//     let row = document.createElement("TR")
//     let td1 = document.createElement("TD")

    
    
//     td1.appendChild(document.createTextNode("column 1"))
//     let td2 = document.createElement("TD")
//     td2.appendChild (document.createTextNode("column 2"))
//     let td3 = document.createElement("TD");
//     td3.appendChild (document.createTextNode("column 3"));

//     row.appendChild(td1);
//     row.appendChild(td2);
//     row.appendChild(td3);

//     table.appendChild(row);


// }


    // for (let i = 1; i < table.rows.length; i++) {
    //     flag = false;
    //     for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
    //         flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
    //         if (flag) break;
    //     }
    //     if (flag) {
    //         table.rows[i].style.display = "";
    //     } else {
    //         table.rows[i].style.display = "none";
    //     }

    // }