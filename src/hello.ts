interface Options {
  who: string;
}

export async function hello(options: Options) {
  console.log(`Hello there, ${options.who}!`);
}
