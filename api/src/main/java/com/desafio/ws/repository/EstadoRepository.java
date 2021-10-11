package com.desafio.ws.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.desafio.ws.model.Estado;

@Repository
public interface EstadoRepository extends JpaRepository<Estado, Integer> {
}