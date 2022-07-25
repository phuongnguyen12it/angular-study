import { Pipe, PipeTransform } from '@angular/core';

interface AddressKike {
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

@Pipe({
  name: 'formatAddress',
})
export class FormatAddressPipe implements PipeTransform {
  transform(addr: AddressKike, pr1?: string) {
    console.log('pip run', addr, pr1);
    return (
      addr.address1 +
      ' ' +
      addr.address2 +
      ' ' +
      addr.city +
      ', ' +
      addr.state +
      ' ' +
      addr.zip +
      ', ' +
      addr.country
    );
  }
}
