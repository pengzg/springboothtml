tempApp.controller('ctr_ticketList', function($scope,
		$state,http,EzConfirm,messageFactory,$rootScope) {
	$scope.pager = {page:1,rows:'20',sort:'tm_add_time',order:'desc',pageList:['10','20','30'],tm_shopid:$rootScope.USER.shopId};
	$scope.searchParam = {};
	$scope.vo = {};
	
	/**
	 * 查询数据
	 */
	var queryTicket = function(){
		messageFactory.showLoading();
		var success = function(result){
			$scope.ticketList = result.data.rows;
			$scope.pager.total=result.data.total;
			$scope.pager.pageTotal = Math.ceil($scope.pager.total/$scope.pager.rows);
			messageFactory.closeLoading();
		}
		var error = function(result){
			messageFactory.closeLoading();
		}
		var url = '/admin/ticket/ticketMainControl/dataGrid.action';
		http.post(url,$.extend({}, $scope.pager, $scope.searchParam),success,error);
	}
	
	/**
	 * 条件查询
	 */
	$scope.doSearch = function(){
		$scope.searchParam.searchKey = $scope.searchKey;
		if($scope.pager.page!=1){
			$scope.pager.page = 1;
		}
		queryTicket();
	}
	
	$scope.searchFun = function(){
		if($scope.pager.page==1){
			queryTicket();
		}else{
			$scope.pager.page = 1;
		}
	}
	$scope.goTicketV = function(x){
		$state.go('index.user.ticketVList', {tv_ticketid: x.tm_id});
	}
	
	/**
	 * 排序方法
	 */
	$scope.sortFun = function(name,flag){
		if(!flag){
			return 'colorCenter noSortCss';
		}
		if($scope.pager.sort==name&&$scope.pager.order=='asc'){
			return 'SortAscCss'
		}
		if($scope.pager.sort==name&&$scope.pager.order=='desc'){
			return 'SortDescCss'
		}
	}
	
	/**
	 * 点击切换排序
	 */
	$scope.clickSortFun = function(name){
		if($scope.pager.sort!=name){
			$scope.pager.sort = name;
			$scope.pager.order = 'asc';
		}
		if($scope.pager.sort==name){
			if($scope.pager.order=='asc'){
				$scope.pager.order = 'desc';
			}else{
				$scope.pager.order = 'asc';
			}
		}
	}
	
	$scope.queryBuyList = function(){
		$scope.buyList = [];
		var success = function(result){
			 for(var x in result.data){
				var code = result.data[x].bd_code; 
				var name = result.data[x].bd_name;
				var str = {'bd_code':code,'bd_name':name};
				$scope.buyList.push(str);
			 }
			 $scope.buyList.unshift({'bd_code':'','bd_name':"全部类型"});
		  }
		  var error = function(result){
			  messageFactory.closeLoading();
			  messageFactory.showMessage('error',result.desc);
		  }
		var url = '/admin/base/baseDataControl/detailItem.action?codekey=2170';
		http.post(url,null,success,error);
	}
	$scope.queryBuyList();
	
	$scope.queryUseStateList = function(){
		$scope.useStateList = [];
		var success = function(result){
			 for(var x in result.data){
				var code = result.data[x].bd_code; 
				var name = result.data[x].bd_name;
				var str = {'bd_code':code,'bd_name':name};
				$scope.useStateList.push(str);
			 }
			 $scope.useStateList.unshift({'bd_code':'','bd_name':"全部状态"});
		  }
		  var error = function(result){
			  messageFactory.closeLoading();
			  messageFactory.showMessage('error',result.desc);
		  }
		var url = '/admin/base/baseDataControl/detailItem.action?codekey=2171';
		http.post(url,null,success,error);
	}
	$scope.queryUseStateList();
	
	/**
	 * 监听
	 */
	$scope.$watch(function(){
		var newValue = $scope.pager.page+' '+$scope.pager.rows+' '+$scope.pager.sort+' '+$scope.pager.order+' ';
		return newValue;
	},queryTicket);
	
})