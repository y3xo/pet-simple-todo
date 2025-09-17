export function moduleClassName(className, module) {
  return `${className} ${className}--${module}`
}

export function setLocalStorage(state) {
  localStorage.setItem('state', JSON.stringify(state))
}

export function getLocalStorage(name) {
  const storageState = localStorage.getItem(name)

  return JSON.parse(storageState)
}