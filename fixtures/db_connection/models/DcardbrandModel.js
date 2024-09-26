"use strict";

const Sequelize = require("sequelize");

// For more information about Sequelize Data Types :
// http://docs.sequelizejs.com/manual/tutorial/models-definition.html#data-types


module.exports = {
    name: "dcarbrand",
    define: {
        id: { // id must always exist
            type: Sequelize.INTEGER(4),
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },

        carbrandkey: { // Default Unique Key for Country 
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: true,
        },
        carbrandname: {
            type: Sequelize.STRING(256),
            allowNull: true
        },
        carbrandshortname: {
            type: Sequelize.STRING(16),
            allowNull: true
        },
        carbrandimage: {
            type: Sequelize.STRING(256),
            allowNull: true
        },
        status: {
            type: Sequelize.INTEGER(4),
            allowNull: true,
            defaultValue: 1
        },
        created_by: {
            type: Sequelize.INTEGER(4),
            allowNull: true,
        },

        created_at: {
            type: Sequelize.DATE,
            allowNull: true,
        },

        updated_by: {
            type: Sequelize.INTEGER(4),
            allowNull: true,
        },

        updated_at: {
            type: Sequelize.DATE(4),
            allowNull: true
        }
    },
    options: {
        timestamps: false,
        tableName: 'dcarbrand'
    }
};