package com.desafio.ws.model;

import javax.persistence.*;

@Entity
@Table(name = "Tipo")
public class Tipo {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Cod_Tipo")
    private Integer codTipo;

    @Column(name = "Nome_Tipo", nullable = false, length = 50)
    private String nomeTipo;


    public Integer getCodTipo() {
        return this.codTipo;
    }

    public void setCodTipo(Integer codTipo) {
        this.codTipo = codTipo;
    }

    public String getNomeTipo() {
        return this.nomeTipo;
    }

    public void setNomeTipo(String nomeTipo) {
        this.nomeTipo = nomeTipo;
    }
}