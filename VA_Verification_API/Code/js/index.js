//Validation API Ajax calling Start
function checkAddress() {

    $("#result").val("");
    var headers = { 
        "Content-Type": "application/json",
        "apikey":"eZIx0AQVTxy0Hi9B0saKGd1q7UPNBP8o"
    }

    var data={
        addressLine1:$("#addressLine1").val(),
        addressLine2:$("#addressLine1").val(),
        addressLine3:$("#addressLine1").val(),
        city:$("#addressLine1").val(),
        zipCode5:$("#addressLine1").val(),
        zipCode4:$("#addressLine1").val(),
        internationalPostalCode:$("#addressLine1").val(),
        countryCode:$("#addressLine1").val()
    }

    $.ajax({
        type: "POST",
        url: "https://sandbox-api.va.gov/services/address_validation/v2/candidate",
        async: true,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(data),
        headers: headers,
        success: function (successData) {
            $("#result").val(JSON.stringify(successData));
        },
        error: function (err) {
            $("#result").val(err.statusText);
        }
    });

}

//Verification API Ajax
function checkStatus(){

    $("#resultStatus").val("");
    var headers = { 
        "Content-Type": "application/json",
        "Authorization":$("#statusAPI").val()
    }

    var apiUrl = "https://sandbox-api.va.gov/services/veteran_verification/v1/status?ssn="+$("#statusSSN").val();
    if($("#statusAPIChecked").val() == "disability"){
        apiUrl = "https://sandbox-api.va.gov/services/veteran_verification/v1/disability_rating?ssn="+$("#statusSSN").val();
    }
    if($("#statusAPIChecked").val() == "history"){
        apiUrl = "https://sandbox-api.va.gov/services/veteran_verification/v1/service_history?ssn="+$("#statusSSN").val();
    }

    if($("#statusFirstName").val() != ""){
        apiUrl = apiUrl+"&first_name="+$("#statusFirstName").val();
    }
    if($("#statusLastName").val() != ""){
        apiUrl = apiUrl+"&last_name="+$("#statusLastName").val();
    }
    if($("#statusDOB").val() != ""){
        apiUrl = apiUrl+"&birth_date="+$("#statusDOB").val();
    }

    $.ajax({
        type: "GET",
        url: apiUrl,
        async: true,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: headers,
        success: function (successData) {
            $("#resultStatus").val(JSON.stringify(successData));
        },
        error: function (err) {
            $("#resultStatus").val(err.statusText);
        }
    });

}


//Confirmation API Ajax
function checkConfirmation(){

    $("#resultconfirmation").val("");
    var headers = { 
        "Content-Type": "application/json",
        "apikey":$("#confirmationAPI").val()
    }

    var data={
        "ssn": $("#confirmationSSN").val(),
        "first_name": $("#confirmationFirstName").val(),
        "last_name": $("#confirmationLastName").val(),
        "birth_date": $("#confirmationDOB").val()
      }

    $.ajax({
        type: "POST",
        url: "https://sandbox-api.va.gov/services/veteran_confirmation/v0/status",
        async: true,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(data),
        headers: headers,
        success: function (successData) {
            $("#resultconfirmation").val(JSON.stringify(successData));
        },
        error: function (err) {
            $("#resultconfirmation").val(err.statusText);
        }
    });

}


//Open the tab for click menu
function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }