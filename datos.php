<?php
    header('Content-Type: application/json');

    require("conexion.php");
    $con = Cconexion::conexion_bd();

    $fecha = strtotime("27/04/2023");

    $pps = $con->prepare("SELECT TOP 23 RV.SerieDocumento,RV.NumeroDocumento,RV.FechaDocumento,CL.NombreCliente as CodigoCliente FROM RegistroVentas AS RV INNER JOIN Clientes AS CL ON (RV.CodigoCliente=CL.CodigoCliente)
    ORDER BY IdRegistroVentas DESC");
    //SELECT top 15 SerieDocumento,NumeroDocumento,FechaDocumento,CodigoCliente FROM REGISTROVENTAS WHERE FechaDocumento>='" . $fecha . "' ORDER BY FechaDocumento desc
    $pps->execute();

    echo json_encode($pps->fetchAll(PDO::FETCH_ASSOC));
?>