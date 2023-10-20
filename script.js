/*Five little monkeys jumping on the bed,

One fell down and bumped his head,

Mama called the doctor and the doctor said,

No more monkeys jumping on the bed!*/
        
let word = "little monkey";
    var count = 10;

while (count > 1) {
    console.log(count + " "  + word + "s" + " jumping on the bed");
    console.log("one fell down and bumped his head");
    console.log("Mamma called the Dr. and the Dr. said");
    console.log("No more monkeys jumping on the bed");
    count = count - 1;

    if (count === 1) {
        console.log(count + " " + word + " jumping on the bed");
        console.log("she fell off and bumped her head");
        console.log("Mamma called the Dr. and the Dr. said");
        console.log("Put those monkeys right to bed");
    } 
    }