const express = require("express");
const app = express();
const bodyP = require("body-parser");
const compiler = require('compilex');
const options = { static: true }
compiler.init(options)

app.use(bodyP.json());

// Serve the static files from the "codemirror-5.65.16" directory
app.use("/codemirror-5.65.16", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/codemirror-5.65.16"));

// Serve the static files from the "Frontend" directory
app.use("/Frontend", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/Frontend"));


// Serve the static files from the "Components" directory within the "Frontend" directory
app.use("/", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/Frontend"));


// Serve the static files from the "Components" directory within the "Frontend" directory
app.use("/Home", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/Frontend/Home"));

// Serve the static files from the "Components" directory within the "Frontend" directory
app.use("/Components", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/Frontend/Components"));

// Serve the static files from the "Components" directory within the "Frontend" directory
app.use("/Contact", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/Frontend/Contact"));

// Serve the static files from the "Components" directory within the "Frontend" directory
app.use("/Resources", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/Frontend/Resources"));

// Serve the static files from the "Components" directory within the "Frontend" directory
app.use("/Courses", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/Frontend/Courses"));

// Serve the static files from the "Components" directory within the "Frontend" directory
app.use("/Resource_Pdfs", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/Frontend/Resource_Pdfs"));


// Serve the static files from the "Components" directory within the "Frontend" directory
app.use("/Images", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/Frontend/Images"));

// Serve the static files from the "Components" directory within the "Frontend" directory
app.use("/Placements", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/Frontend/Placements"));

// Serve the static files from the "public" directory
app.use("/public", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/public"));


// Serve the static files from the "public" directory
app.use("/output.css", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/Frontend/output.css"));


// Serve the static files from the "public" directory
app.use("/tailwind.config.js", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/tailwind.config.js"));

// Serve the static files from the "public" directory
app.use("/CodeCompiler.html", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/CodeCompiler.html"));


// Serve static files from the "public" folder within the application directory
const path = require('path');
app.use(express.static(path.join(__dirname, "public"))); // Assuming style.css is in a 'public' folder





// Your existing routes go here...

app.get("/", function (req, res) {
    compiler.flush(function(){
        console.log("deleted");
    })
    res.sendFile("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/Frontend/Home/index.html");
});

// Route for the contact page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend', 'Contact.html'));
});



app.post("/compile", function (req, res) {
    var code = req.body.code
    var input = req.body.input
    var lang = req.body.lang

    try {
        // source :   https://github.com/scriptnull/compilex


        if (lang == "Cpp") {
            if (!input) {
                var envData = { OS: "windows", cmd: "g++" , options:{timeout:10000} }; // (uses g++ command to compile )
                //else
                // var envData = { OS: "linux", cmd: "gcc" }; // ( uses gcc command to compile )
                compiler.compileCPP(envData, code, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "error" });
                    }
                });
            }
            else {
                var envData = { OS: "windows", cmd: "g++" , options:{timeout:10000} }; // (uses g++ command to compile )
                //else
                // var envData = { OS: "linux", cmd: "gcc" }; // ( uses gcc command to compile )
                compiler.compileCPPWithInput(envData, code, input, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "error" });
                    }
                });
            }
        }
        else if (lang == "Java") {
            if (!input) {
                var envData = { OS: "windows" };
                //else
                // var envData = { OS: "linux" }; // (Support for Linux in Next version)
                compiler.compileJava(envData, code, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "error" });
                    }
                });
            }
            else {
                var envData = { OS: "windows" };
                //else
                // var envData = { OS: "linux" }; // (Support for Linux in Next version)
                compiler.compileJavaWithInput(envData, code, input, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "error" });
                    }
                });
            }
        }
        else if(lang == "Python") {
            if (!input) {
                var envData = { OS: "windows" };
                //else
                // var envData = { OS: "linux" };
                compiler.compilePython(envData, code, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "error" });
                    }
                });
            }
            else {
                var envData = { OS: "windows" };
                //else
                // var envData = { OS: "linux" };
                compiler.compilePythonWithInput(envData, code, input, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "error" });
                    }
                });
            }
        }
    }
    catch (err) {
        console.log("error")
    }

    // var envData = { OS: "windows" };
    // //else
    // // var envData = { OS : "linux" }; 
    // compiler.compilePython(envData, code, function (data) {    // it will make a temp file to execute the program.
    //            if(data.output){
//                      res.send(data);
//                 }
//                   else {
//                       res.send({ output: "error" });
//                  }
    // });
})

app.listen(8000);
console.log('Server is running on port  8000');
