# 🧱 Dev Stack

Dev Stack is a small website where you can explore different technologies like frontend, backend, database & devops tools, and build your own dev stack by adding them to a list. You can see each tech's rating, difficulty & category before adding it.

🔗 Live Site: [b14-a05-dev-stack-zeta.vercel.app](https://b14-a05-dev-stack-zeta.vercel.app)

## 🛠️ Technology I used

- React (with TypeScript)
- Vite
- Tailwind CSS & DaisyUI
- React Toastify
- React Icons
- JSON file for the technology data

## ✨ Features

1. **Build your own stack** - click "Add to Stack" on any card and it shows up in the "Your Stack" panel. You can remove one item with the ✕ button or clear everything with "Remove All". If you try to add the same tech twice, it shows a warning.
2. **Data loads from JSON** - all technologies come from a JSON file, loaded with fetch. A loading spinner shows while the data is coming.
3. **Fully responsive** - works on mobile, tablet & desktop. On mobile the navbar changes to a hamburger menu with the logo in center, and cards go to 1 column.

---

## ❓ React Questions

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. React uses it because it's much easier to read & write UI this way, instead of calling `React.createElement` again and again. In the end it gets converted to normal JavaScript.

### 2. What is the difference between props and state?

Props come from the parent component, and the child can't change them, only read them. State is the component's own data, and it can change. When state changes, the component re-renders.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets a component keep data that can change and update the UI when it changes. In this project I used it in `TechCatalog` for storing the technologies list, the loading & error status, and the stack (the technologies the user added).

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after the component renders, like fetching data. I needed it to fetch the JSON file only once when the page loads. If I fetched directly inside the component, it would fetch again on every render and could get stuck in a loop.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the key to know which item is which. When something is added, removed or changed, it only updates that item instead of re-rendering the whole list. I used `tech.id` as the key for the cards and the stack items.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition. In the "Your Stack" panel, if the stack is empty it shows "Your stack is empty.", otherwise it shows the selected items:

```jsx
{
  stack.length === 0 ? <div>Your stack is empty.</div> : <ul>...</ul>;
}
```

I also used it for the loading spinner and the "✓ Added to Stack" button text.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Parent sends data to child using props, like `<TechCard tech={tech} />`. For sending something back, the parent passes a function as a prop and the child calls it. For example, `TechCatalog` passes `onAdd` to `TechCard`, and when the button is clicked the card calls `onAdd(tech)`, so the parent adds it to the stack.
