package com.desafio.ws.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.desafio.ws.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Integer> {
}