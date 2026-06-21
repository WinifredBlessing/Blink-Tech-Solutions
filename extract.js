const fs = require('fs');
const path = require('path');

const filePath = 'c:/Users/Welcome Sir/Desktop/Blink-Website/Blink-Tech-Solutions/frontend/dist/assets/index-BwQTn7Td.js';
const content = fs.readFileSync(filePath, 'utf8');

// The React components contain text wrapped in quotes or jsx text.
// We can extract all string literals.
const strings = content.match(/"([^"]{15,})"/g) || [];
const texts = strings.map(s => s.slice(1, -1))
  .filter(s => !s.includes('{') && !s.includes('function') && !s.includes('class') && !s.includes('<') && s.includes(' '));

fs.writeFileSync('extracted_text.txt', texts.join('\n'));
console.log('Extracted ' + texts.length + ' strings.');
