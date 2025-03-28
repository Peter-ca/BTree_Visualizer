package com.example.btreevisualizer.service;

import com.example.btreevisualizer.btree.BTree;
import com.example.btreevisualizer.btree.Node;
import org.springframework.stereotype.Service;

@Service
public class BTreeService {

    private BTree btree;

    public BTreeService() {
        this.btree = new BTree(3);
    }

    public void insert(int key) {
        btree.insert(key);
    }

    public void remove(int key) {
        btree.remove(key);
    }

    public Node getTree() {
        return btree.getRoot();
    }

    public Node resetTree() {
        this.btree = new BTree(3);
        return this.btree.getRoot();
    }

}
