function normal(){
    console.log(this)
}

const arrow = () => {
    console.log(this)
}

console.log(normal.bind({}) === normal)

