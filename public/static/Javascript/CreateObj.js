class BoothIcon {
    constructor(x, y, width, height, src, title) {
        this.x = x
        this.y = y
        this.src = src
        this.width = width
        this.height = height
        this.title = title
    }

    Draw() {
        var B = new Image()
        B.width = this.width
        B.height = this.height
        B.src = this.src
        ctx.drawImage(B, this.x, this.y, this.width, this.height)
        ctx.font = "15px Arial"
        ctx.textAlign = "center"
        ctx.fillText(this.title, this.x + 24,this.y - 10)
    }

    Update() {
        this.Draw()
        this.x = this.x
        this.y = this.y
    }
}

class eraser {
    constructor(x, y, width, height, src) {
        this.x = x
        this.y = y
        this.src = src
        this.width = width
        this.height = height
    }

    Draw() {
        var B = new Image()
        B.width = this.width
        B.height = this.height
        B.src = this.src
        ctx.drawImage(B, this.x, this.y, this.width, this.height)
    }

    Update() {
        this.Draw()
        this.x = this.x
        this.y = this.y
    }
}

function CheckCollition(X, Y, rect2) {
    if (X < rect2.x + rect2.width/2 &&
        X > rect2.x - rect2.width/2 &&
        Y < rect2.y + rect2.height/2 &&
        Y > rect2.y - rect2.height/2) {
        return true
    }
}

function CheckCollitionImg(rect1, rect2) {
    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y) {
        return true
    }
}

function ShowMyForm(x, y, I) {
    var Form = document.getElementById("myForm");
    Form.style.display = "block"
}