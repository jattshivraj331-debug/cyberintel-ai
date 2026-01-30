const blockedKeywords = [
  "bomber",
  "sms",
  "otp",
  "flood",
  "apk",
  "download"
];

function handleQuery() {
  const q = document.getElementById("query").value.toLowerCase();

  if (!q) {
    output("Enter a cybersecurity-related query.");
    return;
  }

  if (blockedKeywords.some(word => q.includes(word))) {
    output("⚠️ This platform supports cybersecurity knowledge only.");
    return;
  }

  searchLocal(q) || askAI(q);
}

function output(text) {
  document.getElementById("output").textContent = text;
}
