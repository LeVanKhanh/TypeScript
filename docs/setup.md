https://nodejs.org/en/download/

npm install -g typescript
npm install -g webpack
npm install -g webpack-cli
npm install -g webpack-dev-server
npm install eslint --save-dev 

webpack init

npm init => to create package.json
tsc --init => to create tsconfig.json

-- Dependency Injection Container
npm install inversify reflect-metadata --save

-- Debug
1. Enable Source map: setup in tsconfig.json 
compilerOptions : {
    sourceMap : true
} 

2. Update webpack.config.js
devtool: "eval-source-map"

3. Add Extension for Visual Studio Code
Debugger for chrome

4. Create file launch.json in folder .vscode
{
    "configurations": [{
        "type": "chrome",
        "request": "launch",
        "name": "open chrome debugger",
        "url": "http://localhost:8080",
        "sourceMaps": true,
        "webRoot": "${workspaceFolder}",
        "trace": true,
    }]
}