let toc = ["swr", "GWR", "gtr", "lner"];
let i;
for (i=0; i<toc.length; i++) {
  if (i%2 !==0) {
    toc[i]="I have been changed";
  }
}
console.log(toc);