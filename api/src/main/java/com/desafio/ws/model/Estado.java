package com.desafio.ws.model;

import javax.persistence.*;

@Entity
@Table(name = "Estado")
public class Estado {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Cod_Estado")
    private Integer codEstado;

    @Column(name = "Nome_Estado", nullable = false, length = 50)
    private String nomeEstado;

    @Column(name = "Abreviacao_Estado", nullable = false, length = 50)
    private String abreviacaoEstado;

    public Integer getCodEstado() {
        return this.codEstado;
    }

    public void setCodEstado(Integer codEstado) {
        this.codEstado = codEstado;
    }

    public String getNomeEstado() {
        return this.nomeEstado;
    }

    public void setNomeEstado(String nomeEstado) {
        this.nomeEstado = nomeEstado;
    }

    public String getAbreviacaoEstado() {
        return this.abreviacaoEstado;
    }

    public void setAbreviacaoEstado(String abreviacaoEstado) {
        this.abreviacaoEstado = abreviacaoEstado;
    }
}