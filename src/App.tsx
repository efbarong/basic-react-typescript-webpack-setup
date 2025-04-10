import Button from "./components/Button";

export default function App() {
  return (
    <div className="container">
      <h1>Hello, React with TypeScript and Webpack!</h1>
      <Button
        label="Click me!"
        onClick={() => console.log('Clicked!')}
        className="btn-snow"
      />
    </div>
  )
}
