import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section>
      <div className="max-w-2xl mx-auto text-center p-6">
        <h1 className="text-4xl font-bold mt-10 mb-4">
          Welcome to Skill Matcher
        </h1>
        <p className="font-gray-300 mt-3 mb-4">
          Find your next move with your current skills
        </p>
        <button
          onClick={() => navigate("/input")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Get Started
        </button>
      </div>
    </section>
  );
}