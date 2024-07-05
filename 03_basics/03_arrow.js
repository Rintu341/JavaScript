
const user = {
    username : "sujan",

    website : function() {
        console.log(`${this.username} website owner`);
        console.log(this);
    }
}

// console.log(user.website())
user.username = "susama"
// console.log(user.website())
// console.log(this);

function chai()
{
    console.log(this);
}
// chai()


