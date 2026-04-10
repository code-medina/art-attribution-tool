export const generateTemplate = (type, data) => {
  if (!data || data.trim().length === 0) return "";

  
  return `Inspirado en ${data}`;
};
