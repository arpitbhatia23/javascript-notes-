
To do this in **mongosh**:

```shell
use aggree
```

Then,

```js
db.authors.insertMany(/* content of authors.json */)
db.books.insertMany(/* content of books.json */)
db.users.insertMany(/* content of data.json */)
```

However it is much faster to use other GUI tools like MongoDB for VS Code or MongoDB Compass for this. Simple click the ==**`ADD DATA`**== button and import from a JSON file or import by pasting the data onto the text box.

# 2 - Basic Aggregation (`$match` and `$count`)

## Example 1.a

Question: How many users are active? 

To find out all users where `isActive:false`:

```js
// mongosh
db.users.aggregate( { $match: { isActive: false }} )
```

**OR**

```js
// mongosh
db.users.aggregate( [ { $match:{ isActive: false } } ] )
```

If you are using a GUI like Compass, enter the following in **Aggregations** tab with the **text** view:

```js
// Compass
[
	{
		$match: {
		isActive: false
		}
	}
]
```

## Example 1.b

To find out the number of users where `isActive:true` ^572981

```js
// mongosh
db.users.aggregate([
	{
		$match: {
		isActive: true
		}
	},
	{
		$count: "activeUsers"
	}
])
```

```js
// Compass
[
	{
		$match: {
		isActive: true
		}
	},
	{
		$count: "activeUsers"
	}
]
```

The output will be:

```js
// mongosh output
[ { activeUsers: 484 } ]
```

```js
// Compass output
{
  "activeUsers": 484
}
```

Note that the key, `activeUsers` in the output is the value of the key `$count` in the prompt.

The total number of users matching the prompt is the value of the key `activeUsers` in the input.

# 3 - `$group` Operator

Basic Group syntax:

```js
[
	{
		$group: {
			_id: expression,
			fieldN: {
				accumulatorN: expressionN
			}
		}
	}
]
```

## Example 2

Group together all existing values of `gender`

```js
// mongosh
db.users.aggregate([{$group:{_id: "$gender"}}])
```

```js
// compass
[
	{
		$group:{
			_id: "$gender"
		}
	}
]
```

```js
// output
[ { _id: 'female' }, { _id: 'male' } ]
```

## Example 3

Group together all existing values for `age`

```js
db.users.aggregate([{$group:{_id: "$age"}}])
```

```js
[
	{
		$group:{
		_id: "$age"
		}
	}
]
```

```js
// output
[
  { _id: 33 }, { _id: 21 },
  { _id: 20 }, { _id: 35 },
  { _id: 37 }, { _id: 39 },
  { _id: 31 }, { _id: 38 },
  { _id: 27 }, { _id: 23 },
  { _id: 29 }, { _id: 28 },
  { _id: 40 }, { _id: 26 },
  { _id: 22 }, { _id: 30 },
  { _id: 32 }, { _id: 24 },
  { _id: 34 }, { _id: 36 }
]
```

# 4 - `$avg` Operator 
## Example 4

Question: What is the average age of all users.

Average age of all users:

- `_id: null` means grouping is not done based on any key/values. Just group together all documents.
- `averageAge` is a new field/key that will be included in the output 

```js
// mongosh
db.users.aggregate([{$group:{_id: null, averageAge: { $avg: "$age"}}}])
```

```js
// Compass
[
	{
	    $group: {
	        _id: null,
	        averageAge: {
	            $avg: "$age"
	        }
	    }
	}
]
```

```js
[ { _id: null, averageAge: 29.835 } ]
```

## Example 5

Average age of all **users** grouped by **gender**

```js
// mongosh
db.users.aggregate([{$group:{_id:"$gender",averageAge:{$avg:"$age"}}}])
```

```js
// Comapss
[
	{
	    $group: {
	        _id: "$gender",
	        averageAge: {
	            $avg: "$age"
	        }
	    }
	}
]
```

```js
// output
[
  { _id: 'female', averageAge: 29.81854043392505 },
  { _id: 'male', averageAge: 29.851926977687626 }
]
```

# 5 - `$sum` Operation

## Example 6

Group together all existing values of the key `favoriteFruit`:

```js
// mongosh
db.users.aggregate([{$group:{_id:"$favoriteFruit"}}])
```

```js
// Compass
[
	{
	    $group: {
        _id: "$favoriteFruit"
	    }
	}
]
```

```js
// output
[ { _id: 'banana' }, { _id: 'apple' }, { _id: 'strawberry' } ]
```

## Example 7

Group together all possible values of the key `favoriteFruit` along with a count on their occurrences as key `count`:

- The number of occurrences of each value is assigned to the key `count` in the output.
- Here `$sum: 1` means to increase the value of `count` by 1 for each occurrence.

```js
// mongosh
db.users.aggregate(
[
	{
	    $group: {
	        _id: "$favoriteFruit",
	      	count: {
	      		$sum: 1
	        }
	    }
	}
])
```

```js
// Compass
[
	{
	    $group: {
	        _id: "$favoriteFruit",
	      	count: {
	      		$sum: 1
	        }
	    }
	}
]
```

```js
// output
[
  { _id: 'strawberry', count: 323 },
  { _id: 'banana', count: 339 },
  { _id: 'apple', count: 338 }
]
```

# 6 - `$sort` Operation

## Example 8

Group together all possible values of the key `favoriteFruit` along with a count of their occurrences as `count`. Then sort by `count`, in descending order.

Here, `count: -1` means sort by `count` in descending order.

```js
// mongosh
db.users.aggregate(
[
	{
	    $group: {
	        _id: "$favoriteFruit",
	      	count: {
	      		$sum: 1
	        }
	    }
	},
	{
		$sort: {
		count: -1
	    }
	}
])
```

```js
// Compass
[
	{
	    $group: {
	        _id: "$favoriteFruit",
	      	count: {
	      		$sum: 1
	        }
	    }
	},
	{
		$sort: {
		count: -1
	    }
	}
]
```

```js
// output
[
  { _id: 'banana', count: 339 },
  { _id: 'apple', count: 338 },
  { _id: 'strawberry', count: 323 }
]
```

## Example 9

Group together all possible values of the key `favoriteFruit` along with a count of their occurrences as `count`. Then sort by `count`, in ascending order.

Here, `count: 1` means sort by `count` in ascending order.

```js
// mongosh
db.users.aggregate(
[
	{
	    $group: {
	        _id: "$favoriteFruit",
	      	count: {
	      		$sum: 1
	        }
	    }
	},
	{
		$sort: {
		count: 1
	    }
	}
])
```

```js
// Compass
[
	{
	    $group: {
	        _id: "$favoriteFruit",
	      	count: {
	      		$sum: 1
	        }
	    }
	},
	{
		$sort: {
		count: 1
	    }
	}
]
```

```js
// output
[
  { _id: 'strawberry', count: 323 },
  { _id: 'apple', count: 338 },
  { _id: 'banana', count: 339 }
]
```
# 7 - `$limit` Operation
## Example 10

Group together all possible values of the key `favoriteFruit` and return the number occurrences of each value as `count`.

- Sort the returned objects by `count`, in ascending order.
- Keep only the first two objects.

```js
// mongosh
db.users.aggregate(
[
	{
	    $group: {
	        _id: "$favoriteFruit",
	      	count: {
	      		$sum: 1
	        }
	    }
	},
	{
		$sort: {
		count: -1
	    }
	},
	{
		$limit: 2
	}
])
```

```js
// output
[ { _id: 'banana', count: 339 }, { _id: 'apple', count: 338 } ]
```

## Example 11

Question: Find the total number of males and females?

```js
// compass
[
	{
		$group:{
			_id: "$gender",
			genderCount: {
				$sum: 1
			}
		}
	}
]
```

```js
// mongosh
db.users.aggregate(
	[
		{
			$group:{
				_id: "$gender",
				genderCount: {
					$sum: 1
				}
		    }
		}
	]
)
```

```js
// output
[
  { _id: 'female', genderCount: 507 },
  { _id: 'male', genderCount: 493 }
]
```
## Example 12.a

Question: Which country has the highest number of registered users?

1. Group users by `company.location.country`.
2. Count users belonging to each existing value of `company.location.country` and assign this count as value of key `userCount`.

```js
// Compass
[
	{
		$group: {
	    	_id: "$company.location.country",
		    userCount: {
		      	$sum: 1
		    }
	    }
	}
]
```

```js
// mongosh
db.users.aggregate(
[
	{
		$group: {
	    	_id: "$company.location.country",
		    userCount: {
		      	$sum: 1
		    }
	    }
	}
])
```

```js
// output
[
  { _id: 'Italy', userCount: 239 },
  { _id: 'France', userCount: 245 },
  { _id: 'Germany', userCount: 261 },
  { _id: 'USA', userCount: 255 }
]
```

## Example 12.b

1. Group users by `company.location.country`.
2. Count users belonging to each existing value of `company.location.country` and assign this count as value of key `userCount`.
3. Sort by `userCount` in descending order.

```js
// Compass
[
	{
		$group: {
	    	_id: "$company.location.country",
		    userCount: {
		      	$sum: 1
		    }
	    }
	},
	{
		$sort: {
			userCount: -1
		}
	}
]
```

```js
// mongosh
db.users.aggregate(
[
	{
		$group: {
	    	_id: "$company.location.country",
		    userCount: {
		      	$sum: 1
		    }
	    }
	},
	{
		$sort: {
			userCount: -1
		}
	}
])
```

```js
// output
[
  { _id: 'Germany', userCount: 261 },
  { _id: 'USA', userCount: 255 },
  { _id: 'France', userCount: 245 },
  { _id: 'Italy', userCount: 239 }
]
```

## Example 12.c

1. Group users by `company.location.country`.
2. Count users belonging to each existing value of `company.location.country` and assign this count as value of key `userCount`.
3. Sort by `userCount` in descending order.
4. Limit number of objects to 1.

```js
// mongosh
[
	{
		$group: {
	    	_id: "$company.location.country",
		    userCount: {
		      	$sum: 1
		    }
	    }
	},
	{
		$sort: {
			userCount: -1
		}
	},
	{
		$limit: 1
	}
]
```

```js
// Compass
db.users.aggregate(
[
	{
		$group: {
	    	_id: "$company.location.country",
		    userCount: {
		      	$sum: 1
		    }
	    }
	},
	{
		$sort: {
			userCount: -1
		}
	},
	{
		$limit: 1
	}
])
```

```js
// output
[ { _id: 'Germany', userCount: 261 } ]
```

Now we have the country with the greatest number of users.
## Example 13

Find the number of `users` for each value of `eyeColor`:

```js
// Compass
[
	{
		$group: {
			_id: "$eyeColor",
			count: {
				$sum: 1
			}
		}
	}
]
```

```js
db.users.aggregate(
[
	{
		$group: {
			_id: "$eyeColor",
			count: {
				$sum: 1
			}
		}
	}
])
```

```js
[
  { _id: 'green', count: 330 },
  { _id: 'blue', count: 333 },
  { _id: 'brown', count: 337 }
]
```
# 8 - `$unwind` Operation

Breaks up an object into duplicate objects based on the elements of an array in that object.

For example, let's say that we inserted the following object to the `test` collection.

```js
test> db.test.insertOne({arrayKey:[1, 2, "abc"]})
{
  acknowledged: true,
  insertedId: ObjectId("66c1a1942c5cf3824068fbac")
}
```

If we run the below command, 

```js
db.test.aggregate({ $unwind: "$arrayKey" })
```

it would return:

```js
[
  { _id: ObjectId("66c1a1942c5cf3824068fbac"), arrayKey: 1 },
  { _id: ObjectId("66c1a1942c5cf3824068fbac"), arrayKey: 2 },
  { _id: ObjectId("66c1a1942c5cf3824068fbac"), arrayKey: 'abc' }
]
```

## Example 14

**Question:** What is the average number of tags per user?

Answer 1: Here we are only using `$unwind` and `$group`

```js
// Compass
[
	{
		$unwind: "$tags"
	},
	{
		$group: {
			_id: "$_id",
			numberOfTags: { $sum: 1 }
	    }
	},
	{
		$group: {
			_id: null,
			averageNumberOfTags: { $avg: "$numberOfTags" }
	    }
	}
]
```

```js
// mongosh
db.users.aggregate(
[
	{
		$unwind: "$tags"
	},
	{
		$group: {
			_id: "$_id",
			numberOfTags: { $sum: 1 }
	    }
	},
	{
		$group: {
			_id: null,
			averageNumberOfTags: { $avg: "$numberOfTags" }
	    }
	}
])
```

```js
// output
[ { _id: null, averageNumberOfTags: 3.556 } ]
```

# 9 - `$addFields`, `$size` and `$ifNull`

## Example 15

**Question:** What is the average number of tags per user?

Answer 2: Here we are only using `$addFields` (with `$size` aggregator) and `$group`

```js
[
	{
		$addFields: {
		  numberOfTags: {
        $size: {$ifNull: ["$tags", []] }
      }
      
		}	
	},
  {
    $group: {
      _id: null,
      averageNumberOfTags: {$avg: "$numberOfTags"}
    }
  }
]
```

```js
db.users.aggregate(
[
	{
		$addFields: {
		  numberOfTags: {
        $size: {$ifNull: ["$tags", []] }
      }
      
		}	
	},
  {
    $group: {
      _id: null,
      averageNumberOfTags: {$avg: "$numberOfTags"}
    }
  }
])
```

```js
[ { _id: null, averageNumberOfTags: 3.556 } ]
```

# 10 - `$match` and `$count`

## Example 16

Question: How many users have **`"enim"`** as one of their tags

```js
[
	{
		$match: {
			tags: "enim"
		}
	},
	{
	    $count: "usersWithEnimTag"
	}
]
```

```js
db.users.aggregate(
[
	{
		$match: {
			tags: "enim"
		}
	},
	{
	    $count: "usersWithEnimTag"
	}
])
```

```js
//output
[ { usersWithEnimTag: 62 } ]
```

# 11 - `$project` Operator
## Example 17

**Question**: What are the names and age of users who are inactive and have `'velit'` as a tag?

```js
// Compass
[
	{
		$match: {
			isActive: false, tags: "velit", 
	  	}
	},
	{
	    $project: {
	      name: 1,
	      age: 1
	    }
	},
	{
	    $limit: 5
	}
]
```

```js
// mongosh
db.users.aggregate(
[
	{
		$match: {
			isActive: false, tags: "velit", 
	  	}
	},
	{
	    $project: {
	      name: 1,
	      age: 1
	    }
	},
	{
	    $limit: 5
	}
])
```

```js
// Output
[
  {
    _id: ObjectId("66be45b08a884346698a8a8e"),
    name: 'Aurelia Gonzales',
    age: 20
  },
  {
    _id: ObjectId("66be45b08a884346698a8aac"),
    name: 'Hahn Pope',
    age: 21
  },
  {
    _id: ObjectId("66be45b08a884346698a8abb"),
    name: 'Milagros Levy',
    age: 33
  },
  {
    _id: ObjectId("66be45b08a884346698a8ae9"),
    name: 'Briana Flores',
    age: 36
  },
  {
    _id: ObjectId("66be45b08a884346698a8af8"),
    name: 'Berry Marsh',
    age: 26
  }
]
```

## Example 18

**Question**: How many users have a phone number starting with `'+1 (940)'`

```js
// Compass
[
	{
		$match: {
			"company.phone": /^\+1 \(940\)/
	  	}
	},
	{
	    $count: "usersWithSpecialNumber"
	}
]
```

```js
// mongosh
db.users.aggregate(
[
	{
		$match: {
			"company.phone": /^\+1 \(940\)/
	  	}
	},
	{
	    $count: "usersWithSpecialNumber"
	}
])
```

```js
// output
[ { usersWithSpecialNumber: 5 } ]
```


## Example 19

**Question:** Who has registered more recently?

```js
// Compass
[
	{
		$sort: {
			registered: -1
	    }
	},
	{
		$limit: 4
	},
	{
		$project: {
			name: 1,
			registered: 1,
			favoriteFruit: 1
		}
	}
]
```

```js
// mongosh
db.users.aggregate([
	{
		$sort: {
			registered: -1
	    }
	},
	{
		$limit: 4
	},
	{
		$project: {
			name: 1,
			registered: 1,
			favoriteFruit: 1
		}
	}
])
```

```js
// output
[
  {
    _id: ObjectId("66be45b08a884346698a8d50"),
    name: 'Stephenson Griffith',
    registered: ISODate("2018-04-14T03:16:20.000Z"),
    favoriteFruit: 'apple'
  },
  {
    _id: ObjectId("66be45b08a884346698a8c41"),
    name: 'Sonja Galloway',
    registered: ISODate("2018-04-11T12:52:12.000Z"),
    favoriteFruit: 'strawberry'
  },
  {
    _id: ObjectId("66be45b08a884346698a8e62"),
    name: 'Mcpherson Christensen',
    registered: ISODate("2018-04-11T07:18:42.000Z"),
    favoriteFruit: 'strawberry'
  },
  {
    _id: ObjectId("66be45b08a884346698a8d55"),
    name: 'Mamie Bradford',
    registered: ISODate("2018-04-09T04:54:20.000Z"),
    favoriteFruit: 'banana'
  }
]
```

## Example 20

**Question:** Categorize users by their favorite fruit.

```js
// compass
[
  {
    $group: {
      _id: "$favoriteFruit",
      users: {
      	$push: "$name"
      }
    }
  }
]
```

```js
// mongosh
db.users.aggregate(
[
  {
    $group: {
      _id: "$favoriteFruit",
      users: {
      	$push: "$name"
      }
    }
  }
])
```

```js
// output
[
  {
    _id: 'apple',
    users: [
      'Kitty Snow',          'Grace Larson',          'Carmella Morse',
      'Tina Barnett',        'Belinda Zimmerman',     'Santana Preston',
      'Agnes West',          'Bowman Whitaker',       'Roseann Conrad',
      'Abby Wallace',        'Curtis Bruce',          'Frances Camacho',
      'Combs Graham',        'Elliott Phelps',        'Latasha Bailey',
      'Bentley Santana',     'Sheila Lynch',          'Wong Weber',
      'Deanna Sweeney',      'Bolton Henson',         'Christa Maxwell',
      'Dominique Bowman',    'Meagan Moran',          'Singleton Jackson',
      'Dickerson Benson',    'Noemi Herrera',         'Downs Cantu',
      'Clara Guerra',        'Evangelina Strickland', 'Paula Mcdaniel',
      'Tessa Myers',         'Herrera Harrell',       'Cline Kemp',
      'Sallie Schmidt',      'Natalia Rasmussen',     'Noelle Stein',
      'Becker Lara',         'Verna Wolf',            'Lorene Newman',
      'Burt Stout',          'Loretta Pace',          'Adeline Brewer',
      'Sargent Casey',       'Clarice Craft',         'Angelica Bryan',
      'Cox Bernard',         'Whitney Vaughan',       'Lambert Todd',
      'Melton Carrillo',     'Brandie Stark',         'Isabel Burt',
      'Marks Barrett',       'Marylou Wilkerson',     'Jenkins Huffman',
      'Mildred Boyer',       'Earnestine Kramer',     'Kari Love',
      'Tommie Cobb',         'Higgins Cunningham',    'Hoover Owens',
      'Claire Brady',        'Rosanne Burgess',       'Kelley Decker',
      'Cole Zamora',         'Marva Mcgowan',         'Patton Maddox',
      'Fay Trevino',         'Edith Clark',           'Julia Velez',
      'Glover Leblanc',      'Ilene Miller',          'Spears Berry',
      'Moran Le',            'Morris Fisher',         'Obrien Tucker',
      'Coleen Hamilton',     'Murray Bass',           'Nicole Cain',
      'Jordan Cline',        'Whitney Conner',        'Phyllis Howe',
      'Stacey Rivas',        'Maura Witt',            'Myers Villarreal',
      'Dina Booth',          'Fitzgerald Walton',     'Esmeralda Cortez',
      'Chase Albert',        'Fanny Koch',            'Natalie Wolfe',
      'Chen Hays',           'Sawyer Cook',           'Stafford Montgomery',
      'Dollie Berger',       'Elisabeth Adams',       'Callie Dillon',
      'Vance Sanford',       'Cassie Frazier',        'Pace Irwin',
      'Diann Key',           'Vang Lane',             'Barrett Pacheco',
      'Walter Gordon',       'Dolly Pitts',           'Dodson Hess',
      'Pansy Landry',        'Cohen Dixon',           'Tucker Olsen',
      'Monica Meyers',       'Jensen Munoz',          'Baker Dunlap',
      'Araceli Copeland',    'Cristina Stephens',     'Mcneil Terrell',
      'Powell Sherman',      'Gladys Harrison',       'Hanson Chen',
      'Tara Sexton',         'Lakisha Rich',          'Petersen Wright',
      'Vincent Abbott',      'Casandra Lester',       'Harding Wilkinson',
      'Wilkinson Hardin',    'Maxine Rogers',         'Gross George',
      'Bond Marks',          'Velazquez Carroll',     'Chambers Hill',
      'Opal Herman',         'Meyers Gallagher',      'Annette Bishop',
      'Campos Valdez',       'Sullivan Everett',      'Carmela Reyes',
      'Gilmore Ayers',       'Ingram Perry',          'Bartlett Matthews',
      'Lara Russo',          'Laura Chang',           'Emilia Mueller',
      'Caroline Hopper',     'Aline Tyson',           'Mercedes Mccoy',
      'Juana Mcleod',        'Goodman Gibson',        'Bethany Burnett',
      'Mayer Ware',          'Leta Foreman',          'Judy Hale',
      'Sara Workman',        'Thompson Hewitt',       'Angie Baker',
      'Alba Willis',         'Ortiz Mack',            'Fannie Kline',
      'Celeste Armstrong',   'Meredith Velasquez',    'Estela Joyner',
      'Cheri Wong',          'Summer Deleon',         'Monroe Francis',
      'Pennington Barker',   'Christian Hebert',      'Kelley Rose',
      'Doreen Sellers',      'Vicki Keller',          'Maricela Obrien',
      'Castillo Moses',      'Alford Burton',         'Quinn Blair',
      'Ramsey Garner',       'Lolita Colon',          'Cotton Pugh',
      'Vera Livingston',     'Fischer Contreras',     'Lee Chavez',
      'Jodie Morris',        'Robbins William',       'Marcy Harrington',
      'Angelique Drake',     'Rodgers English',       'Liliana Murphy',
      'Kline Skinner',       'Nash Brown',            'Sheena Spence',
      'Bertha Shaw',         'Randi Crosby',          'Edna Baxter',
      'Hester Graves',       'Consuelo Waller',       'Shelley Cherry',
      'Freida Knapp',        'Craig Neal',            'Lenora Stokes',
      'Kerr Mcneil',         'Lydia Bauer',           'Boyer Norman',
      'Sheryl Hogan',        'Gilda Peck',            'Guzman Evans',
      'Kinney Wynn',         'Chelsea Gray',          'Hunter Stuart',
      'Nikki Carney',        'Casey Cochran',         'Megan Maldonado',
      'Perez Delacruz',      'Olson Poole',           'Sykes Blackwell',
      'Lynda Mcclain',       'Montgomery Hendrix',    'Janette Odom',
      'Valeria Gardner',     'Hillary Anthony',       'Roy Dotson',
      'Marjorie Vega',       'Massey Parrish',        'Jenifer Maynard',
      'Nora Hester',         'York Chapman',          'Rhodes Mclean',
      'Pollard Bray',        'Shirley Blankenship',   'Roach Guzman',
      'Mathews Mcdonald',    'Mavis Leach',           'Carney Nguyen',
      'Fulton Diaz',         'Marsha Humphrey',       'Alma Mcintosh',
      'Lindsay Daniels',     'Johanna Anderson',      'Rowe Roberts',
      'Deloris Walls',       'Haney Mendoza',         'Manning Park',
      'Anne Gregory',        'Juarez Alvarez',        'April Sosa',
      'Lilian Gilmore',      'Ramona Marshall',       'Rosa Cohen',
      'Fowler Blevins',      'Holloway Hughes',       'Salinas Bright',
      'Noreen Holt',         'Gallagher Pate',        'Gray Meadows',
      'Diane Daugherty',     'Garza Patrick',         'Griffith Gilliam',
      'Sandy Dejesus',       'Penelope Lynn',         'Finley Acosta',
      'Stephenson Griffith', 'Moss Sykes',            'Snider Kelley',
      'Schneider Brock',     'Powers Fuller',         'Jarvis Farrell',
      'Danielle Justice',    'Marta Bartlett',        'Hamilton Raymond',
      'Nona Beck',           'Allen Santos',          'Riley Acevedo',
      'Taylor Mcfarland',    'Helena Middleton',      'Mcclain Davenport',
      'Hendricks Church',    'Henrietta Ortega',      'House Paul',
      'Sherman Gutierrez',   'Turner Dale',           'Tammy Hunter',
      'Beverley Oliver',     'Barnett Leonard',       'Ida Holder',
      'Lena Hobbs',          'Janell Higgins',        'Schroeder Sparks',
      'Brooke Bonner',       'Kelsey Mullen',         'Kennedy Bullock',
      'Osborn Duke',         'Helene Guerrero',       'Wilkerson Warner',
      'Emily Moreno',        'Holmes Murray',         'Rosales Banks',
      'Hurley Patton',       'Cantrell Parsons',      'Shaffer Hopkins',
      'Alice Rivera',        'Gutierrez Mcpherson',   'Johns Dyer',
      'Woods Orr',           'Leigh Patel',           'Flowers Beard',
      'Valencia Shepard',    'Martin Ruiz',           'Parsons Melton',
      'Ebony Powers',        'Brittany Schneider',    'Lora Bowers',
      'Lois Fuentes',        'Irma Bates',            'Huffman Rodriguez',
      'Leanne Levine',       'Susana Watson',         'Buckley Dominguez',
      'Kidd Arnold',         'Knapp Cote',            'Rodriguez Hawkins',
      'Alexis Nash',         'Williamson Kirkland',   'Elsa Barr',
      'Nicholson Gill',      'Janna Waters',          'Delgado Quinn',
      'Bettie Sullivan',     'Barrera Freeman',       'Madelyn Britt',
      'Tamika Wiley',        'Fuller Lowe',           'Linda Petersen',
      'Kimberley Chase',     'Paige Reed',            'Copeland Hayden',
      'Duncan Gilbert',      'Charles Johnston',      'Courtney Underwood',
      'Brenda Lang',         'Dotson Hatfield',       'Faith Andrews',
      'Lindsey Stanley',     'Evans Stevens'
    ]
  },
  {
    _id: 'banana',
    users: [
      'Aurelia Gonzales',     'Alison Farmer',       'Le Farley',
      'Sharon Grimes',        'Mable Pratt',         'Franco Ochoa',
      'Leila Cervantes',      'Hahn Pope',           'Charlotte Larsen',
      'Alejandra Collins',    'Nola Foster',         'Bobbie Sawyer',
      'Milagros Levy',        'Alexandra Vance',     'Larson Terry',
      'Cobb Wells',           'David French',        'Jerry Pearson',
      'Fuentes Vang',         'Louella Glenn',       'Lang Tanner',
      'Margo Wooten',         'Crane Dunn',          'Maggie Meyer',
      'Rosanna Davis',        'Jan Barron',          'Mills Conley',
      'Gertrude Talley',      'Eva Hooper',          'Villarreal Page',
      'Mcgee Ratliff',        'Kelly Valencia',      'Gibbs Carr',
      'Barry Bird',           'Berry Marsh',         'Nancy Stephenson',
      'Amanda Wood',          'Marquez Mosley',      'Oneal Branch',
      'Vilma Moss',           'Tyler Haney',         'Cash Gould',
      'Krista Salinas',       'Maryanne Kim',        'Kasey Hubbard',
      'Jennings Dillard',     'Randolph Cantrell',   'Ellen Schroeder',
      'Juliet Steele',        'Knight Silva',        'Isabelle Oneal',
      'Velasquez Shelton',    'Larsen Weiss',        'Justine Craig',
      'Allie Short',          'Claudine Smith',      'Baird Mccray',
      'Norman Solis',         'Serrano Avila',       'Lenore Mccullough',
      'Whitley Turner',       'Barron Winters',      'Erna Perkins',
      'Lorie Frederick',      'Maryann Lawson',      'Wanda Hahn',
      'William Hood',         'Florence Shannon',    'Tanisha Houston',
      'Castaneda Rice',       'Garcia Dudley',       'Adrian Whitney',
      'Letha Alford',         'Myra Garcia',         'Vonda Yang',
      'Goldie Crawford',      'Berger Edwards',      'Marion Hendricks',
      'Enid Rivers',          'Yang Hammond',        'Christina Monroe',
      'Cherry Pierce',        'Christie Martinez',   'Brennan Gillespie',
      'Anderson Salazar',     'Rae Robertson',       'Lorna Lowery',
      'Curry Pennington',     'Ernestine Cooley',    'Manuela Simpson',
      'Butler Riley',         'Sadie Michael',       'Becky Baldwin',
      'Head Whitehead',       'Price Logan',         'Durham Russell',
      'Rocha Buck',           'Hayes Montoya',       'Bertie Cannon',
      'Hartman Nolan',        'Amelia Molina',       'Harriet Bush',
      'Gallegos Ryan',        'Eddie Franklin',      'Marina Rush',
      'Graciela Allison',     'Chasity Robbins',     'Melanie Leon',
      'Roberta Santiago',     'Blair Lawrence',      'Forbes Miles',
      'Thornton Juarez',      'Jean Charles',        'Blevins Chambers',
      'Kristie Duffy',        'Etta Young',          'Cabrera Manning',
      'Kirk Walsh',           'Billie Lopez',        'Alyssa Aguirre',
      'Ofelia Ramsey',        'Sanders Beach',       'Morales Kelly',
      'Paulette Brennan',     'Alexandria Cummings', 'Marian Strong',
      'Lillie Lloyd',         'Pratt Reynolds',      'Patty Rios',
      'Payne Oneil',          'Perkins Emerson',     'Cherry Davidson',
      'Bowen Gross',          'Candy Clemons',       'Imogene Christian',
      'Wagner Salas',         'Norton White',        'Harris Flynn',
      'Cote Kaufman',         'Michael Green',       'Glenda Sims',
      'Lottie Cotton',        'Welch Yates',         'Pate Lancaster',
      'Moon Travis',          'Nelda Martin',        'Lilly Finley',
      'Marguerite Bennett',   'Mcintosh Caldwell',   'Janelle Calhoun',
      'Mayra Hurley',         'Henson Rodgers',      'Shepherd Haynes',
      'Tillman Grant',        'Rachelle Horn',       'Adams Hernandez',
      'Strickland Jefferson', 'Calhoun Robinson',    'Trudy Nielsen',
      'Rosemary Hancock',     'Helga Cox',           'Aguirre Cabrera',
      'Christi Cleveland',    'Martinez Tate',       'Gilliam Hansen',
      'Francisca Parks',      'Talley Palmer',       'Kirby Buckley',
      'Lesley Schultz',       'Catherine Jacobson',  'Shelly Wilson',
      'Marsh Peters',         'Cruz Floyd',          'Sharp Walker',
      'Fisher Mercer',        'Margie Langley',      'Lila Benton',
      'Rhea Bradley',         'Kristy Mckee',        'Ruth Aguilar',
      'Salas Webb',           'Cleveland Watkins',   'Tran Estrada',
      'Nina Pittman',         'Alvarez Mclaughlin',  'Leann Knight',
      'Hope Good',            'Lakeisha Ford',       'Davenport Dennis',
      'Wiggins Hayes',        'Little Faulkner',     'Soto Ball',
      'Jaclyn Bryant',        'James Ewing',         'Boyle Mays',
      'Lorena Valenzuela',    'Mabel Castillo',      'Hickman Mccall',
      'Lott Beasley',         'Brooks Kent',         'Reed Sutton',
      'Conrad Mendez',        'Good Hudson',         'Puckett Madden',
      'Rose Singleton',       'Lorrie Mitchell',     'Priscilla Franks',
      'Loraine Berg',         'Mara Kirby',          'Lily Chaney',
      'Acosta Walter',        'Hess Dodson',         'Gill Morrison',
      'Joyce Cruz',           'Clements Merrill',    'Austin Carlson',
      'Cassandra Harper',     'Noel Wilcox',         'Ina Sweet',
      'Corinne Reid',         'Sonia Becker',        'Cornelia Dickson',
      'Tameka Spencer',       'Polly Ashley',        'Mamie Bradford',
      'Nellie Dean',          'Barker Cardenas',     'Josefa Velazquez',
      'Shannon Burke',        'Regina Parker',       'Aurora Valentine',
      'Elvira York',          'Michelle Sloan',      'Luz Campbell',
      'Josefina Ballard',     'Chapman Rosario',     'Burks Hunt',
      'Bullock Snider',       'Dorsey Mullins',      'Ross Hardy',
      'Burgess Frye',         'Marisol Ellis',       'Willis Odonnell',
      'Burnett Tillman',      'Bass Ferrell',        'Mona Tran',
      'James Best',           'Leanna Fernandez',    'Beach Duran',
      'Tammie Goodwin',       'Chris Fox',           'Kara Burks',
      'Jones Hensley',        'Ashley Patterson',    'Drake Hoffman',
      'Wilder Bender',        'Walls Sanders',       'Marietta Webster',
      'Ola Erickson',         'Day Bradshaw',        'Luella Dawson',
      'Mccoy Lott',           'Sanchez Garrett',     'Vasquez Hanson',
      'Mallory Richard',      'Ayala Bean',          'Mcconnell Byers',
      'Jackson Curtis',       'Roberson Phillips',   'Pena Combs',
      'Carrillo Mccarty',     'Kendra Sargent',      'Love Soto',
      'Mitzi Coffey',         'Cooper Hutchinson',   'Holcomb Browning',
      'Beth Estes',           'Gina Gonzalez',       'Hester Huff',
      'Carly Sandoval',       'Therese Vinson',      'Carter Mooney',
      'Church Romero',        'Lori Benjamin',       'Bell Harding',
      'Park Tyler',           'Holland Jimenez',     'May Glover',
      'Theresa Bowen',        'Wyatt Fitzgerald',    'Mcfadden Golden',
      'Roberts Gates',        'Gwendolyn Solomon',   'Nadine Delgado',
      'Cynthia Lambert',      'Willie Forbes',       'Valenzuela Mcknight',
      'Barber Guy',           'Mia Massey',          'Salazar Glass',
      'Benson Ross',          'Katheryn Finch',      'Morin Alston',
      'Gardner Herring',      'Gwen Thompson',       'Wiley Whitfield',
      'Hyde Cameron',         'Maureen Jones',       'Bessie Cooke',
      'Townsend Warren',      'Zelma Woods',         'Hudson Kidd',
      'Torres Mathews',       'Liza Ayala',          'Kate Jenkins',
      'Stuart Roy',           'Darcy Donaldson',     'Kemp Donovan',
      'Gabrielle Reeves',     'Alston Hines',        'Bright Lindsey',
      'Sonya Heath',          'Greer Riggs',         'Wallace Saunders',
      'Beasley Bond',         'Daphne Barnes',       'Jacobs Scott',
      'Tonya Mcconnell',      'Amy Holmes',          'Marcella Carter',
      'Ada Hoover',           'Acevedo Wagner',      'Pamela Collier',
      'Morgan Woodard',       'Contreras Mcintyre',  'Brown Wiggins',
      'Chrystal Clay',        'Britney Bell',        'Iva Gonzales'
    ]
  },
  {
    _id: 'strawberry',
    users: [
      'Hays Wise',          'Karyn Rhodes',       'Anastasia Blake',
      'Dale Holman',        'Morrison Sheppard',  'Wendy Sampson',
      'Newman Rodriquez',   'Lupe Barry',         'Mcguire Vincent',
      'Bryant Thornton',    'Maldonado Osborne',  'Herman David',
      'Berta Case',         'Livingston Huber',   'Merle Hall',
      'Benjamin Espinoza',  'Gracie Ramirez',     'Vaughan Walters',
      'Kimberly House',     'Mercado Riddle',     'Randall Sharp',
      'Ines Mcgee',         'Hazel Mason',        'Betty Richardson',
      'Allyson Padilla',    'Rollins Serrano',    'Cunningham Compton',
      'Hendrix Boyle',      'Henderson Greene',   'Briana Flores',
      'Rios Harmon',        'Foley Oneill',       'Debbie Griffin',
      'Constance Alvarado', 'Howe Shields',       'June Fleming',
      'Leach Kennedy',      'Compton Prince',     'Mindy Swanson',
      'Silva Cross',        'Delaney Carver',     'Misty Stewart',
      'Corina Nelson',      'Gould Fields',       'Leona Kinney',
      'Hodge Fowler',       'Branch Wheeler',     'Matthews Conway',
      'Carissa Richmond',   'Nichols Howard',     'Carmen Foley',
      'Rosemarie Vazquez',  'Jo Knox',            'Pauline Chandler',
      'Rush Holcomb',       'Clemons Hurst',      'Justice Stafford',
      'Dorthy Rojas',       'Rosario Navarro',    'Laverne Wilkins',
      'Elise Jennings',     'Bonita Vasquez',     'Elvia Hart',
      'Frazier Bolton',     'Debora Barlow',      'Fernandez Ward',
      'Bernice Roach',      'Calderon Guthrie',   'Ophelia Washington',
      'Elena Morin',        'Mcclure Potter',     'Zamora Douglas',
      'Jimmie Williamson',  'Kerri England',      'Thomas Boyd',
      'Vargas Trujillo',    'Pat Payne',          'Leticia Gentry',
      'Vivian Howell',      'Goff Townsend',      'Flores Fletcher',
      'Dianna Ferguson',    'Davidson Castro',    'Earline Haley',
      'Madeline Simon',     'Yvette Mcclure',     'Lancaster Pruitt',
      'Rivers Powell',      'Selma Ingram',       'Valdez Schwartz',
      'Kristen Taylor',     'Cecelia Miranda',    'Vinson Barrera',
      'Ferrell Pollard',    'Guerrero Woodward',  'Pickett Dalton',
      'Jacobson Morrow',    'Erin Barton',        'Barbara Battle',
      'Alyson Perez',       'Donna Baird',        'Ratliff Frank',
      'Faye Clayton',       'Sheri Jensen',       'Tonia Morgan',
      'Estella Mccarthy',   'Socorro Rowe',       'Allison Cole',
      'Smith Richards',     'Chavez Elliott',     'Violet Joyce',
      'Craft Mcbride',      'Robert Delaney',     'Bradshaw Austin',
      'Patti Lyons',        'Lula Robles',        'Lesa Mcdowell',
      'Collier Mcguire',    'Joyce Puckett',      'Miriam Dorsey',
      'Hill Hartman',       'Desiree Vaughn',     'Mcgowan Rosales',
      'Waters Rollins',     'Valentine Flowers',  'Booker Randolph',
      'Rose Byrd',          'Simone Ramos',       'Michele Suarez',
      'Delacruz Owen',      'Lourdes Moon',       'Boyd Duncan',
      'Estes Moody',        'Stephens Watts',     'Dale Fitzpatrick',
      'Casey Olson',        'Jeannette Gay',      'Gomez Holland',
      'Ethel Horne',        'Reeves Lamb',        'Dona Ray',
      'Hebert Jacobs',      'Hopkins Norris',     'Reba Welch',
      'Alta Nicholson',     'Sonja Galloway',     'Jerri Garza',
      'Luna Mathis',        'Tabitha Melendez',   'Tanya Doyle',
      'Ollie Head',         'Riggs Avery',        'Cooke Black',
      'Tasha Randall',      'Dora Simmons',       'Neal Pena',
      'Norma Allen',        'Chandra Blanchard',  'Debra Castaneda',
      'Carpenter James',    'Lawson Brooks',      'Everett Kane',
      'Lamb Crane',         'Shari Henderson',    'Lacey Jordan',
      'Cara Goodman',       'Annmarie Mccormick', 'Kathleen Campos',
      'Bonnie Gamble',      'Maria Slater',       'Cindy Mckay',
      'Minerva Mayo',       'Jillian Harvey',     'Stephanie Torres',
      'Sandoval Ellison',   'Rene Roberson',      'Karen Stone',
      'Chaney Sears',       'Meyer Horton',       'Rebekah Nixon',
      'Oneill Petty',       'Heath Mills',        'White Rocha',
      'Malinda Roman',      'Beck Holden',        'Eve Johnson',
      'Lawrence Downs',     'Stark Lewis',        'Delia Gibbs',
      'Jeanne Nichols',     'Ferguson Snyder',    'Jefferson Mckinney',
      'Sampson Cash',       'Wilkins Hampton',    'Daniels Price',
      'Byers Barber',       'Miles Noel',         'Roth Spears',
      'Horn Frost',         'Eliza Noble',        'Best Sanchez',
      'Anthony Dickerson',  'Naomi King',         'Deena Henry',
      'Palmer Mann',        'Pierce Weeks',       'Veronica Wyatt',
      'Herminia Malone',    'Nolan Lindsay',      'Spence Medina',
      'Haynes Joseph',      'Travis Mcfadden',    'Ellis Merritt',
      'Sanford Mercado',    'Padilla Gaines',     'Sabrina Morales',
      'Savannah Reilly',    'Audrey Harris',      'Gena Giles',
      'Hughes Fulton',      'Deana Wall',         'Alfreda Osborn',
      'Marilyn Carey',      'Romero Clarke',      'Carol Boone',
      'Alexander Whitley',  'Sweet Blackburn',    'Wright Jarvis',
      'Mcleod Gomez',       'Joanna Buchanan',    'Wendi Bridges',
      'Suzette Holloway',   'Miller Mckenzie',    'Colette Long',
      'Jami Hyde',          'Mccall Stevenson',   'Coffey Stanton',
      'Josie Wade',         'Keith Alexander',    'Deanne Reese',
      'Lara Williams',      'Farley Kerr',        'Merritt Bentley',
      'Madeleine Oconnor',  'Bernadette Hodge',   'Merrill Gallegos',
      'Blackburn Booker',   'Britt May',          'Bridget Hicks',
      'Marlene Carpenter',  'Lopez Moore',        'Kent Adkins',
      'Althea Macias',      'Daniel Mejia',       'Petra Mcmahon',
      'Espinoza Briggs',    'Davis Burch',        'Mclaughlin Norton',
      'Della Greer',        'Nettie Figueroa',    'Ann Mayer',
      'Lauri Carson',       'Lizzie Johns',       'Clark Hodges',
      'Angelita Chan',      'Mendez Potts',       'Ava Macdonald',
      'Blanchard Rowland',  'Newton Thomas',      'Cain Vargas',
      'Bettye Hickman',     'Gabriela Roth',      'Shana Fry',
      'Bobbi Sharpe',       'Mccarty Coleman',    'Patel Durham',
      'Decker Little',      'Winnie Lee',         'Faulkner Keith',
      'Keller Ortiz',       'Sloan Butler',       'Karin Eaton',
      'Beatrice Callahan',  'Lynn Lucas',         'Kirkland Buckner',
      'Patrica Nieves',     'Letitia Franco',     'Sosa Day',
      'Blanche Rosa',       'Katrina Newton',     'Laurie Atkins',
      'Young Summers',      'Langley Daniel',     'Ericka Burris',
      'Aimee Clements',     'Spencer Atkinson',   'Colleen Calderon',
      'Mary Burns',         'Sherri Shepherd',    'Mari Rutledge',
      'Chandler Goff',      'Tiffany Curry',      'Hubbard Wilder',
      'Barlow Mcmillan',    'Burris Weaver',      'Gretchen Fischer',
      'Burke Cooper',       'Hart Small',         'Eloise Hinton',
      'Sims Peterson',      'Sellers Nunez',      'Rosalie Hull',
      'Essie Knowles',      'Webster Pickett',    'Farrell Morton',
      'Neva Marquez',       'Aida Klein',         'Mcpherson Christensen',
      'Molina Garrison',    'Yolanda Luna',       'Munoz Savage',
      'Barton Porter',      'Baldwin Shaffer'
    ]
  }
]
```

## Example 21

**Question:** How many users have 'ad' as the second tag in their list of tags?

```js
// Compass
[
	{
		$match: {
	      "tags.1": "ad"
	    }
	},
	{
		$count: "secondTagAd"
	}
]
```

```js
// mongosh
db.users.aggregate(
[
	{
		$match: {
	      "tags.1": "ad"
	    }
	},
	{
		$count: "secondTagAd"
	}
])
```

```js
// output
[ { secondTagAd: 12 } ]
```

## Example 22

**Question:** Find users who have both `'enim'` and `'id'` as their tags.

```js
// Compass
[
	{
		$match: {
			tags: {
				$all: ["enim", "id"]
			}
		}
	}
]
```

```js
// mongosh
db.users.aggregate([
	{
		$match: {
			tags: {
				$all: ["enim", "id"]
			}
		}
	}
])
```

```js
// output
[
  {
    _id: ObjectId("66be45b08a884346698a8a8e"),
    index: 0,
    name: 'Aurelia Gonzales',
    isActive: false,
    registered: ISODate("2015-02-11T04:22:39.000Z"),
    age: 20,
    gender: 'female',
    eyeColor: 'green',
    favoriteFruit: 'banana',
    company: {
      title: 'YURTURE',
      email: 'aureliagonzales@yurture.com',
      phone: '+1 (940) 501-3963',
      location: { country: 'USA', address: '694 Hewes Street' }
    },
    tags: [ 'enim', 'id', 'velit', 'ad', 'consequat' ]
  },
  {
    _id: ObjectId("66be45b08a884346698a8bea"),
    index: 348,
    name: 'Mcgowan Rosales',
    isActive: true,
    registered: ISODate("2017-04-05T02:59:37.000Z"),
    age: 37,
    gender: 'male',
    eyeColor: 'brown',
    favoriteFruit: 'strawberry',
    company: {
      title: 'XYMONK',
      email: 'mcgowanrosales@xymonk.com',
      phone: '+1 (981) 505-2510',
      location: { country: 'Germany', address: '571 Miller Place' }
    },
    tags: [ 'enim', 'duis', 'id', 'exercitation' ]
  },
  {
    _id: ObjectId("66be45b08a884346698a8ca4"),
    index: 534,
    name: 'Fisher Mercer',
    isActive: true,
    registered: ISODate("2015-08-16T08:36:40.000Z"),
    age: 35,
    gender: 'male',
    eyeColor: 'brown',
    favoriteFruit: 'banana',
    company: {
      title: 'FUELTON',
      email: 'fishermercer@fuelton.com',
      phone: '+1 (839) 429-3406',
      location: { country: 'France', address: '625 High Street' }
    },
    tags: [ 'eu', 'id', 'irure', 'enim' ]
  },
  {
    _id: ObjectId("66be45b08a884346698a8d48"),
    index: 698,
    name: 'Wright Jarvis',
    isActive: false,
    registered: ISODate("2017-04-11T04:07:49.000Z"),
    age: 23,
    gender: 'male',
    eyeColor: 'blue',
    favoriteFruit: 'strawberry',
    company: {
      title: 'SONGBIRD',
      email: 'wrightjarvis@songbird.com',
      phone: '+1 (893) 574-3358',
      location: { country: 'Italy', address: '602 Thomas Street' }
    },
    tags: [ 'enim', 'id', 'magna' ]
  },
  {
    _id: ObjectId("66be45b08a884346698a8e10"),
    index: 898,
    name: 'Spencer Atkinson',
    isActive: false,
    registered: ISODate("2016-08-19T11:45:56.000Z"),
    age: 36,
    gender: 'male',
    eyeColor: 'blue',
    favoriteFruit: 'strawberry',
    company: {
      title: 'ISOSTREAM',
      email: 'spenceratkinson@isostream.com',
      phone: '+1 (984) 554-2610',
      location: { country: 'Germany', address: '436 Baycliff Terrace' }
    },
    tags: [ 'reprehenderit', 'id', 'commodo', 'laborum', 'enim' ]
  }
]
```

## Example 23

**Question:** List of all companies located in the USA with their corresponding user count. 

```js
// Compass
[
	{
		$match: {
			"company.location.country": "USA"
		}
	},
	{
		$group:{
	      	_id: "$company.title", // null,
    		userCount: { $sum: 1 }
	    }	
	}
]
```

```js
// mongosh
db.users.aggregate([
	{
		$match: {
			"company.location.country": "USA"
		}
	},
	{
		$group:{
	      	_id: "$company.title", // null,
    		userCount: { $sum: 1 }
	    }	
	}
])
```

```js
// output
[
  { _id: 'SPACEWAX', userCount: 1 },
  { _id: 'ISOLOGIX', userCount: 1 },
  { _id: 'ANARCO', userCount: 1 },
  { _id: 'PYRAMIS', userCount: 1 },
  { _id: 'ZAPHIRE', userCount: 1 },
  { _id: 'TALAE', userCount: 1 },
  { _id: 'QOT', userCount: 1 },
  { _id: 'TSUNAMIA', userCount: 1 },
  { _id: 'COMTREK', userCount: 1 },
  { _id: 'OCTOCORE', userCount: 1 },
  { _id: 'ELENTRIX', userCount: 1 },
  { _id: 'ISOSPHERE', userCount: 1 },
  { _id: 'OPTICOM', userCount: 1 },
  { _id: 'EXOSPEED', userCount: 1 },
  { _id: 'YOGASM', userCount: 1 },
  { _id: 'GORGANIC', userCount: 1 },
  { _id: 'DOGTOWN', userCount: 1 },
  { _id: 'AMTAP', userCount: 1 },
  { _id: 'VALPREAL', userCount: 1 },
  { _id: 'WEBIOTIC', userCount: 1 }
]
```

# 12 - `$lookup`, `$addFields` and `$first`
## Example 24

**Question:** Find all books with their author details.

Here, we display all books along with a new added property containing the author details.

```js
// Compass
[
	{
		$lookup: {
			from: "authors",
			localField: "author_id",
			foreignField: "_id",
			as: "author_details"
		}
	},
	{
		$addFields: {
			author_details: {
				$first: "$author_details"
			}
		}
	}
]
```

```js
// mongosh
db.books.aggregate([
	{
		$lookup: {
			from: "authors",
			localField: "author_id",
			foreignField: "_id",
			as: "author_details"
		}
	},
	{
		$addFields: {
			author_details: {
				$first: "$author_details"
			}
		}
	}
])
```

```js
// output
[
  {
    _id: 1,
    title: 'The Great Gatsby',
    author_id: 100,
    genre: 'Classic',
    author_details: { _id: 100, name: 'F. Scott Fitzgerald', birth_year: 1896 }
  },
  {
    _id: 2,
    title: 'Nineteen Eighty-Four',
    author_id: 101,
    genre: 'Dystopian',
    author_details: { _id: 101, name: 'George Orwell', birth_year: 1903 }
  },
  {
    _id: 3,
    title: 'To Kill a Mockingbird',
    author_id: 102,
    genre: 'Classic',
    author_details: { _id: 102, name: 'Harper Lee', birth_year: 1926 }
  }
]
```

# 13 - `$arrayElemAt` Accumulator
## Example 25

Here instead of using the `$first` accumulator we use the `$arrayElemAt` accumulator of specify which element of the array we wish to include,

```js
// Compass
[
	{
		$lookup: {
			from: "authors",
			localField: "author_id",
			foreignField: "_id",
			as: "author_details"
		}
	},
	{
		$addFields: {
			author_details: {
				$arrayElemAt: ["$author_details", 0]
			}
		}
	}
]
```

```js
// mongosh
db.books.aggregate([
	{
		$lookup: {
			from: "authors",
			localField: "author_id",
			foreignField: "_id",
			as: "author_details"
		}
	},
	{
		$addFields: {
			author_details: {
				$arrayElemAt: ["$author_details", 0]
			}
		}
	}
])
```

```js
// output
[
	{
	    _id: 1,
	    title: 'The Great Gatsby',
	    author_id: 100,
	    genre: 'Classic',
	    author_details: { _id: 100, name: 'F. Scott Fitzgerald', birth_year: 1896 }
	},
	{
	    _id: 2,
	    title: 'Nineteen Eighty-Four',
	    author_id: 101,
	    genre: 'Dystopian',
	    author_details: { _id: 101, name: 'George Orwell', birth_year: 1903 }
	},
	{
	    _id: 3,
	    title: 'To Kill a Mockingbird',
	    author_id: 102,
	    genre: 'Classic',
	    author_details: { _id: 102, name: 'Harper Lee', birth_year: 1926 }
	}
]
```