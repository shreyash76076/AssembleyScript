import{ storage,Context} from "near-sdk-as";

export class Greeting{
   
    getGreeting(accountId: string): string|null{  // agrument name : data type
     return storage.get<string>(accountId,"greeting Not availible")  ;//(args,else case in "")
    }

    setGreeting(greeting: string): void {
       storage.set(Context.sender,greeting)
    }
}