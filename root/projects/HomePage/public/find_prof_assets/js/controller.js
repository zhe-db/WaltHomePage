angular.module("faceListApp")
.controller('mainCtrl', function($scope,getFaceListService){
    $scope.text_input = "";
        console.log($scope.text_input);
    $scope.select_item = function(person){
        $scope.current = person;
        $scope.toedit = false;
        $scope.current.splitData = $scope.current.course_data.replace('-',' Section: ');
        $scope.current.splitData = $scope.current.splitData.split('&');
        for (var i = 0; i < $scope.current.splitData.length; i++){
            $scope.current.splitData[i] =  $scope.current.splitData[i].replace("-"," Section: ");
            $scope.current.splitData[i] = $scope.current.splitData[i].replace(/"/g,"");
        }
        if(!$scope.current.pic_urls){
        $scope.current.url="/find_prof_assets/img/16604583049_b2a08f6e6d_o.jpg"
      } else {
        $scope.current.url=$scope.current.pic_urls.split(',')[0];
      }
    }
    getFaceListService.getFace(function (response){
        $scope.people = response.data;
         for(var i = 0; i < response.data.length; i++){
        //   if($scope.people[i].pic_urls){
        //     $scope.people[i].url = $scope.people[i].pic_urls.split(',')[0];
        //     //console.log($scope.people);
        //   } else {
              $scope.people[i].dis_url = "/find_prof_assets/img/16604583049_b2a08f6e6d_o.jpg"
        //    }
            $scope.people[i].course = $scope.people[i].course_data.replace(/"&"/g,"-").split("-")[0].replace(/"/g,"");
            console.log($scope.people[i].course);
            //console.log($scope.people[i].userData.replace(/" "/g,"-").split("-"));
        }
       // console.log($scope.people[0].userData.replace(/" "/g,"-").split("-"));
    })
})
.service("getFaceListService",function($http){
    this.getFace = function(callback){
        // var group_info_req ={
        //     method: 'GET',
        //     host: "westus.api.cognitive.microsoft.com",
        //     url: "https://westus.api.cognitive.microsoft.com/face/v1.0/persongroups/20651383",
        //     headers: {
        //     "Ocp-Apim-Subscription-Key" : "4db4e7fa5c6a4cbdb36a9ca93ef1cdf2"
        // }
        // };
        // var person_info_req ={
        //     method: 'GET',
        //     host: "westus.api.cognitive.microsoft.com",
        //     url: "https://westus.api.cognitive.microsoft.com/face/v1.0/persongroups/20651383/persons",
        //     headers: {
        //     "Ocp-Apim-Subscription-Key" : "4db4e7fa5c6a4cbdb36a9ca93ef1cdf2"
        // }
        // };
        // $http(person_info_req).then(callback)
        $http.get('../prof_profiles.json').then(callback);
    }
})
