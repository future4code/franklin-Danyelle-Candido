import { Customer } from "./class/Customer";
import { Client } from "./class/Client";
import { ResidentialClient } from "./class/ResidentialClient";
import { CommercialClient } from "./class/CommercialClient";

const ACustomer = new Customer("1122jj","maria@yahoo.com","Maria","12gq","1232");

console.log(ACustomer.getName())
console.log(ACustomer.getId())
console.log(ACustomer.getEmail())
console.log(ACustomer.getCreditCard())
console.log(ACustomer.interoduceYourself())

const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
  }

 console.log(client.name) 
 console.log(client.registrationNumber) 
 console.log(client.consumedEnergy) 
console.log(client.calculateBill())

/* const NPlace = new Place("03334999"); -não é possivel criar instancia de uma classe abstrata*/

const ResidClient = new ResidentialClient("Marlon",124556,55556,"12556545645",2254,"jndsujdu");

console.log(ResidClient.name)
console.log(ResidClient.registrationNumber)
console.log(ResidClient.consumedEnergy)
console.log(ResidClient.calculateBill())
console.log(ResidClient.getCep())
console.log(ResidClient.getCpf())

const ComClient = new CommercialClient("Marlon Atacado",124556,55556,"12556545645",2254,"11116556556");

console.log(ComClient.name)
console.log(ComClient.registrationNumber)
console.log(ComClient.consumedEnergy)
console.log(ComClient.calculateBill())
console.log(ComClient.getCep())
console.log(ComClient.getCnpj())

