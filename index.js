const express = require('express'); //package
const bodyParser = require('body-parser'); // IMPORT DULU

const app = express();
// Taruh di bawah express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.set('view engine', 'ejs');

const todolist = ['Nyuci piring', 'Makan bang'];


app.get("/", (req, res) => {
    return res.render("index", { data: todolist}); //routes , //tasks=key
})

// GET - "/task"
app.get("/tasks", (req, res)=> {
    return res.send("todolist nanti disini");
})

app.post("/tasks", (req, res)=> {
    const newTask= req.body.asw;
    todolist.push(newTask);
    console.log('masuk');
    console.log(req.body);
    return res.redirect("/");
})

app.listen(3001, () => {
    console.log('server is running on http://localhost:3001');
})

