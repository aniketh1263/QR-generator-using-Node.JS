/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
//we will use Inquirer.js and qr-image from npm package

//1.
import inquirer from 'inquirer';
import qr from "qr-image"
import fs from "fs"




inquirer
  .prompt([
    {message:"Type in your URL: ",
    name: "URL"
    },
  ])
  .then((answers) => {
    const url=answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('youtube.png'));
    fs.writeFile('url1.txt', url, (err) => {
        if (err) throw err;
        console.log('https://youtube.com');
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
        
    }
  });


