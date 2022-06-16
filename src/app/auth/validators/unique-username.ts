import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AsyncValidator } from "@angular/forms";

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator{
  constructor(private http: HttpClient) {}

  validate(){
    
  }
}

