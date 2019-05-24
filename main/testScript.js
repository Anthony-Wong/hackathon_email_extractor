var headings = document.evaluate("//td//td[contains(., 'console.aws.amazon.com/')]", document, null, XPathResult.ANY_TYPE, null );

var thisHeading;
var out = "";

while (thisHeading = headings.iterateNext()) {
    var position = thisHeading.parentElement.cells[3].innerHTML;
    var name = thisHeading.parentElement.cells[5].innerHTML;

    out = out + position + "\n" + name + "\n" + "Score : " + "\n" + "Remarks : " + "\n\n";
}

var dummy = document.createElement("textarea");
document.body.appendChild(dummy);
dummy.setAttribute("id", "dummy_id");
document.getElementById("dummy_id").value=out;
dummy.select();
document.execCommand("copy");
document.body.removeChild(dummy);