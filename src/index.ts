import { characters, lastName } from './dict';
import { randInt, randRange, getPunctuation, getEnding } from './utils';

function getText(
  len: number,
  noPunctuation: boolean,
  commaOnly: boolean,
  lineBreak: boolean,
) {
  const str = [];
  for (let i = 0; i < len; i += 1)
    str.push(characters[randInt(characters.length - 1)]);
  if (noPunctuation) return str.join('');

  let i = randRange(5, 16);
  let lastLineBreak = 0;
  while (i < len - 5) {
    const punctuation = getPunctuation(
      commaOnly,
      i - lastLineBreak > 150 && i < len - 150 ? lineBreak : false,
    );
    if (punctuation === '\n') {
      str[i - 1] = getEnding();
      lastLineBreak = i;
    }
    str[i] = punctuation;
    i += randRange(5, 16);
  }
  str[str.length - 1] = getEnding();

  return str.join('');
}

export const cnLorem = {
  phrase,
  sentence,
  paragraph,
  article,
  name,
};

const emptyOpt = {
  length: undefined,
  min: undefined,
  max: undefined,
};

function phrase(
  opt: { length?: number; min?: number; max?: number } = emptyOpt,
) {
  const len = opt.length ?? randRange(opt.min ?? 3, opt.max ?? 10);
  return getText(len, true, false, false);
}

function sentence(
  opt: { length?: number; min?: number; max?: number } = emptyOpt,
) {
  const len = opt.length ?? randRange(opt.min ?? 15, opt.max ?? 30);
  return getText(len, false, true, false);
}

function paragraph(
  opt: { length?: number; min?: number; max?: number } = emptyOpt,
) {
  const len = opt.length ?? randRange(opt.min ?? 100, opt.max ?? 200);
  return getText(len, false, false, false);
}

function article(
  opt: { length?: number; min?: number; max?: number } = emptyOpt,
) {
  const len = opt.length ?? randRange(opt.min ?? 600, opt.max ?? 1000);
  return getText(len, false, false, true);
}

function name(forceThree: boolean) {
  return `${lastName[randInt(lastName.length - 1)]}${
    characters[randInt(characters.length - 1)]
  }${
    forceThree || Math.random() < 0.97
      ? characters[randInt(characters.length - 1)]
      : ''
  }`;
}
