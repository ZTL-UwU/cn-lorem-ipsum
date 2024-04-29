export function randInt(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

export function randRange(min: number, max: number) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

export function getEnding() {
  if (Math.random() < 0.93) return '。';
  return ['！', '？'][randInt(1)];
}

export function getPunctuation(commaOnly: boolean, lineBreak: boolean) {
  if (commaOnly) return '，';

  const r = Math.random();
  if (lineBreak && r < 0.06) return '\n';
  if (r < 0.6) return '，';
  if (r < 0.9) return '。';
  return ['！', '？', '：', '；'][randInt(3)];
}
