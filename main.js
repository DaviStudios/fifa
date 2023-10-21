let variables = {};
function execute_code(code) {
    code = code.trim();
    if (code.startsWith("var ")) {
        let var_expr = code.slice("var ".length);
        let [var_name, var_value] = var_expr.split(" = ");
        variables[var_name.trim()] = parseInt(var_value.trim());
        console.log(`var ${var_name.trim()} made`);
    } else if (code.startsWith("console(")) {
        let message = code.slice("console(".length, -1).trim();
        if (message.startsWith('"') && message.endsWith('"')) {
            console.log(message.slice(1, -1));
        } else if (message in variables) {
            console.log(variables[message]);
        } else {
            console.log("Undefined: ", message);
        }
    } else if (code.startsWith("read(")) {
        let file_expr = code.slice("read(".length, -1).trim();
        try {
            let file_content = fs.readFileSync(file_expr, "utf-8");
            console.log(file_expr);
            console.log(file_content);
        } catch (error) {
            console.log(`File '${file_expr}' not found.`);
        }
    } else if (code.startsWith("if ")) {
        let [condition, then_part] = code.slice("if ".length).split(" then ", 1);
        if (eval(condition, variables)) {
            execute_code(then_part);
            console.log("done");
        }
    } else if (code.startsWith("print(")) {
        let message = code.slice("print(".length, -1);
        if (message in variables) {
            console.log(variables[message]);
        } else {
            console.log(message);
        }
    } else if (code.startsWith("file_write(")) {
        let file_expr = code.slice("file_write(".length, -1);
        let [file_name, file_content] = file_expr.split(", ");
        fs.writeFileSync(file_name.trim(), file_content.trim());
    }
}
