import { useEffect, useState } from "react";

export default function Results() {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("skillResults"));
    setResults(data);
  }, []);

  if (!results) return <div className="text-center mt-10 text-lg text-gray-500">No results to show.</div>;

  return (
    <div className="max-w-2xl mx-auto mt-12 px-4">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-blue-700 tracking-tight">
        Your Skill Recommendations
      </h1>
      {Object.entries(results).map(([skill, info]) => (
        <div
          key={skill}
          className="mb-8 p-6 rounded-2xl shadow-xl border border-blue-100 bg-white/80 transition hover:shadow-2xl"
        >
          <h2 className="text-xl font-bold mb-4 text-blue-600">{skill}</h2>

          <div className="mb-3">
            <h3 className="font-semibold text-blue-500">Career Paths:</h3>
            <ul className="list-disc pl-6 text-gray-700">
              {info.careers.map((career, i) => (
                <li key={i}>{career}</li>
              ))}
            </ul>
          </div>

          <div className="mb-3">
            <h3 className="font-semibold text-blue-500">Courses:</h3>
            <ul className="list-disc pl-6 text-gray-700">
              {info.courses.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-blue-500">Teammate Roles:</h3>
            <ul className="list-disc pl-6 text-gray-700">
              {info.teammates.map((mate, i) => (
                <li key={i}>{mate}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
