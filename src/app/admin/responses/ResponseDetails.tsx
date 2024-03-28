import { useState, useEffect } from 'react';
import axios from 'axios';

interface Response {
  _id: string;
  email: string;
  domain: string;
  startTime: string;
  submissionTime: string;
  endTime: string;
  questions: { q: string; ans: string; _id: string }[];
}

const ResponseDetails = ({ email, onClose }: { email: string; onClose: () => void }) => {
  const [responseDetails, setResponseDetails] = useState<Response[]>([]);

  useEffect(() => {
    const fetchResponseDetails = async () => {
      try {
        const emailValue = document.cookie
          .split('; ')
          .find(row => row.startsWith('email'))
          ?.split('=')[1];

        const accessToken = document.cookie
          .split('; ')
          .find(row => row.startsWith('accessToken'))
          ?.split('=')[1];

        if (!emailValue || !accessToken) {
          console.error('Email or Access Token not found in cookies');
          return;
        }

        const response = await axios.get<Response[]>(`https://recruitments-portal-backend.vercel.app/response/${email}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          },
          data: {
            email: emailValue
          }
        });
        setResponseDetails(response.data);
      } catch (error) {
        console.error('Error fetching response details:', error);
      }
    };

    fetchResponseDetails();
  }, [email]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-md relative overflow-y-auto">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500" onClick={onClose}>
          X
        </button>
        <h2 className="text-xl font-bold mb-4">Response Details</h2>
        <div>
          {responseDetails.map(response => (
            <div key={response._id} className="mb-4">
              <p>Email: {response.email}</p>
              <p>Domain: {response.domain}</p>
              <p>Start Time: {response.startTime}</p>
              <p>Submission Time: {response.submissionTime || 'Not submitted'}</p>
              <p>End Time: {response.endTime}</p>
              <h3>Questions:</h3>
              <ul>
                {response.questions.map(question => (
                  <li key={question._id}>
                    <strong>{question.q}</strong>
                    <p>Answer: {question.ans}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponseDetails;
