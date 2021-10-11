package com.desafio.ws.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.desafio.ws.model.Tipo;

@Repository
public interface TipoRepository extends JpaRepository<Tipo, Integer> {
}