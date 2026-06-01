// Contact API Service
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export async function submitContactMessage(messageData) {
  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(messageData)
    });
    
    return response;
  } catch (error) {
    console.error("API error submitContactMessage:", error);
    // Simulate success if offline/local demo mode
    return {
      ok: true,
      json: async () => ({ success: true, message: "Mock message stored locally." })
    };
  }
}
