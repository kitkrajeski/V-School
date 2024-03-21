module.exports.testCases = {
    // Each test case property name corresponds to a file in ./challenges folder
    build_grid: [
        [[1, 'x'], [['x']]],
        [[2, 'x'], [['x', 'x'], ['x', 'x']]],
        [[3, 'x'], [['x', 'x', 'x'], ['x', 'x', 'x'], ['x', 'x', 'x']]],
        [[4, 'x'], [['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x']]],
    ],
    char_count: [
        [['aaa', 'a'], 3],
        [['abc', 'c'], 1],
        [['abb', 'b'], 2],
        [['efg', 'z'], 0],
    ],
    check_for_numbers: [
        [[[]], false],
        [[[1, 2, 3]], true],
        [[['a', 'b', 'c']], false],
        [[[{}, false, 'x', [], '1']], false],
        [[[{}, false, 'x', [], 1]], true],
    ],
    remove_chars: [
        [['aaa', 'a'], ''],
        [['abc', 'c'], 'ab'],
        [['abb', 'b'], 'a'],
        [['efg', 'z'], 'efg'],
    ],
    shared_chars: [
        [[[]], ''],
        [[['abc']], 'abc'],
        [[['aaa', 'aab', 'aac']], 'a'],
        [[['abc', 'xyz']], ''],
        [[['ab', 'bc', 'cd']], ''],
        [[['acb', 'cba', 'bca']], 'abc'],
        [[['dbecfa', 'xyzcba', 'gahbic']], 'abc'],
    ],
    smallest_integer: [
        [[[0]], 0],
        [[[5, 4, 3, 2, 1, 0]], 0],
        [[[10, 9, 8, 7, -5, -4, -3, -2, 1]], -5],
        [[Array(100).fill(null).map((_, i) => 100 - i)], 1],
        [[Array(100).fill(null).map((_, i) => i - 100)], -100]
    ],
    valid_brackets: [
        [[''], true],
        [['[]'], true],
        [['[[[]'], false],
        [[']]]'], false],
        [['[[][][[]]]'], true],
    ],
    validate_dependency: [
        [
            [
                [
                    ['A', 'B'],
                    ['A', 'C'],
                    ['C', 'D'],
                    ['B', 'C'],
                    ['D', 'E'],
                ]
            ],
            true
        ],
        [
            [
                [
                    ['A', 'B'],
                    ['B', 'C'],
                    ['D', 'E'],
                    ['E', 'F'],
                    ['G', 'H'],
                    ['E', 'R'],
                ]
            ],
            true
        ],
        [
            [
                [
                    ['A', 'B'],
                    ['B', 'C'],
                    ['C', 'E'],
                    ['G', 'H'],
                    ['E', 'R'],
                    ['E', 'A'], // A is already listed above
                ]
            ],
            false
        ],
    ],
}