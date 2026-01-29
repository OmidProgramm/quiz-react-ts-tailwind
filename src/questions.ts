
interface Questions{
    question:string;
    options:string[];
    answer:string;
}
export const questions:Questions[]=[
     {
        question: "What is TypeScript?",
        options: ["A server-side programming language","A client-side HTML markup language","A Superset of JavaScript", "A database scripting language"],
        answer: "A Superset of JavaScript"
    },
     {
        question: "How can you use TypeScript into HTML file?",
        options: ["By adding .ts file into HTML file using <script> tag.", "By adding TypeScript code directly into HTML file.", "Compile TypeScript into JavaScript and use .js file", "Execute .ts file at runtime in HTML file"],
        answer: "Compile TypeScript into JavaScript and use .js file"
    },
     {
        question: "Which of the following are the correct ways to declare an array in TypeScript?",
        options: ["let arr = Array<string>", "let arr : Array<string>", "let arr = string[]", "let arr[] : string"],
        answer: "let arr : Array<string>"
    },
    {
        question: "What can be used to add functionalities in the older browser?",
        options: ["Promise", "async/await", "Decorators", "polyfills"],
        answer: "polyfills"
    },
    {
       question: "Which of the following TypeScript features allows you to explicitly specify the type of a variable?",
       options: ["Type inference", "Type assertion", "Type casting", "Type coercion"],
       answer: "Type assertion"
   },
    {
       question: "In TypeScript, what is the return type of a function that does not return any value explicitly?",
       options: ["void", "null", "undefined", "never"],
       answer: "void"
   },
    {
       question: "Which of the following TypeScript features allows you to combine multiple types?",
       options: ["Union types", "Intersection types", "Generic types", "Tuple types"],
       answer: "Union types"
   },
    {
       question: "What is the purpose of the 'strict' compiler flag in TypeScript?",
       options: ["To enable strict mode for JavaScript code as well", "To enforce stricter type-checking rules", "To make all variables read-only by default", "To restrict the usage of certain JavaScript features"],
       answer: "To enforce stricter type-checking rules"
   },
    {
       question: "How do you declare an optional property in an interface in TypeScript?",
       options: ["property?:type;","property:type;","property:type|undefined;","property:optional type;"],
       answer: "property?:type;"
   },
    {
        question: "Which keyword is used to declare a constant in JavaScript?",
        options: ["let", "const", "var", "function"],
        answer: "const"
    }
]