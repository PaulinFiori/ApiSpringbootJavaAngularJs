package com.desafio.ws.controller;

import java.util.Collection;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.desafio.ws.model.Cidade;
import com.desafio.ws.service.CidadeService;

@RestController
public class CidadeController {

    @Autowired
	CidadeService cidadeService;

    //End Points
    @RequestMapping(method=RequestMethod.GET, value="/cidades", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Cidade>> buscarTodasCidades() {
		Collection<Cidade> cidadeBuscados = cidadeService.buscarTodos();
		return new ResponseEntity<>(cidadeBuscados, HttpStatus.OK);
	}
}