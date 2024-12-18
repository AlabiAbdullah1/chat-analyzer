export default function AnalysisResult({ parsedData }) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Analysis Results</h2>
  
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-orange-500 mb-4">Links</h3>
          <ul className="list-disc list-inside space-y-2">
            {parsedData.links.map((link, index) => (
              <li key={index} className="text-blue-500 hover:underline">
                <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
              </li>
            ))}
          </ul>
        </div>
  
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-4">Quotes</h3>
          <ul className="list-disc list-inside space-y-2">
            {parsedData.quotes.map((quote, index) => (
              <li key={index} className="text-gray-700 italic">"{quote}"</li>
            ))}
          </ul>
        </div>
  
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-purple-600 mb-4">Notes</h3>
          <ul className="list-disc list-inside space-y-2">
            {parsedData.notes.map((note, index) => (
              <li key={index} className="text-gray-700">{note}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  