const inquirer = require("inquirer" );

const fs = require('fs');
const curDir = process.cwd()

const choices =fs.readdirSync(`templates`)

const templates = [
'React Web',
'React Web Admin',
'React Native',
'React Expo Bare Flow',
'React Expo ',
'Apollograpql Server'
];

const Questions = [
{
name:'project-choice',
type:'list',
message:'what project would you like to generate',
choices:templates
}
]

inquirer.prompt(Questions).then((answer)=>{
console.log(choices)
console.log(answer['project-choice']);
//fs.mkdirSync('templates');
// fs.
console.log(curDir);
}
);
