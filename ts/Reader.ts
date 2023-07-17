import readline from "readline-sync"

// IO is not supported in mlscript yet.
export function read(hint: string): string {
  return readline.question(hint);
}
