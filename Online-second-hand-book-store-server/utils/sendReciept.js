var nodemailer = require('nodemailer');

module.exports = async(usr)=>{
    try {
        var transporter = nodemailer.createTransport({
            host: "smtp-relay.sendinblue.com",
            port: 587,
            auth: {
              user: "noreply.bookworm.mail@gmail.com",
              pass: "xsmtpsib-3d50875ab57151148bc99dee3c6288d7371527270773fc1f8df489b0de2c4821-G4mOc3MXWavtHjfr"
            }
          });

          var mailOptions = {
            from: 'noreply.bookworm.mail@gmail.com',
            to: usr,
            subject: 'Payment Reciept',

            html: `<!DOCTYPE html>
            <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
            
            <head>
                <title></title>
                <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
                <meta content="width=device-width,initial-scale=1" name="viewport" />
                <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
                <!--[if !mso]><!-->
                <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" type="text/css" />
                <!--<![endif]-->
                <style>
                    * {
                        box-sizing: border-box
                    }
            
                    body {
                        margin: 0;
                        padding: 0
                    }
            
                    a[x-apple-data-detectors] {
                        color: inherit !important;
                        text-decoration: inherit !important
                    }
            
                    #MessageViewBody a {
                        color: inherit;
                        text-decoration: none
                    }
            
                    p {
                        line-height: inherit
                    }
            
                    .desktop_hide,
                    .desktop_hide table {
                        mso-hide: all;
                        display: none;
                        max-height: 0;
                        overflow: hidden
                    }
            
                    @media (max-width:670px) {
            
                        .desktop_hide table.icons-inner,
                        .social_block.desktop_hide .social-table {
                            display: inline-block !important
                        }
            
                        .icons-inner {
                            text-align: center
                        }
            
                        .icons-inner td {
                            margin: 0 auto
                        }
            
                        .row-content {
                            width: 100% !important
                        }
            
                        .mobile_hide {
                            display: none
                        }
            
                        .stack .column {
                            width: 100%;
                            display: block
                        }
            
                        .mobile_hide {
                            min-height: 0;
                            max-height: 0;
                            max-width: 0;
                            overflow: hidden;
                            font-size: 0
                        }
            
                        .desktop_hide,
                        .desktop_hide table {
                            display: table !important;
                            max-height: none !important
                        }
                    }
                </style>
            </head>
            
            <body style="background-color:#fff;margin:0;padding:0;-webkit-text-size-adjust:none;text-size-adjust:none">
                <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff" width="100%">
                    <tbody>
                        <tr>
                            <td>
                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
                                    role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#07071f;background-size:auto"
                                    width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                    class="row-content stack" role="presentation"
                                                    style="mso-table-lspace:0;mso-table-rspace:0;background-size:auto;background-color:#060e21;color:#000;width:650px"
                                                    width="650">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1"
                                                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:0;border-top:0;border-right:0;border-bottom:0;border-left:0"
                                                                width="100%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="text_block block-1" role="presentation"
                                                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"
                                                                    width="100%">
                                                                    <tr>
                                                                        <td class="pad" style="padding-top:10px">
                                                                            <div style="font-family:Arial,sans-serif">
                                                                                <div class=""
                                                                                    style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#393d47;line-height:1.2;font-family:Oswald,Arial,'Helvetica Neue',Helvetica,sans-serif">
                                                                                    <p
                                                                                        style="margin:0;font-size:12px;text-align:center;mso-line-height-alt:14.399999999999999px;letter-spacing:9px">
                                                                                        <span
                                                                                            style="color:#ffffff;font-size:11px;"><strong> WWW.BOOKWORM.COM<br /></strong></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="image_block block-3" role="presentation"
                                                                    style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;padding-right:0;padding-left:0;padding-top:75px">
                                                                            <div align="center" class="alignment"
                                                                                style="line-height:10px"><a
                                                                                    href="http://example.com" style="outline:none"
                                                                                    tabindex="-1" target="_blank"><img
                                                                                        alt="Arka Boutique Logo"
                                                                                        src="https://blog.logrocket.com/wp-content/uploads/2021/07/Dark-mode-react-in-depth-guide.jpg"
                                                                                        style="display:block;height:auto;border:0;width:130px;max-width:100%"
                                                                                        title="Arka Boutique Logo"
                                                                                        width="130" /></a></div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="divider_block block-5" role="presentation"
                                                                    style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:165px">
                                                                            <div align="center" class="alignment">
                                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                                    role="presentation"
                                                                                    style="mso-table-lspace:0;mso-table-rspace:0"
                                                                                    width="15%">
                                                                                    <tr>
                                                                                        <td class="divider_inner"
                                                                                            style="font-size:1px;line-height:1px;border-top:1px dashed #7de5e5">
                                                                                            <span> </span></td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="heading_block block-6" role="presentation"
                                                                    style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                                                    <tr>
                                                                        <td class="pad" style="text-align:center;width:100%">
                                                                            <h1
                                                                                style="margin:0;color:#fff;direction:ltr;font-family:Oswald,Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:86px;font-weight:400;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0">
                                                                                <strong>THANK YOU FOR YOUR ORDER </strong></h1>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <div class="spacer_block mobile_hide"
                                                                    style="height:70px;line-height:70px;font-size:1px"> </div>
                                                                <table border="0" cellpadding="10" cellspacing="0"
                                                                    class="divider_block block-8" role="presentation"
                                                                    style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                                                    <tr>
                                                                        <td class="pad">
                                                                            <div align="center" class="alignment">
                                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                                    role="presentation"
                                                                                    style="mso-table-lspace:0;mso-table-rspace:0"
                                                                                    width="5%">
                                                                                    <tr>
                                                                                        <td class="divider_inner"
                                                                                            style="font-size:1px;line-height:1px;border-top:1px dashed #7de5e5">
                                                                                            <span> </span></td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#07071f"
                                    width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                    class="row-content stack" role="presentation"
                                                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#060e21;color:#000;width:650px"
                                                    width="650">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1"
                                                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0"
                                                                width="100%">
                                                                <div class="spacer_block"
                                                                    style="height:20px;line-height:20px;font-size:1px"> </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#07071f"
                                    width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                    class="row-content stack" role="presentation"
                                                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#060e21;color:#000;width:650px"
                                                    width="650">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1"
                                                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0"
                                                                width="100%">
                                                                <div class="spacer_block"
                                                                    style="height:30px;line-height:30px;font-size:1px"> </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#07071f"
                                    width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                    class="row-content stack" role="presentation"
                                                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#060e21;color:#000;width:650px"
                                                    width="650">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1"
                                                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0"
                                                                width="100%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="text_block block-1" role="presentation"
                                                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"
                                                                    width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="padding-bottom:40px;padding-left:35px;padding-right:40px;padding-top:10px">
                                                                            <div style="font-family:Arial,sans-serif">
                                                                                <div class=""
                                                                                    style="font-size:12px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;mso-line-height-alt:18px;color:#393d47;line-height:1.5">
                                                                                    <p
                                                                                        style="margin:0;font-size:12px;text-align:center;mso-line-height-alt:25.5px;letter-spacing:normal">
                                                                                        <span
                                                                                            style="color:#ffffff;font-size:17px;">Please
                                                                                            note that the payment is non-refundable
                                                                                            in the case of cancellation.<br>Find payment reciept in attachment below </span></p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5"
                                    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#07071f"
                                    width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                    class="row-content stack" role="presentation"
                                                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#060e21;color:#000;width:650px"
                                                    width="650">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1"
                                                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:15px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0"
                                                                width="100%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="text_block block-2" role="presentation"
                                                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"
                                                                    width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:5px">
                                                                            <div style="font-family:Arial,sans-serif">
                                                                                <div class=""
                                                                                    style="font-size:14px;font-family:Oswald,Arial,'Helvetica Neue',Helvetica,sans-serif;mso-line-height-alt:16.8px;color:#393d47;line-height:1.2">
                                                                                    <p
                                                                                        style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:16.8px">
                                                                                        <span style="color:#7de5e5;">Copyright ©.
                                                                                            All Rights Reserved.</span></p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                               
                            </td>
                        </tr>
                    </tbody>
                </table><!-- End -->
            </body>
            
            </html>`,
            attachments: [
                  {
                      filename: 'invoice.pdf',
                      path: 'C:/Users/Shree/Desktop/programming/mern/miniproj/server/invoice.pdf'
                  }
              ]
          }

        await  transporter.sendMail(mailOptions);
        return {status: "ok"};
    } catch (error) {
      console.log(error)
        return {error: "error"};
    }
}