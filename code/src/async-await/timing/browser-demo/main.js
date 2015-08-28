import resourceTimer from './resourceTimer';
import { time } from './util';
import * as runners from './runners';

const sequential = document.querySelector('#sequential');
const parallel = document.querySelector('#parallel');

let running = false;

function disable() {
  running = true;
  sequential.disabled = parallel.disabled = true;
}

function enable() {
  running = false;
  sequential.disabled = parallel.disabled = false;
}

async function run(type) {
  if (running) {
    return;
  }

  const fn = ::runners[type];

  disable();

  await time(type, () => fn(resourceTimer.generateResources(type)))

  enable();
}

sequential.addEventListener('click', run.bind(null, 'sequential'));
parallel.addEventListener('click', run.bind(null, 'parallel'));
