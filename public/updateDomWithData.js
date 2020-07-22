function updateDomWithData() {
  let dataTable = document.getElementById("data-table");
  let tablesHtml = "";
  arrayForBrowser.forEach(row => {
    if (row && row[0] !== "") {
      const tds = [];
      if (row.length === 1) {
        console.log(row[0]);
        if (row[0] !== `\n` && row[0][0] !== "-")
          tds.push(`<td class="table-td-header" colspan="3">${row[0]}</td>`);
      } else {
        row.forEach(datum => {
          tds.push(`<td class="table-td">${datum}</td>`);
        });
        // add empty cell if only 2 cells in this row
        if (row.length < 3) tds.push(`<td class="table-td"> </td>`);
      }
      tablesHtml += `<tr class="table-tr">${tds}</tr>`;
    }
  });
  dataTable.innerHTML = tablesHtml.replace(/,/g, "");
}

updateDomWithData();
