
/* JavaScript content from js/main.js in folder common */
function wlCommonInit(){
	/*
	 * Use of WL.Client.connect() API before any connectivity to a MobileFirst Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the MobileFirst Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	// Common initialization code goes here
	
	
	
}

function hello(){
	var resourceRequest = new WLResourceRequest("/adapters/HelloWorld/users", 
			WLResourceRequest.GET);
	resourceRequest.send().then(
			helloResponse,
			loadFailure
	);
}

function helloResponse(result){
	WL.Logger.debug("Success");
	$('#info').html(result.responseText);
}

function helloUser(){
	var resourceRequest = new WLResourceRequest("/adapters/HelloWorld/users/ken", WLResourceRequest.GET);
	resourceRequest.send().then(
			helloUserResponse,
			loadFailure
	);
}

function helloUserResponse(result){
	WL.Logger.debug("Success");
	$('#info').html(result.responseText);
}

function helloUserQuery(result){
	var resourceRequest = new WLResourceRequest("/adapters/HelloWorld/users/helloUserQuery", WLResourceRequest.GET);
	resourceRequest.setQueryParameter("username", "Alice");
	resourceRequest.send().then(
			helloUserQueryResponse,
			loadFailure
	);
}

function helloUserQueryResponse(result){
	WL.Logger.debug("Success");
	WL.Logger.debug(result);
	$('#info').html(result.responseText);
}

function getPropertyValue(){
	var resourceRequest = new WLResourceRequest("/adapters/HelloWorld/users/prop", WLResourceRequest.GET);
	resourceRequest.send().then(
			getPropertyValueResponse,
			loadFailure
	);
}

function getPropertyValueResponse(result){
	WL.Logger.debug("Success");
	WL.Logger.debug(result);
	$('#info').html(result.responseText);
}

function enterInfo(){
	var resourceRequest = new WLResourceRequest("/adapters/HelloWorld/users/Kuo/Kai/Ni", WLResourceRequest.POST);
	
	resourceRequest.setQueryParameter("age", 21)
	var json = {"height": "178"};

	resourceRequest.setHeader("Date1", "2015-08-07");
	
	resourceRequest.sendFormParameters(json).then(
			enterInfoResponse,
			loadFailure
	);
}

function enterInfoResponse(result){
	WL.Logger.debug("Success");
	WL.Logger.debug(result);
	$('#info').html(result.responseText);
}

function newUsers(){
	var resourceRequest = new WLResourceRequest("/adapters/HelloWorld/users/newUsers", WLResourceRequest.PUT);
	var json = {"username":'Ken'};
	resourceRequest.sendFormParameters(json).then(
			newUsersResponse,
			loadFailure
	);
}

function newUsersResponse(result){
	WL.Logger.debug("Success");
	WL.Logger.debug(result);
	$('#info').html(result.responseText);
}

function getStories(){
	var invocationData = {
	        adapter : 'JSHelloWorld',
	        procedure : 'getFeedsFiltered',
	        parameters : []
	    };
	
	WL.Client.invokeProcedure(invocationData,{
	    onSuccess : getStoriesResponse,
	    onFailure : loadFailure
	});

}

function getStoriesResponse(result){
	WL.Logger.debug("------------------Success--------------------");
	var responseText = result.responseText;
	var json = JSON.parse(responseText);
	WL.Logger.debug(json.Items[0].description);
	$('#info').html(json.Items[0].title);
}




function loadFailure(result){
	WL.Logger.error("Failure");
}



/* JavaScript content from js/main.js in folder iphone */
// This method is invoked after loading the main HTML and successful initialization of the IBM MobileFirst Platform runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}