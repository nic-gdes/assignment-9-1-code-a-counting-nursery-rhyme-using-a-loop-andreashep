/*Five little monkeys jumping on the bed,

One fell down and bumped his head,

Mama called the doctor and the doctor said,

No more monkeys jumping on the bed!*/

let word = "little monkey";
var count = 10;
const list = document.querySelector("#song");
while (count > 0) {
  var song = count + " " + word + "s" + " jumping on the bed";
  var paragraph = document.createElement("p");
  paragraph.textContent = song;
  list.appendChild(paragraph);

  console.log("one fell down and bumped his head");
  console.log("Mamma called the Dr. and the Dr. said");
  console.log("No more monkeys jumping on the bed");

  count = count - 1;

  if (count === 1) {
    console.log(count + " " + word + " jumping on the bed");
    console.log("she fell off and bumped her head");
    console.log("Mamma called the Dr. and the Dr. said");
    console.log("Put those monkeys right to bed");
    };
}
