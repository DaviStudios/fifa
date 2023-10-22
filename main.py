variables = {}
console_output = []

print("DAVK 1.0.0 RUNNING!")
print("HOW-TO: http:/davk.kopal-host.xyz")

def execute_code(code):
    code = code.strip()

def clear():
    global console_output
    console_output.clear()

    if code == "exit":
        return False
    elif code.startswith("run(") and code.endswith(")"):
        file_expr = code[len("run("):-1].strip()
        if file_expr.endswith(".davk"):
            try:
                with open(file_expr, "r") as file:
                    for line in file:
                        result = execute_code(line.strip())
                        if result is not None:
                            print(result)
            except FileNotFoundError:
                print(f"File '{file_expr}' not found")
        else:
            print(f"Invalid file extension. Only '.davk' files are supported.")
    elif code.startswith("var int "):
        var_expr = code[len("var int "):]
        var_name, var_value = var_expr.split(" = ", 1)
        variables[var_name.strip()] = int(var_value.strip())
        return f"Integer variable {var_name.strip()} set to {var_value.strip()}"
    elif code.startswith("clear()"):
        clear()
    elif code.startswith("var str "):
        var_expr = code[len("var str "):]
        var_name, var_value = var_expr.split(' = "', 1)
        var_value = var_value.rstrip('"')
        variables[var_name.strip()] = var_value
        return f"String variable {var_name.strip()} set to '{var_value}'"
    elif code.startswith("console("):
        message = code[len("console("):-1].strip()
        if message.startswith('"') and message.endswith('"'):
            return message[1:-1]
        elif message in variables:
            return variables[message]
        else:
            try:
                result = eval(message, variables)
                return str(result)
            except Exception as e:
                return "Error: invalid"
    elif code.startswith("read(") and code.endswith(")"):
        file_expr = code[len("read("):-1].strip()
        try:
            with open(file_expr, "r") as file:
                content = file.read()
                if content.startswith('"') and content.endswith('"'):
                    return content[1:-1]
                else:
                    return content
        except FileNotFoundError:
            return f"File '{file_expr}' not found"
    elif code.startswith("if "):
        condition, then_part = code[len("if "):].split(" then ", 1)
        if eval(condition, variables):
            then_part = then_part.strip()
            if then_part.startswith("var int "):
                var_expr = then_part[len("var int "):]
                var_name, var_value = var_expr.split(" = ", 1)
                variables[var_name.strip()] = int(var_value.strip())
                return f"Integer variable {var_name.strip()} set to {var_value.strip()}"
            elif then_part.startswith("var str "):
                var_expr = then_part[len("var str "):]
                var_name, var_value = var_expr.split(' = "', 1)
                var_value = var_value.rstrip('"')
                variables[var_name.strip()] = var_value
                return f"String variable {var_name.strip()} set to '{var_value}'"
            else:
                result = execute_code(then_part)
                if not result.startswith("Error: invalid"):
                    return result
                else:
                    return ""
    elif code.startswith("print(") and code.endswith(")"):
        message = code[len("print("):-1]
        if message in variables:
            return variables[message]
        else:
            return message
    elif code.startswith("write(") and code.endswith(")"):
        file_expr = code[len("write("):-1].strip()
        file_name, file_content = file_expr.split(" = ", 1)
        with open(file_name.strip(), "w") as file:
            file.write(file_content.strip())
    elif code.startswith("file_read(") and code.endswith(")"):
        file_name = code[len("file_read("):-1].strip()
        try:
            with open(file_name, "r") as file:
                content = file.read()
                if content.startswith('"') and content.endswith('"'):
                    return content[1:-1]
                else:
                    return content
        except FileNotFoundError:
            return f"File '{file_name}' not found"
    else:
        try:
            result = eval(code, variables)
            return str(result)
        except Exception as e:
            return "Error: invalid"

while True:
    try:
        user_input = input("DAVK> ").encode('utf-8', 'ignore').decode('utf-8')
    except UnicodeDecodeError:
        user_input = input("DAVK> ")

    if user_input == "exit":
        break
    result = execute_code(user_input)
    if result is not None:
        print(result)
