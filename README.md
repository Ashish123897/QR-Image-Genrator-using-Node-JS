Steps:
Import Require Module 
1. For input ->Inquirer
2. For QR image->qr-image
3. For File->fs

use inquirer.prompt   ( give type ,message,url)
.then(answer) ->answer is our url 
use qr.image(url)
// save image using createWriteStream
