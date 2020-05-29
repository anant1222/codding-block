const fs = require("fs").promises;
const os = require("os");
async function task() {
  try {
    let p1 = fs.readFile("text1.txt");
    let p2 = fs.readFile("text2.txt");
    let p3 = fs.readFile("text3.txt");

    let data1 = await p1;
    console.log("data1 read");
    let data2 = await p2;
    console.log("data2 read");
    let data3 = await p3;
    console.log("data3 read");

    let sorted = data1
      .toString()
      .split(os.EOL)
      .concat(data2.toString().split(os.EOL))
      .concat(data3.toString().split(os.EOL))
      .sort((a, b) => a - b)
      .join(os.EOL);

    await fs.writeFile('output.txt', sorted);
  } catch (error) {
    console.error(error);
  }
}

task().then(()=>{
    console.log('work really done')
})
