
// here we are imported the request
import  express  from "express";
const app = express();
const port = 3000;

// now wer generate the request part and i will send the request
 app.get("/" ,(req ,res)=>{
    res.send("<h1>Home <br> About <br> Links </h1>");
 });

 // now we make 3 parts home  , about , links 
 app.get("/Home" ,(req ,res)=>{
    res.send(" <p> Hello my name is yash. I am  a Software Developer.Go to About for more Information </p>");
 });

 app.get("/About",(req ,res)=>{
   res.send(" <p>YASH BHARDWAJ <br> Contact No: +91 8395944956 <br>E-mail: Yashusharma984@gmail.com <br> LinkedIn : https://www.linkedin.com/in/yash-bhardwaj <br> GitHub: https://github.com/yashusharma984 <br>  YouTube: https://www.youtube.com/@ybeditinganimation <hr> Career Objective:To find a challenging career in an esteemed organization so I may grow professionally, thus getting maximum job satisfaction and optimum career growth");
 });
// this is for port number
app.listen(port ,()=>{
 console.log(`Server started a port ${port}.`);
});