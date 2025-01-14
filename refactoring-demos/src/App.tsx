import "./App.css";
import {Gallery} from "./gallery/Gallery.tsx";

// import {ApprovalPanelDemo} from "./approval/ApprovalDemo.tsx";

// function App() {
//   return <ApprovalPanelDemo />
// }

export default function App() {
  return (
    <div className="flex justify-center p-4">
      <Gallery />
    </div>
  )
}

