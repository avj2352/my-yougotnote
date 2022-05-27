import 'package:excercise/excercise.dart' as excercise;

void main(List<String> arguments) {
  print('Hello world: ${excercise.calculate()}!');
  try {
    int result = arguments.fold<int>(0, (prev, el) => prev + int.parse(el));
    print('Arguments sum: ${result}');
  } catch (e) {
    print('Error: At least one argument is not an integer');
  }
}
