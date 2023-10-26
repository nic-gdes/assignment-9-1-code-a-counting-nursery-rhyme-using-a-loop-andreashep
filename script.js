/*Five little monkeys jumping on the bed,

One fell down and bumped his head,

Mama called the doctor and the doctor said,

No more monkeys jumping on the bed!*/

let word = "little monkey";
var count = 10;
const list = document.querySelector("#song");
while (count > 0) {
  var song =
    count +
    " " +
    word +
    "s" +
    " jumping on the bed." +
    " One fell down and bumped his head." +
    " Mamma called the Dr. and the Dr. said," +
    "  'No more monkeys jumping on the bed'.";
  if (count === 1) {
    song =
      count +
      " " +
      word +
      " jumping on the bed." +
      " She fell off and bumped her head." +
      " Mamma called the Dr. and the Dr. said," +
      "  'Put those monkeys right to bed.'";
  }
  var paragraph = document.createElement("p");
  paragraph.textContent = song;
  list.appendChild(paragraph);

  count = count - 1;
}
