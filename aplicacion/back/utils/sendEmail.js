const nodemailer = require('nodemailer'); //para enviar correos electronicos

const sendEmail = async options => {
    const transporter = nodemailer.createTransport({
        //info que traigo de mailtrap para enviar correos, new account, smtp, settings, copy credentials
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "1a85cfa95855be",
            pass: "b6a1de7bab8ae9"
        }
      

    }); //creamos el transportador, el objeto de configuracion esta vacio porque lo vamos a configurar con variables de entorno
    const message = {
        from: "techcenter colombia<moisesjuniorcas20@gmail.com>", //desde donde se envia el correo, el correo que se va a mostrar
        to: options.email, //a donde se envia el correo, el correo que se va a mostrar
        subject: options.subject, //asunto del correo
        text: options.message //mensaje del correo, message del controller

    }
    await transporter.sendMail(message); //envia el correo con el parametro message

}

module.exports = sendEmail;
  
