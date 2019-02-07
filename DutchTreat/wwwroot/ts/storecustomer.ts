class StoreCustomer {

    constructor(private firstName:string,private lastName:string) {
    }

    public visits: number;
    private ourName:string;

    public showName(){
        alert(this.firstName+ " "+this.lastName);
    }

    set name(val) {
        this.ourName = val;
    }

    get name() {
        return this.ourName;
    }



}

