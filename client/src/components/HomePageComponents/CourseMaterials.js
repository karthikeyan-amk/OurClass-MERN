import React, { useState ,useEffect} from 'react';

function CourseMaterials() {
  // Sample course materials data
  const [courseMaterials, setCourseMaterials] = useState([]);
  useEffect(() => {
   fetchCourseMaterials();
  }, []);

  const fetchCourseMaterials = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/api/courseMaterials');
      const data = await response.json();
      setCourseMaterials(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Course Materials</h2>
      <ul className="grid gap-4">
        {courseMaterials.map(material => (
          <li key={material.id} className="bg-white p-4 rounded shadow">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">{material.title}</span>
              <a
                href={`/${material.file}`}
                className="text-blue-500 hover:underline"
                download
              >
                Download
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseMaterials;
