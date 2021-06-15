import React from 'react'

export default function Results() {
    window.onload = () => {
        loadTableData(resultData)
        }

    var sortDirection = false;
    var resultData = [
        { book: "Groen", grade: 5 },
        { book: "Rekenen", grade: 1 },
        { book: "Nederlands", grade: 3 },
        { book: "Logistiek", grade: 2 },
        { book: "Handel en Verkoop", grade:4 },
    ]
   

    function loadTableData(resultData) {
        const tableBody = document.getElementById('tableData');
        var dataHtml = " ";
        
        for(let result of resultData) {
            dataHtml += `<tr><td>${result.book}</td><td>${result.grade}</td></tr>`;

        }
        console.log(dataHtml)
        tableBody.innerHTML = dataHtml;
        console.log(dataHtml)
    }

    function sortColumn(columnName){
        const dataType = typeof resultData[0][columnName]
        sortDirection = !sortDirection;

        switch(dataType){
            case 'number':
                sortNumberColumn(sortDirection, columnName)
                break;
        }
       
       loadTableData(resultData)
    }

    function sortNumberColumn(sort, columnName){
       resultData = resultData.sort((p1,p2) => {
         return sort ? p1[columnName] - p2[columnName] : p2[columnName] - p1[columnName]   
        })
    }
    return (
     

        <table>

            <thead>
                <tr>
                    <th >Vak</th> 
                
                    <th  onClick={sortColumn("grade")}>Resultaat</th>
                  
                </tr>
            </thead>
            <tbody id= "tableData"></tbody>

        </table>


    )

}
