export const programs = {
    iscomment: {
        link: 'iscomment',
        aim: 'To check if a given input is a comment or not',
        programName: 'Is Comment?',
        title: 'Is Comment?',
        description: 'To check if a given input is a comment or not',
        theoryTitle: 'What is a Comment?',
        theory: 'A comment is text in a programs code, script, or another file that is not meant to be seen by the user running the program. However, is seen when viewing the source code. Comments help make code easier to understand by explaining what is happening and help prevent portions of a program from executing',
        procedure: "Read the input string Check whether the string is starting with '/' and check next character is' /' or'*'. If condition satisfies print comment .Else not a comment."

    },
    lexicalanalyzer: {
        link: 'lexicalanalyzer',
        aim: 'Design a lexical analyzer for given language and the lexical analyzer should ignore redundant spaces, tabs and new lines. It should also ignore comments. Although the syntax specification states that identifiers can be arbitrarily long, you may restrict the length to some reasonable value. Simulate the same in C language',
        programName: 'Lexical Anlyser',
        title: 'Lexical Anlysis',
        description: 'Design a lexical analyzer for given language and the lexical analyzer should ignore redundant spaces, tabs and new lines.',
        theory: 'A comment is text in a programs code, script, or another file that is not meant to be seen by the user running the program. However, is seen when viewing the source code. Comments help make code easier to understand by explaining what is happening and help prevent portions of a program from executing',
        procedure: "1. Read the input Expression         2. Check whether input is alphabet or digits then store it as identifier        3. If the input is is operator store it as symbol        4. Check the input for keywords"


    },
    checkidentifier: {
        link: 'checkidentifier',
        aim: 'To design an online simulator that checks whether a user input string is a valid identifier or not.',
        programName: 'Check Identifier',
        title: 'Check Identifier',
        description: 'Given a string as user input, representing a string, the task is to check if the string is a valid identifier or not. In order to qualify as a valid identifier',
        theory: "Given a string as user input, representing a string, the task is to check if the string is a valid identifier or not. In order to qualify as a valid identifier",
        procedure: "the string must satisfy all the following conditions: It must start with either ('_', '$') or any of the characters from the ranges ['a', 'z'] and ['A', 'Z']  There must not be any white space in the string All the subsequent characters after the first character must not consist of any special characters except '$'. The string must not exceed 31 characters",
    },
    operator: {
        link: 'operator',
        aim: 'The aim of this program is to design a lexical analyzer that checks if a given operator is valid or not.',
        programName: 'Valid operator',
        title: 'Valid operator',
        description: 'Read the given input.If the given input matches with any operator symbol. Then display in terms of words of the particular symbol.Else print not a operator.',
        theory: "Operators as symbols that help us to perform specific mathematical and logical computations on operands. Any and all symbols cannot be considered as operators. There is a set of symbols that can be considered as operators by the compiler. This program helps to recognize those symbols.",
        procedure: "Read the given input.If the given input matches with any operator symbol. Then display in terms of words of the particular symbol.Else print not a operator.",
        reference: "•	GeeksForGeeks"
    },
    parsetree: {
        link: 'parsetree',
        aim: 'Write a C program to demonstrate the process of Parse Tree generation',
        programName: 'Parse Tree Generator',
        title: 'Parse Tree Generator',
        description: ' A parse tree is an ordered tree in which nodes are labeled with the left side of the productions and in which the children of a node define its equivalent right parse tree also known as syntax tree, generation tree, or production tree.',
        theory: "The parser is the phase of the compiler which takes a token string as input and with the help of existing grammar, converts it into the corresponding Intermediate Representation. The parser is also known as Syntax Analyzer. During syntax analysis, the expression is converted into a parse tree. Parse tree is a hierarchical structure which represents the derivation of the grammar to yield input strings. Parse trees are an in-memory representation of the input with a structure that conforms to the grammar. The advantages of using parse trees is that the parser can make multiple passes over the data without having to re-parse the input.",
        procedure: "A parser generator takes a grammar as input and automatically generates source code that can parse streams of characters using the grammar.\n The generated code is a parser, which takes a sequence of characters and tries to match the sequence against the grammar. \n The parser typically produces a parse tree, which shows how grammar productions are expanded into a sentence that matches the character sequence.\n  The root of the parse tree is the starting nonterminal of the grammar.\n  Each node of the parse tree expands into one production of the grammar.",
    },


}

export default programs