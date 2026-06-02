# ⚛️ React

# chap-7

## 📌 info:

* Open Source
* JS Library
* Developed by Facebook
* MVC → View Layer

---

# ✅ Advantage:

* Component Based Architecture
* Reusability
* Rendering
* Declarative Programming
* Efficient DOM Update

---

# 📁 Files Structure

```bash id="9wnf9k"
myapp
│
├── node_modules
│   └── for all node functions
│
├── src
│   ├── assets
│   │   └── images and videos
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
└── index.html
```

---

# 🔄 Flow

```text id="g3r8dk"
index.css → main.jsx → App.jsx
```

* `index.html` is entry point
* `main.jsx` connects React with HTML
* `App.jsx` is main component

---

# ⚡ Rules for JSX

## 📌 Fragment Tag

```jsx id="67m4zl"
<>
   <h1>Hello</h1>
   <p>Welcome</p>
</>
```

---

## 1) Return Single Root Element

✅ Correct

```jsx id="7ad0pu"
return(
   <div>
      <h1>Hello</h1>
      <p>React</p>
   </div>
)
```

❌ Wrong

```jsx id="gtw8xo"
return(
   <h1>Hello</h1>
   <p>React</p>
)
```

---

## 2) Close All Tags

✅ Correct

```jsx id="y1t3wo"
<img src="img.jpg" />
<input type="text" />
```

---

## 3) Use camelCase Attributes

✅ Correct

```jsx id="zh6gx8"
<h1 className="jeel">H1</h1>
```

❌ Wrong

```jsx id="5r7g8n"
<h1 class="jeel">H1</h1>
```

---

## 4) Passing JavaScript Expression

```jsx id="a9r75v"
const name = "Jeel";

<h1>Hello {name}</h1>
```

### Example

```jsx id="1x0jlwm"
const age = 18;

<p>My age is {age}</p>
```

---

## 5) JSX Styling

```jsx id="c2ux6v"
<h1 style={{color:"red",fontSize:"40px"}}>
   React JS
</h1>
```

### Example

```jsx id="79xf07"
<p style={{backgroundColor:"black",color:"white"}}>
   Welcome
</p>
```

---

## 6) JSX Comments

```jsx id="2m8rdx"
{/* This is JSX comment */}
```

---

# 📦 Props → Properties

Props are used to pass data from Parent Component to Child Component.

---

# 🔼 Passing Props (Parent)

```jsx id="2g1p7h"
<Student name="Jeel" age="18" />
```

### Example

```jsx id="1j6n6y"
<Employee ename="Rahul" salary="50000" />
```

---

# 🔽 Reading Props (Child)

```jsx id="e9yxkq"
const Student = (props)=>{
   return(
      <div>
         <h1>{props.name}</h1>
         <p>{props.age}</p>
      </div>
   )
}
```

---

# 🔥 Another Props Example

```jsx id="rrd1p8"
const Employee = (props)=>{
   return(
      <>
         <h1>Employee Name : {props.ename}</h1>
         <h2>Salary : {props.salary}</h2>
      </>
   )
}
```

---

# unit-8

# Hooks in React JS

---

# 📌 Types of Components

## 1) Class Component (2013)

```jsx id="7sx2qq"
class App extends React.Component{
   render(){
      return <h1>Hello</h1>
   }
}
```

---

## 2) Function Component (2019)(16.8)

```jsx id="r5ux8s"
const App = ()=>{
   return(
      <h1>Hello</h1>
   )
}
```

---

# 🎣 Hooks

* Hooks are introduced in React 16.8
* Hooks are used in Function Components
* Hooks make code simpler

---

# 📋 Rules of Hooks

## 1) Hook can only be called inside React Function Component

✅ Correct

```jsx id="blmjlwm"
const App = ()=>{
   const [count,setCount] = useState(0)
}
```

---

## 2) Can only be called at Top Level

✅ Correct

```jsx id="xpp8ka"
const App = ()=>{
   const [count,setCount] = useState(0)
}
```

❌ Wrong

```jsx id="rj0uz0"
if(true){
   useState()
}
```

---

## 3) Hooks Can't be Conditional

❌ Wrong

```jsx id="b2ig2j"
if(count>0){
   useEffect()
}
```

---

# 🔥 useState Example

```jsx id="9t0kwz"
import React, {useState} from 'react'

const App = ()=>{

   const [count,setCount] = useState(0)

   const increase = ()=>{
      setCount(count+1)
   }

   return(
      <>
         <h1>{count}</h1>

         <button onClick={increase}>
            Increase
         </button>
      </>
   )
}

export default App
```

---

# 🔥 useReducer

## Syntax

```jsx id="vhrjgw"
const [state,dispatch] = useReducer(reducerFunction,initialValue)
```

---

# 📌 useReducer Example

```jsx id="9j4ng2"
import React,{useReducer} from 'react'

const reducer = (state,action)=>{

   switch(action){

      case "increment":
         return state+1

      case "decrement":
         return state-1

      default:
         return state
   }
}

const App = ()=>{

   const [count,dispatch] = useReducer(reducer,0)

   return(
      <>
         <h1>{count}</h1>

         <button onClick={()=>dispatch("increment")}>
            Increment
         </button>

         <button onClick={()=>dispatch("decrement")}>
            Decrement
         </button>
      </>
   )
}

export default App
```

---

# 🎯 Summary

* React is JavaScript Library
* JSX allows HTML inside JavaScript
* Components make code reusable
* Props transfer data
* Hooks are used in Function Components
* useReducer manages complex state

---

# 🚀 End of Notes
