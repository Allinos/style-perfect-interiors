<!-- project data to inventory -->

### Api for getting project data to inventory - GET
http://localhost:3000/apiv1/get-pname-from-ref?ref=101

### Api for getting project data to inventory - GET
http://localhost:3000/apiv1/get-all-ref


### Api for adding materials name - POST
http://localhost:3000/apiv1/add-material-to-list
<!-- {
  "material" : "chips"
} -->


### Api for getting materials name - POST
http://localhost:3000/apiv1/get-material-from-list


<!-- Inventory to project  -->


### Api for adding materials to projects - POST
http://localhost:3000/apiv1/add-material-to-project
<!-- {
  "pid" : 1,
  "items" : [
    {"item" : "swipe machine", "qnt" : "2pc", "amount" : 300 },
    {"item" : "ins paper", "qnt" : "2bundle", "amount" : 300 },
    {"item" : "ink", "qnt" : "2kg", "amount" : 300 }
  ]
} -->

### Api for getting materials from each projects - GET
http://localhost:3000/apiv1/get-material-from-project?pid=1


### Api for updating materials from each projects - PUT
http://localhost:3000/apiv1/update-material-from-project
<!-- {
  "item" : "ink black",
  "qnt" : "2 bottle",
  "amount" : 300,
  "materialid" : 10,
  "pid" : 1
} -->




<!-- Left Stock -->


### Api for adding materials to projects - POST
http://localhost:3000/apiv1/add-material-to-leftstock

<!-- {
  "pid" : 1,
  "items" : [
    {"item" : "swipe machine", "qnt" : "1pc", "amount" : 150 }
    
  ]
} -->

### Api for getting materials from left stock - GET
http://localhost:3000/apiv1/get-material-from-leftstock?pid=1