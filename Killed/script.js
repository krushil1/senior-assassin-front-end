const allData = async () => {
  // async function allData() {
  const res = await fetch("https://senior-assassin-api.vercel.app/api/dead");
  const data = await res.json();
  var total = Object.keys(data).length;
  document.getElementById("total").innerHTML = total;
  console.log(total);
  const stuff = data.map((res) => {
    return {
      name: res.name,
    };
  });
  appendData(stuff);
};

const appendData = async (data) => {
  // async function appendData(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var p = await document.createElement("p");
    var name = '<div class="name">' + data[i].name + "</div>";
    p.innerHTML = '<div class="column"><div class="card">' + name; //   edit +
    ("</div></div>");
    await mainContainer.appendChild(p);
  }
};

allData();
