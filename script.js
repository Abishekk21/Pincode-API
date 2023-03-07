function fetchDetails() {
    const pincode = document.getElementById("pincode").value;
    fetch(`https://api.postalpincode.in/pincode/${pincode}`)
          .then(response => response.json())
          .then(data => {
    const resultDiv = document.getElementById("result");
    if (data[0].Status === "Success") {
    const postOffice = data[0].PostOffice[0];
    resultDiv.innerHTML = 
    `<h2>Details for PINCODE ${pincode}</h2>
     <p><strong>State: </strong>${postOffice.State}</p>
     <p><strong>District: </strong>${postOffice.District}</p>
     <p><strong>City: </strong>${postOffice.Block}</p>
     <p><strong>Post Office: </strong>${postOffice.Name}</p>`;
    } 
    else {
     resultDiv.innerHTML = `<p>No details found for PINCODE ${pincode}.</p>`;
    }
    resultDiv.style.display = "block";
    }).catch(error => console.error(error));
    }
    
    
    
