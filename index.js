class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const createMinimalTree = array => {
  if (!array.length) return null

  const root = createSubTree(array)

  return root
}

const findCenterIndex = array => {
  const index = Math.floor(array.length / 2)
  return index
}

const createSubTree = (array) => {
  if (!array.length) return null

  const centerIndex = findCenterIndex(array)

  const newNode = new Node(array[centerIndex])

  const [left, right] = [array.slice(0, centerIndex), array.slice(centerIndex + 1, array.length)]
  
  newNode.left = createSubTree(left)
  newNode.right = createSubTree(right)

  return newNode
}



createMinimalTree([1, 2, 3, 4, 5, 6, 7])