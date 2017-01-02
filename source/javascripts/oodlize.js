// Make everything a pure function???? :)
function oodle() {
//Your JavaScript here
letters = document.getElementById("letters-to-replace");
l = letters.value.split(',');
replacement = document.getElementById("replacement");
word = document.getElementById("word");
result = document.getElementById("result");

console.log("letters are " + letters.value);

// l is an array of the

// Bind any of the letters changing to fire the helper function
// letters.addEventListener('input', letters_changed);
letters.addEventListener('input', oodle_helper);
// Fire once, just to tidy things up
// letters_changed();

replacement.addEventListener('input', oodle_helper);
word.addEventListener('input', oodle_helper);

// Fire once when the page loads & this function is called for the first time!
oodle_helper();
}
//
// function letters_changed() {
//     // l = letters.value.replace(/ /g, "").split(',').filter(function(n){ return n != " " || "" });
//     //
//     // console.log("New l value from update 'letters' is:")
//     // console.log(l);
//     oodle_helper();
// }

function oodle_helper() {
    // Remove leading, ending, and comma-padding spaces. Then remove all blank strings.
    l = letters.value
    .replace(/(^ *)|( *$)/g, "")
    .replace(/( *, *)/g, ",")
    .split(',').filter(function(n){ return (n != " ") && (n != "") });

    // Create a new expression, or-ing each string in letters-to-replace together
    var r = l.join('|')
    var regex = new RegExp (r, "gi")

    new_result = word.value.replace(regex, replacement.value);
    console.log("regexp regex is :" + regex);
    // new_result = word.value.replace(regex, replace.value);

    console.log ("inner of result is: " + new_result);
    // result.innerHTML = word.value;
    result.innerHTML = new_result;

    // Do som regex stuff to get a good new_result!

}

window.onload = oodle;
