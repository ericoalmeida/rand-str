import { characters } from '@src/constants'

const mapNumbers = (
  useNumbers: boolean,
  mappedCharacters: string
): string => {
  if (useNumbers) mappedCharacters += characters.numbers

  return mappedCharacters
}

export { mapNumbers }
