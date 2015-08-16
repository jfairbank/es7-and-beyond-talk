import { map, each } from 'iterLib';

document.querySelector('.foo')
  ::map(el => el.textContent)
  ::each(::console.log);
