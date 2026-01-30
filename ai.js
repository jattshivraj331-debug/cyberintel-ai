const GEMINI_API_KEY = "AIzaSyDiXZaHZNvlrO6e1jwFBhwqJyIHCSuQuwo";

async function askAI(prompt) {
  output("Analyzing...");

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt + " (cybersecurity theory, defense, and analysis only)"
          }]
        }]
      })
    }
  );

  const data = await response.json();
  output(data.candidates[0].content.parts[0].text);
}
