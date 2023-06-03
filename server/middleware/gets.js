function myMiddleware(req, res, next){
    if(req.method==="GET"||req.method==="PUT"||req.method==="POST"){
        // res.send('hello world')
         next();
    }
    else{
        res.send("it is not post");
    }
} 
// if(req.method==="POST"){
    //     console.log(req.url);
    //     next();
    // }

// app.get('/', (req, res) => {
//     res.send('hello world')
//   })
module.exports= myMiddleware;