/**
 * Day 25 - Algorithm Exercise
 * 
 * Problem: Implement Trie (Prefix Tree)
 */

class TrieNode {
    children: Map<string, TrieNode> = new Map();
    isEnd: boolean = false;
}

export class Trie {
    private root: TrieNode = new TrieNode();

    insert(word: string): void {
        // TODO
    }

    search(word: string): boolean {
        // TODO
        return false;
    }

    startsWith(prefix: string): boolean {
        // TODO
        return false;
    }
}

if (require.main === module) {
    const trie = new Trie();
    trie.insert("apple");
    console.log(trie.search("apple")); // true
    console.log(trie.search("app"));   // false
    console.log(trie.startsWith("app")); // true
}


