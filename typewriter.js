
// function uses a loop and setTimeout to print out a sentence in an animated way that looks like the phrase is being typed out

const sentence = 'hello there from lighthouse labs\n';
let time = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
  time += 50;
};
