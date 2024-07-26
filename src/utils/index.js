export function capitalizeFirstLetter(string) {
  if (!string) return ""
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function cleanString(str) {
  if (!str) return ""

  let cleanedStr = str.trim()

  cleanedStr = cleanedStr.replace(/\s+/g, " ")

  cleanedStr = cleanedStr.replace(/[^\x20-\x7E]/g, "")

  return cleanedStr
}
