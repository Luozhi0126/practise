const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const userRouter = require('./routes/User')

app.use('/',userRouter)
// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "",
//   database: "employeesystem",
// });

// //寫入
// app.post("/create", (req, res) => {
//   const name = req.body.name;
//   const age = req.body.age;
//   const country = req.body.country;
//   const position = req.body.position;
//   const comment = req.body.comment;

//   db.query(
//     "INSERT INTO `table`(`name`, `age`, `country`, `position`,`comment`) VALUES (?,?,?,?,?)",
//     [name, age, country, position,comment],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send("Values Inserted");
//       }
//     }
//   );
// });


// //抓取資料
// app.get("/employees", (req, res) => {
//   db.query("SELECT * FROM `table`", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(result);
//       res.send(result);
//     }
//   });
// });

// //修改
// app.put('/update',(req,res)=>{
//   const sid = req.body.sid;
//   const comment = req.body.comment;
//   db.query(
//     "UPDATE `table` SET `comment`= ?  WHERE sid = ?",[comment,sid],(err,result)=>{
//       if(err){
//         console.log(err)
//       }else{
//         res.send(result)
//       }
//     }
//   );
// })

// //刪除
// app.delete("/delete/:sid", (req, res) => {
//   const sid = req.params.sid;
//   console.log(req.params);
//   db.query("DELETE FROM `table` WHERE sid = ?", sid, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });
app.listen(3001, () => {
  console.log("伺服器啟動");
});
