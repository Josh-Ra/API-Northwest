async function checkPhoneNumber(){
    const number = document.querySelector('input.userInput').value;
    const resultList = document.querySelector('ul.resultsList')
    
    //Remove list elements
    while (resultList.firstChild){
        resultList.removeChild(resultList.lastChild);
    }


    if (!number){
        alert('Please enter a hero before submission');
        return;
    }

    //Gather response
    const endpoint = new URL(`http://apilayer.net/api/validate`);
    endpoint.searchParams.set('access_key', '8bf078818f92c658662e7bb52bfa8861');
    endpoint.searchParams.set('number', number);
    endpoint.searchParams.set('format', 1);

    const response = await fetch(endpoint);
    
    //Format Data
    const data = await response.json();
    console.log(data)
    //DOM Manipulation
    if (data.valid != true){
        let li = document.createElement('li');
        let li1 = document.createElement('li');

        li.innerHTML = 'Please enter a valid number!';
        li1.innerHTML = `${number} is not a valid phone number!`;

        resultList.appendChild(li1);
        resultList.appendChild(li);
    }else{
        let li = document.createElement('li');
        let li1 = document.createElement('li');

        li.innerHTML = 'Phone number valid!';
        li1.innerHTML = `${number} is from ${data.location}`;

        resultList.appendChild(li);
        resultList.appendChild(li1);
    }

    


}

document.querySelector('button').addEventListener('click',function(){
    checkPhoneNumber()
});




