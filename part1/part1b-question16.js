for(const prop in statistics){
    if((statistics[prop] % 2 != 0) || (prop.substring(0,1) == 'r')){
        console.log(statistics[prop]);
    }
}