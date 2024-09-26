"use strict";

module.exports = {
    // Car Brand

    carbrand_create: {
        carbrandname: "string"
    },
    carbrand_get: {

    },
    carbrand_remove: {
        // id: "number"
    },
    // Model
    carmodel_create: {
        carmodelname: "string"
    },
    carmodel_get: {

    },
    carmodel_remove: {
        id: "number"
    },

    // Year
    caryear_create: {
        caryearname: "string"
    },
    caryear_get: {

    },
    caryear_remove: {
        id: "number"
    },

    // Action
    caraction_create: {
        caractionname: "string"
    },
    caraction_get: {

    },
    caraction_remove: {
        id: "number"
    },

    social_create: {
        facebook: "string",
        twitter: "string",
        instagram: "string",
        snapchat: "string"
    },
    social_getAll: {

    },
    social_get: {

    },
    social_update: {
        id: "number"
    },
    social_remove: {
        id: "number"
    },

    // SMS
    sms_create: {
        smsgatewayusername: "string",
        smsgatewaypassword: "string",
        smsgatewaysenderid: "string",
        smsgatewayisenabled: "boolean"
    },
    sms_update: {
        id: "number",
        smsgatewayusername: "string",
        smsgatewaypassword: "string",
        smsgatewaysenderid: "string",
        smsgatewayisenabled: "boolean"
    },
    sms_get: {

    },
    sms_remove: {
        id: "number"
    },

    // SMTP
    smtp_create: {
        smtphost: "string",
        smtpencryption: "string",
        smtpport: "number",
        smtpusername: "string",
        smtppassword: "string",
        smtpisenabled: "boolean"
    },
    smtp_get: {

    },
    smtp_update: {
        id: "number",
        smtphost: "string",
        smtpencryption: "string",
        smtpport: "number",
        smtpusername: "string",
        smtppassword: "string",
        smtpisenabled: "boolean"
    },
    smtp_remove: {
        id: "number"
    },
}