/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable(data) {
  if (data.length === 0) return "";

  const keys = Object.keys(data[0]);

  // Calcular el ancho máximo de cada columna
  const columnWidths = keys.map(key => 
    Math.max(
      key.length, 
      ...data.map(row => row[key].toString().length)
    )
  );

  // Construcción de la cabecera
  const headers = keys.map((key, i) => ` ${key.charAt(0).toUpperCase() + key.slice(1)} `.padEnd(columnWidths[i] + 2));
  const separator = '+' + columnWidths.map(width => '-'.repeat(width + 2)).join('+') + '+';

  let table = separator + '\n';
  table += '|' + headers.join('|') + '|\n';
  table += separator + '\n';

  // Construcción de las filas
  for (let row of data) {
    const rowData = keys.map((key, i) => ` ${row[key]}`.padEnd(columnWidths[i] + 2));
    table += '|' + rowData.join('|') + '|\n';
  }

  table += separator;
  return table;
}
