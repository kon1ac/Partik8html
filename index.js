function appendToResult(value) {
    document.getElementById('result').value += value;
}

function calculateResult() {
    var result = document.getElementById('result').value;
    if (result.includes("(") || result.includes(")")) {
        result = eval("calculateWithParentheses('" + result + "')");
    } else {
        result = eval(result);
    }
    document.getElementById('result').value = result;
}

function calculateWithParentheses(expr) {
    while (expr.includes("(")) {
        var startIndex = expr.lastIndexOf("(");
        var endIndex = expr.indexOf(")", startIndex);

        var subExpr = expr.substring(startIndex + 1, endIndex);
        var subResult = eval(subExpr);

        expr = expr.substring(0, startIndex) + subResult + expr.substring(endIndex + 1);
    }

    return eval(expr);
}

