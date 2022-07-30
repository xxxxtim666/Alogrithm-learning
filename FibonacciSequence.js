// 0 1 1 2 3 4 5
// F(0)=0 F(1)=1 F(2)=F(n-1)+F(n-2)

const fs = (n) => {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fs(n - 1) + fs(n - 2);
  }
};
for (let i = 0; i <= 30; i++) {
  console.log(fs(i));
}
