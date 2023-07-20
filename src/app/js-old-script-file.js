
var app = angular.module('myApp',[])

app.controller('myCtrl',function ($scope,$http,$window) {
    $scope.cart_items = []

    $scope.add_to_cart = function(item){
        temp = {
            'name': item.name,
            'vendor' : item.vendor,
            'price'  : item.price,
            'size' : item.options[$scope.size_option_index].value,
            'id' : item.options[$scope.size_option_index].id,
            'qty' : 1
        }
        $scope.cart_items.push(temp);
    }

    $scope.cart_actions = function(action,index){
        switch(action){
            case 'plus' :  
                $scope.cart_items[index].qty += 1;
                break;
            case 'minus' :  
                $scope.cart_items[index].qty -= 1;
                break;
            case 'delete' :  
                $scope.cart_items.splice(index,1)
                break;
            default : break;
        }
    }
})