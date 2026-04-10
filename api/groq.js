const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,  // rename this too
    "Content-Type": "application/json"
  },
  body: JSON.stringify(req.body)
});
