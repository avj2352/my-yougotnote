import 'package:excercise/excercise.dart' as excercise;

/**
 * main function
*/
void main(List<String> arguments) {
	print('Hello world: ${excercise.calculate()}!');
	try {
		int result = excercise.argumentSum(arguments); 		
		print('Argument sum is ${result}');
	} catch (err) {
		print('Atleast one argument of type int is required');
	}
}
