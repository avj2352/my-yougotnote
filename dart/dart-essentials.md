# Important Links

- [Data Structures and Algorithms in Dart | raywenderlich.com](https://www.raywenderlich.com/books/data-structures-algorithms-in-dart)
- [Get Started with Dart | egghead.io](https://egghead.io/courses/get-started-with-dart)
- [Dart complete course - Youtube WCKD](https://www.youtube.com/watch?v=F3JuuYuOUK4)
- [Dart Programming - Data Types  | Tutorialspoint](https://www.tutorialspoint.com/dart_programming/dart_programming_data_types.html)

# Content Overview

- What is Dart ?

- Type safety

- Soundness

- Type inference

- Null safety

- Dart compilers

```dart
void main() {
  for (int i = 0; i < 5; i++) {
    print('hello ${i + 1}');
    print('Hello Dart - Pramod');
  }
}
```

---

# What is Dart ?

- Dart is a type safe language -
  
  - Types are mandatory in Dart
  
  - Dart can also infer types
  
  - The only operations that can be performed on data of the language are those allowed by the type of the data
  
  - Dart sound type system = Static type check (by compiler) + Runtime check
  
  - Dart allows you to write dynamic code
    
    - using the keyword - **dynamic**
  
  - whenever you use the "dynamic" type, the static analyser won't care about the variable anymore

## "dynamic" versus "var" keyword in Dart

- Dart allows you to write dynamic code

- using the keyword - **dynamic**

- whenever you use the "**dynamic**" type, the static analyser won't care about the variable anymore

- Dart can also infer types - by using the "**var**" keyword

- for the rest of it's life, it is always of the type since it's inference

- Dart will check for "**var**" during compile time

- Once again, if you want the type to be checked on runtime - "**dynamic**"

```dart
// *A value of type 'double' can't be assigned to a variable of type 'String'.
void main() {
  dynamic name = 'pramod';
  name = 1;
  var anotherName = 'shwetha';
  print ('Name is: ${name}');
  print ('Type of name is ${name.runtimeType}'); // int
  print ('Another name: ${anotherName}');
  print ('Type of anotherName is: ${anotherName.runtimeType}'); // String
  anotherName = 2.0; //error* - anotherName is inferred as String already
  print ('Type of anotherName is: ${anotherName.runtimeType}');
}
```

## what happens is Dart is not aware of the value of a variable at compile time?

If we declare a variable using the **var **keyword and don't assign a value

```dart
var a; // dart doesn't have a clue on what type of variable this is
```

The Dart analyzer will play it safe and change it's datatype to **dynamic** 

```dart
dynamic a; // dart analyzer will delegate it to dart runtime
```

and if the value of a is still unknown at runtime then the Dart runtime it's of type Null

```dart
Null a; // this is not good practice
```

## Null Safety

- Dart recently introduced Sound Null safety

- what it generally means - *Values can't be null, unless you say them to be*

- Null type objects are checked at both Static checks and Runtime checks

- What it basically means is throughout the lifecycle of Dart, a variable can EITHER be Null or Non-null, but never BOTH

---

# Dart Compilation

- Dart compile compiles Dart source code to - Intermediate languages / machine code

- for CPU architectures - ARM32, ARM64, X86_64
  
  - JIT - Just Intime Compiler
  
  - AOT - Ahead of Time Compiler

- For web applications
  
  - dartdevc - Dart development compiler
  
  - dart2js - Dart to Javascript

## JIT - Just Intime Compiler

Compiles the code it needs, only compiles the modified the code needed

- Hot deployment

- For development purposes

- Not the best, nor the most optimal

- JIT does not transform the Dart code into Machine code

- It compiles into an Intermediary Language for faster development cycles

- run by Dart VM only

When used in Production, the customer (user) doesn't care about the JIT features, - like fast testing, debugging, or hot-reload. all they care about us for the app to start and run as fast as it can on their devices

## AOT - Ahead of Time Compiler

**NOTE:** AOT was initially designed for systems which do not support JIT compilation

Compiles the entire codebase into machine code, supported by the native device it's deployed on.

- Ahead of time

- Best startup time

- Designed for production phase

- AOT compiles the code into platform specific machine code

- AOT makes sure the build is the best most optimal version of it

```bash
dart compile exe ./bin/excercise.dart
```

## www - For Web Development

- For Developing on web platforms - dartdevc (Dart dev compiler)

- For Production phase - Dart to Javascript Compiler

## Setup project using CLI

To start a simple command line project using Dart SDK, run the following in your terminal

```bash
dart create -t console-full name-of-the-project
```

This will create the following folder structure

- /name-of-the-project
  
  - .dart_tool
    
    - package_config.json
  
  - bin
    
    - name-of-the-project.dart
  
  - lib
    
    - name-of-the-project.dart
  
  - test
    
    - name-of-the-project_test.dart
  
  - .gitignore
  
  - .packages
  
  - analysis_options.yaml
  
  - CHANGELOG.md
  
  - pubspec.yaml
  
  - README.md

---

# First Simple Dart Program

The following prints - Hello World, includes a module from lib folder & prints the numbers separated by space

```dart
import 'package:excercise/excercise.dart' as excercise;

void main(List<String> arguments) {
    print('Hello world: ${excercise.calculate()}!');
    try {
        int result = arguments.fold<int>(0, (prev, el)=>prev + int.parse(el));
        print('Argument sum is ${result}');
    } catch (err) {
        print('Atleast one argument of type int is required');
    }
}
```

## Dart Dev Tools plugin

In order to activate dart dev tools, run the following dart command

```bash
dart pub global activate devtools
```

### For Mac

For Mac users, you need to add the following line into your **.bashrc** file

```bash
export PATH="$PATH":"$HOME/.pub-cache/bin"
```

In order to add it use vim, nvim

```bash
nvim ~/.bashrc
```

### For Windows

For Windows users, you need to add the following to your **PATH** env variable

```bash
~\AppData\Local\Pub\Cache\bin
```

### Debugging using Devtools

In order to execute the program using devtools, run the following dart command

```bash
dart run --observe --pause-isolates-on-start
# ...
# ...
# http://127.0.0.1:8181/ewmiOqkXh2M=/
```

You'll receive an URL for your program, copy the URL

Inorder to open devtools on your browser run the following dart command.

```bash
dart devtools
```

Paste the URL in the "Connect to a Running App" and click the "Connect" button

---

# Dart Package

- There is no such thing as a Dart project, but everything is a dart package

- A Dart package is the main component of the Dart ecosystem

- **pub.dev** - is immense collection of Dart packages

- For example - Hive is a dart package for storing data on a local database

- Application package - A package that is not posted to pub.dev

- Library package - A package that is reusable and is listed in pub.dev

## Testing

```dart
import 'package:excercise/excercise.dart';
import 'package:test/test.dart';

void main() {
  test('calculate', () {
    expect(calculate(), 42);
  });
}
```

---

# Dart VM

![](/Users/pramodjingade/Desktop/Screenshot%202022-05-28%20at%2010.44.34%20AM.jpg)

The Dart compiler compiles programmable code into machine code which the Dart VM needs

- The Dart VM only understands **Kernel Binary (.dill), Kernet AST (Abstract Syntax Tree)**

- Dart package - **CFE**  **Common FrontEnd** converts dart code to Kernel Binary

- **.dill** contains serialised Abstract Syntax Tree .a.k.a Kernel AST. It's an intermediary dart program

![](/Users/pramodjingade/Desktop/Screenshot%202022-05-28%20at%2011.04.19%20AM.jpg)

#### KERNEL SNAPSHOT

- No parsed classes, functions

- No architecture specific code

- Portable around all architectures

- Strong dependency with Dart VM

- Dart VM required to compile it from scratch

#### JIT SNAPSHOT

- Contains all the parsed classes and compiled code that is generated during a Training Run
  
  ```bash
  dart run ./bin/excercise.dart # uses jit compilation
  
  # using jit-snapshot
  time {dart compile jit-snapshot ./bin/excercise.dart}
  ```

#### AOT SNAPSHOT

- There is no "Training run" involved in an AOT snapshot
  
  ```bash
  dart compile exe ./bin/excercise.dart # uses aot compilation
  
  # using aot-snapshot
  dart compile aot-snapshot ./bin/excercise.dart
  ```

---

# Variables & Constants in Dart

- **var** - using this keyword, Dart "infers" the type during initialization. then the datatype cannot be changed

- **dynamic** -  (equivalent to **any** in Typescript) you're informing Dart to forego during compile time and assume datatype during runtime

- **int** - explicitly typing the datatype
  
  - **Number** - **Integer** and **Double** (also **int** and **double**)
  
  - **String**
  
  - **Function**
  
  - **Boolean**
  
  - **Array**
  
  - **Map**
  
  - **List**
  
  - **Symbol**

- **final** - declaring a variable as a constant, Typically used to declare **fields** in a class

- **const**  - also declaring a variable as constant, Typically used to declare variables during functional programming.
  
  - compile term constant, which means that any value we assign will be calculated during code compilation
  
  - const variables must be initialized or an exception is thrown

---

# Built-in Datatypes

In Dart, every type is an "**Object**", including built-in datatypes

- **Number** - can be defined either as an integer or a double.

- **String** - 
  
  - can be defined with single or double quotes.
  
  - have support for template literals by default, which means we can contain expressions inside strings without using concatenation. 
  
  - Another feature of template literals are multi-line strings, which you define with triple opening and closing quotes.

- **Boolean / bool** - are values that are set as either

- **Functions** -
  
  - are self-contained program segments that carry out a specific task.
  
  - First class functions - can be assigned to variables

- **List** -
  
  - is a collection of elements with a length. These are similar syntax to other languages
  
  - List types also come with the utility of methods to iterate over its elements.

- **Map** -
  
  - represent objects that contain key and value pairs of data
  
  - Keys can be accessed using array bracket notation and iterated over using methods like - forEach

- **Runes** -
  
  - allow you contain characters that are outside of the UTF-16 set of characters. For example, emojis. 

- **Symbols** -
  
  - are a human-readable string that represents an identifier or a source. 
  
  - These identifiers could be library names, instance variables, and methods, for example
  
  - We can create symbols using the symbol constructor, or the symbol literal syntax.



```dart
/**
* Built-in Datatypes in Dart with examples
*/
void main() {
  
  // Number
  int num1 = 5; // Integer
  double num2 = 10.0; // Double
  
  // String
  String str3 = 'This is a string and value ${num1}';
  String str4 = 'This' 'is' 'also'
    'a' 'valid' 'string';
  
  // Boolean
  bool isBrowser = true;
  
  // Function
  void sum(a,b) {
    return a + b;
  };
  
  var diff = (a,b) => a-b;
  
  // List
  var fruits = ['banana', 'pineapple', 'lemon'];
  print(fruits.length);
  print('${fruits.fold('', (prev, el) => el)}');
  
  // Map
  var user = {
    "name": "Sam",
    "age": 25,
    "isSubscriber": true,
  };

  print(user["name"]);
  user.forEach((key, value) => print("Key: $key, Value: $value"));
  
  // Runes
  /*
   * allow you contain characters that are 
   * outside of the UTF-16 set of characters
  */
  Runes input = new Runes('I \u2764 Dart');
  print(new String.fromCharCodes(input)); // I ♥ Dart
  
  // Symbol
  /*
   * Symbols are a human-readable string that represents 
   * an identifier or a source. These identifiers could be library names, 
   * instance variables, and methods, for example.  
   */
  Symbol simb1 = Symbol('input');
  var simb2 = #input;

  print(simb1); //Symbol("input")
  print(simb2); //Symbol("input)
}


```

---

# Functions - optional {positioning, named}

Apart from parameters that are required, functions or methods in Dart can also specify optional parameters. 

- The required parameters are listed first, followed by any of the optional parameters.

- These come in two flavors, **positioning** and **named**. 

- **Optional {positional}** - parameters are defined inside opening and closing square brackets, separated by commas.

```dart
void main() {
  yell('Hello, World');
  yell('Hello, World', true);
}

/**
* Example of a optional {positioning} param
*/ 
yell(String str, [bool exclaim]) {
  var result = str.toUpperCase();
  if (exclaim) result += '!!!';
  print(result);
}
```

- **Optional {named}** - parameters are defined inside opening and closing curly brackets.

```dart
void main {
    // calling optional positional parameters
  yell('Hello, World', true);
  yell('Hello, World', true, '🙀');

  // calling optional named parameters
  whisper('Hello world', mysteriously: true);
  whisper('Hello world', mysteriously: false, emoji: '🤫');
}

// Optional {positional} params
yell(String str, [bool exclaim, String emoji = '']) {
  var result = str.toUpperCase();
  if (exclaim) result += '!!!';
  if (emoji.isNotEmpty) result += emoji;
  print(result);
}

// Optional {named} params
whisper(String str, {bool mysteriously, String emoji = ''}) {
  var result = str.toLowerCase();
  if (mysteriously) result += '...';
  if (emoji.isNotEmpty) result += emoji;
  print(result);
}
```
