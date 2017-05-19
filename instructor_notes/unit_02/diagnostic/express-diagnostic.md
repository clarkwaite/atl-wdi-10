# Diagnostic Unit 2.1

### Question 1: What is the Request/Response Cycle?  How does it work?
req is an object containing information about the HTTP request that raised the event. In response to req, you use res to send back the desired HTTP response.

### Question 2: What are the differences between a GET request and a POST request?
GET is a read function and POST is an update function. GET will allow you to see the page that you can update information on, but without POST that information will never be used.

### Question 3: What does `npm init` do?
NPM init creates a package.json file and now any dependencies that you install and save will be noted there for future installs.

### Question 4: What does CRUD stand for?  What are the HTTP verbs that are associated with each function?
CREATE(Put)
READ(Get)
UPDATE(Post)
DELETE(Delete)

### Question 5: If we have a form where we want to create new data, what type of `method` do we use in our form?  
POST method
### Question 6: If the following form was submitted, what would `action="myScript.js"` do?
PUT the information from the form to that URL location - the _method is using method-override because HTML wasn't originally created with Update or Delete functionality.

```
<form method="POST" action="myScript.js?_method=PUT">
  <input type="text" value="name"/>
  <button type="submit">Submit</button>
</form>
```

### Question 7: Write an express route that handles a POST request to the url `/menus` and redirects to the `/homepage`
router.post('/', function(req, res){
  var newMenuItem = {
        description: req.body.description,
        price: req.body.price,
    };
    data.menuItems.push(newMenuItem);
   res.render('/restaurant/menus', {
    menuItem: {
      description: data.menuItems[req.params.id].description,
      price: data.menuItems[req.params.id].price,
    
    res.redirect('/restaurant/homepage);
});

### Question 8: In the following express route, write how you would grab the values of `:id` and `:song_id` in javascript.

```
app.get("/artist/:id/song/:song_id"), function(req, res){
  //hmm...
}
```

### Question 9: What is MVC? How have we been using it so far?
Model View Controller - it's an architecture for how to design a site.

The model stores data that is retrieved according to commands from the controller and displayed in the view.

A view generates new output to the user based on changes in the model.

A controller can send commands to the model to update the model's state.

We've ben using controllers and views to build our site on the local server.

## Bonus Question

### Question 10: Write an express route that handles a GET request to the url `/products` and sends back the JSON object {error: "Bad Request"}
