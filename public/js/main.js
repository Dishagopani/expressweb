const cityname = document.getElementById('cityname');
const submitbtn = document.getElementById('submitbtn');

const city = document.getElementById('city');
   
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityname.value;
    if(cityVal === ""){
        city.innerText =  `plz write the name before search`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url =  `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=ac551aa20ece2631b35c417aa8eb0536`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];

        city.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp_real_val.innerText = arrData[0].main.temp;
        //  temp_status.innerText=arrData[0].weather[0].main;

        const tempmood =arrData[0].weather[0].main;

        if(tempmood == "Clear"){
            temp_status.innerHTML=
            "<i class='fas fa-sun style='color: #eccc68;'></i>";
        }else  if(tempmood == "Clouds"){
            temp_status.innerHTML=
            "<i class='fas fa-cloud style='color: #f1f2f6;'></i>";
        }else if(tempmood == "Rain"){
            temp_status.innerHTML=
            "<i class='fas fa-cloud-rain style='color: #a4b0be;'></i>";
        }else  if(tempmood == "Mist"){
            temp_status.innerHTML=
            "<i class='fas fa-smog style='color: #f1f2f6;'></i>";
        }else{
            temp_status.innerHTML=
            "<i class='fas fa-cloud style='color: #f1f2f6;'></i>";
        }
        datahide.classList.remove('data_hide');
    
        }catch{
            city.innerText =  `plz Enter city name Properly`;
            datahide.classList.add('data_hide');
        }
        
    }
}

submitbtn.addEventListener('click' , getInfo);