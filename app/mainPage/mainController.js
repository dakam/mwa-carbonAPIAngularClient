angular.module("carbonIntensityApp").controller("MainController", MainController);
function MainController(carbonFactory) {
const vm= this;

carbonFactory.getCurrentGeneration().then(function(response) {
    vm.intensity= response.data.generationmix;
console.log("default generations=",response);
})

}
