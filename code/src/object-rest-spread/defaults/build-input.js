function buildInput(attrs) {
  const defaultAttrs = { type: 'text', width: 200 };
  const inputAttrs = { ...defaultAttrs, ...attrs };

  const input = document.createElement('input');

  Object.keys(inputAttrs).forEach(attrName => {
    input.setAttribute(attrName, inputAttrs[attrName]);
  });

  return input;
}

export default buildInput;
