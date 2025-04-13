import Navbar from "../components/Navbar";

export default function AuthLayout({ children }) {
  return (
    <div>
      {/* let time = new Date().getTime()*/}
      {Math.random() < 0.5 && "Hi"}{" "}
      {/* put it in useEffect for consistent behaviour
      otherwise we get the hydration error if threshold value reaches above 0.5 like 0.6 (Hi randomly with 50% probability.) -> use "use client" -> This avoid mismatch
      problem will raise ssr hydration errors
      0.5 is a probability threshold*/}
      {children}
    </div>
  );
}
