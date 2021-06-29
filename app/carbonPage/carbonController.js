angular.module("carbonIntensityApp").controller("carbonController", carbonController);
function carbonController($routeParams, carbonFactory) {
const vm= this;

const dateFrom= $routeParams.dateFrom;
const dateTo= $routeParams.dateTo;

carbonFactory.getGenerationForRange(dateFrom, dateTo ).then(function(response)
{
vm.carbon= response.data[0].generationmix[0];

console.log("specific carbon=", response.data[0].generationmix[0])
});


}