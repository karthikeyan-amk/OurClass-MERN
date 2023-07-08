import React, { useState , useEffect} from 'react';

function Announcements() {
  // Sample announcements data
  const [announcements, setAnnouncements] = useState([]);
  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/api/announcements');
      const data = await response.json();
      setAnnouncements(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Announcements</h2>
      <div className="grid gap-4">
        {announcements.map(announcement => (
          <div key={announcement.id} className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-2">{announcement.title}</h3>
            <p className="text-gray-700">{announcement.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Announcements;
