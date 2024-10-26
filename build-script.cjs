console.log('begin build script');
const fs = require('fs');
const path = require('path');

async function build(){
    const dir = path.join(__dirname, 'src/flows/source-script');
    if(!fs.existsSync(dir)) return;

    const fileNames = await fs.readdirSync(dir, 'utf-8')
    for(let fileName of fileNames){
        console.log(fileName);

        await fs.readFileSync(path.join(dir, fileName), 'utf8');
    }
}


build();
