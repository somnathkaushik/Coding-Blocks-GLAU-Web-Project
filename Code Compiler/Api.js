// const express = require("express");
// const app = express();
// const bodyP = require("body-parser");
// const compiler = require('compilex');
// const options = { static: true }
// compiler.init(options)

// app.use(bodyP.json());
// app.use("/codemirror-5.65.16", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Changes By Me/Code Compiler/codemirror-5.65.16"));


// const path = require('path');
// app.use(express.static(path.join(__dirname, "public"))); // Assuming style.css is in a 'public' folder


// app.use(express.static(path.join(__dirname, "Components")));
// app.use(express.static(path.join(__dirname, "Contact")));
// app.use(express.static(path.join(__dirname, "Images")));
// app.use(express.static(path.join(__dirname, "Placements")));
// app.use(express.static(path.join(__dirname, "Resources")));
// app.use(express.static(path.join(__dirname, "Resources-Pdfs")));
// app.use(express.static(path.join(__dirname, "src")));



// app.get("/", function (req, res) {
//     compiler.flush(function(){
//         console.log("deleted");
//     })
//     res.sendFile("D:/Somnath Kaushik/Making_New_Cb_web/Changes By Me/Code Compiler/CodeCompiler.html");
    
// });

// // Serve other HTML files
// app.get("/Contact/Contact.html", function (req, res) {
//     res.sendFile(path.join(__dirname, "D:/Somnath Kaushik/Making_New_Cb_web/Changes By Me/Contact/Contact.html"));
// });

// app.get("/resources", function (req, res) {
//     res.sendFile(path.join(__dirname, "changes by me/Resources/resources.html"));
// });

// app.get("/placements", function (req, res) {
//     res.sendFile(path.join(__dirname, "changes by me/Placements/Placement_index.html"));
// });



// app.post("/compile", function (req, res) {
//     var code = req.body.code
//     var input = req.body.input
//     var lang = req.body.lang

//     try {
//         // source :   https://github.com/scriptnull/compilex


//         if (lang == "Cpp") {
//             if (!input) {
//                 var envData = { OS: "windows", cmd: "g++" , options:{timeout:10000} }; // (uses g++ command to compile )
//                 //else
//                 // var envData = { OS: "linux", cmd: "gcc" }; // ( uses gcc command to compile )
//                 compiler.compileCPP(envData, code, function (data) {
//                     if (data.output) {
//                         res.send(data);
//                     }
//                     else {
//                         res.send({ output: "error" });
//                     }
//                 });
//             }
//             else {
//                 var envData = { OS: "windows", cmd: "g++" , options:{timeout:10000} }; // (uses g++ command to compile )
//                 //else
//                 // var envData = { OS: "linux", cmd: "gcc" }; // ( uses gcc command to compile )
//                 compiler.compileCPPWithInput(envData, code, input, function (data) {
//                     if (data.output) {
//                         res.send(data);
//                     }
//                     else {
//                         res.send({ output: "error" });
//                     }
//                 });
//             }
//         }
//         else if (lang == "Java") {
//             if (!input) {
//                 var envData = { OS: "windows" };
//                 //else
//                 // var envData = { OS: "linux" }; // (Support for Linux in Next version)
//                 compiler.compileJava(envData, code, function (data) {
//                     if (data.output) {
//                         res.send(data);
//                     }
//                     else {
//                         res.send({ output: "error" });
//                     }
//                 });
//             }
//             else {
//                 var envData = { OS: "windows" };
//                 //else
//                 // var envData = { OS: "linux" }; // (Support for Linux in Next version)
//                 compiler.compileJavaWithInput(envData, code, input, function (data) {
//                     if (data.output) {
//                         res.send(data);
//                     }
//                     else {
//                         res.send({ output: "error" });
//                     }
//                 });
//             }
//         }
//         else if(lang == "Python") {
//             if (!input) {
//                 var envData = { OS: "windows" };
//                 //else
//                 // var envData = { OS: "linux" };
//                 compiler.compilePython(envData, code, function (data) {
//                     if (data.output) {
//                         res.send(data);
//                     }
//                     else {
//                         res.send({ output: "error" });
//                     }
//                 });
//             }
//             else {
//                 var envData = { OS: "windows" };
//                 //else
//                 // var envData = { OS: "linux" };
//                 compiler.compilePythonWithInput(envData, code, input, function (data) {
//                     if (data.output) {
//                         res.send(data);
//                     }
//                     else {
//                         res.send({ output: "error" });
//                     }
//                 });
//             }
//         }
//     }
//     catch (err) {
//         console.log("error")
//     }

//     // var envData = { OS: "windows" };
//     // //else
//     // // var envData = { OS : "linux" }; 
//     // compiler.compilePython(envData, code, function (data) {    // it will make a temp file to execute the program.
//     //            if(data.output){
// //                      res.send(data);
// //                 }
// //                   else {
// //                       res.send({ output: "error" });
// //                  }
//     // });
// })

// app.listen(8000)
