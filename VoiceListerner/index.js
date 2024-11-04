function speak() {
    const textarea = document.getElementById("myTextarea");
    const text = textarea.value;
  
    if ('speechSynthesis' in window) {
      const Voice = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(Voice);
    } else {
      alert("Speech synthesis is not supported by your browser.");
    }
  }


  let click_to_convert=document.getElementById("click_to_convert");
    click_to_convert.addEventListener('click', () => {
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
  
    if (!window.SpeechRecognition) {
      alert("Speech recognition is not supported by your browser.");
      return;
    }
  
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
  
    recognition.addEventListener('result', (e) => {
      const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript);
  
      conver_text.innerHTML = transcript;
    });
  
    if (speech) {
      recognition.start();
    }
  });
  
  const CopyText = () => {
    var text = document.getElementById("conver_text");
  
    if (!navigator.clipboard) {
      alert("Clipboard operations are not supported by your browser.");
      return;
    }
  
    text.select();
    navigator.clipboard.writeText(text.value)
      .then(() => {
        console.log("Text copied to clipboard successfully.");
      })
      .catch((error) => {
        console.error("Failed to copy text to clipboard: ", error);
      });
  };