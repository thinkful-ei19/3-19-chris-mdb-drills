//5//db.restaurants.find({"borough" : "Bronx"}).pretty();
//6//db.restaurants.find({"borough" : "Bronx"}).limit(5).pretty();
//7//db.restaurants.find({"borough" : "Bronx"}).skip(5).limit(5).pretty();
//8//db.restaurants.find({"grades.score" : { $gt: 90 }})
//9//db.restaurants.find({grades : { $elemMatch:{"score":{$gt : 80 , $lt :100}}}});
//10//db.restaurants.find({"address.coord" : { $elemMatch: { $lt : -95.754168 }}});
//~~~There's something weird about the instructions for these next two.
//11//db.restaurants.find({$and: [{"cuisine": {$ne :"American"}},{"grades.score" : {$gt : 70}}, {"address.coord" : {$lt : -65.754168}}]});
//12//db.restaurants.find({$and: [{"cuisine": {$ne: "American"}}, {"grades.score" : { $gt: 70 }}, {"address.coord": {$lt : -65.754168}}]});
//13//db.restaurants.find({$and: [{"cuisine": {$ne: "American"}}, {"grades.grade" : "A"}, {"borough": {$ne : "Brooklyn"}}]})
//14//db.restaurants.find({"name": /^Wil/ }, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1})
//15//db.restaurants.find({"name": /ces$/ }, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1})
//16//db.restaurants.find({"name": /Reg/ }, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1})
//17//db.restaurants.find({"borough": "Bronx", $or: [{"cuisine" : "American"}, {"cuisine" : "Chinese"}]})
//18//db.restaurants.find({$or: [{"borough" : "Staten Island"},{"borough" : "Queens"},{"borough" : "Bronx"}, {"borough": "Brooklyn"}]}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1})
//19//db.restaurants.find({$and: [{"borough" : {$ne : "Staten Island"}},{"borough" : {$ne : "Queens"}},{"borough" : {$ne : "Bronx"}}, {"borough": {$ne : "Brooklyn"}}]}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1})
//20//db.restaurants.find({"grades.score": {$lte: 10}}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1})
//21//db.restaurants.find({$and:[{"name": /^Wil/}, {"cuisine" : {$ne: "American"}}, {"cuisine": {$ne: "Chinese"}}]})
//22//db.restaurants.find({"grades.date" : ISODate("2014-08-11T00:00:00Z"), "grades.grade" : "A", "grades.score" : 11}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1})
//23//db.restaurants.find({"grades.1.date" : ISODate("2014-08-11T00:00:00Z"), "grades.1.grade" : "A", "grades.1.score" : 9}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1})\
//24//db.restaurants.find({$and: [{"address.coord.1": {$gt : 42}}, {"address.coord.1": {$lt : 52}}]}, {"restaurant_id": 1, "name": 1, "address": 1})
//25//db.restaurants.find().sort({"name": 1})
//26//db.restaurants.find().sort({"name": -1})
//27//db.restaurants.find().sort({"borough": -1}).sort({"cuisine": 1})
//28//db.restaurants.find({"address.street": {$exists: true}})
//~~~Still need to understand this next one more.
//29//db.restaurants.find({"address.coord": {$type: 1}})
//30//db.restaurants.find({"grades.score": {$mod: [7,0]}}, {"restaurant_id": 1, "name": 1, "grades": 1})
//31//db.restaurants.find({"name": /mon/}, {"restaurant_id": 1, "borough": 1, "name": 1, "grades": 1})
//32//db.restaurants.find({"name": /^Mad/}, {"restaurant_id": 1, "borough": 1, "name": 1, "grades": 1})