const allAdviceData = () => {
  return fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
}

export default allAdviceData;
