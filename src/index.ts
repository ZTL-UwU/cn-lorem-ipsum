import { getCharacter, lastName } from './dict';
import { getEnding, getPunctuation, randInt, randRange } from './utils';

function getText(
  len: number,
  noPunctuation: boolean,
  commaOnly: boolean,
  lineBreak: boolean,
) {
  const str = [];
  for (let i = 0; i < len; i += 1) str.push(getCharacter());
  if (noPunctuation) return str.join('');

  let i = randRange(5, 16);
  let lastLineBreak = 0;
  while (i < len - 5) {
    const punctuation = getPunctuation(
      commaOnly,
      lineBreak ? i - lastLineBreak > 150 && i < len - 150 : false,
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

const cnLorem = {
  phrase,
  sentence,
  paragraph,
  article,
  name,
};
export default cnLorem;

export interface IOption {
  len?: number;
  min?: number;
  max?: number;
}

const emptyOpt: IOption = {
  len: undefined,
  min: undefined,
  max: undefined,
};

function phrase(opt: IOption = emptyOpt) {
  const len = opt.len ?? randRange(opt.min ?? 3, opt.max ?? 10);
  return getText(len, true, false, false);
}

function sentence(opt: IOption = emptyOpt) {
  const len = opt.len ?? randRange(opt.min ?? 15, opt.max ?? 30);
  return getText(len, false, true, false);
}

function paragraph(opt: IOption = emptyOpt) {
  const len = opt.len ?? randRange(opt.min ?? 100, opt.max ?? 200);
  return getText(len, false, false, false);
}

function article(opt: IOption = emptyOpt) {
  const len = opt.len ?? randRange(opt.min ?? 600, opt.max ?? 1000);
  return getText(len, false, false, true);
}

function name(opt: { len?: number } = { len: undefined }) {
  const len = opt.len ?? (Math.random() < 0.97 ? 3 : 2);
  let firstName = '';
  for (let i = 0; i < len - 1; i += 1) firstName += getCharacter();
  return `${lastName[randInt(lastName.length - 1)]}${firstName}`;
}
