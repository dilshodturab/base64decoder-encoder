
const textInput = document.getElementById('text-input');
const outputText = document.getElementById('output-text');
const encodeButton = document.getElementById('encode-button');
const decodeButton = document.getElementById('decode-button');



encodeButton.addEventListener('click', () => {
    const encodedText = btoa(textInput.value);
    outputText.value = encodedText;
});

decodeButton.addEventListener('click', () => {
    try {
        const decodedText = atob(textInput.value);
        outputText.value = decodedText;
    } catch (e) {
        alert(`${textInput.value} is not decodable! `);
        console.error(e);
    }
})
