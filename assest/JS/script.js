let container = document.querySelector(".container");
async function get() {
  try {
    let url = await fetch("https://api.rootnet.in/covid19-in/stats/latest");
    let data = await url.json();
    let final = data.data.regional;
    // console.log(data);

    let totalcase =document.getElementById('total_case');
    let totalDeth = document.getElementById('total_deth');
    let totalRecover =document.getElementById('total_recover');

    totalcase.textContent = data.data.summary.confirmedCasesIndian
    totalDeth.textContent = data.data.summary.deaths
    totalRecover.textContent = data.data.summary.discharged

    


    // console.log(data.data.summary);
    
   
    
    

    let search = document.getElementById("search");

    search.addEventListener("input", () => {
      
      container.innerHTML = "";
      let input = search.value.toLowerCase();

      let result = final.filter((val) => {
        return val.loc.toLowerCase().includes(input);
      });

      // console.log(result);
      result.forEach((ele) => {
        container.innerHTML += `
           <div class="city_data_main">
                <h5 class="loc">${ele.loc} </h5>
                <div class="data_main_with_fleg">
                    <div class="data_main">
                        <div class="casesforeign_main">
                            <div class="case_fore_ing_text">Casesforeing :</div>
                            <div class="case_fore_ing_words">${ele.confirmedCasesForeign}</div>
                        </div>
                        <div class="casesforeign_main">
                            <div class="case_fore_ing_text">CasesIndian :</div>
                            <div class="case_fore_ing_words">${ele.confirmedCasesIndian}</div>
                        </div>
                        <div class="casesforeign_main">
                            <div class="case_fore_ing_text">Deaths :</div>
                            <div class="case_fore_ing_words">${ele.deaths}</div>
                        </div>
                        <div class="casesforeign_main">
                            <div class="case_fore_ing_text">Discharged :</div>
                            <div class="case_fore_ing_words">${ele.discharged}</div>
                        </div>
                        <div class="casesforeign_main">
                            <div class="case_fore_ing_text">Total Cases :</div>
                            <div class="case_fore_ing_words">${ele.totalConfirmed}</div>
                        </div>
                    </div>
                    <div class="fleg_img_main">
                        <div class="fleg_img">
                            <img src="./assest/ICON/case.png" alt />
                        </div>
                    </div>
                </div>
            </div>
        
      
            `;
      });
    });
 
    function searchTest(){

        final.forEach((ele) => {
     



          container.innerHTML += `
       
           <div class="city_data_main">
                <h5 class="loc">${ele.loc} </h5>
                <div class="data_main_with_fleg">
                    <div class="data_main">
                        <div class="casesforeign_main">
                            <div class="case_fore_ing_text">Casesforeing :</div>
                            <div class="case_fore_ing_words">${ele.confirmedCasesForeign}</div>
                        </div>
                        <div class="casesforeign_main">
                            <div class="case_fore_ing_text">CasesIndian :</div>
                            <div class="case_fore_ing_words">${ele.confirmedCasesIndian}</div>
                        </div>
                        <div class="casesforeign_main">
                            <div class="case_fore_ing_text">Deaths :</div>
                            <div class="case_fore_ing_words">${ele.deaths}</div>
                        </div>
                        <div class="casesforeign_main">
                            <div class="case_fore_ing_text">Discharged :</div>
                            <div class="case_fore_ing_words">${ele.discharged}</div>
                        </div>
                        <div class="casesforeign_main">
                            <div class="case_fore_ing_text">Total Cases :</div>
                            <div class="case_fore_ing_words">${ele.totalConfirmed}</div>
                        </div>
                    </div>
                    <div class="fleg_img_main">
                        <div class="fleg_img">
                            <img src="./assest/ICON/case.png" alt />
                        </div>
                    </div>
                </div>
            </div>
        
              `;
          // console.log(ele);
          
        });

    }

    searchTest()

  } catch (error) {
    console.log(error);
  }
}
get();