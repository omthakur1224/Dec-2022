
interface printId{
    print:()=>void
}
interface userNode{
    id:number,
    name:string
}
interface userNode{
    getId:()=>number,
}
class userDetails implements userNode,printId{
    id
    name
    constructor(id:number,name:string){
        this.id=id;
        this.name=name
    }
    getId (){
        return this.name;
    }
    print(){
        console.log("hello")
    }
}