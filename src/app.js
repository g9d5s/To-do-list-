const express = require('express');
const app = express();


//importing routes 
//settings 
app.set('port', process.env.PORT || 3000);
//middleware
//Startin sercer 

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});