import React from "react"

let listmap = ["dog", "cat", "chicken", "cow", "sheep", "horse"]

let list1 = listmap.map(animal => <li>{animal}</li>)

function List() {
  return (
    <div>
      <ul>{list1}</ul>
    </div>
  )
}

export default List
