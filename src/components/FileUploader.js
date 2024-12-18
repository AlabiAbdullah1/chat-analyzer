import { useState } from 'react';

export default function FileUploader({ onFileUpload }) {
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== 'text/plain') {
      setError('Please upload a valid .txt file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      onFileUpload(event.target.result);
    };
    reader.readAsText(file);
    setError('');
  };

  return (
    <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-md max-w-sm mx-auto">
      <h2 className="text-lg font-bold mb-4">Upload a WhatsApp Chat File</h2>
      <input
        type="file"
        accept=".txt"
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
        onChange={handleFileChange}
      />
      {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
    </div>
  );
}
