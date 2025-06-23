import { Link } from "react-router";

export default function HomeIndex() {
  return (
    <div className="w-full min-h-screen bg-base-white">
      <h1 className="text-7xl text-primary-700 ">
        Home
      </h1>
      <Link to={'/test'}>test</Link>
    </div>
  )
}