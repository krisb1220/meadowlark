var fortuneCookies = [
  "With integrity and consistency -- your credits are piling up.",
  "Reach out your hand today to support others who need you.",
  "It is not the outside riches bit the inside ones that produce happiness.",
  "How dark is dark?, How wise is wise?",
  "We can admire all we see, but we can only pick one.",
  "The man who has no imagination has no wings.",
  "To courageously shoulder the responsibility of one's mistake is character.",
  "We can't help everyone. But everyone can help someone.",
  "You discover treasures where others see nothing unusual.",
  "Make all you can, save all you can, give all you can.",
  "Understanding the nature of change, chagit nges the nature.",
  "You will be unusually successful in business."
];

exports.getFortune = ()=>{
  return fortuneCookies[Math.floor(Math.random() * fortuneCookies.length)];
}
