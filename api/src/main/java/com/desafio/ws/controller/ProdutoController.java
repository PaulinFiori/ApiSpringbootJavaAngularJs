package com.desafio.ws.controller;

import java.util.Collection;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.desafio.ws.model.Produto;
import com.desafio.ws.service.ProdutoService;

@RestController
public class ProdutoController {
	
	@Autowired
	ProdutoService produtoService;
	
	//End Points
	@RequestMapping(method=RequestMethod.POST, value="/products", consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Produto> cadastrarCliente(@RequestBody Produto produto) {
		Produto produtoCadastrado = produtoService.cadastrar(produto);
		return new ResponseEntity<Produto>(produtoCadastrado, HttpStatus.CREATED);
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/products", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Produto>> buscarTodosProdutos() {
		Collection<Produto> produtosBuscados = produtoService.buscarTodos();
		return new ResponseEntity<>(produtosBuscados, HttpStatus.OK);
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/products/{id}", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Produto> buscarCliente(@PathVariable Integer id) {
		Produto produtoEncontrado = produtoService.buscarProdutoId(id);
		return new ResponseEntity<Produto>(produtoEncontrado, HttpStatus.OK);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/products/{id}")
	public ResponseEntity<Produto> excluirCliente(@PathVariable Integer id) {
		Produto produtoEncontrado = produtoService.buscarPorId(id);
		
		if(produtoEncontrado==null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
		produtoService.excluir(produtoEncontrado);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/products", consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Produto> alterarCliente(@RequestBody Produto produto) {
		Produto produtoAlterado = produtoService.alterar(produto);
		return new ResponseEntity<Produto>(produtoAlterado, HttpStatus.OK);
	}
}