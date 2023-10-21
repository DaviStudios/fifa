variables = {}

def execute_code(code):
    code = code.strip()

    if code.startswith("var "):
        var_expr = code[len("var "):]
        var_name, var_value = var_expr.split(" = ")
        variables[var_name.strip()] = int(var_value.strip())
        print(f"var {var_name.strip()} made")
    elif code.startswith("console("):
        message = code[len("console("):-1].strip()
        if message.startswith('"') and message.endswith('"'):
            print(message[1:-1])
        elif message in variables:
            print(variables[message])
        else:
            print("Undefined: ", message)
    elif code.startswith("read("):
        file_expr = code[len("read("):-1].strip()
        try:
            with open(file_expr, "r") as file:
                file_content = file.read()
                print(file_expr)
                print(file_content)
        except FileNotFoundError:
            print(f"File '{file_expr}' not found.")
    elif code.startswith("if "):
        condition, then_part = code[len("if "):].split(" then ", 1)
        if eval(condition, variables):
            execute_code(then_part)
            print("done")
    elif code.startswith("print("):
        message = code[len("print("):-1]
        if message in variables:
            print(variables[message])
        else:
            print(message)
    elif code.startswith("file_write("):
        file_expr = code[len("file_write("):-1]
        file_name, file_content = file_expr.split(" = ")
        with open(file_name.strip(), "w") as file:
            file.write(file_content.strip())
    elif code.startswith("file_read("):
        file_name = code[len("file_read("):-1]
        with open(file_name.strip(), "r") as file:
            content = file.read()
            print(content)
    else:
        try:
            result = eval(code, variables)
            print(result)
        except Exception as e:
            print("Error:", e)

while True:
    try:
        user_input = input("Enter code: ").encode('utf-8', 'ignore').decode('utf-8')
    except UnicodeDecodeError:
        user_input = input("Enter code: ")

    if user_input == "exit":
        break
