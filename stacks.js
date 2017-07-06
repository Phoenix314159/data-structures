let makeEggs = (style, n) => {
    let completedEgg
    if(style !== 'boiled') {
        let crackedEggs = crackEggs(n)
        if(style !== 'scrambled'){
            completedEgg = fryEgg(crackedEggs, style)
        } else{
            let preppedEggs = whipEggs(crackedEggs)
            completedEgg = fryEgg(preppedEggs)
        }
    }
    //... other procedures here
    return completedEgg
}


let Stack = function () {
    this.storage = ''
}
Stack.prototype.push = function (val) {
    this.storage = this.storage.concat('***', val)
}
Stack.prototype.pop = function () {
    let str = this.storage.slice(this.storage.lastIndexOf('***') + 3)
    this.storage = this.storage.substring(0, this.storage.lastIndexOf('***'))
}
Stack.prototype.size = function () {

}
let myWeeklyMenu = new Stack()
myWeeklyMenu.push('redbeans')