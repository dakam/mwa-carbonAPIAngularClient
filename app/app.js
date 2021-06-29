angular.module("carbonIntensityApp", ['ngRoute']).config(config);

function config($routeProvider) {
$routeProvider.when("/", {
templateUrl: "./mainPage/main.html",
controller: "MainController",
controllerAs: "mainCtrl"
}).when("/about", {
templateUrl: "aboutPage/about.html",
controller: "AboutController",
controllerAs: "aboutCtrl"
}).when("/:dateFrom/:dateTo", {
    templateUrl: "./carbonPage/carbon.html",
    controller: "carbonController",
    controllerAs: "carbonCtrl"}).otherwise ({
    redirectTo: "/"
})
}
