let express     = require('express'),
    app         = express(),
    mongoose    = require('mongoose'),
    path        = require('path'),
    session     = require('express-session'),
    body_parser = require('body-parser');
    bcrypt      = require('bcryptjs');

app.use(body_parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/client/dist")));
app.use(session({
    secret: '^P%mUWCwF4hWAhtgUb8BrRqWPuR$%4w^@FSB3j*VfumMEJB8SPpr57%aqRmsEyHGhJKcvgu9#W&5ZvUrCZ*q4c%8^A9RJ49@Mf3X',
    proxy: true,
    resave: false,
    saveUninitialized: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;


var TaskSchema = new mongoose.Schema({
  title: {type: String, required: true, minlength: 3},
  description: {type: String, required: true, minlength: 3}
}, {timestamps: true})
mongoose.model('Task', TaskSchema);
var Task = mongoose.model('Task');


app.get('/tasks', function(req, res)  {

  var tasks = Task.find({}, function(err, allTasks) {
    if (err) {
      res.json({message: 'Errors', data: err});
    } else {
      res.json({message: 'Success', data: allTasks});
    }
  });

});

app.post('/tasks', function(req, res) {
  console.log(req.body);
  var task = new Task({
    title: req.body.title,
    description: req.body.description
  });
  task.save(function(err) {
    if (err) {
      res.json({message: 'Errors', data: err});
    } else {
      res.json({message: 'Success'});
    }
  });
});

app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/index.html"))
});

// Other routes

var server = app.listen(4321, function() {
    console.log("listening on port 1234");
});
