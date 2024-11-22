function shootPortal() {
  // Get the question input
  const userQuestion = document.getElementById("questionInput").value.trim();

  if (!userQuestion) {
    document.getElementById("response").innerText = "You gotta ask a question, Morty!";
    return;
  }

  // Generate a random response
  const responses = [
    "Wubba Lubba Dub Dub!",
    "Don't even think about it, kid.",
    "Yes, in an alternate dimension.",
    "Nope. Not gonna happen.",
    "Maybe if you weren't such a Jerry.",
    "Infinite realities say yes!",
    "You’re screwed, kid.",
    "100%, kid, trust me on this!"
  ];

  const randomNumber = Math.floor(Math.random() * responses.length);

  // Display the response
  document.getElementById("response").innerText = responses[randomNumber];
}
