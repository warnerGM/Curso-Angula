const {writeFileSync,mkdirSync}= require('fs')

require('dotenv').config();

const targetpath = './src/environments/environments.ts';
const envFileContent=`
export const environment = {
    mapbox_key:"${process.env['MABOX_KEY']}"
}
`;

mkdirSync('./src/environments',{recursive:true});

writeFileSync(targetpath, envFileContent);