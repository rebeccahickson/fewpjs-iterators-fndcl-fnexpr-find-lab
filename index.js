const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(arr) {
  let obj = arr.find(function (item) {
    return item.result === "W";
  });
  if (obj === undefined) {
    return obj;
  } else {
    return obj["year"];
  }
}
