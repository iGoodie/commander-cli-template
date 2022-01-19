interface Options {
  who: string;
}

export async function hello(options: Options) {
  return `Hello there, ${options.who}!`;
}
