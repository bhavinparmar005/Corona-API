let container = document.querySelector(".container");
async function get() {
  try {
    let url = await fetch("https://api.rootnet.in/covid19-in/stats/latest");
    let data = await url.json();
    let final = data.data.regional;
    console.log(data);
    
    

    let search = document.getElementById("search");

    search.addEventListener("input", () => {
      
      container.innerHTML = "";
      let input = search.value.toLowerCase();

      let result = final.filter((val) => {
        return val.loc.toLowerCase().includes(input);
      });

      console.log(result);
      result.forEach((ele) => {
        // container.innerHTML += `
        //     <p>city name :- ${ele.loc}</p>
        //     `;
      });
    });
 
    function searchTest(){

        final.forEach((ele) => {
          // container.innerHTML += `
          //     <p>city name :- ${ele.loc}</p>
          //     `;
          console.log(ele.loc);
          
        });

    }

    searchTest()

  } catch (error) {
    console.log(error);
  }
}
get();