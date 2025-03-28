const API = '/api/btree';
const svg = document.getElementById('treeCanvas');

function insertKey() {
    const input = document.getElementById('keyInput');
    const key = input.value.trim();
    if (!key) return;

    fetch(`${API}/insert?key=${key}`, { method: 'POST' })
        .then(() => {
            input.value = '';
            fetchTree();
        });
}

function resetTree() {
    svg.innerHTML = '';
    fetch(`${API}/reset`, { method: 'DELETE' });
}

function fetchTree() {
    fetch(`${API}/tree`)
        .then(res => res.json())
        .then(tree => {
            svg.innerHTML = '';
            if (tree) {
                drawTree(tree);
            } else {
                const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
                text.setAttribute("x", 20);
                text.setAttribute("y", 50);
                text.setAttribute("font-size", "16");
                text.textContent = "Tree is empty.";
                svg.appendChild(text);
            }
        });
}

function remove() {
    console.log('remove');
    const input = document.getElementById('keyInput');
    const key = input.value.trim();
    if (!key) return;

    fetch(`${API}/remove?key=${key}`, { method: 'DELETE' })
        .then(() => {
            svg.innerHTML = '';
            input.value = '';
            fetchTree();
        });
}

function drawTree(root) {
    const levelHeight = 100;
    const nodeWidth = 40;
    let nextX = 20;

    function layoutNode(node, depth) {
        const y = depth * levelHeight + 50;
        let childCenters = [];

        if (!node.leaf && node.children) {
            for (let child of node.children) {
                if (child) {
                    const childCenter = layoutNode(child, depth + 1);
                    childCenters.push(childCenter);
                }
            }
        }

        let x;
        const totalWidth = node.keys.length * nodeWidth;

        if (childCenters.length > 0) {
            const first = childCenters[0];
            const last = childCenters[childCenters.length - 1];
            x = (first + last) / 2 - totalWidth / 2;
        } else {
            x = nextX;
            nextX += totalWidth + 40;
        }

        drawNodeVisual(node, x, y, childCenters);
        return x + totalWidth / 2;
    }

    function drawNodeVisual(node, x, y, childCenters = []) {
        const totalWidth = node.keys.length * nodeWidth;
        const centerX = x + totalWidth / 2;

        if (childCenters.length > 0) {
            for (let cx of childCenters) {
                const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                line.setAttribute("x1", centerX);
                line.setAttribute("y1", y + 30);
                line.setAttribute("x2", cx);
                line.setAttribute("y2", y + levelHeight);
                line.setAttribute("stroke", "black");
                svg.appendChild(line);
            }
        }

        for (let i = 0; i < node.keys.length; i++) {
            const rectX = x + i * (nodeWidth-1);

            const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            rect.setAttribute("x", rectX);
            rect.setAttribute("y", y);
            rect.setAttribute("width", nodeWidth);
            rect.setAttribute("height", 30);
            rect.setAttribute("class", "node-rect");
            svg.appendChild(rect);

            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", rectX + nodeWidth / 2);
            text.setAttribute("y", y + 20);
            text.setAttribute("class", "key-text");
            text.textContent = node.keys[i];
            svg.appendChild(text);
        }
    }

    svg.innerHTML = '';
    nextX = 20;
    layoutNode(root, 0);
}

fetchTree();
