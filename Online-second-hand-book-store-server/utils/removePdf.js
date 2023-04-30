const fs = require('fs')

module.exports = ()=>{
fs.unlink('C:/Users/Shree/Desktop/programming/mern/miniproj/server/invoice.pdf', (err)=>{
    if(err){
        console.log('Error');
    }
    else{
        console.log('file deleted');
    }
});
}
