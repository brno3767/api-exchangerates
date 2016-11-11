// set endpoint and your access key
endpoint = 'live'
access_key = '045b082a51d972bb55cd466dd30e254e'; //access key


//Currency exchange rates are converted here. So far, all i can get to work is the alert exchange rates. 
//Goal: Create it so the user selects which currency the USD(US DOLLAR) will be converted to
// get the most recent exchange rates via the "live" endpoint:
$.ajax({
    url: 'http://apilayer.net/api/' + endpoint + '?access_key=' + access_key,   
    dataType: 'jsonp',
    success: function(json) {

        // exchange rata data is stored in json.quotes
        alert(json.quotes.USDSOS); 
        //Select currencies here. XXXYYY = From currency XXX to currency YYY
        // source currency is stored in json.source
        alert(json.source);
        //need to find where (json.source) is found
        // timestamp can be accessed in json.timestamp
        alert(json.timestamp);
        // timelapse is the last alert to pop up on the page 

    }
});

// set endpoint and your access key
endpoint = 'convert';
access_key = '045b082a51d972bb55cd466dd30e254e';

// define from currency, to currency, and amount
from = 'EUR'; //Cant get this bit to work 
to = 'GBP';
amount = '1000';

// execute the conversion using the "convert" endpoint:
$.ajax({
    url: 'http://apilayer.net/api/' + endpoint + '?access_key=' + access_key +'&from=' + from + '&to=' + to + '&amount=' + amount,   
    dataType: 'jsonp',
    success: function(json) {

        // access the conversion result in json.result
        alert(json.result);

                
    }
});
     