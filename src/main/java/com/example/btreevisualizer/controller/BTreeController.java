package com.example.btreevisualizer.controller;

import com.example.btreevisualizer.btree.Node;
import com.example.btreevisualizer.service.BTreeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/btree")
public class BTreeController {

    private final BTreeService btreeService;

    @Autowired
    public BTreeController(BTreeService btreeService) {
        this.btreeService = btreeService;
    }

    @PostMapping("/insert")
    public String insert(@RequestParam int key) {
        btreeService.insert(key);
        return "Inserted key: " + key;
    }

    @GetMapping("/tree")
    public Node getTree() {
        return btreeService.getTree();
    }

    @DeleteMapping("/reset")
    public Node resetTree() {
        return btreeService.resetTree();
    }

    @DeleteMapping("/remove")
    public String remove(@RequestParam int key) {
        btreeService.remove(key);
        return "Removed key: " + key;
    }
}
