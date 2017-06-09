
// Warm Up
db.restaurants.distinct("cuisine").sort()
db.restaurants.distinct( "cuisine", {"address.street":"Cross Bay Boulevard", "address.zipcode":"11414"})
db.restaurants.find({ $and: [ {name:  /Will/i}, {name: /Steak/i} ] }, { "name": 1, "address": 1 } )

//Pizza
 db.restaurants.find({"cuisine": /Pizza/, "name": { $nin: [/Pizza/, /Pizzeria/] }} , {"_id": 0, "name": 1} )
 db.restaurants.find({ cuisine: /Pizza/ , borough: "Queens", "grades.grade": {$nin: [ 'B','C','D','E','Z','P','Not Yet Graded' ]} }, {cuisine:1, borough: 1, grades: 1})
      // use db.restaurants.distinct("grade.grade")


 // Hamburgers
 db.restaurants.count({ cuisine: "Hamburgers"})
 db.restaurants.count({ cuisine: "Hamburgers", borough: "Manhattan"})
 db.restaurants.count({ cuisine: "Hamburgers", borough: "Manhattan", name: { $not : /McDonald/i }})
 db.restaurants.count({ cuisine: "Hamburgers", borough: "Manhattan", name: { $nin : [/McDonald/i, /Burger King/] }})
 db.restaurants.distinct("address.street",{ cuisine: "Hamburgers", borough: "Manhattan", name: { $nin : [/McDonald/i, /Burger King/] }})
 db.restaurants.find({ cuisine: "Hamburgers", borough: "Manhattan", name: { $nin : [/McDonald/i, /Burger King/] }, "address.street":"Pearl Street"}, { name:1, _id:0 })
 (Restaurant name is Burger Burger)

// Hard
 db.restaurants.find({ cuisine: "Japanese", grades: { $size:9 } }, { name: 1, _id:0 })
