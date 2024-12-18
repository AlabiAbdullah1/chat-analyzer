
export const parseChat = (chatContent) => {
    const lines = chatContent.split('\n');
    const result = {
      links: [],
      quotes: [],
      notes: [],
    };
  
    lines.forEach((line) => {
      if (line.includes('http')) {
        result.links.push(line.match(/https?:\/\/[^\s]+/)[0]);
      } else if (line.includes('"')) {
        result.quotes.push(line);
      } else if (line.toLowerCase().includes('note')) {
        result.notes.push(line);
      }
    });
  
    return result;
  };
  