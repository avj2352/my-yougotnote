int calculate() {
  return 6 * 7;
}

int argumentSum(List<String> arguments) {
	try {
		int result = arguments.fold<int>(0, (prev, el)=>prev + int.parse(el));
		return result;
	} catch (err) {
		print('Atleast one argument of type int is required!');
		return 0;
	}
}
