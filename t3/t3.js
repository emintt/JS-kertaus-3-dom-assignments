/* Open t3 folder in your IDE/editor. Create a web page that dynamically
displays information about the user's browser and device using the BOM.
Print the data to #target element. The page should show details such as:
1. Browser name and version. (e.g. Google Chrome, 114)
2. Operating system name.
3. Screen width and height.
4. Available screen space for the browser.
5. Current date and time. Use Finnish localization
   - 1. helmikuuta 2056 as date format
   - Hours and minutes for time
Place each item within its own <p> element, for example.
Save the web page as t3.html and JS as t3.js to t3 folder.
5p */
'use strict';
const target = document.querySelector('#target');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
const p5 = document.createElement('p');

p1.innerText = `Browser name and version: ${navigator.userAgent}.`;
p2.innerText = `Operating system name: ${navigator.userAgentData.platform}`;
p3.innerText = `Screen width: ${screen.width} and height: ${screen.height}`;
p4.innerText = `Available screen space for the browser:
  - Available height: ${screen.availHeight}
  - Available width: ${screen.availWidth}`;

const date = new Date();

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: 'numeric',
  minute: 'numeric'
};

const dateTimeFI = date.toLocaleString('fi-FI', options);

p5.innerText = `Current date and time: ${dateTimeFI}`;

target.appendChild(p1);
target.appendChild(p2);
target.appendChild(p3);
target.appendChild(p4);
target.appendChild(p5);

