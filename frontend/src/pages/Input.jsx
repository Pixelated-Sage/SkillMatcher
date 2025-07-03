import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Input() {
  const [skills, setSkills] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const skillList = skills.split(",").map(s => s.trim());

    try {
      const res = await axios.post("http://localhost:8000/api/match-skills/", {
        skills: skillList,
      });

      const result = res.data.matches;
      localStorage.setItem("skillResults", JSON.stringify(result));
      navigate("/results");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-16 bg-white/80 rounded-2xl shadow-2xl p-8">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-700 tracking-tight">
        Enter Your Skills
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full border-2 border-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 p-3 mb-6 rounded-lg transition outline-none text-lg placeholder-gray-400"
          placeholder="e.g. Python, SQL, React"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        <button
          className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-lg w-full shadow-md transition-all duration-200 text-lg tracking-wide"
          type="submit"
        >
          Get Recommendations
        </button>
      </form>
    </div>
  );
}
