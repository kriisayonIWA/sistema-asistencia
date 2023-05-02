<?php


class Cconexion{

    public static function conexion_bd(){
        $host='MAESTRO\MAESTRO';
        $bdname='fesepsa';
        $username='sa';
        $password='Fesepsa2012';
        $puerto='1433';

        try{
            $comn = new PDO("sqlsrv:Server=$host,$puerto;Database=$bdname",$username,$password);
            //echo ("SE CONECTO CORRECTAMENTE A LA BASE DE DATOS : $bdname");
        }catch(PDOException $ex){
            echo ("ERROR POR: $ex");
        }

        return $comn;
    }

}


?>