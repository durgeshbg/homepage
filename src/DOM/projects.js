import weatherSS from '../assets/screenshots/weather-app.png';
import battleshipSS from '../assets/screenshots/battleship.png';
import todoSS from '../assets/screenshots/todo.png';
import easSS from '../assets/screenshots/etch-a-sketch.png';
import librarySS from '../assets/screenshots/library.png';
import rpsSS from '../assets/screenshots/rock-paper-scissors.png';
import calculatorSS from '../assets/screenshots/calculator.png';
import tttSS from '../assets/screenshots/tic-tac-toe.png';
import adminSS from '../assets/screenshots/admin-dashboard.png';
import cvappSS from '../assets/screenshots/cv-app.png';
import memSS from '../assets/screenshots/memSS.png';

const data = {
  Poképick: {
    link: 'https://durgeshbg-memory-card-game.netlify.app/',
    code: 'https://github.com/durgeshbg/memory-card-game',
    description: 'A memory card game based on pokémon.',
    screenshot: memSS,
  },
  'CV Builder': {
    link: 'https://durgeshbg-cv-app.netlify.app/',
    code: 'https://github.com/durgeshbg/cv-app',
    description: 'CV Builder Web Application',
    screenshot: cvappSS,
  },
  'Battle Ship': {
    link: 'https://durgeshbg.github.io/battleship',
    code: 'https://github.com/durgeshbg/battleship',
    description: 'The classic paper and pen battleship game.',
    screenshot: battleshipSS,
  },
  'Weather App': {
    link: 'https://durgeshbg.github.io/weather-app',
    code: 'https://github.com/durgeshbg/weather-app',
    description: 'The OG weather app.',
    screenshot: weatherSS,
  },
  'Todo App': {
    link: 'https://durgeshbg.github.io/todo',
    code: 'https://github.com/durgeshbg/todo',
    description: 'A very complex Todo app.',
    screenshot: todoSS,
  },
  Library: {
    link: 'https://durgeshbg.github.io/library',
    code: 'https://github.com/durgeshbg/library',
    description: 'Library app to manage personal reading XP.',
    screenshot: librarySS,
  },
  'Etch A Sketch': {
    link: 'https://durgeshbg.github.io/etch-a-sketch',
    code: 'https://github.com/durgeshbg/etch-a-sketch',
    description: 'A drawing board app.',
    screenshot: easSS,
  },
  'Rock Paper Scissors': {
    link: 'https://durgeshbg.github.io/rock-paper-scissors',
    code: 'https://github.com/durgeshbg/rock-paper-scissors',
    description: 'Rock paper scissors game.',
    screenshot: rpsSS,
  },
  Calculator: {
    link: 'https://durgeshbg.github.io/calculator',
    code: 'https://github.com/durgeshbg/calculator',
    description: 'A simple calulator app.',
    screenshot: calculatorSS,
  },
  'Tic Tac Toe': {
    link: 'https://durgeshbg.github.io/tic-tac-toe',
    code: 'https://github.com/durgeshbg/tic-tac-toe',
    description: 'Tic Tac Toe game.',
    screenshot: tttSS,
  },
  'Admin Dashboard': {
    link: 'https://durgeshbg.github.io/admin-dashboard',
    code: 'https://github.com/durgeshbg/admin-dashboard',
    description: 'Static admin page.',
    screenshot: adminSS,
  },
};

function projectDiv(project) {
  return `<div class="project">
  <div class="screenshot">
    <img src=${data[project].screenshot} alt="${project} screenshot" />
  </div>

  <div class="links">
      <a class="code" target="_blank" href="${data[project].code}">
        <img alt="GitHub Logo" class="icon github" />
      </a>
      <a class="preview" target="_blank" href="${data[project].link}">
        <img alt="Link Logo" class="icon link" />
      </a>
    </div>
  
  <div class="details">
    <h3>${project}</h3>
    <p>
      ${data[project].description}
    </p>
  </div>
</div>`;
}

export default function writeProjects() {
  const projects = document.querySelector('.projects');
  projects.innerHTML = '';
  Object.keys(data).forEach((project) => {
    const pDiv = projectDiv(project);
    projects.innerHTML += pDiv;
  });
}
