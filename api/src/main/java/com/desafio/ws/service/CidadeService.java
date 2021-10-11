package com.desafio.ws.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.desafio.ws.model.*;
import com.desafio.ws.repository.*;

@Service
public class CidadeService {
    @Autowired
	CidadeRepository cidadeRepository;

    //Negocios
    public Collection<Cidade> buscarTodos(){
		return cidadeRepository.findAll();
	}
}