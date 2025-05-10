package com.example.demo.controller;

import com.example.demo.model.Celular;
import com.example.demo.repository.CelularRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/celulares")
@CrossOrigin(origins = "http://localhost:4200") // libera acesso ao Angular
public class CelularController {

    @Autowired
    private CelularRepository repository;

    @GetMapping
    public List<Celular> listar() {
        return repository.findAll();
    }

    @PostMapping
    public Celular adicionar(@RequestBody Celular celular) {
        return repository.save(celular);
    }

    @PutMapping("/{id}")
    public Celular atualizar(@PathVariable Long id, @RequestBody Celular celular) {
        celular.setId(id);
        return repository.save(celular);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
