import 'package:excercise/excercise.dart';
import 'package:test/test.dart';

void main() {

  test('calculate - multiplies two values', () {
	expect(calculate(), 42);
  });
	
  test('argumentSum - adds up list of arguments of type string', () {
	expect (argumentSum(['1', '2', '3', '4']), 10);
  });

}
