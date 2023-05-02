function ejecutar(){
    let tabla = $("#tablaprueba");
    tabla.DataTable({
        "ajax":{
            url: "datos.php?",
            dataSrc:""
        },
        "columns": [{
            "data": "SerieDocumento"
        },
        {
            "data": "NumeroDocumento"
        },
        {
            "data": "FechaDocumento"
        },
        {
            "data": "CodigoCliente"
        }],
        "language":{
            "url": "DataTables/spanish.json",
        },

    });
}

function limpiar(){
    let tabla = $("#tablaprueba").DataTable();
    tabla
        .clear()
        .draw();
}

function exportar(){
    var data = $("#tablaprueba").DataTable().toArray();
    alert(data);
    var workbook = XLSX.utils.book_new();
    var sheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook,sheet,"Datos");
    XLSX.writeFile(workbook,"datos.xlsx");
}