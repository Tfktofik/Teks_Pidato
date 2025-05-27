function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6R1d4Dk0qFC":
        Script1();
        break;
  }
}

function Script1()
{
  const url = "https://script.google.com/macros/s/AKfycby6e4Ik3sb3oVZHZ_kpVLhc5q7qaUfnMoAocsBM0Wgt4C-Jv8RMja_fuBV4AVgyywzlyA/exec";
const player = GetPlayer();
let nama = player.GetVar("nama");
let nilai = player.GetVar("UserScore");

// Kirim ke Google Sheet
fetch(url, {
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    nama: nama,
    nilai: nilai
  })
});

// Disable tombol Submit setelah diklik
let submitBtn = document.querySelector("button:contains('Submit')");
if (submitBtn) {
  submitBtn.disabled = true;
  submitBtn.innerText = "Mengirim...";
}

}

