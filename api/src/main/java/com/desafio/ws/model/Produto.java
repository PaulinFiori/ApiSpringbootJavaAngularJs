package com.desafio.ws.model;

import javax.persistence.*;

@Entity
@Table(name = "Produto")
public class Produto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Cod_Produto")
	private Integer codProduto;
	
	@Column(name = "Nome_Produto", nullable = false, length = 50)
	private String nomeProduto;
	
	@Column(name = "Valor_Produto", nullable = false, length = 50)
	private String valorProduto;
	
	@Column(name = "Estoque", nullable = false, length = 50)
	private String estoque;
	
	@ManyToOne
    @JoinColumn(name = "Cod_Cidade")
	private Cidade cidade;

	@ManyToOne
    @JoinColumn(name = "Cod_Tipo")
	private Tipo tipo;

	@ManyToOne
    @JoinColumn(name = "Cod_Fabricante")
	private Fabricante fabricante;

	public Integer getCodProduto() {
		return codProduto;
	}

	public void setCodProduto(Integer codProduto) {
		this.codProduto = codProduto;
	}

	public String getNomeProduto() {
		return nomeProduto;
	}

	public void setNomeProduto(String nomeProduto) {
		this.nomeProduto = nomeProduto;
	}

	public String getValorProduto() {
		return valorProduto;
	}

	public void setValorProduto(String valorProduto) {
		this.valorProduto = valorProduto;
	}

	public String getEstoque() {
		return estoque;
	}

	public void setEstoque(String estoque) {
		this.estoque = estoque;
	}

	public Cidade getCidade() {
		return cidade;
	}

	public void setCidade(Cidade cidade) {
		this.cidade = cidade;
	}

	public Tipo getTipo(){
		return tipo;
	}

	public void setTipo(Tipo tipo) {
		this.tipo = tipo;
	}

	public Fabricante getFabricante() {
		return fabricante;
	}

	public void setFabricante(Fabricante fabricante) {
		this.fabricante = fabricante;
	}
}