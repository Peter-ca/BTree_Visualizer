package com.example.btreevisualizer.btree;

public class BTree {
    private Node root;

    private int t;

    public BTree(int t) {
        this.t = t;
        root = null;
    }

    public void insert(int key) {
        if (root == null) {
            root = new Node(t, true);
            root.keys[0] = key;
            root.n = 1;
        } else {
            if (root.n == 2 * t - 1) {
                Node newRoot = new Node(t, false);
                newRoot.children[0] = root;
                newRoot.splitChild(0, root);

                int i = 0;

                if (newRoot.keys[0] < key)
                    i++;

                newRoot.children[i].insertNonFull(key);
                root = newRoot;
            } else {
                root.insertNonFull(key);
            }
        }
    }

    public void remove(int key) {
        if (root == null) {
            return;
        }

        root.remove(key);

        if (root.n == 0) {
            if (!root.leaf) {
                root = root.children[0];
            } else {
                root = null;
            }
        }
    }

    public Node getRoot() {
        return root;
    }
}