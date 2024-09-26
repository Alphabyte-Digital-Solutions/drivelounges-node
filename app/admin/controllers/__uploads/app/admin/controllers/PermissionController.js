"use strict";
// DEVELOPED ON 14-07-2020

const { MoleculerError } 	= require("moleculer").Errors;
const pipe = require("pipe");
const CodeTypes = require("../../../fixtures/error.codes");
const Constants = require("./../../../plugin/constants");
const Sequ = require("sequelize");

const sequelize12 = new Sequ('Drive-Lounge', 'dbzfmsappstech', 'Scope@#123', {
    host: "13.94.34.229",
    dialect: "mssql",
    port: "1433",
    options: {
        encrypt: false
    },
    dialectOptions: {
        options: {
            encrypt: false
        }
    },
    instancename: "MSQLEXPRESS",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});
/**
 *
 * @annotation Permission
 * @permission create,update,remove,getall,status  
 */
module.exports = {

    // Permission list
    getpermissionlist: async function(ctx) {
        return await sequelize12.query('exec sp_getRolePermission @Id=:id', {
            replacements: { id: ctx.params.id },
            type: Sequ.QueryTypes.SELECT
        })
        .then(res => {
            if (res)
                return this.requestSuccess("FAQ List", res);
            else
                return this.requestError(CodeTypes.NOTHING_FOUND);
        })
        .catch(err => {
            console.log(object);
            return this.requestError(CodeTypes.UNKOWN_ERROR);
        });      

    },

    getrolerights: async function(ctx) {
        return await sequelize12.query('exec sp_getUserPermission @Id=:id', {
            replacements: { id: ctx.params.id },
            type: Sequ.QueryTypes.SELECT
        })
        .then(res => {
            if (res)
                return this.requestSuccess("RoleRights List", res);
            else
                return this.requestError(CodeTypes.NOTHING_FOUND);
        })
        .catch(err => {
            console.log(object);
            return this.requestError(CodeTypes.UNKOWN_ERROR);
        });      

    },
    
 
}
