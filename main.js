function GetPharagraph()
{
    <button onclick="GetPharagraph1()"id="para_button">Get Pharagraph 1</button>
}

var input = []

for(var i = 1 ; i <=6; i++)
{
    input.push(document.getElementById("para_1" + i).value);
    input.push(document.getElementById("para_2" + i).value);
    input.push(document.getElementById("para_3" + i).value);
    input.push(document.getElementById("para_4" + i).value);
    input.push(document.getElementById("para_5" + i).value);
    input.push(document.getElementById("para_6" + i).value);
}
input.join(". ");