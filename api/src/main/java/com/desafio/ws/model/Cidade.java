package com.desafio.ws.model;

import javax.persistence.*;

@Entity
@Table(name = "Cidade")
public class Cidade {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Cod_Cidade")
    private Integer codCidade;

    @Column(name = "Nome_Cidade", nullable = false, length = 50)
    private String nomeCidade;

    @ManyToOne
    @JoinColumn(name = "Cod_Estado")
    private Estado estado;


    public Integer getCodCidade() {
        return this.codCidade;
    }

    public void setCodCidade(Integer codCidade) {
        this.codCidade = codCidade;
    }

    public String getNomeCidade() {
        return this.nomeCidade;
    }

    public void setNomeCidade(String nomeCidade) {
        this.nomeCidade = nomeCidade;
    }

    public Estado getEstado() {
        return this.estado;
    }

    public void setEstado(Estado estado) {
        this.estado = estado;
    }
}