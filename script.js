async function fetchData() {
    const res=await fetch ("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
    const record=await res.json();
    document.getElementById("year").innerHTML=record.data[0].Year;
    document.getElementById("country").innerHTML=record.data[0].Nation;
    document.getElementById("population").innerHTML=record.data[0].Population;
}
fetchData();