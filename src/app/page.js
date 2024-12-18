"use client";

import { useState } from "react";
import FileUploader from "../components/FileUploader";
import AnalysisResult from "../components/AnalysisResult";
import { parseChat } from "../utils/parser";

export default function Home() {
  const [parsedData, setParsedData] = useState(null);

  const handleFileUpload = async (fileContent) => {
    // Without AI
    const result = parseChat(fileContent);
    setParsedData(result);
    /*
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chatContent: fileContent }),
    });

    const data = await response.json();
    setParsedData(data);
    */
  };

  return (
    <div className="min-h-screen flex flex-col bg-dark text-white">
      <header className="p-6">
        <h1 className="text-center text-3xl font-bold">WhatsApp Chat Analyzer</h1>
      </header>

      <main className="flex-grow p-6">
        <FileUploader onFileUpload={handleFileUpload} />
        {parsedData && <AnalysisResult parsedData={parsedData} />}
      </main>

      <footer className="bg-gray-800 text-center py-4 mt-6">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Abdullahi Alabi. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
