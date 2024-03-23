// Api5 show blog post form description(create)
app.get("/postform", (req, res) => {
        res. sendFile("views/postform.html", { root:__dirname});});

// API 6 update form
app.get("/updateform", (req, res) => {
res. sendFile("views/updateform.html", { root :__dirname });

});

// API9
app. post("/updatepost", (req, res) => {
let id = req.body.id;
let post = db.find((post) => post.id == id);
if (!post) {
res.status(404) . json({ message: "Not Found Any Post Related to Your ID" });
} else {
post.title = req.body.title;
post.content = req.body.content;
post.category = req.body.category;
post.tags = req.body.tags.split(",");
jsonfile.writeFile("./db/db.json", db, (err) => {
if (err) {
console.error(err);
res.status(500). json({ message: "Error writing to database" });
} else {
res. json({
message:` Post updated successfully! Your Post Id is ${id}` ,
});
}
});
}
});
// API10
app.get("/deletepost/:id", (req, res) => {
let id = req.params.id;
let post = db.find((post) => post.id == id);
if (!post) {
res.status(404) . json({ message: "Not Found Any Post Related to Your ID" });
} else {
let index = db.indexOf(post);
db.splice(index, 1);
jsonfile.writeFile("./db/db. json", db, (err) => {
if (err) {
console.error(err);
res.status(500). json({ message: "Error writing to database" });
} else {
res. json({
    message:` Post updated successfully! Your Post Id is ${id}` ,
});
}
});
}
});