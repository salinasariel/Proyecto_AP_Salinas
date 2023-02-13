/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolio.mgb.Interface;

import com.portfolio.mgb.Entity.Persona;
import java.util.List;


/**
 *
 * @author Tito
 */

public interface IPersonaService {
    //Trae lista de personas
    public List<Persona> getPersona();
    
    //Guardar un objeto tipo persona
    public void savePersona(Persona persona);
    
    //Eliminar un objeto buscado por id
    public void deletePersona(Long id);
    
    //Buscar una persona por id
    public Persona findPersona(Long id);
}
