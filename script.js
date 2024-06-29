const api = async () => {
    try {
      const response = await fetch("https://raw.githubusercontent.com/utkarshg679/demo-api/main/db.json");
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching or parsing data:", error);
      return [];
    }
  };


const show = async() => {
    try {
        const data = await api();
        data.forEach(item => {
            const div = document.createElement("div");
            div.style.backgroundColor = "yellow";
            div.style.color = "black";
            const h1 = document.createElement("h1");
            h1.style.fontSize = "20px"
            h1.innerText = item["title"];
            div.appendChild(h1);
            
            const h2 = document.createElement("h2");
            h2.style.fontSize = "16px"
            h2.innerText = item["body"];
            div.appendChild(h2);
            
            document.getElementById("main").appendChild(div);
        });
    } catch (error) {
        console.error("Error in show function:", error);
    }
}

show();

  