# Unexpected Type Inference in TypeScript Arithmetic Operations

This example demonstrates a subtle issue in TypeScript's type inference that can lead to unexpected results when performing arithmetic operations involving mixed number and string types. 

The code defines two functions, `add` and `subtract`, which are intended to operate on numbers. However, due to TypeScript's type inference rules, when these functions receive mixed number and string arguments, TypeScript may infer a type that unexpectedly enables the function to execute and produce unintended results. This may not trigger a compiler error. 

The solution shows how to add type guards or more specific type annotations to prevent unexpected type inference and improve the robustness of your code.