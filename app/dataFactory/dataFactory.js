angular.module("carbonIntensityApp").factory("carbonFactory", carbonFactory);

function carbonFactory($http) {
return {
getCurrentGeneration: getCurrentGeneration,
getGenerationForRange: getGenerationForRange
};
function getCurrentGeneration() {
return $http.get("https://api.carbonintensity.org.uk/generation/").then(complete).catch(failed);
}


function getGenerationForRange(dateFrom, dateTo) {
return $http.get("https://api.carbonintensity.org.uk/generation/"+dateFrom+"/"+dateTo).then(complete).catch(failed);
}
function complete(response) {
return response.data;
}
function failed(error) {
return error.statusText;
}
}
