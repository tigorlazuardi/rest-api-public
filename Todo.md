# TODO Routing

Click the link in the table to get to the subsection

**Authentication required FOR EVERY PAGE** : Yes


<a id="table-anchor"></a>

| Route                            | METHOD | Description                           |
| -------------------------------- | ------ | ------------------------------------- |
| [/api/todos](#getall-anchor)     | GET    | Get All the todos info                |
| [/api/todos/:id](#getone-anchor) | GET    | Get a single todo info                |
| [/api/todos](#post-anchor)       | POST   | Create a todo                         |
| [/api/todos:id](#delete-anchor)  | DELETE | Delete a todo                         |
| [/api/todos:id](#put-anchor)     | PUT    | Update a Todo                         |
| [/api/todos:id](#patch-anchor)   | PATCH  | Update a part of todo with a new info |

# <a id="getall-anchor"></a>GET ALL TODO

**Authorization Required**: No

Lists ***all*** Todos on current signed user.

[Table](#table-anchor)

# <a id="getone-anchor"></a>GET ONE TODO

**Authorization Required**: Yes

Lists ***a*** todo on current signed user based on todo id.

[Table](#table-anchor)

# <a id="post-anchor"></a>POST TODO

**Authorization Required**: No

Data constraints

```json
{
    "title" : ["Not Empty"],
    "description" : ["NONE"],
}
```

[Table](#table-anchor)

# <a id="delete-anchor"></a>DELETE TODO

**Authorization Required**: Yes

Delete a todo based on Todo id.

[Table](#table-anchor)

# <a id="put-anchor"></a>PUT TODO

**Authorization Required**: Yes

Update a whole todo based on Todo id.

Data constraints

```json
{
    "title" : ["Not Empty"],
    "description" : ["NONE"],
}
```

[Table](#table-anchor)

# <a id="patch-anchor"></a>PATCH TODO

**Authorization Required**: Yes

Update one part of a todo based on Todo id.

Data constraints

```json
{
    "title" : ["Not Empty"],
    "description" : ["NONE"],
}
```

[Table](#table-anchor)
