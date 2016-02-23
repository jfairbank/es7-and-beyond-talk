import resourceTimer from './resourceTimer';
import { time } from './util';
import * as runners from './runners';
import { clear } from './logger';

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

const run = (type) => async function typeAppliedRun() {
  if (running) {
    return;
  }

  const fn = ::runners[type];

  clear();
  disable();

  await time(type, () => fn(resourceTimer.generateResources(type)));

  enable();
};

sequential.addEventListener('click', run('sequential'));
parallel.addEventListener('click', run('parallel'));
