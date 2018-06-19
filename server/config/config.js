//=================================
//         --Puerto--
//=================================

process.env.PORT = process.env.PORT || 3000;

//=================================
//         --Entorno--
//=================================
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

//=================================
//         --Base de datos--
//=================================
let urlDB;

 /* if(process.env,NODE_ENV === "dev"){ */

    urldb = "mongodb://localhost:27017/cafe";

/* }else{ */
    urlDB = "mongodb://user_cafe:curso102@ds261470.mlab.com:61470/bebida";
/*  } */

process.env.URLDB = urlDB;

