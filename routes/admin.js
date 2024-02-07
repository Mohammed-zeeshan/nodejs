const express = require("express");

const router = express.Router();

const fs = require('fs');

router.get("/", (req, res, next) => {
    fs.readFile("Chats.txt", (err, data) => {
        if (err) {
            console.log(err);
            data = "No data found"
        }
        res.send(
        `${data}<form action="/admin" method="POST" onsubmit="document.getElementById('username').value = localStorage.getItem('username')"><input id="message" type="text" name="message"><input type="hidden" name="username" id="username"><button type="submit">Send</button></form>`
          );
    })
});

router.post("/", (req, res, next) => {
  console.log(req.body);
    fs.writeFile("Chats.txt", `${req.body.username}: ${req.body.message}`,{flag: 'a'}, err => {
      err ? console.log(err) : res.redirect("/admin");
    });
});

module.exports = router;
