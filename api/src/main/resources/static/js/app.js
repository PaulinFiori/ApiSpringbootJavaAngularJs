//Criação do modulo principal da aplicação
var appProduto = angular.module("appProduto",[]); 

//Criação de controllers
appProduto.controller("produtoController", function($scope, $http, $window){
	$scope.produtos=[];
	$scope.produto={};
	$scope.produtoalterado={};
	$scope.idPesquisa= null;
	$scope.produtoPesquisadoCodigo=[];
	$scope.cidades=[];
	
	$scope.carregarProdutos = function(){
		$http({
		method:'GET', 
		url:'http://localhost:8090/products'
		}).then(function(response){
			$scope.produtos=[];
			$scope.idPesquisa=null;
			$scope.cidades={};
			$scope.produtos=response.data;
		},function(response){
			$window.alert("Status: " + response.status + " Erro:" + response.data.message);
			console.log(response.data);
			console.log(response.status);
		});
	};
		
	$scope.cadastrarProduto = function(){
		$http({
		method:'POST', 
		url:'http://localhost:8090/products',
		data:$scope.produto
		}).then(function(response){
			$window.alert("Cadastrado com sucesso!");  
			$scope.produtos=[];
			$scope.idPesquisa=null;
			$scope.cidades={};
		},function(response){
			$window.alert("Status: " + response.status + " Erro:" + response.data.message);
			console.log(response.data);
			console.log(response.status);
		});
	};
	
	$scope.deletarProduto = function(produto){
		$http({
		method:'DELETE', 
		url:'http://localhost:8090/products/' + produto.codProduto,
		}).then(function(response){
			$window.alert("Deletado com sucesso!");  
			$scope.produtos=[];
			$scope.idPesquisa=null;
			$scope.cidades={};
		},function(response){
			$window.alert("Status: " + response.status + " Erro:" + response.data.message);
			console.log(response.data);
			console.log(response.status);
		});
	};
	
	$scope.alterarProduto = function(produtoAlterar){
		$scope.produtoalterado = angular.copy(produtoAlterar);
	};
	
	$scope.alterarProduto2 = function(){
		$http({
		method:'PUT',
		url:'http://localhost:8090/products',
		data: $scope.produtoalterado
		}).then(function(response){
			$scope.produtos=[];
			$scope.idPesquisa=null;
			$scope.cidades={};
			$window.alert("Alterado com sucesso!");  
		},function(response){
			$window.alert("Status: " + response.status + " Erro:" + response.data.message);
			console.log(response.data);
			console.log(response.status);
		});
	};
	
	$scope.cancelarAlterarProduto = function(){
		$scope.produtoalterado={};
	};
	
	$scope.carregarProdutosCodigo = function(idPesquisa){
		$http({
		method:'GET', 
		url:'http://localhost:8090/products/' + idPesquisa
		}).then(function(response){
			$scope.produtos=[];
			$scope.idPesquisa=null;
			$scope.cidades={};
			$scope.produtoPesquisadoCodigo=response.data;
			console.log(response.data);
		},function(response){
			$window.alert("Status: " + response.status + " Erro:" + response.data.message);
			console.log(response.data);
			console.log(response.status);
		});
	};
	
	$scope.apagarProdutos = function(){
		$scope.produtos=[];
	};
	
	$scope.apagarProdutosCodigo = function(){
		$scope.produtoPesquisadoCodigo={};
	};
	
	$scope.carregarCidades = function(idPesquisa){
		$http({
		method:'GET', 
		url:'http://localhost:8090/cidades'
		}).then(function(response){
			$scope.produtos=[];
			$scope.idPesquisa=null;
			$scope.cidades={};
			$scope.cidades=response.data;
		},function(response){
			$window.alert("Status: " + response.status + " Erro:" + response.data.message);
			console.log(response.data);
			console.log(response.status);
		});
	};
	
	$scope.apagarCidades = function(){
		$scope.cidades={};
	};
});