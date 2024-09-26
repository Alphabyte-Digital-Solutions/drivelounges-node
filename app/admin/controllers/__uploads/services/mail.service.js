"use strict";

const Request = require("../mixins/request.mixin");
const nodemailer = require('nodemailer');
const Config = require("./../config");


module.exports = {
	name: "mail",

	mixins: [
		require("moleculer-mail"),
        // require("nodemailer"),
		Request
	],

    settings: {
        from: Config.get('/mailer/mail_id'),
        transport: {
            service: 'gmail',      
            auth: {               
                user: Config.get('/mailer/mail_id'),
                pass: Config.get('/mailer/password')
            },
        }
    },
    // settings: {
    //     nodemailer: {
    //         createTransport: Config.get('/smtp/production')
    //     }      
    // }

};
