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
