import { Observable } from "rxjs";

const obs = new Observable((req)=>{
    req.next(1);
    req.next(2);
    req.next(3);
});

obs.subscribe((rep)=>{
    console.log("Je suis numero :" + rep);
});