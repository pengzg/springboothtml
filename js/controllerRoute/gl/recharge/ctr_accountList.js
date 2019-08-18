tempApp.controller('ctr_accountList', function($scope, $rootScope, $location,
    $state,$timeout,http,$stateParams,EzConfirm,$compile,dateUtil,messageFactory,sessionFactory) {
	$scope.pager = {page:1,rows:'20',sort:'mba_opening_time',order:'DESC',pageList:['10','20','30']};
	$scope.searchParam = {};
	$scope.dialog = 0;
	if ($stateParams.mba_memberid != undefined) {
	    $scope.searchParam.mba_memberid = $stateParams.mba_memberid;
	}
	
	/**ctr_stockInList
	 * 查询列表
	 */
	var queryList = function(){
	    
	    messageFactory.showLoading();
	    $scope.searchParam.startDate = $("#start_date").val();
	    $scope.searchParam.endDate = $("#end_date").val();
	    var success = function(result){
	        $scope.dataList = result.data.rows;
	        $scope.pager.total=result.data.total;
	        $scope.pager.pageTotal = Math.ceil($scope.pager.total/$scope.pager.rows);
	        messageFactory.closeLoading();
	    };
	    var error = function(result){
	        messageFactory.closeLoading();
	        messageFactory.showMessage('error',result.desc);
	        
	    };
	    var url = '/admin/account/memberBalanceAccountControl/dataGrid.action';
	    http.post(url,$.extend({},$scope.pager,$scope.searchParam),success,error);
	};

	/**
	 * 查询
	 */
	$scope.searchFun = function(){
	    
	    if($scope.pager.page==1){
	        queryList();
	    }else{
	        $scope.pager.page = 1;
	    }
	}
	
	/**
	 * 监听
	 */
	$scope.$watch(function(){
	    var newValue = $scope.pager.page+' '+$scope.pager.rows+' '+$scope.pager.sort+' '+$scope.pager.order+' ';
	    return newValue;
	},queryList);
	
	$scope.closeDialog = function(){
	    $scope.dialogShow = 0;
	}
	
	$scope.showDialog = function(x){
		$scope.vo = {
				'transAmount':x.mba_available_amount,
				'version':x.mba_version,
				'memberid':x.mba_memberid
		};
		console.log($scope.vo);
	    $scope.dialogShow = 1;
	}
	
	$scope.refundBalance = function(){
		var success = function(result){
			messageFactory.closeLoading();
			messageFactory.showMessage('success',result.desc);
			$scope.closeDialog();
			queryList();
		}
		var error = function(result){
			messageFactory.closeLoading();
			messageFactory.showMessage('error',result.desc);
		}
		var data ={'memberid':$scope.vo.memberid,'version':$scope.vo.version,'remarks':$scope.vo.remarks};
		var url = "/admin/account/memberBalanceAccountControl/refundBalance.action";
		var	msg = '您确定退款吗？';
		EzConfirm.create({
			heading : '提示',
			text : msg
		}).then(function() {
			messageFactory.showLoading();
			http.post(url, data, success, error);
		}, function() {
			
		});
	}
	
	$scope.clearParams = function(){
	    $scope.searchParam.searchKey = "";
	}

		/**
	 * 查询明细类型列表
	 */
	$scope.typeList = [];
	$scope.queryTypeList = function(){
		var success = function(result){
			 for(var x in result.data){
				var code = result.data[x].bd_code; 
				var name = result.data[x].bd_name;
				var str = {'bd_code':code,'bd_name':name};
				$scope.typeList.push(str);
			 }
			 $scope.typeList.unshift({'bd_code':'','bd_name':"全部"});
		  }
		  var error = function(result){
			  messageFactory.closeLoading();
			  messageFactory.showMessage('error',result.desc);
		  }
		var url = '/admin/base/baseDataControl/detailItem.action?codekey=2160';
		http.post(url,null,success,error);
	}
    $scope.queryTypeList();

    /* 查询余额 */
    $scope.viewRechargeList = function(x){
        var url = $state.href('index.gl.rechargelist',{'mbd_memberid':x.mba_memberid});
        window.open(url,'_blank');
    }
})