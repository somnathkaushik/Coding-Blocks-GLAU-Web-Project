const express = require("express");
const app = express();
const bodyP = require("body-parser");
const mongoose = require('mongoose');
const compiler = require('compilex');
const options = { static: true }
compiler.init(options)


const articleRouter = require('./routes/articleRoutes');

mongoose.connect('mongodb+srv://somnath:CBpassword123@cluster0.yrz7unj.mongodb.net/blogs',{family:4}).then(()=> console.log('Connected to DB')).catch((err) => console.log('error conecting ', err.message));

app.use(bodyP.json());


const path = require('path');
// Serve static assets
app.use('/public' , express.static(path.join(__dirname, 'public')));
app.use('/codemirror-5.65.16', express.static(path.join(__dirname, 'codemirror-5.65.16')));
app.use('/Frontend', express.static(path.join(__dirname, 'Frontend')));
app.use('/Home', express.static(path.join(__dirname, 'Frontend', 'Home')));
app.use('/Components', express.static(path.join(__dirname, 'Frontend', 'Components')));
app.use('/Contact', express.static(path.join(__dirname, 'Frontend', 'Contact')));
app.use('/Resources', express.static(path.join(__dirname, 'Frontend', 'Resources')));
app.use('/Courses', express.static(path.join(__dirname, 'Frontend', 'Courses')));
app.use('/Resource_Pdfs', express.static(path.join(__dirname, 'Frontend', 'Resource_Pdfs')));
app.use('/Images', express.static(path.join(__dirname, 'Frontend', 'Images')));
app.use('/Placements', express.static(path.join(__dirname, 'Frontend', 'Placements')));
app.use('/output.css', express.static(path.join(__dirname, 'Frontend', 'output.css')));
app.use('/tailwind.config.js', express.static(path.join(__dirname, 'tailwind.config.js')));
app.use('/CodeCompiler.html', express.static(path.join(__dirname, 'CodeCompiler.html')));

// Routes
// const articleRouter = require('./routes/article'); 
app.use('/Article', articleRouter);

// Route Handlers
app.get('/', function (req, res) {
    compiler.flush(function () {
        console.log('deleted');
    });
    res.sendFile(path.join(__dirname, 'Frontend', 'Home', 'index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend', 'Contact.html'));
});

// Error Handling
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});









// app.use("/codemirror-5.65.16", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/codemirror-5.65.16"));


// app.use("/Frontend", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/Frontend"));



// app.use("/", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/Frontend"));



// app.use("/Home", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/Frontend/Home"));

// app.use("/Components", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/Frontend/Components"));

// app.use("/Contact", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/Frontend/Contact"));

// app.use("/Resources", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/Frontend/Resources"));


// app.use("/Courses", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/Frontend/Courses"));


// app.use("/Resource_Pdfs", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/Frontend/Resource_Pdfs"));


// app.use("/Images", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/Frontend/Images"));

// app.use("/Placements", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/Frontend/Placements"));

// app.use("/public", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/public"));


// app.use("/output.css", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/Frontend/output.css"));


// app.use("/tailwind.config.js", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/tailwind.config.js"));

// app.use("/CodeCompiler.html", express.static("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/CodeCompiler.html"));



// // Routes
// app.use('/Article', articleRouter);




// app.get("/", function (req, res) {
//     compiler.flush(function(){
//         console.log("deleted");
//     })
//     res.sendFile("D:/Somnath Kaushik/Making_New_Cb_web/Coding-Blocks-GLAU-Web-Project/Frontend/Home/index.html");
// });


// app.get('/contact', (req, res) => {
//     res.sendFile(path.join(__dirname, 'Frontend', 'Contact.html'));
// });


// const path = require('path');
// app.use(express.static(path.join(__dirname, "public"))); // Assuming style.css is in a 'public' folder


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

app.listen(8000,()=>{console.log("http://127.0.0.1:8000")});
