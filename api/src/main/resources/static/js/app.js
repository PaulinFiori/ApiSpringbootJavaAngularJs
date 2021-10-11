//Criação do modulo principal da aplicação
var appProduto = angular.module("appProduto",[]); 

//Criação de controllers
appProduto.controller("produtoController", function($scope, $http, $window){
	$scope.produtos = [];
	$scope.produto = {};

	$scope.produtoalterado = {};

	$scope.idPesquisa =  null;
	$scope.produtoPesquisadoCodigo = [];

	$scope.buscaNomeProduto = null;
	$scope.buscaCodCidade = null;
	$scope.buscaCodEstado = null;
	$scope.busca2 = [];

	$scope.codProdutoDeletar = null;
	
	$scope.cidades = [];
	
	$scope.carregarProdutos = function(){
		$http({
		method:'GET', 
		url:'http://localhost:8090/products'
		}).then(function(response){
			$scope.produtos=[];
			$scope.idPesquisa=null;
			$scope.codProdutoDeletar=null;
			$scope.cidades=[];
			$scope.busca2=[];
			$scope.produtos=response.data;
		},function(response){
			$window.alert("Status: " + response.status + " Erro:" + response.data.message);
			console.log(response.data);
			console.log(response.status);
		});
	};
		
	$scope.cadastrarProduto = function(){
		valor = $scope.produto.valorProduto.split(" ");
		valor2 = parseFloat(valor[1]);

		if(valor2 > 100.00) {
			confirmarCadastro = $window.confirm("O valor é maior do que R$ 100,00, deseja cadastrar?"); 
			if(confirmarCadastro == true) {
				$http({
					method:'POST', 
					url:'http://localhost:8090/products',
					data:$scope.produto
					}).then(function(response){
						$window.alert("Cadastrado com sucesso!");  
						$scope.produtos=[];
						$scope.idPesquisa=null;
						$scope.codProdutoDeletar=null;
						$scope.busca2=[];
						$scope.cidades=[];
					},function(response){
						$window.alert("Status: " + response.status + " Erro:" + response.data.message);
						console.log(response.data);
						console.log(response.status);
				});
			}
			else $window.alert("Produto não cadastrado!");
		}
	};

	$scope.cancelarCadastrarProduto = function(){
		$scope.produto={};
	};
	
	$scope.deletarProduto = function(codProdutoDeletar){
		$http({
		method:'DELETE', 
		url:'http://localhost:8090/products/' + codProdutoDeletar,
		}).then(function(response){
			$window.alert("Deletado com sucesso!");  
			$scope.produtos=[];
			$scope.idPesquisa=null;
			$scope.codProdutoDeletar=null;
			$scope.busca2=[];
			$scope.cidades=[];
		},function(response){
			$window.alert("Status: " + response.status + " Erro:" + response.data.message);
			console.log(response.data);
			console.log(response.status);
		});
	};
	
	$scope.alterarProduto = function(){
		valor = $scope.produtoalterado.valorProduto.split(" ");
		valor2 = parseFloat(valor[1]);

		if(valor2 > 100.00) {
			confirmarAlterar = $window.confirm("O valor é maior do que R$ 100,00, deseja cadastrar?"); 
			if(confirmarAlterar == true) {
				$http({
					method:'PUT',
					url:'http://localhost:8090/products',
					data: $scope.produtoalterado
					}).then(function(response){
						$scope.produtos=[];
						$scope.idPesquisa=null;
						$scope.codProdutoDeletar=null;
						$scope.busca2=[];
						$scope.cidades=[];
						$window.alert("Alterado com sucesso!");  
					},function(response){
						$window.alert("Status: " + response.status + " Erro:" + response.data.message);
						console.log(response.data);
						console.log(response.status);
				});
			}
			else $window.alert("Produto não alterado!");
		}
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
			$scope.codProdutoDeletar=null;
			$scope.cidades=[];
			$scope.busca2=[];
			$scope.produtoPesquisadoCodigo=response.data;
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
		$scope.produtoPesquisadoCodigo=[];
	};
	
	$scope.carregarCidades = function(idPesquisa){
		$http({
		method:'GET', 
		url:'http://localhost:8090/cidades'
		}).then(function(response){
			$scope.produtos=[];
			$scope.idPesquisa=null;
			$scope.codProdutoDeletar=null;
			$scope.busca2=[];
			$scope.cidades=[];
			$scope.cidades=response.data;
		},function(response){
			$window.alert("Status: " + response.status + " Erro:" + response.data.message);
			console.log(response.data);
			console.log(response.status);
		});
	};
	
	$scope.apagarCidades = function(){
		$scope.cidades=[];
	};

	$scope.buscarPor = function(){
		$http({
			method:'GET', 
			url:'http://localhost:8090/products'
			}).then(function(response){
				$scope.produtos=[];
				$scope.idPesquisa=null;
				$scope.codProdutoDeletar=null;
				$scope.busca2=[];
				$scope.cidades=[];

				for(var i = 0; i < response.data.length; i++) {
					if($scope.buscaNomeProduto != null && $scope.buscaCodCidade == null && $scope.buscaCodEstado == null && $scope.buscaNomeProduto == response.data[i].nomeProduto) $scope.busca2.push(response.data[i]);
					else if($scope.buscaCodCidade != null && $scope.buscaNomeProduto == null && $scope.buscaCodEstado == null && $scope.buscaCodCidade == response.data[i].cidade.codCidade) $scope.busca2.push(response.data[i]);
					else if($scope.buscaCodEstado != null && $scope.buscaNomeProduto == null && $scope.buscaCodCidade == null && $scope.buscaCodEstado == response.data[i].cidade.estado.codEstado) busca2.push(response.data[i]);
					else if($scope.buscaNomeProduto != null && $scope.buscaCodCidade != null && $scope.buscaCodEstado == null && $scope.buscaNomeProduto == response.data[i].nomeProduto && $scope.buscaCodCidade == response.data[i].cidade.codCidade) $scope.busca2.push(response.data[i]);
					else if($scope.buscaCodCidade != null && $scope.buscaCodEstado != null && $scope.buscaNomeProduto == null && $scope.buscaCodEstado == response.data[i].cidade.estado.codEstado && $scope.buscaCodCidade == response.data[i].cidade.codCidade) $scope.busca2.push(response.data[i]);
					else if($scope.buscaNomeProduto != null && $scope.buscaCodEstado != null && $scope.buscaCodCidade == null && $scope.buscaNomeProduto == response.data[i].nomeProduto && $scope.buscaCodEstado == response.data[i].cidade.estado.codEstado) $scope.busca2.push(response.data[i]);
					else if($scope.buscaNomeProduto != null && $scope.buscaCodCidade != null && $scope.buscaCodEstado != null && $scope.buscaNomeProduto == response.data[i].nomeProduto && $scope.buscaCodCidade == response.data[i].cidade.codCidade && $scope.buscaCodEstado == response.data[i].cidade.estado.codEstado) $scope.busca2.push(response.data[i]);
				}
			},function(response){
				$window.alert("Status: " + response.status + " Erro:" + response.data.message);
				console.log(response.data);
				console.log(response.status);
			});
	}

	$scope.apagarBusca = function(){
		$scope.busca2=[];
	}
});