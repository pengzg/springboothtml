"use strict"
tempApp.config(["$stateProvider", "$urlRouterProvider", routeFn]);

function routeFn($stateProvider, $urlRouterProvider) {
    $stateProvider


    	//  订单列表
        .state("index.export",{
		    url:"/export",
		    templateUrl:"views/export/export.html",
//      	controller:"ctr_orderList",
		    resolve:{
		        deps:["$ocLazyLoad",function($ocLazyLoad){
		            return $ocLazyLoad.load(
		            		{files:[
		            		        "css/gift/gift.css",
		        			        ]});
		        }]
		    } 
		})

		//  
        .state("index.export.exportOrder",{
		    url:"/exportOrder",
		    templateUrl:"views/export/exportOrder.html",
			controller:"ctr_exportOrder",
		    resolve:{
		        deps:["$ocLazyLoad",function($ocLazyLoad){
		            return $ocLazyLoad.load(
		            		{files:[
		            		        "css/gift/gift.css",
									"js/controllerRoute/export/ctr_exportOrder.js"
		        			        ]});
		        }]
		    } 
		})

		//  
        .state("index.export.exportOrderDetail",{
		    url:"/exportOrderDetail",
		    templateUrl:"views/export/exportOrderDetail.html",
			controller:"ctr_exportOrderDetail",
		    resolve:{
		        deps:["$ocLazyLoad",function($ocLazyLoad){
		            return $ocLazyLoad.load(
		            		{files:[
		            		        "css/gift/gift.css",
									"js/controllerRoute/export/ctr_exportOrderDetail.js"
		        			        ]});
		        }]
		    } 
		})
 
		//  
        .state("index.export.exportBox",{
		    url:"/exportBox",
		    templateUrl:"views/export/exportBox.html",
			controller:"ctr_exportBox",
		    resolve:{
		        deps:["$ocLazyLoad",function($ocLazyLoad){
		            return $ocLazyLoad.load(
		            		{files:[
		            		        "css/gift/gift.css",
									"js/controllerRoute/export/ctr_exportBox.js"
		        			        ]});
		        }]
		    } 
		})

		//  
        .state("index.export.exportBoxDetail",{
		    url:"/exportBoxDetail",
		    templateUrl:"views/export/exportBoxDetail.html",
			controller:"ctr_exportBoxDetail",
		    resolve:{
		        deps:["$ocLazyLoad",function($ocLazyLoad){
		            return $ocLazyLoad.load(
		            		{files:[
		            		        "css/gift/gift.css",
									"js/controllerRoute/export/ctr_exportBoxDetail.js"
		        			        ]});
		        }]
		    } 
		})

		//  
        .state("index.export.exportMember",{
		    url:"/exportMember",
		    templateUrl:"views/export/exportMember.html",
			controller:"ctr_exportMember",
		    resolve:{
		        deps:["$ocLazyLoad",function($ocLazyLoad){
		            return $ocLazyLoad.load(
		            		{files:[
		            		        "css/gift/gift.css",
									"js/controllerRoute/export/ctr_exportMember.js"
		        			        ]});
		        }]
		    } 
		})

		//  
        .state("index.export.exportMemberBuyAgain",{
		    url:"/exportMemberBuyAgain",
		    templateUrl:"views/export/exportMemberBuyAgain.html",
			controller:"ctr_exportMemberBuyAgain",
		    resolve:{
		        deps:["$ocLazyLoad",function($ocLazyLoad){
		            return $ocLazyLoad.load(
		            		{files:[
		            		        "css/gift/gift.css",
									"js/controllerRoute/export/ctr_exportMemberBuyAgain.js"
		        			        ]});
		        }]
		    } 
		})

		//  
        .state("index.export.exportTicket",{
		    url:"/exportTicket",
		    templateUrl:"views/export/exportTicket.html",
			controller:"ctr_exportTicket",
		    resolve:{
		        deps:["$ocLazyLoad",function($ocLazyLoad){
		            return $ocLazyLoad.load(
		            		{files:[
		            		        "css/gift/gift.css",
									"js/controllerRoute/export/ctr_exportTicket.js"
		        			        ]});
		        }]
		    } 
		})

		//  
        .state("index.export.exportTicketDetail",{
		    url:"/exportTicketDetail",
		    templateUrl:"views/export/exportTicketDetail.html",
			controller:"ctr_exportTicketDetail",
		    resolve:{
		        deps:["$ocLazyLoad",function($ocLazyLoad){
		            return $ocLazyLoad.load(
		            		{files:[
		            		        "css/gift/gift.css",
									"js/controllerRoute/export/ctr_exportTicketDetail.js"
		        			        ]});
		        }]
		    } 
		})
};
