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
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Enter Your Skills</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full border border-gray-400 p-2 mb-4 rounded"
          placeholder="e.g. Python, SQL, React"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full" type="submit">
          Get Recommendations
        </button>
      </form>
    </div>
  );
}
