package com.desafio.ws.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class homeController {
	@RequestMapping("/home")
	public String paginaHome() {
		return "index";
	}

	@RequestMapping("/cadastrar")
	public String paginaCadastrar() {
		return "Cadastrar";
	}

	@RequestMapping("/deletar")
	public String paginaDeletar() {
		return "Deletar";
	}

	@RequestMapping("/editar")
	public String paginaEditar() {
		return "Editar";
	}

	@RequestMapping("/listar")
	public String paginaListar() {
		return "Listar";
	}

	@RequestMapping("/buscar")
	public String paginaBuscar() {
		return "Buscar";
	}

	@RequestMapping("/style")
	public String cssStyle() {
		return "style.css";
	}
}