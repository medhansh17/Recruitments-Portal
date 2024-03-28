'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Button = dynamic(() => import('@/components/button'), { ssr: false });

const StudentResponses: React.FC = () => {
  const [responses, setResponses] = useState<any[]>([]);

  useEffect(() => {
    fetchData('web'); // Fetch data for 'web' domain initially
  }, []); // Empty dependency array to ensure useEffect runs only once

  const fetchData = async (domain: string) => {
    try {
      const response = await axios.get(`https://recruitments-portal-backend.vercel.app/${domain}`);
      setResponses(response.data);
    } catch (error) {
      alert('Error fetching data');
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-start mr-10">
        <Button onClick={() => fetchData('web')} text="Web" />
        <Button onClick={() => fetchData('aiml')} text="AIML" />
        <Button onClick={() => fetchData('app')} text="App" />
        <Button onClick={() => fetchData('devops')} text="DevOps" />
        <Button onClick={() => fetchData('research')} text="Research" />
        <Button onClick={() => fetchData('uiux')} text="UI/UX" />
        <Button onClick={() => fetchData('video')} text="Video" />
        <Button onClick={() => fetchData('graphic')} text="Graphic" />
        <Button onClick={() => fetchData('pnm')} text="PNM" />
        <Button onClick={() => fetchData('editorial')} text="Editorial" />
        <Button onClick={() => fetchData('events')} text="Events" />
      </div>
      <div className="overflow-y-auto max-h-96 bg-gray-100 p-4 rounded-md">
        <h2 className="text-xl font-bold mb-4">Responses</h2>
        <div>
          {responses.slice(0, 10).map((response, index) => (
            <div key={index} className="mb-2">
              <p>{response.EmailID}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentResponses;
