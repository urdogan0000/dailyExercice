# Daily Algorithm Practice (30 Days)

A structured 30-day coding practice repository focused entirely on algorithm problems in TypeScript. Each day contains one interview-style problem.

## 📁 Structure

```
dailyExcersize/
├── day01/                   # Day 1 exercises
│   ├── algorithm/           # Algorithm problems
│   │   └── problem.ts       # Two Sum problem
├── day02/                   # Day 2 exercises
│   └── algorithm/           # Valid Parentheses problem
├── day03/                   # Day 3 exercises
│   └── algorithm/           # Merge Two Sorted Lists
├── day04 ... day30          # Additional days (unique algorithm templates)
├── package.json             # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── jest.config.js          # Testing configuration
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Install dependencies:
```bash
npm install
```

### Running the Exercises
```bash
# Run a specific day's algorithm problem
npx ts-node day01/algorithm/problem.ts
npx ts-node day02/algorithm/problem.ts
npx ts-node day10/algorithm/problem.ts
npx ts-node day20/algorithm/problem.ts
npx ts-node day30/algorithm/problem.ts
```

### Daily Non-Coding Interview Questions
Each day also includes an `interview.md` with a mid-level technical non-coding interview question (e.g., debugging prod issues, API versioning, incident response, trade-off decisions). Review and answer it along with coding the algorithm.

#### Run All Tests
```bash
npm test
```

## 📚 Daily Exercises Overview

### Day 1
- **Algorithm**: Two Sum (Hash Map approach)

### Day 2
- **Algorithm**: Valid Parentheses (Stack approach)

### Day 3
- **Algorithm**: Merge Two Sorted Lists (Linked List)

### Days 4-10
- Maximum Subarray, Climbing Stairs, Best Time to Buy/Sell, Tree Traversal, Longest Common Prefix, Remove Duplicates, Search Insert Position

### Days 11-20
- Valid Anagram, Group Anagrams, Two Sum II, 3Sum, Container With Most Water, Valid Palindrome, Rotate Array, Product of Array Except Self, Valid Sudoku, Merge Intervals

### Days 21-30
- Kth Largest Element, Top K Frequent Elements, Course Schedule, Number of Islands, Implement Trie, LCA in BST, Serialize/Deserialize Binary Tree, Word Ladder, Coin Change, Longest Increasing Subsequence

## 🛠️ Available Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the compiled JavaScript
- `npm run dev` - Run with ts-node for development
- `npm test` - Run all tests
- `npm run test:watch` - Run tests in watch mode

## 📝 How to Use This Repository

1. **Start with Day 1**: Begin with the first day's exercises
2. **Read the Problem**: Each algorithm problem includes detailed description and examples
3. **Implement Your Solution**: Write your code in the provided function
4. **Test Your Solution**: Run the test cases to verify correctness
5. **Move to Backend**: Complete the corresponding backend exercise
6. **Repeat Daily**: Move to the next day's exercises

## 🎯 Learning Objectives

### Algorithm Skills
- Data structures (arrays, linked lists, stacks, queues, trees, graphs)
- Algorithm patterns (two pointers, sliding window, dynamic programming)
- Time and space complexity analysis
- Problem-solving strategies


## 🔧 Configuration

### TypeScript
The project uses strict TypeScript configuration with:
- ES2020 target
- Strict type checking
- Path mapping for clean imports
- Source maps for debugging

### Testing
Jest configuration includes:
- TypeScript support
- Coverage reporting
- Path mapping for imports
- Node.js environment

## 📖 Tips for Success

1. **Consistency**: Try to complete one day's exercises daily
2. **Understanding**: Don't just solve, understand the approach
3. **Optimization**: After solving, think about time/space complexity
4. **Practice**: Implement multiple solutions for the same problem
5. **Documentation**: Add comments explaining your approach

## 🤝 Contributing

Feel free to:
- Add more test cases
- Improve problem descriptions
- Suggest new algorithm problems

## 📄 License

MIT License - feel free to use this for your learning journey!

---

Happy coding! 🚀
