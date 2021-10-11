package com.desafio.ws.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.desafio.ws.model.*;
import com.desafio.ws.repository.*;

@Service
public class ProdutoService {
	@Autowired
	ProdutoRepository produtoRepository;
	
	//Negocios
	public Produto cadastrar(Produto produto) {
		return produtoRepository.save(produto);
	}
	
	public Collection<Produto> buscarTodos(){
		return produtoRepository.findAll();
	}
	
	public void excluir(Produto produto) {
		produtoRepository.delete(produto);
	}
	
	public Produto buscarPorId(Integer id) {
		return produtoRepository.getOne(id);
	}
	
	public Produto buscarProdutoId(Integer id) {
	    return produtoRepository.findById(id).get();
	}
	
	public Produto alterar(Produto produto) {
		return produtoRepository.save(produto);
	}
	
	public Collection<Produto> buscarTodasCidades(){
		return produtoRepository.findAll();
	}
}