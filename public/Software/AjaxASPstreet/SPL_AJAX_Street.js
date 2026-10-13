// holds an instance of XMLHttpRequest
var SPLxmlHttp = SPLcreateXmlHttpRequestObject();

// creates an XMLHttpRequest instance
function SPLcreateXmlHttpRequestObject() 
{
  // will store the reference to the XMLHttpRequest object
  var xmlHttp;
  // this should work for all browsers except IE6 and older
  try
  {
    // try to create XMLHttpRequest object
    xmlHttp = new XMLHttpRequest();
  }
  catch(e)
  {
    // assume IE6 or older
    var XmlHttpVersions = new Array('MSXML2.XMLHTTP.6.0',
                                    'MSXML2.XMLHTTP.5.0',
                                    'MSXML2.XMLHTTP.4.0',
                                    'MSXML2.XMLHTTP.3.0',
                                    'MSXML2.XMLHTTP',
                                    'Microsoft.XMLHTTP');
    // try every prog id until one works
    for (var i=0; i<XmlHttpVersions.length && !xmlHttp; i++) 
    {
      try 
 
      { 
        // try to create XMLHttpRequest object
        xmlHttp = new ActiveXObject(XmlHttpVersions[i]);
      } 
      catch (e) {}
    }
  }
  // return the created object or display an error message
  if (!xmlHttp)
    alert("Error creating the XMLHttpRequest object.");
  else 
    return xmlHttp;
}

// read a file from the server
function SPLGetAddressData(postcode)
{
  // only continue if xmlHttp isn't void
  if (SPLxmlHttp)
  {
    // try to connect to the server
    try
    {
      // initiate reading a file from the server
      SPLxmlHttp.open("GET", "SPLGetStreetAddress.php?postcode=" + escape(postcode), true);
      SPLxmlHttp.onreadystatechange = SPLhandleRequestStateChange;
      SPLxmlHttp.send(null);
    }
    // display the error in case of failure
    catch (e)
    {
      //alert("Can't connect to server:\n" + e.toString());
      //Suppress error, since can be cause by two calls at once
    }
  }
}

// function called when the state of the HTTP request changes
function SPLhandleRequestStateChange() 
{
  try
  {
	  // when readyState is 4, we are ready to read the server response
	  if (SPLxmlHttp.readyState == 4) 
	  {
	    // continue only if HTTP status is "OK"
	    if (SPLxmlHttp.status == 200) 
	    {
	      try
	      {
		// do something with the response from the server
		SPLhandleServerResponse();
	      }
	      catch(e)
	      {
		// display error message
		alert("Error reading the response: " + e.toString());
	      }
	    } 
	    else
	    {
	      // display status message
	      alert("There was a problem retrieving the data:\n" + 
		    SPLxmlHttp.statusText);
	    }
	  }
   }
   catch(e)
   {
   // ignore
   }
}
 
 
// handles the address response received from the server
function SPLhandleServerResponse()
{
  //##########################################################
  //### Delete this line on production server              ###
  //### This can be used for debuging to show XML returned ###
  // alert(SPLxmlHttp.responseText);
  //##########################################################
  
  var Credits="",LINE1="",LINE2="",LINE3="",TOWN="",COUNTY="",POSTCODE="",COUNTRY=""
  
  // Test that XML contains valid Address, test for <line1>
  var XMLtest = SPLxmlHttp.responseText;
  if (XMLtest.indexOf("<line1>")>=0)
  {
	  // read the message from the server
	  var xmlResponse = SPLxmlHttp.responseXML;

	  // obtain the XML's document element
	  xmlRoot = xmlResponse.documentElement;
  
	  if (xmlRoot.getElementsByTagName("credits_display_text").item(0).firstChild) 
		{Credits = xmlRoot.getElementsByTagName("credits_display_text").item(0).firstChild.data ;}

	  if (xmlRoot.getElementsByTagName("line1").item(0).firstChild) 
		{LINE1 = xmlRoot.getElementsByTagName("line1").item(0).firstChild.data;}

	  if (xmlRoot.getElementsByTagName("line2").item(0).firstChild) 
		{LINE2 = xmlRoot.getElementsByTagName("line2").item(0).firstChild.data;}

	  if (xmlRoot.getElementsByTagName("line3").item(0).firstChild) 
		{LINE3 = xmlRoot.getElementsByTagName("line3").item(0).firstChild.data;}

	  if (xmlRoot.getElementsByTagName("town").item(0).firstChild) 	
		{TOWN = xmlRoot.getElementsByTagName("town").item(0).firstChild.data;}

	  if (xmlRoot.getElementsByTagName("county").item(0).firstChild) 
		{COUNTY = xmlRoot.getElementsByTagName("county").item(0).firstChild.data;}

	  if (xmlRoot.getElementsByTagName("postcode").item(0).firstChild) 
		{POSTCODE = xmlRoot.getElementsByTagName("postcode").item(0).firstChild.data;}

	  if (xmlRoot.getElementsByTagName("country").item(0).firstChild) 
		{COUNTRY = xmlRoot.getElementsByTagName("country").item(0).firstChild.data;}
		
	  document.getElementById("postcode").value=POSTCODE;
  }

  //Write back even if not found, so clears address lines
  document.getElementById("line1").value=LINE1;
  document.getElementById("line2").value=LINE2;
  document.getElementById("line3").value=LINE3;
  document.getElementById("town").value=TOWN;
  document.getElementById("county").value=COUNTY;
  document.getElementById("country").value=COUNTRY;

}
