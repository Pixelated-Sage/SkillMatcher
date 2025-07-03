import { useEffect, useState } from "react";

export default function Results() {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("skillResults"));
    setResults(data);
  }, []);

  if (!results) return <div className="text-center mt-10">No results to show.</div>;

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Skill Recommendations</h1>
      {Object.entries(results).map(([skill, info]) => (
        <div key={skill} className="mb-8 p-4 border rounded shadow">
          <h2 className="text-xl font-semibold mb-2">{skill}</h2>

          <div className="mb-2">
            <h3 className="font-bold">Career Paths:</h3>
            <ul className="list-disc pl-5">
              {info.careers.map((career, i) => <li key={i}>{career}</li>)}
            </ul>
          </div>

          <div className="mb-2">
            <h3 className="font-bold">Courses:</h3>
            <ul className="list-disc pl-5">
              {info.courses.map((course, i) => <li key={i}>{course}</li>)}
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Teammate Roles:</h3>
            <ul className="list-disc pl-5">
              {info.teammates.map((mate, i) => <li key={i}>{mate}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
