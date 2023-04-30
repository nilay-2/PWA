var easyinvoice = require('easyinvoice');
var fs = require('fs');
const {v4:uuidv4} = require("uuid");
module.exports = async(prod)=>{
    try {
        var data = {

            // Let's add a recipient
            "client": {
                "company": "BookWorm",
                "address": "VESIT, Hashu Adwani Memorial Complex, Collector's Colony, Chembur,",
                "zip": "400074",
                "city": "Mumbai, Maharashtra",
                "country": "India"
            },
        
            // Now let's add our own sender details
            // "sender": {
            //     "company": "Sample Corp",
            //     "address": "Sample Street 123",
            //     "zip": "1234 AB",
            //     "city": "Sampletown",
            //     "country": "Samplecountry"
            // },
        
            "images": {
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
            },
        
            // Let's add some standard invoice data, like invoice number, date and due-date
            "information": {
                "number": uuidv4().slice(0,5),
                "date": new Date(),
                "due-date": "NA"
            },
            "products": prod,
            
            "bottomNotice": "Thank You For Ordering On Our Website",
        
            // Here you can customize your invoice dimensions, currency, tax notation, and number formatting based on your locale
            "settings": {
                "currency": "INR",
            },
        };
        easyinvoice.createInvoice(data, function (result) {
            fs.writeFileSync("invoice.pdf", result.pdf, 'base64');
        });
        return {status: "ok"}
    } catch (error) {
        console.log(error);
        return {status: error}
    }
}