import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer.prompt([
    {
        type: "input",     
        message: "Type your URL",
        name: "url"
    }
]).then((answers) => 
    {
        const url=answers.url;
        var qr_image=qr.image(url);
        qr_image.pipe(fs.createWriteStream("qr_img.png"));
    });