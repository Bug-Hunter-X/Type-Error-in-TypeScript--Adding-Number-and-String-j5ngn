# Type Error in TypeScript: Adding Number and String

This repository demonstrates a common type error in TypeScript that occurs when performing operations with mismatched types.  The `bug.ts` file contains the erroneous code, while `bugSolution.ts` provides a corrected version.

## Problem

The `add` function is designed to accept two numbers and return their sum.  However, the code attempts to add a number and a string, leading to a type error during compilation.

## Solution

The solution involves ensuring type safety by either explicitly converting the string to a number or using type guards to handle potential type mismatches.  The `bugSolution.ts` file showcases the corrected code.