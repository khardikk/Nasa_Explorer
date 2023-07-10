document.querySelector('button.btn-primary').addEventListener('click', getFetch);

async function getFetch(){
    try{

        // const choice = document.querySelector('input').value;
        const url = 'https://api.nasa.gov/planetary/apod?api_key=oXkGEcmbGaIGmArTreN2hKNGVLnrUqT4T0p22agC';
    
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        document.querySelector('img').src = data.hdurl;
        document.getElementById('explaination').innerText = data.explanation;
        document.querySelector('h2').innerText = data.title;
        document.querySelector('h4').innerText += ' : ' + data.date;;
        document.getElementById('copyright').innerText = data.copyright;

    }    

catch(err){
    console.log(`error ${err}`);
}
}