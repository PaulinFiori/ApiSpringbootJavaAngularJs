//Criação do modulo principal da aplicação
var appProduto = angular.module("appProduto",[]); 

//Criação de controllers
appProduto.controller("produtoController", function($scope, $http, $window){
	$scope.produtos = [];
	$scope.produto = {};

	$scope.produtoalterado = {
		codProduto: 0,
		nomeProduto: "",
		valorProduto: "",
		estoque: "",
		cidade: {
			codCidade: "",
			nomeCidade: "",
			estado: {
				codEstado: "",
				nomeEstado: "",
				abreviacaoEstado: ""
			}
		},
		tipo: {
			codTipo: "",
			nomeTipo: ""
		},
		fabricante: {
			codFabricante: "",
			nomeFabricante: ""
		}
	};

	$scope.idPesquisa =  null;
	$scope.produtoPesquisadoCodigo = [];

	$scope.buscaNomeProduto = null;
	$scope.buscaCodCidade = null;
	$scope.buscaCodEstado = null;
	$scope.busca2 = [];

	$scope.real = null;
	$scope.centavo = null

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
			$scope.produtoalterado={};
			$scope.produtos=response.data;
			console.log(response.data);
		},function(response){
			$window.alert("Status: " + response.status + " Erro:" + response.data.message);
			console.log(response.data);
			console.log(response.status);
		});
	};
		
	$scope.cadastrarProduto = function(){
		valortotal = "R$ " + $scope.real + "." + $scope.centavo;
		$scope.produto.valorProduto = valortotal;

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
						$scope.produtoalterado={};
						$scope.cidades=[];
					},function(response){
						$window.alert("Status: " + response.status + " Erro:" + response.data.message);
						console.log(response.data);
						console.log(response.status);
				});
			} else $window.alert("Produto não cadastrado!");
		} else {
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
					$scope.produtoalterado={};
					$scope.cidades=[];
				},function(response){
					$window.alert("Status: " + response.status + " Erro:" + response.data.message);
					console.log(response.data);
					console.log(response.status);
			});
		}
	};

	$scope.cancelarCadastrarProduto = function(){
		$scope.produto={};
	};
	
	$scope.deletarProduto = function(codProdutoDeletar){
		confirmarApagar = $window.confirm("Deseja deletar o produto " + codProdutoDeletar + "?"); 
		if(confirmarApagar == true) {
			$http({
				method:'DELETE', 
				url:'http://localhost:8090/products/' + codProdutoDeletar,
				}).then(function(response){
					$window.alert("Deletado com sucesso!");  
					$scope.produtos=[];
					$scope.idPesquisa=null;
					$scope.codProdutoDeletar=null;
					$scope.busca2=[];
					$scope.produtoalterado={};
					$scope.cidades=[];
				},function(response){
					$window.alert("Status: " + response.status + " Erro:" + response.data.message);
					console.log(response.data);
					console.log(response.status);
				});
		} else $window.alert("Produto não deletado!");
	};
	
	$scope.alterarProduto = function(){
		console.log($scope.produtoalterado);
		valor1 = $scope.produtoalterado.valorProduto.split(" ");
		valor2 = parseFloat(valor1[1]);

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
						$scope.produtoalterado={};
						$scope.cidades=[];
						$window.alert("Alterado com sucesso!");  
					},function(response){
						$window.alert("Status: " + response.status + " Erro:" + response.data.message);
						console.log(response.data);
						console.log(response.status);
				});
			} else $window.alert("Produto não alterado!");
		} else { 
			$http({
				method:'PUT',
				url:'http://localhost:8090/products',
				data: $scope.produtoalterado
				}).then(function(response){
					$scope.produtos=[];
					$scope.idPesquisa=null;
					$scope.codProdutoDeletar=null;
					$scope.produtoalterado={};
					$scope.busca2=[];
					$scope.cidades=[];
					$window.alert("Alterado com sucesso!");  
				},function(response){
					$window.alert("Status: " + response.status + " Erro:" + response.data.message);
					console.log(response.data);
					console.log(response.status);
			});
		}
	};

	$scope.alterarProduto2 = function(produto){
		$window.localStorage.setItem("codProduto", produto.codProduto);
		$window.localStorage.setItem("nomeProduto", produto.nomeProduto);
		$window.localStorage.setItem("valor", produto.valorProduto);
		$window.localStorage.setItem("estoque", produto.estoque);
		$window.localStorage.setItem("cidade", produto.cidade.codCidade);
		$window.localStorage.setItem("tipo", produto.tipo.codTipo);
		$window.localStorage.setItem("fabricante", produto.fabricante.codFabricante);
		$window.location.href = "http://localhost:8090/editar";
	};

	$scope.carregarAlterarProduto = function() {
		$scope.produtoalterado.codProduto = localStorage.getItem("codProduto");
		$scope.produtoalterado.nomeProduto = localStorage.getItem("nomeProduto");

		$scope.produtoalterado.valorProduto = localStorage.getItem("valor");
		valor1 = $scope.produtoalterado.valorProduto.split(" ");
		valor2 = valor1[1].split(".");
		$scope.real = valor2[0];
		$scope.centavo = valor2[1];

		$scope.produtoalterado.estoque = localStorage.getItem("estoque");
		$scope.produtoalterado.cidade.codCidade = localStorage.getItem("cidade");
		$scope.produtoalterado.tipo.codTipo = localStorage.getItem("tipo");
		$scope.produtoalterado.fabricante.codFabricante = localStorage.getItem("fabricante");

		valortotal = "R$ " + $scope.real + "." + $scope.centavo;
		$scope.produtoalterado.valorProduto = valortotal;
	}
	
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
			$scope.produtoalterado={};
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
			$scope.produtoalterado={};
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
				$scope.produtoalterado={};
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
	};

	$scope.apagarBusca = function(){
		$scope.busca2=[];
	}
});