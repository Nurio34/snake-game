
const snake = document.querySelector(".snake")
let timeY = 0
let timeX = 0

let transY = 0
let transX = 0

let isMoveDown = false
let isMoveRight = false
let isMoveUp = false
let isMoveLeft = false

let time = 200

let moveDown = ""
let moveRight = ""
let moveUp = ""
let moveLeft = ""

const food = document.querySelector(".food")
let foodX = Math.floor(Math.random() * 16) * 100
let foodY = Math.floor(Math.random() * 16) * 100
    food.style.transform = `translate(${foodX}%,${foodY}%)`
    console.log({foodX,foodY});

    window.addEventListener("keydown",(e)=>{


        switch (e.key) {

            case "ArrowDown":

                moveDown = ()=> {

                    if(transY != 1600 && !isMoveUp ) {
                        
                        moveRight = undefined
                        moveUp = undefined
                        moveLeft = undefined

                        isMoveDown = true
                        isMoveLeft = false
                        isMoveRight = false

                        timeY++

                        transY = timeY * 100
                        snake.style.transform = ` translate(${transX}%,${transY}%)`
                            console.log({transX,transY})

                            if(transY > 1500) {
                                window.alert("Game Over")
                                snake.style = `transform : translate(0%,0%})`

                                timeY = 0
                                timeX = 0
                                transY = 0
                                transX = 0

                                isMoveDown = false
                                isMoveUp = true
                            }

                            if(foodX == transX && foodY == transY) {
                                foodX = Math.floor(Math.random() * 16) * 100
                                foodY = Math.floor(Math.random() * 16) * 100
                                    food.style.transform = `translate(${foodX}%,${foodY}%)`
                            }

                            setTimeout(() => {
                                moveDown()
                            }, time);     
                    }
                }
            
                    moveDown()
                break;

            case "ArrowRight":
 
                moveRight = ()=>{

                    if(transX != 1600 && !isMoveLeft) {
                        
                        moveDown = undefined
                        moveLeft = undefined
                        moveUp = undefined
    
                        isMoveRight = true
                        isMoveDown = false
                        isMoveUp = false
                        
                        timeX++
    
                        transX = timeX * 100
                        snake.style.transform = ` translate(${transX}%,${transY}%)`
                            console.log({transX,transY})

                            if(transX > 1500) {
                                window.alert("Game Over")
                                snake.style = `transform : translate(0%,0%})`

                                timeY = 0
                                timeX = 0
                                transY = 0
                                transX = 0

                                isMoveRight = false
                                isMoveLeft = true
                            }

                            if(foodX == transX && foodY == transY) {
                                foodX = Math.floor(Math.random() * 16) * 100
                                foodY = Math.floor(Math.random() * 16) * 100
                                    food.style.transform = `translate(${foodX}%,${foodY}%)`
                            }

                            setTimeout(() => {
                                moveRight()
                            }, time);
                    }
                }

                    moveRight()
                break;

            case "ArrowUp":

                moveUp = ()=>{

                    if(transY != -100 && !isMoveDown) {
                        
                        moveDown = undefined
                        moveLeft = undefined
                        moveRight = undefined
    
                        isMoveUp = true
                        isMoveLeft = false
                        isMoveRight = false

                        timeY--
    
                        transY = timeY * 100
                        snake.style.transform = ` translate(${transX}%,${transY}%)`
                            console.log({transX,transY})

                            if(transY < 0) {
                                window.alert("Game Over")
                                snake.style = `transform : translate(0%,0%})`

                                timeY = 0
                                timeX = 0
                                transY = 0
                                transX = 0

                                isMoveUp = false
                                isMoveDown = true
                            }

                            if(foodX == transX && foodY == transY) {
                                foodX = Math.floor(Math.random() * 16) * 100
                                foodY = Math.floor(Math.random() * 16) * 100
                                    food.style.transform = `translate(${foodX}%,${foodY}%)`
                            }

                            setTimeout(() => {
                                moveUp()
                            }, time);
                    }
                }

                    moveUp()
                break;

            case "ArrowLeft":

                moveLeft = ()=> {

                    if(transX != -100 && !isMoveRight) {
                        
                        moveDown = undefined
                        moveUp = undefined
                        moveRight = undefined
    
                        isMoveLeft = true
                        isMoveDown = false
                        isMoveUp = false

                        timeX--
    
                        transX = timeX * 100
                        snake.style.transform = ` translate(${transX}%,${transY}%)`
                            console.log({transX,transY})

                            if(transX < 0) {
                                window.alert("Game Over")
                                snake.style = `transform : translate(0%,0%})`

                                timeY = 0
                                timeX = 0
                                transY = 0
                                transX = 0

                                isMoveLeft = false
                                isMoveRight = true
                            }

                            if(foodX == transX && foodY == transY) {
                                foodX = Math.floor(Math.random() * 16) * 100
                                foodY = Math.floor(Math.random() * 16) * 100
                                    food.style.transform = `translate(${foodX}%,${foodY}%)`
                            }

                            setTimeout(() => {
                               moveLeft() 
                            }, time);
                    }
                }
                
                    moveLeft()
                break;
        
            default:
                break;
        }

    })