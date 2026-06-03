# ⚛️ React JS Notes

# 📘 Chapter - 7

---

# 📌 Introduction to React

## 🔹 What is React?

* Open Source
* JavaScript Library
* Developed by Facebook
* Used to build UI
* Works on MVC → View Layer

### 🧠 Memory Line

> React = Reusable UI Components

---

# 📌 MVC Architecture

| Part | Meaning    |
| ---- | ---------- |
| M    | Model      |
| V    | View       |
| C    | Controller |

React mainly handles **View Layer**.

---

# ✅ Advantages of React

## 🔹 Component Based Architecture

Application divided into reusable components.

```jsx
<Card />
<Card />
<Card />
```

---

## 🔹 Fast Rendering

Only changed part updates.

---

## 🔹 Declarative UI

UI updates automatically with state.

---

## 🔹 Virtual DOM

Faster than normal DOM updates.

### 🧠 Memory Line

> Virtual DOM = Fast Performance

---

# 📁 React Project Structure

```bash
T3_REACT
│
├── myapp
│   ├── node_modules
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── Hook
│   │   ├── Routing
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
```

---

# 🔄 React Flow

```text
index.html
   ↓
main.jsx
   ↓
App.jsx
   ↓
Components
```

---

# 📌 Important Files

## 🔹 node_modules

Contains installed packages.

---

## 🔹 assets

Stores:

* Images
* SVG
* Videos
* Logos

```jsx
import hero from './assets/hero.png'
```

---

## 🔹 App.jsx

Main component.

```jsx
const App = ()=>{
   return(
      <h1>Hello React</h1>
   )
}
```

---

## 🔹 main.jsx

Connects React with DOM.

```jsx
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(
document.getElementById('root')
).render(<App />)
```

---

## 🔹 index.html

Entry point.

```html
<div id="root"></div>
```

---

# ⚡ JSX Rules

---

# 📌 Fragment Tag

```jsx
<>
   <h1>Hello</h1>
</>
```

### 🧠 Memory Line

> Fragment avoids extra div

---

# 1️⃣ Single Root Element

✅ Correct

```jsx
return(
  <div>
     <h1>Hello</h1>
  </div>
)
```

❌ Wrong

```jsx
return(
   <h1>Hello</h1>
   <p>React</p>
)
```

---

# 2️⃣ Close All Tags

```jsx
<img />
<input />
```

---

# 3️⃣ camelCase Attributes

✅ Correct

```jsx
<h1 className="demo">
```

❌ Wrong

```jsx
<h1 class="demo">
```

---

# 4️⃣ JavaScript in JSX

```jsx
const name = "Jeel"

<h1>{name}</h1>
```

---

# 5️⃣ JSX Styling

```jsx
<h1 style={{color:"red"}}>
   React
</h1>
```

---

# 6️⃣ JSX Comments

```jsx
{/* JSX Comment */}
```

---

# 📦 Props

Props transfer data:

```text
Parent → Child
```

---

# 🔼 Passing Props

```jsx
<Student name="Jeel" age="18" />
```

---

# 🔽 Receiving Props

```jsx
const Student = (props)=>{
   return(
      <h1>{props.name}</h1>
   )
}
```

### 🧠 Memory Line

> Props are Read Only

---

# 📘 Unit - 8

# 🎣 Hooks in React

---

# 📌 Types of Components

## 1️⃣ Class Component

```jsx
class App extends React.Component{
   render(){
      return <h1>Hello</h1>
   }
}
```

---

## 2️⃣ Function Component

```jsx
const App = ()=>{
   return <h1>Hello</h1>
}
```

---

# 🎣 Hooks

* Introduced in React 16.8
* Used in Function Components
* Simplifies code

---

# 📋 Rules of Hooks

## ✅ Only inside Function Component

```jsx
useState()
```

---

## ✅ Only at Top Level

❌ Wrong

```jsx
if(true){
   useState()
}
```

---

## ❌ Never Conditional

```jsx
if(count>0){
   useEffect()
}
```

---

# 🔥 useState Hook

## 📌 Syntax

```jsx
const [state,setState] = useState(value)
```

---

# 📌 Example

```jsx
import {useState} from 'react'

const App = ()=>{

   const [count,setCount] = useState(0)

   return(
      <>
         <h1>{count}</h1>

         <button
         onClick={()=>setCount(count+1)}>
            Increase
         </button>
      </>
   )
}
```

### 🧠 Memory Line

> useState stores changing data

---

# 🔥 useEffect Hook

## 📌 Syntax

```jsx
useEffect(<function>,<dependency>)
```

---

# 📌 Example

```jsx
import {useEffect,useState} from 'react'

const App = ()=>{

   const [count,setCount] = useState(0)

   useEffect(()=>{
      console.log('hello')
   },[count])

   return(
      <>
         <h1>{count}</h1>

         <button
         onClick={()=>setCount(count+1)}>
            Click
         </button>
      </>
   )
}
```

---

# 📌 Explanation

| Part        | Meaning          |
| ----------- | ---------------- |
| useEffect() | Side Effect Hook |
| function    | Code to execute  |
| [count]     | Dependency Array |

---

# 📌 When useEffect Runs?

## ✅ Empty Dependency

```jsx
useEffect(()=>{
   console.log("Run Once")
},[])
```

Runs only once.

---

## ✅ With Dependency

```jsx
useEffect(()=>{
   console.log("Count Changed")
},[count])
```

Runs when count changes.

---

## ✅ Without Dependency

```jsx
useEffect(()=>{
   console.log("Every Render")
})
```

Runs on every render.

---

### 🧠 Memory Line

> useEffect handles side effects

Examples:

* API Call
* Timer
* Data Fetching
* DOM Update

---

# 🔥 useReducer Hook

## 📌 Syntax

```jsx
const [state,dispatch]
= useReducer(reducer,value)
```

---

# 📌 Example

```jsx
import {useReducer} from 'react'

function reducer(state,action){
   return state + action
}

function App(){

   const [state,dispatch]
   = useReducer(reducer,20)

   return(
      <>
         <h1>{state}</h1>

         <button
         onClick={()=>dispatch(5)}>
            Click
         </button>
      </>
   )
}
```

---

# 🔥 useContext Hook

## 📌 Purpose

Share data without props.

---

# 📌 Create Context

```jsx
const Fname = createContext()
```

---

# 📌 Provide Context

```jsx
<Fname.Provider value="Jeel">
   <Child />
</Fname.Provider>
```

---

# 📌 Consume Context

```jsx
const value = useContext(Fname)
```

---

# 📌 Full Example

```jsx
import {
createContext,
useContext
} from 'react'

const Fname = createContext()

const Child = ()=>{

   const value = useContext(Fname)

   return <h1>{value}</h1>
}

const App = ()=>{

   return(
      <Fname.Provider value="Jeel">
         <Child />
      </Fname.Provider>
   )
}
```

---

### 🧠 Memory Line

> useContext avoids prop drilling

---

# 🚀 Extra Important Points

---

## ✅ One Way Data Flow

```text
Parent → Child
```

---

## ✅ Babel

Converts JSX into JavaScript.

```jsx
<h1>Hello</h1>
```

Converted into:

```js
React.createElement()
```

---

## ✅ Advantages of Hooks

* Cleaner Code
* Easy State
* Reusable Logic
* Less Boilerplate

---

## ✅ Vite

* Faster than CRA
* Instant Refresh
* Better Performance

### 🧠 Memory Line

> Vite = Lightning Fast React Setup ⚡

---

## ✅ Controlled Component

Input controlled by state.

```jsx
<input
value={name}
onChange={(e)=>setName(e.target.value)}
/>
```

---

## ✅ Key in React

Used in list rendering.

```jsx
{arr.map((v,i)=>(
   <h1 key={i}>{v}</h1>
))}
```

---

# 🎨 Useful Icons

| Icon | Meaning   |
| ---- | --------- |
| ⚛️   | React     |
| 📁   | Folder    |
| 📌   | Important |
| 🔥   | Hook      |
| 🎣   | Hooks     |
| 🚀   | Advanced  |
| ✅    | Correct   |
| ❌    | Wrong     |
| 🎨   | Styling   |

---

# 🏁 Conclusion

* React is JS Library
* JSX allows HTML in JS
* Components improve reusability
* Props transfer data
* Hooks manage state
* Virtual DOM improves speed
* Vite gives faster development

---

# ✨ End of Notes
