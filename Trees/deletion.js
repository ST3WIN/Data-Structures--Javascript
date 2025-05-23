class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root , newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right , newNode)
            }
        }
    }
    search(root , value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            }else if(value < root.value){
               return this.search(root.left , value) 
            }else{
                return this.search(root.right , value)
            }
        }
    }
    preOrder(root){
        //DFS tree traversal 
        // read the node value , visit the left subtree and read,
        //after the left subtree is over visit the right sub tree and read the value
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    levelOrder(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    minNode(root){
        if(!root.left){
            return root.value
        }else{
            return this.minNode(root.left)
        }
    }
    maxNode(root){
        if(!root.right){
            return root.value
        }else{
            return this.maxNode(root.right)
        }
    }
    maxDepth(root){
        if(root === null){
            return 0
        }
        let left = this.maxDepth(root.left)
        let right = this.maxDepth(root.right)
        return Math.max(left,right) +1
    }
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root === null){
            return root
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value = this.minNode(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }
}
let bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.delete(15)
bst.levelOrder()
