interface IOptions {
  lenght: number,
  prefix?: string,
  suffix?: string,
  uppercase?: boolean,
  lowercase?: boolean,
  numbers?: boolean
}

function random(min: number, max: number): number {
  const r = Math.random() * (max - min) + min
  return Math.floor(r)
}

function main({
  lenght,
  prefix = "",
  suffix = "",
  uppercase = false,
  lowercase = true,
  numbers = true
}: IOptions): string {
  // validations
  if (lenght == null) {
    throw new Error("property length is required")
  }
  else if (typeof lenght !== "number") {
    throw new Error("property length must be a number")
  }
  else if (lenght <= 0) {
    throw new Error("property length must be greater than 0")
  }

  if (typeof prefix !== "string") {
    throw new Error("property prefix must be a string")
  }

  if (typeof suffix !== "string") {
    throw new Error("property suffix must be a string")
  }

  if (typeof uppercase !== "boolean") {
    throw new Error("property uppercase must be a boolean (true or false)")
  }

  if (typeof lowercase !== "boolean") {
    throw new Error("property lowercase must be a boolean (true or false)")
  }

  if (typeof numbers !== "boolean") {
    throw new Error("property numbers must be a boolean (true or false)")
  }



  // define the used sets of characters and numbers
  const lowercaseKeySet: string[] = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m"
  ]
  
  const uppercaseKeySet: string[] = lowercaseKeySet.map((c: string) => c.toUpperCase())
  const numbersSet: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  // add keysets based on options
  const keyset: string|number[] = []
    .concat(lowercase ? lowercaseKeySet : [])
    .concat(uppercase ? uppercaseKeySet : [])
    .concat(numbers ? numbersSet : [])

  // generate the hash
  let hash: string = ""

  for (let i = 0; i < lenght; i++) {
    const randomKeyOrNumber: string|number = keyset[random(0, keyset.length)]
    hash += randomKeyOrNumber
  }

  // format the final id
  const id: string = `${prefix}${hash}${suffix}`
  return id
}
