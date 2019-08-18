"use strict"
tempApp.config(["$stateProvider","$urlRouterProvider",routeFn]);
function routeFn($stateProvider,$urlRouterProvider){
    $stateProvider

    //默认路径
	.state("index.setup",{
		url:"/setup",
		templateUrl:"views/setup/setup.html",
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

    // 仓库管理
     .state("index.setup.basestorehouse",{
        url:"/baseStorehouse",
        templateUrl:"views/setting/base/basestorehouse/baseStorehouseList.html",
        controller: "ctr_baseStorehouseList",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load(
                        {files:[
                                "css/user/userdetail.css",
                                "js/controllerRoute/setting/base/basestorehouse/ctr_baseStorehouseList.js"
                                ]});
            }]
        } 
    })

    //供应商管理
    .state("index.setup.supplierList",{
        url:"/supplierList",
        templateUrl:"views/cs/customer/supplier/supplierList.html",
        controller:"ctr_supplierList",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load(
                        {files:[
                                "css/order/orderForm.css",
                                "js/controllerRoute/cs/customer/supplier/ctr_supplierList.js"
                                ]});
            }]
        } 
    }) 


    //轮播图列表
    .state("index.setup.focus",{
        url:"/focus",
        templateUrl:"views/setting/base/focus/focus.html",
        controller:"ctr_focus",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load(
                		{files:[
                		        "css/order/orderForm.css",
                		        "js/controllerRoute/setting/base/focus/ctr_focus.js"
            			        ]});
            }]
        } 
    }) 

    //轮播图新增
    .state("index.setup.focusAdd",{
        url:"/focusAdd?fb_id",
        templateUrl:"views/setting/base/focus/focusAdd.html",
        controller:"ctr_focusAdd",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load(
                		{files:[
                		        "css/order/orderForm.css",
                		        "js/controllerRoute/setting/base/focus/ctr_focusAdd.js"
            			        ]});
            }]
        } 
    }) 


    //工作人员信息列表
    .state("index.setup.workUserList", {
        url: "/workUserList",
        templateUrl: "views/setup/user/setup_workUserList.html",
        controller:"ctr_setup_workUserList",
        resolve: {
            deps: ["$ocLazyLoad", function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files: [
                        "css/user/userdetail.css",
                        "js/controllerRoute/setup/user/ctr_setup_workUserList.js"
                    ]
                });
            }]
        }
    })

    //工作人员角色
    .state("index.setup.baserole",{
        url:"/baserole",
        templateUrl:"views/setup/user/setup_baseRole.html",
        controller: "ctr_setup_baseRole",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load(
                        {files:[
                                "css/marketingactivitytype/activitytype.css",
                                "css/product/product.css",
                                "css/setting/basecity.css",
                                "js/controllerRoute/setup/user/ctr_setup_baseRole.js"
                                ]});
            }]
        } 
    })
    
    
     //工作人员与仓库的关联 
    .state("index.setup.workStoreRelation",{
        url:"/workStoreRelation",
        templateUrl:"views/setup/workStoreAdd/workStoreRelation.html",
        controller:"ctr_setup_workStoreRelation",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load(
                		{files:[
                		        "css/product/product.css",
                                "js/controllerRoute/setup/workStoreAdd/ctr_setup_workStoreRelation.js"
            			        ]});
            }]
        } 
    })
    
         //工作人员与仓库关联添加	
    .state("index.setup.workStoreRelationAdd",{
        url:"/workStoreRelationAdd?workId",
        templateUrl:"views/setup/workStoreAdd/workStoreRelationAdd.html",
        controller:"ctr_setup_workStoreRelationAdd",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load(
                		{files:[
                                "js/controllerRoute/setup/workStoreAdd/ctr_setup_workStoreRelationAdd.js"
            			        ]});
            }]
        } 
    })

    // a基础设置
    .state("index.setup.basesetting",{
        url:"/basesetting",
        templateUrl:"views/setup/basesetting/baseSetting.html",
        controller: "ctr_baseSetting",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load(
                        {files:[
                                "css/user/userdetail.css",
                                "js/controllerRoute/setup/basesetting/ctr_baseSetting.js"
                                ]});
            }]
        } 
    })

};

