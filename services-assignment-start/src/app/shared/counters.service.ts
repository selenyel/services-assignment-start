export class CountersService {

    userActivatedCounter : number = 0;
    userDeactivatedCounter : number = 0;

    printCount(type:string){
        if(type === 'active')
            this.userActivatedCounter++;
        else 
            this.userDeactivatedCounter++;
        
            alert('Activated user count : '+ this.userActivatedCounter + '\nDeactivated user count : ' + this.userDeactivatedCounter);
        }
}