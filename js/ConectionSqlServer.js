import mssql from "mssql";

const connectionSettingss = {
    server: "LAPTOP-FGDUOJE6\SQLEXPRESS",
    database: "LogisticaYCarguesJM",
    user: "root",
    password:"",
    Option:{
        encrypt: true,
        trustServerCentificate: true
    }
};

export async function getConnection() {
    try {
        return await mssql.connect(connectionSettingss);
    } catch (error) {
        console.log(error);
    }
}

export {mssql};