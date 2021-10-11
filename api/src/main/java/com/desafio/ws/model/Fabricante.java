package com.desafio.ws.model;

import javax.persistence.*;

@Entity
@Table(name = "Fabricante")
public class Fabricante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Cod_Fabricante")
    private Integer codFabricante;

    @Column(name = "Nome_Fabricante", nullable = false, length = 50)
    private String nomeFabricante;


    public Integer getCodFabricante() {
        return this.codFabricante;
    }

    public void setCodFabricante(Integer codFabricante) {
        this.codFabricante = codFabricante;
    }

    public String getNomeFabricante() {
        return this.nomeFabricante;
    }

    public void setNomeFabricante(String nomeFabricante) {
        this.nomeFabricante = nomeFabricante;
    }    
}